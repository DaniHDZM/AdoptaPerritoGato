import './App.css'
import { Link, Element } from 'react-scroll'
import Imagenes from './components/imagenes'
import Tabla from './components/tabla'
import Form from './components/formulario'
import ONG from './components/ong'

function App() {
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="imagenes" smooth={true} duration={500}>Imágenes</Link>
          <Link to="tabla" smooth={true} duration={500}>Tabla</Link>
          <Link to="formulario" smooth={true} duration={500}>Formulario</Link>
          <Link to="ong" smooth={true} duration={500}>ONG</Link>
        </nav>
      </header>

      <main>
        <Element name="imagenes">
          <Imagenes />
        </Element>
        <Element name="tabla">
          <Tabla />
        </Element>

        <Element name="formulario">
          <Form />
        </Element>

        <Element name="ong">
          <ONG />
        </Element>
      </main>

      <footer>
        <p>🐾 Huellas de Esperanza 🐾</p>
      </footer>
    </>
  )
}

export default App
