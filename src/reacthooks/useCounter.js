import React, { useState } from 'react'

const useCounter = () => {
    const initialState=0;
    const[count,setCount]=useState(initialState);

    function Increment(){
        setCount(count+1);
    }

    function Decrement(){
        setCount(count-1);
    }



  return [count,Increment,Decrement];
    
  
}

export default useCounter
