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

function App() {
  return (
    <>
     <div>
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
    </div>
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
