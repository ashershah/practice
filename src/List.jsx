import React from 'react';
 const List = ({id,data,del})=>{
return(
    <>
 
<div style={{display:'flex',direction:'row', textDecoration:'none'}}>
{/* style={{textDecoration:line?'line-through':'none'}} */}
<li >{data}</li>
<i className='fa fa-times' aria-hidden='true' onClick={()=>del(id)}/>

</div>
    </>
)

}

export default List;