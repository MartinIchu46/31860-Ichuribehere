import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';

function App() {

  //logica

  const miFuncion = () => {

  }

  const styleP ={
    border: 'solid 2px blue',
    padding:'20px'
  }
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer greeting='Hola'></ItemListContainer>
    
    </>
    
  );
}

export default App;
