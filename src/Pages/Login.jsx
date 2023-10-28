import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import ParticleComponent from "../Components/Particles";
import CircularColor from "../Components/Loader";
import { signInWithEmailAndPassword, auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import Header from "../Components/Header";

const Login = () => {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const navigateTo = useNavigate();

    const loginFunction = async (e) => {
        e.preventDefault()
        console.log(loginEmail, loginEmail);
        setLoader(true)
        try {
            const userLogin = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            const userRef = doc(db, 'users', userLogin.user.uid)
            const docSnap = await getDoc(userRef);
            if (!docSnap.exists) {
                // console.log("No such document!");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid User!',
                })
                return
            }
            // console.log("Document data:", docSnap.data());
            const userData = docSnap.data();
            localStorage.setItem("user", JSON.stringify(userData));
            navigateTo('/private')
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            })
        } finally {
            setLoader(false)
        }
    }

    return (
        <>
            <ParticleComponent />
            <div className="w-full h-full relative top-4">
                <Header li={'Signup'} linkTo={'/signup'} />
                <div className="">
                    <h4 className="text-4xl text-white font-bold ml-12 mt-[100px] ">
                        Login
                    </h4>
                    <div className=" flex justify-center mt-[90px]">
                        <div className="bg-gray-100 w-96 p-8 border border-slate-400 rounded-lg boxShadow">
                            <form onSubmit={loginFunction} className="w-full b-10">

                                <div className="mb-5">
                                    <TextField
                                        // id='outline-basic'
                                        type="email"
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-700"
                                        label="Email"
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className="mb-4 relative">
                                    <TextField
                                        // id='outline-basic'
                                        type={showPassword ? "text" : "password"}
                                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-teal-700"
                                        label="Password"
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    <button
                                        className="mt-2 absolute right-2 top-2 text-blue-500 focus:outline-none hover:cursor-pointer bg-white"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? "hide" : "show"}
                                    </button>
                                </div>
                                <div className="flex justify-center">
                                    <button
                                        type="submit"
                                        className="bg-teal-700 text-white font-semibold py-2 px-4 rounded hover:bg-teal-800 focus:outline-none focus:ring focus:ring-blue-300 mb-3 flex justify-center"
                                    >
                                        {loader ? <CircularColor /> : "Signup"}
                                    </button>
                                </div>
                            </form>

                            <div className="flex justify-center ">
                                <span className="text-gray-600">
                                    Don't have an account?
                                    <Link
                                        to="/signup"
                                        type="button"
                                        className="ml-2 text-blue-500 focus:outline-none hover:cursor-pointer"
                                    >
                                        Signup
                                    </Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
