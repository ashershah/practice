import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Axios=()=>{

    const [poki,setPoki]=useState({
        num:'',
        name:'',
        moves:''
    });

    useEffect(()=>{ 
        const  getData=async ()=>{
   
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${poki.num}`);
        
            setPoki((preValue)=>{
                console.log(res);
        return{
        ...preValue,
        name: 'res.data.name',
        //moves: move
    }
    }); }  
    getData();
}
    )
    const change=(event)=>{
        const value=event.target.value;
            setPoki((preValue)=>{
                console.log(preValue);
                return{
                ...preValue,
                num: value,
               
            }
            });
            console.log(poki);
    }

  return(
    <>
    <h1>you choose {poki.num} value</h1>
    <h1>my name {poki.name}</h1>
    <h1>you choose {poki.moves} value</h1>
    <select value={poki.num} onChange={change} >
        <option value='1'>1</option>
        <option value='25'>25</option>
        <option value='3'>3</option>
        <option value='4'>4</option>
        <option value='5'>5</option>
    </select>
    </>
  );

};
export default Axios;