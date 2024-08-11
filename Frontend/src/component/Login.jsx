import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
    

  const getValue =async ()=> {
    console.log({email,password})
    const userInfo ={
      email:email,
      password:password,
    }
    
   await axios.post('http://localhost:3002/user/login', userInfo).then((res)=>{
    console.log(res.data);
    if(res.data){
      alert('login Succussfull');
      localStorage.setItem('Users',JSON.stringify(res.data.user));
    }
   }).catch((err)=>{
    console.log(err);
    alert('Login Failed')
   })
  }
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-2xl text-center">Login!</h3>
          <div className="space-y-3">
          <span className="font-semibold">Email</span>
          <br />
          <input type="text" required='true' placeholder="Enter Email" className="w-80 rounded border py-2 px-4"
          value={email} onChange={(e)=>setEmail(e.target.value)} />
          
          </div>
          <div className="space-y-3 mt-3">
          <span className="font-semibold">Password</span>
          <br />
          <input type="password " placeholder="Enter Password" className="w-80 rounded border py-2 px-4" 
          value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="flex justify-between items-center">
            <button className="px-3 py-1 rounded bg-pink-500 mt-4 text-white border" onClick={getValue} type="button">Login</button>
            <span>Not Registered? <Link to='/signup' className="underline text-blue-500 font-semibold cursor-pointer">Signup</Link></span>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
export default Login;
