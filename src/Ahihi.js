import React, { useState } from 'react'

export default function Ahihi(props) {
    const [gender,setGender]=useState('male')
// pops => logo='shopee'
    console.log(props)
    const sendToP=()=>{
            props.onGetGender(gender)
    };
  return (
   <div>
       <div onClick={sendToP}>Send to parent</div>
        <div>ahihhihihiihhihihihihih: {props.logo}</div>
        <div>this is: {props.name1}</div>
        <div>this is Father Age: {props.fatherAge1}</div>
   </div>
  )
}


