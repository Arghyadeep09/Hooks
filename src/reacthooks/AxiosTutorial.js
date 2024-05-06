import React, { useEffect, useState } from 'react'
import axios from 'axios';
const AxiosTutorial = () => {

    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response);
            setUserData(response.data);
        })
    },[]);
  return (
    <>
        {userData.map((data)=>{
            return(
                <div>{data.name}</div>
            )
        })}
    </>
  )
}

export default AxiosTutorial
