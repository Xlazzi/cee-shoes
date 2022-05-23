import React, { useState } from 'react'
import App from './App';
import ChildOfTest from './ChildOfTest';


export default function Test() {
    const[AnimalDisplay,setAnimalDisplay]=useState();
    const[Company,setCompany]=useState('Công ty');
    const[Name,setName]=useState('Google');
    const[CompanyName,setCompanyName]=useState('');
    const[age,setAge]=useState(0);
    const[NumberDislay,setNumberDislay]=useState(0);
    const getAnimal=(data)=>{
        setAnimalDisplay(data);
    }
    const join =()=>{
      setCompanyName(Company+' '+Name)
    }
    const getAge=()=>{
      setAge(age+1)
    }
    const getNumber=(data)=>{
      setNumberDislay(data)
  }
  return (
    <div>
        <ChildOfTest
            onGetAnimal={getAnimal}
            onAge={getAge}
            currentAge={age}
            onNumber={getNumber}
            />
            <div>This is animail:{AnimalDisplay}</div>
            <div onClick={join}>Expectation: {CompanyName}</div>
            {/* <div>{age}</div> */}
            <div>Tong 2 so la: {NumberDislay}</div>
    </div>
  )
}
