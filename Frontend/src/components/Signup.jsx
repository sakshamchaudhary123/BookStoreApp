import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import Login from "./Login";

import { useForm } from "react-hook-form";

import axios from "axios";
import toast from "react-hot-toast";

const API_URL = "http://localhost:4001/user/signup";

function Signup() {

  const navigate = useNavigate();


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.signupEmail,
      password: data.signupPassword,
    };
 
    await axios
      .post(API_URL, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success('Signup successful');
          navigate('/');  // redirect to home page
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user)); // only for user data not message
      })
      .catch((err) => {
        if(err.response){
          console.log(err.response.data);
          toast.error("Error: "+err.response.data.message);
          
        }
      });
  };

  return (
    <div className="h-screen flex justify-around md:justify-center md:items-center">
      <div className="shadow-sm flex items-center justify-center w-[100%] h-full">
        <div className="modal-box dark:text-black ">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-2xl mb-4">Signup</h3>
            {/* Full Name */}
            <div className="space-y-2 mb-2">
              <label htmlFor="fullname">Full Name</label> <br />
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                className="md:w-80 border outline-none rounded-md px-2 py-1 "
                {...register("fullname", { required: true })}
              />
              <br />
              {errors.fullname && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Email */}
            <div className="space-y-2 mb-2">
              <label htmlFor="signupEmail">Email</label> <br />
              <input
                type="email"
                id="signupEmail"
                name="signupEmail"
                placeholder="Enter your Email"
                className="md:w-80 border outline-none rounded-md px-2 py-1 "
                {...register("signupEmail", { required: true })}
              />
              <br />
              {errors.signupEmail && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>
            {/* Password */}
            <div className="space-y-2 mb-2">
              <label htmlFor="signupPassword">Password</label> <br />
              <input
                type="text"
                id="signupPassword"
                name="signupPassword"
                placeholder="Enter your Password"
                className="md:w-80 border outline-none rounded-md px-2 py-1 "
                {...register("signupPassword", { required: true })}
              />
              <br />
              {errors.signupPassword && (
                <span className="text-red-500 text-sm">
                  This field is required
                </span>
              )}
            </div>

            {/* Button */}
            <div className="flex my-4">
              <button
                type="submit"
                className="px-1 h-10 bg-pink-600 text-white hover:bg-pink-700 rounded-md cursor-pointer"
              >
                Signup
              </button>
            </div>
          </form>
          <div className="text-lg flex justify-around flex-wrap">
            <span>already have an account? </span>
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="underline text-blue-500 cursor-pointer"
            >
              Login
            </button>
            <Login />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
