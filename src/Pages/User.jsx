import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import TransitionsModal from "../Components/Modal";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db, signOut } from "../firebase";
import Swal from "sweetalert2";
import CircularColor from "../Components/Loader";
import ProductCard from "../Components/ProductCard";

const User = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const userType = user.signupType;
  const navigate = useNavigate(); // Get the navigate function

  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);
  const authorInfo = JSON.parse(localStorage.getItem("user"));
  const [products, setProduct] = useState([]);

  // Conditionally navigate based on userType
  useEffect(() => {
    if (userType === "User") {
      navigate("/user");
    } else {
      navigate("/investor");
    }
  }, []);
  useEffect(() => {
    fetchDisplayProduct();
  }, []);

  async function fetchDisplayProduct() {
    try {
      setLoader(true);
      let tempArr = [];
      const unsub = onSnapshot(collection(db, "products"), (doc) => {
        tempArr = [];
        doc.forEach((data) => {
          tempArr.push({ ...data.data(), id: data.id });
        });
        setProduct(
          tempArr.sort((a, b) => b.publishDateTime - a.publishDateTime)
        );
        console.log(products);
      });

      /* const unsub = onSnapshot(collection(db, "products"), (doc) => {
         doc.forEach(data=>{
          console.log(data.data());
         })
      }); */
    } catch (error) {
      // console.log(error.message);
      console.log(error); /* ({
        icon: "error",
        title: "Oops...",
        text: error,
      }); */
    } finally {
      setLoader(false);
    }
  }
  const logout = async () => {
    try {
      setLoader(true);
      await signOut(auth);
      localStorage.removeItem("user");
      signOut(auth).then(() => {
        console.log("signed out");
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <>
      <Navbar
        userImg={user.imageUrl.imageUrl}
        userName={user.signupName}
        onClick={logout}
      />
      <div className="text-6xl mt-16">
        <TransitionsModal />
      </div>
      <div className="flex justify-center mt-8 mb-5">
        <h1 className="text-4xl font-bold">
          {loader ? <CircularColor /> : "All Products"}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mb-12 gap-5">
        {products.map((products, index) => {
          console.log(products);
          return (
            <ProductCard
              key={index}
              idea={products?.idea}
              investment={products?.investment}
              author={products?.author}
              authorImage={products?.authorImage?.imageUrl}
              date={products?.publishDateTime?.toDate().toLocaleString()}
              productimg={products?.imageUrl?.imageUrl}
            />
          );
        })}
      </div>
    </>
  );
};

export default User;
