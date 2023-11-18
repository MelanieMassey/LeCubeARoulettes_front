import './App.css';
import NavBar from './components/NabBar/NavBar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Ateliers from './components/Ateliers/Ateliers';
import Login from './components/Login/Login';


function App() {

  // window.onscroll = function() {scrollFunction()};

  // function scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById("header").style.top = "0";
  //     // document.getElementById("header").style.backgroundColor = "#ECAEBD";
  //   } else {
  //     document.getElementById("header").style.top = "-250px";
  //     // document.getElementById("header").style.backgroundColor = "transparent";
  //   }
  // }

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ateliers' element={<Ateliers/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
