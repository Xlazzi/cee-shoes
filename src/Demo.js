// rfc
import React,{useState}from 'react'
import Ahihi from './Ahihi'
export default function Demo() {
    const[abc,setAbc]= useState(10);
    const[name,setName]=useState('google');
    const[motherAge,setmotherAge]=useState(20);
    const[fatherAge,setfatherAge]=useState(25);
    const[sumAge,setsumAge]=useState(0)
    const[genderDisplay,setGenderDisplay]=useState()
    const onPress=()=>{
        setAbc(20);
    }
    const onPress1=()=>{
        setName('faceboook');
    }
    const onPress2=()=>{
        setsumAge(motherAge+fatherAge)
        // setsumAge(setmotherAge(20)+setfatherAge(25)) =>NaN
    }
    const onChangAgeFather=()=>{
        setfatherAge(fatherAge+1)
    }
    const getGender=(data)=>{
        setGenderDisplay(data);
    }
  return (
    <div>
        <Ahihi
            logo='Shopee'
            name1={name}
            fatherAge1={fatherAge}
            onGetGender={getGender}
        />
        <div>this is gender: {genderDisplay} </div>
        <div onClick={onPress}>demo: {abc}</div>

          <div onClick={onPress1}>{name} </div>
          <div onClick={onChangAgeFather}>Father age: {fatherAge}</div>
        {/* <a href={link} onClick={onPress1}>{name} </a> */}
        <div onClick={onPress2}>Sum: {sumAge}</div>
    </div>
  )
}
