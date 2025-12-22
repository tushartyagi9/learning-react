import { useState } from 'react'
import './App.css'
import Tushar from './Header'
import {Second,userkey} from './Header'
import Login from './Apple'
import Yoyo from './Cleam'
import User from './User'
import Prop from './Prop'
import Wrapper from './Wrapper'
import Input from './Input'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Dropdown from './Dropdown'
import Clock from './Clock'
import ClockController from './ClockController'
import Loops from './Loops'
import Useeffect from './Useeffect'
import UserProfile from './UserProfile'
import StyleComponents from './StyleComponents'
import Bootstrapp from './Bootstrapp'
import UseFormStatuss from './useFormStatuss'
import UseTransitionDemo from './useTransitionDemo'
import Derived from './Derived'
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import Object from './Object'
import ArrayState from './ArrayState'
import UseActionHook from './UseActionHook'
import Fragmentt from './Fragmentt'
import CustomHook from './CustomHook'


function App() {
  const [hee,setHee]=useState('')
  return (
    <>
     {/* <div>
      Tushar Tyagi
      <Fruit></Fruit>
      <Colors></Colors>
      <Tushar/>
      <Second/>
      <Login/>
      <Yoyo/>
      <User/>
      <Prop/>
      <Input/>
      <Checkbox/>
      <Radio/>
      <Dropdown/>
      <ClockController/>
      <Loops/>
      <Useeffect/>
      <UserProfile/>
      <StyleComponents/>
      <Bootstrapp/>
      This is my Userkey: {userkey}
      <UseFormStatuss/>
      <UseTransitionDemo/>
      <Derived/>
      </div>
      <div>
        <ChildOne setHee={setHee}/>
        <ChildTwo hee={hee}/>
      </div>
      <Object/>
      <ArrayState/>
      <br/>
      <hr/> */}
      <UseActionHook/>
      <Fragmentt/>
      <CustomHook/>
    </>
  )
}

function Fruit(){
  return <div>
    Hello from fruit
  </div>
}

function Colors(){
  return <h1>
    Tushar
  </h1>
}



export default App
