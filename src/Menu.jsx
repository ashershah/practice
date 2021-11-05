import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => {

  return (<>
<NavLink exact activeClassName='active_class' to='/'>About </NavLink>
<br></br>
<NavLink activeClassName='active_class' to='/slinkslider/params'> Contact</NavLink>
<br/>
{/* <NavLink activeClassName='active_class' to='/User/a/n'> User</NavLink> */}


{/* //use before server side Rendering
<a href="/About"> About </a>

<a href='/Contact'> Contact</a> */}
  </>);

};

export default Menu;
