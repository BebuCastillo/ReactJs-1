
import './App.css'
import Button from './components/Button';
import NavBar from './components/NavBar';

function App() {
  
  const handleClick = (name) => {
    alert("Click en " + name);
  }
  return (
    <div>
      <NavBar/>
      <Button text="Historia" clickEnBoton={handleClick}/>
      <Button text="Menu" clickEnBoton={handleClick}/>
      <Button text="Bebidas" clickEnBoton={handleClick}/>
      <h1>Hash Fest!</h1>
      
    </div> 
  )
}

export default App;
