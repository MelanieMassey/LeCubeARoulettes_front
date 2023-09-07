import './App.css';
import logo from './assets/logo.png';
import NavBar from './components/NabBar/NavBar';

function App() {
  return (
    <div>
      <NavBar/>
      <section className="first-section">
        <div id='logo-container'>
          <img className='logo' src={logo} alt='Logo de la boutique le cube à roulettes'/>
        </div>
        
      </section>
      <section className="second-section">

      </section>
    </div>
    
  );
}

export default App;
