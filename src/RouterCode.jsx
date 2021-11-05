import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
  import About from './About'
  import Error from './Error'
  import Contact from './Contact'
  import Menu from './Menu'
  import User from './User'
const App = () => {

  return (<>
   <Menu/>
<Switch>
<Route exact path='/' component={About}/>
<Route exact path='/About' component={About}/>
<Route path='/About/Name' component={Name}/>
<Route path='/Contact' render={()=><Contact name='ff'/>}/>
<Route path='/User/:fname/:lname' component={User}/>

<Route component={Error}/> //<Redirect to='/'/>
</Switch>

  </>);

};

export default App;