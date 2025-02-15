import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Footer from './Components/Home/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import { Fragment } from 'react';
 function Routings(){
return (
 <Fragment>
<Router>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home/>}/> 
    <Route path='/Rentup' element={<Home/>}/> 
    <Route path='/about' element={<About/>}/> 
   
    </Routes> 
   <Footer/>
    </Router> 
    </Fragment>
 )}
 export default Routings