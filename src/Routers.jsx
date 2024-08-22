import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Contact from './Components/Contact.jsx'
import { Rate } from './Components/Rate.jsx'
import { Login } from './Components/Login.jsx'
import { Signup } from './Components/Signup';
import Payment from './Components/Payment';
import Footer from './Components/Footer.jsx'
import Home from './Home.jsx'
import Bus from './Components/vehicles/Bus';
import Body from './Components/Body.jsx'

const Routers = () => {
  return (
    <>

    
  
      <Navbar />
      <Routes>
        {<Route path='/' element={<Home />} />}
        { <Route path='/contact' element={<Contact />} /> }
        { <Route path='/login' element={<Login />} /> }
        { <Route path='/signup' element={<Signup />} /> }
        { <Route path='/rate' element={<Rate />} /> }
        { <Route path='/payment' element={<Payment />} /> }
        { <Route path='/foot' element={<Footer />} /> }
        { <Route path='/app' element={<App />} /> }
        { <Route path='/bus' element={<Bus />} /> }
        { <Route path='/body' element={<Body />} /> }
      </Routes>
      <Footer />

    </>
   
    
  )
}

export default Routers