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
    <ConHijos>
      <Saludo name='Mario' age='25'></Saludo>
    </ConHijos>
      <h1 style={{color: 'red', textDecoration: 'underline'}}>Hola Mundo con react!</h1>
      <strong> Otro mensaje</strong>
      <li>{2+4}</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <p style={styleP}>Este es un ejemplo de párrafo</p>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <button class="btn gap-2">
  Haz click aquí!!
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
</button>
<Saludo name='Juan' age='32'/>
<Saludo name='Ana' age='27'/>
    </>
    
  );
}

export default App;
