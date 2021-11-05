import React,{useEffect, useState} from 'react';
import './App.css';
import Contact from './Contact'
import TodoList from './TodoList';
import Context from './Context';
import SlinkSlider from './SlinkSlider'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes,Navigate } from 'react-router-dom';
import Menu from './Menu';
import Axios from './Axios';
function App() {
 return(<>
<Menu/>
 <Routes>
 
        <Route exact path='/' element={<TodoList name='ashar'/>}/>
        <Route  path='/slinkslider/:name/:age' element={<SlinkSlider/>}/>
        <Route  path="*"  element={<Context/>}/>
</Routes>

 
    </>
 
  );
}

export default App;
