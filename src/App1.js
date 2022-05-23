// rfc
import React from 'react'
import './App1.scss'
import Header from './head'
import Footer from './footer'
// import Test from './Test';

//component => thành phần
// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

const App = () =>{
  return(
    <div className="main"> 
      <Header />
   <div> 
    {/* <Test /> */}
   </div>
  
    <Footer/>
    </div>
  )
}
export default App;

