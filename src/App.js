import React from 'react'
import { Route,BrowserRouter,Routes } from "react-router-dom";
import Nav from"./Components/Nav"
import About from "./Components/About"
import Edu from "./Components/Edu"
import Int from "./Components/Int"
// import pro from './Components/ro';
import Project from './Components/Project';


export default function App() {
  return (
  <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path='/'element={<About/>}/>
    <Route path='/edu'element={<Edu/>}/>
    <Route path='/int'element={<Int/>}/>
    <Route path='/pro'element={<Project/>}/>
   </Routes>
   
   </BrowserRouter>
  )
}
