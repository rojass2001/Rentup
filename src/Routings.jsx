import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import { Fragment } from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';

import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Login/Register';
 function Routings(){
return (
 <Fragment>
<Router>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Rentup' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/>
    <Route path='/service' element={<Service/>}/> 
    <Route path='/Blog' element={<Blog/>}/> 
    <Route path='/Contact' element={<Contact/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
   
   
    </Routes> 
   <Footer/>
    </Router> 
    </Fragment>
 )}
 export default Routings