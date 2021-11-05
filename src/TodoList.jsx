import React,{useState} from 'react';
import List from './List'

const TodoList = () =>{
  const  [input,setInput]=useState("");
  const  [listInput,setListInput]=useState([]);

    const InputList = (e) =>{
        setInput(e.target.value);
    }


    const Add = () =>{
     setListInput((preList)=>{
         return [...preList,input]

     });
     setInput("");
    }


   const deleteItems = (id) =>{
       setListInput((preList)=>{
           return preList.filter((element,index)=>index !== id)
       })
   }
    return(
        <>

        <input type='text' value={input} onChange={InputList} placeholder='Enter List'/>
        <button onClick={Add}>+  </button>
        <ol>
{listInput.map((val,ind)=>{
    return(
     <List
     key={ind}

     id={ind}
      data={val}
    del={deleteItems}
     />
    )}
    )}
    </ol>
        </>
    )
    
}

export default TodoList;