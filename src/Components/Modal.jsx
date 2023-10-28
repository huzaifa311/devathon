import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { db, storage } from "../firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import CircularColor from "./Loader";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 280,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  borderRadius: "20px",
};

export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const [loader, setloader] = React.useState(false);
  const authorInfo = JSON.parse(localStorage.getItem("user"));

  const publishDateTime = new Date();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const blogCollection = collection(db, "blogs");
  const [productImg, setProductImg] = React.useState("");
  const [idea, setIdea] = React.useState("");
  const [investment, setInvestment] = React.useState("");

  const publishIdea = async (e) => {
    e.preventDefault();

    // console.log('title : ', title, " desc : ", desc);
    const author = authorInfo.signupName;
    const authorImage = authorInfo.imageUrl;
    const uid = authorInfo.uid

    try {
      setloader(true);
      if (idea === "" || investment === "" || productImg === "") {
        setOpen(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Require Fields are missing",
        });
        return;
      }
      const imageUrl = await uploadImage(productImg.files[0]);
      const imageRef = ref(storage, `profileImages/${uid}`);

      const productObj = {
        author,
        authorImage,
        imageUrl,
        idea,
        investment,
        publishDateTime
      };
      const productRef = collection(db, 'products')
      const productDB = await addDoc(productRef, productObj)
      setIdea('')
      setInvestment('')
      Swal.fire("Good job!", "Product Published Successfully!", "success");
      // console.log("blog published with id: ", blogPublished. id)
      setOpen(false);
    } catch (error) {
      // console.log(error.message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error,
      });
      setOpen(false)
    } finally {
      setloader(false);
    }
  };

  function uploadImage(file) {
    return new Promise((resolve, reject) => {
      let imageUrl;
      const metaData = {
        contentType: "image/jpeg",
      };
      const storageRef = ref(storage, "profileImages" + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metaData);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          reject({
            message: "something went wrong",
          });
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            console.log("File available at", downloadUrl);
            resolve({
              imageUrl: downloadUrl,
            });
          });
        }
      );
    });
  }

  return (
    <div className="mt-24 justify-center flex">
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          background: "rgb(126, 34, 206)",
          ":hover": {
            background: "rgb(150, 60, 230)",
          },
        }}
      >
        Add Your Idea
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Box>
              <h1 className="text-4xl font-bold">Your Idea?</h1>
            </Box>

            <Box component={"form"} onSubmit={publishIdea}>
              <label className="block mt-5 text-gray-600 font-semibold mb-2 md:text-md">
                Product Image
              </label>
              <input
                type="file"
                id="img"
                name="img"
                accept="image/*"
                className="w-full text-sm sm:text-lg p-2 border  hover:border-gray-600 border-gray-300 rounded focus:outline-none focus:border-purple-700"
                onChange={(e) => setProductImg(e.target)}
              />

              <textarea
                type="text"
                placeholder="Product Idea"
                className="border h-[120px] my-1 border-stone-500 rounded-lg p-3 w-full"
                onChange={(e) => setIdea(e.target.value)}
                value={idea}
              />

              <input
                type="text"
                placeholder="how much Investment?"
                className="border border-stone-500 rounded-lg p-3 w-full"
                onChange={(e) => setInvestment(e.target.value)}
                value={investment}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  gap: "10px",
                }}
              >
                <Button variant="contained" type="submit">
                  {loader ? <CircularColor color="success" /> : "Add"}
                </Button>
                <Button variant="contained" color="error" onClick={handleClose}>
                  Close
                </Button>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
