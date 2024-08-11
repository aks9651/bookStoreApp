import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import axios from 'axios';

function Signup() {
  const [firstname,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getVal=async ()=>{
   console.log({firstname,email,password})
    const userInfo ={
      firstname:firstname,
      email:email,
      password:password,
    }
    
   await axios.post('http://localhost:3002/user/signup', userInfo).then((res)=>{
    console.log(res.data);
    if(res.data){
      alert('Signup Succussfull');
      localStorage.setItem('Users',JSON.stringify(res.data.newUserCreated));
    }
   }).catch((err)=>{
    console.log(err);
    alert('Signup Failed')
   })
  }
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border shadow-md rounded-md p-4">
          <div className="">
            
            <h3 className="font-bold text-2xl text-center">Signup!</h3>
            <div className="space-y-3">
              <span className="font-semibold">Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter Name"
                className="w-80 rounded border py-2 px-4"
                value={firstname} onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div className="space-y-3">
              <span className="font-semibold">Email</span>
              <br />
              <input
                type="text"
                placeholder="Enter Email"
                className="w-80 rounded border py-2 px-4"
                value={email} onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-3 mt-3">
              <span className="font-semibold">Password</span>
              <br />
              <input
                type="password "
                placeholder="Enter Password"
                className="w-80 rounded border py-2 px-4"
                value={password} onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="flex justify-between items-center">
              <button className="px-3 py-1 rounded bg-pink-500 mt-4 text-white border"
              onClick={getVal}>
                Signup
              </button>
              <span>
                Have Account{" "}
                <button
                  onClick={() => {
                    document.getElementById("my_modal_1").showModal();
                  }}
                >
                  Login
                </button>
                <Login />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
