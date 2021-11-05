import React,{useEffect, useState} from 'react';

import {useParams,useLocation,useNavigate} from 'react-router-dom';
const slides =[{'title':'1'},{'title':'2'},{'title':'3'},{'title':'4'}];




function SlinkSlider() {
  const {name,age} = useParams();
  const location = useLocation();
  const navigate = useNavigate();
   console.log(navigate);
  let [sindex,setIndex]=useState(0);
  // let [disPre,setDispre]=useState('');
  // let [disNext,setDisnext]=useState('b');
  const restart =()=>{
    setIndex(0);
  };
  const pre =()=>{
    setIndex(--sindex);
  };
  const next =()=>{
   
    setIndex(sindex+1);
  };
// useEffect(()=>{
//   // (sindex==slides.length-1) ? setDisnext('nmn'):(sindex>=0 && sindex<slides.length-1)?setDisnext(''):setDisnext('b');
// //  (sindex>0) ? setDispre('nm'):(sindex==0)?setDispre(''):('');
// console.log(sindex)
// },[sindex])
  return (
    <>

{/* 
<h1>{name} params</h1> 
<h1>{(location.pathname=='/slinkslider/ashar/shah')&&<button>location</button>}</h1>
<button onClick={()=>{navigate('/')}}>history</button>
{/* useParams and location and History example */}
 



<button data-testid class='small' onClick={restart}>Restart</button>
<button data-testid class='small' disabled={(sindex > 0) ? '' :'disable'} onClick={pre}>Pre</button>
<button data-testid class='small' disabled={(sindex==slides.length-1) ? 'disable':(sindex>=0 && sindex<slides.length-1)?'':'disable'} onClick={next}>Next</button>

<h1>{slides[sindex].title}</h1>
    </>
 
  );
}

export default SlinkSlider;