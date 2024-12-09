import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Layout/Footer';
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
