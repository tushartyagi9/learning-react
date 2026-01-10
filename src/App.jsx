// // import { useState } from 'react'
// // import './App.css'
// // import Tushar from './Header'
// // import {Second,userkey} from './Header'
// // import Login from './Apple'
// // import Yoyo from './Cleam'
// // import User from './User'
// // import Prop from './Prop'
// // import Wrapper from './Wrapper'
// // import Input from './Input'
// // import Checkbox from './Checkbox'
// // import Radio from './Radio'
// // import Dropdown from './Dropdown'
// // import Clock from './Clock'
// // import ClockController from './ClockController'
// // import Loops from './Loops'
// // import Useeffect from './Useeffect'
// // import UserProfile from './UserProfile'
// // import StyleComponents from './StyleComponents'
// // import Bootstrapp from './Bootstrapp'
// // import UseFormStatuss from './useFormStatuss'
// // import UseTransitionDemo from './useTransitionDemo'
// // import Derived from './Derived'
// // import ChildOne from "./ChildOne";
// // import ChildTwo from "./ChildTwo";
// // import Object from './Object'
// // import ArrayState from './ArrayState'
// // import UseActionHook from './UseActionHook'
// // import Fragmentt from './Fragmentt'
// // import CustomHook from './CustomHook'
// // import ContextApi from './ContextApi'
// // import ReactRouter from './ReactRouter'
// // import Provider from './Provider'
// // import Navv from './Navv'

import { useEffect, useState } from "react"


// // function App() {
// //   const [hee,setHee]=useState('')
// //   return (
// //     <>
// //      <div>
// //       Tushar Tyagi
// //       <Fruit></Fruit>
// //       <Colors></Colors>
// //       <Tushar/>
// //       <Second/>
// //       <Login/>
// //       <Yoyo/>
// //       <User/>
// //       <Prop/>
// //       <Input/>
// //       <Checkbox/>
// //       <Radio/>
// //       <Dropdown/>
// //       <ClockController/>
// //       <Loops/>
// //       <Useeffect/>
// //       <UserProfile/>
// //       <StyleComponents/>
// //       <Bootstrapp/>
// //       This is my Userkey: {userkey}
// //       <UseFormStatuss/>
// //       <UseTransitionDemo/>
// //       <Derived/>
// //       </div>
// //       <div>
// //         <ChildOne setHee={setHee}/>
// //         <ChildTwo hee={hee}/>
// //       </div>
// //       <Object/>
// //       <ArrayState/>
// //       <br/>
// //       <hr/>
// //     <UseActionHook/>
// //     <Fragmentt/>
// //     <CustomHook/>
// //        <ContextApi/>
// //       <ReactRouter/>
// //       <Provider/>
// //       <Navv/>
// //     </>
// //   )
// // }

// // function Fruit(){
// //   return <div>
// //     Hello from fruit
// //   </div>
// // }

// // function Colors(){
// //   return <h1>
// //     Tushar
// //   </h1>
// // }



// // export default App


import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Navv from "./Navv";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Api from "./API";
import MyApi from "./MyApi";
import AddUser from "./AddUser";
import EditUser from "./EditUser";


function App() {
  return (
    <>
      <Navv />
      <ToastContainer />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/api" element={<Api/>} />
        <Route path="/myapi" element={<MyApi/>} />
        <Route path="/adduser" element={<AddUser/>} />
        <Route path="/edit/:id" element={<EditUser />} />



        {/* <Route path="/*" element={<h1>Page not found</h1>} /> */}
        <Route path="/*" element={<Navigate to="/"></Navigate>} />

      </Routes>
    </>
  );
}

export default App;


