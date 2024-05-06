import axios from 'axios';
import React from 'react'
import { useState } from 'react';
const AxiosPost = () => {

    const data={name:"",email:"",password:""};
    const [inputData,setInputData]=useState(data);

    function handleChange(e){
        setInputData({...inputData,[e.target.name]:e.target.value});
    }

    function handleSubmit(e){
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response);
        })
    }

  return (
    <>
      <div>
        <label>Enter Name</label><br/>
        <input onChange={handleChange} 
        type='text' name='name' value={inputData.name}/><br/>
        <label>Enter Email</label><br/>
        <input onChange={handleChange}
        type='text' name='email' value={inputData.email}/><br/>
        <label>Enter password</label><br/>
        <input onChange={handleChange}
        type='text' name='password' value={inputData.password}/><br/>
        <button onClick={handleSubmit}>Submit</button>


      </div>
    </>
  )
}

export default AxiosPost
