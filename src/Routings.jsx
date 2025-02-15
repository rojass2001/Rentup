import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Home/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Fragment } from 'react';
import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
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
   
    </Routes> 
   <Footer/>
    </Router> 
    </Fragment>
 )}
 export default Routings