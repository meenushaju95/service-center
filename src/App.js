
import './App.css';
import Home from './home';
import Profile from './login';
import Signup from './signup';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Admindashboard from './AdminDashboard';

function App() {
  return (
    
    <>
    
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/login' element={<Profile/ >}/>
    <Route path='/signup' element={<Signup/ >}/>
    <Route path='/AdminDashboard' element={<Admindashboard/ >}/>
    </Routes>
    </BrowserRouter>
    
    </>
  )
      
}

export default App;
