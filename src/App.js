import './App.css';
import NavBar from './components/NabBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { NewUserContext } from './context/NewUserContext';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Events from './components/Events/Events';


function App() {

  const client = new QueryClient(); // possibilité de passer une config ici

  const [user, setUser] = useState(null);
  const [newUser, setNewUser] = useState();

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  const value2 = useMemo(() => ({ newUser, setNewUser }), [newUser, setNewUser]);

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
      
      <UserContext.Provider value={value}>
      {/* <NewUserContext.Provider value={value2}> */}
        <QueryClientProvider client={client}>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/events' element={<Events/>}/>
          </Routes>
          <Footer/>
        </QueryClientProvider>
      {/* </NewUserContext.Provider> */}
      </UserContext.Provider>
      
    </>
  );
}

export default App;
