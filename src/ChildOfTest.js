import React, { useState } from 'react'

export default function ChildOfTest(props) {
    const[Animal, setAnimal]=useState('dog')
    const[number1,setNumber1]=useState(1)
    const[number2,setNumber2]=useState(2)
    console.log(props)
    const sendToP = () =>{
        props.onGetAnimal(Animal);
    };
    const touch1 = () =>{
      props.onAge();
  };
  const sumNumber=()=>{
    props.onNumber(number1+number2)
  }
  return (    
   <div>
        <div onClick={sendToP}>Send to parent</div>
        <div onClick={touch1}>Tang age: {props.currentAge}</div>
        <div onClick={sumNumber}>Tong</div>
   </div>
  )
}
