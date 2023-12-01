import './App.css';
import NavBar from './components/NabBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Events from './components/Events/Events';


function App() {

  const client = new QueryClient(); // possibilité de passer une config ici
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <UserContext.Provider value={value}>
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
      </UserContext.Provider>
    </>
  );
}

export default App;
