import logo from './logo.svg';
import './App.css';
import Saludo from './components/Saludo';
import ConHijos from './components/ConHijos';
import NavBar from './components/NavBar';
import CartWidget from './components/CartWidget';
import ItemListContainer from './components/ItemListContainer';
import Card from './components/Card';
import Contador from './components/Contador';

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
    <NavBar/>
    <ItemListContainer greeting='Hola'></ItemListContainer>
    <Saludo name='Juan' age='32' action={miFuncion}/>
    <Saludo name='Ana' age='27'/>
    <Card title='Mi titulo' otroComponente={Saludo}></Card>
    
    <Contador></Contador>

    </>
    
  );
}

export default App;
