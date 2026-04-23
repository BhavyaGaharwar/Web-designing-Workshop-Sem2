import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Props from './component/Props'

function App() 
{
  const name='React JS Library'

  return(
    <>
    <h1>Hello Bhavya</h1>

    <Props name="Bhavya" rollno="250320100398" course="B.Tech"/>

    </>
  )
}

export default App