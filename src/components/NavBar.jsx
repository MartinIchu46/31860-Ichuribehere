import CartWidget from "./CartWidget"

const NavBar = (props) => {
  return (
    <div>
        <li>Inicio</li>
        <li>Autos 1/64</li>
        <li>Autos 1/43</li>
        <li>Herramientas</li>
        <li>Contacto</li>
        <CartWidget></CartWidget>
    </div>
  )
}

export default NavBar