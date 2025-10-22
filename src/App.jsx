import './App.css'
import { Element, scroller } from 'react-scroll'
import Imagenes from './components/imagenes'
import Tabla from './components/tabla'
import Form from './components/formulario'
import ONG from './components/ong'

function scrollTo(name) {
  scroller.scrollTo(name, {
    duration: 500,
    smooth: true,
    offset: -50,
  });
}

function App() {
  return (
    <>
      <header>
          <h1>Adopta a un amigo</h1>
      </header>
      <nav className="navbar">
        <a href="#imagenes" onClick={(e) => { e.preventDefault(); scrollTo('imagenes'); }}>Imágenes</a>
        <a href="#tabla" onClick={(e) => { e.preventDefault(); scrollTo('tabla'); }}>Tabla</a>
        <a href="#formulario" onClick={(e) => { e.preventDefault(); scrollTo('formulario'); }}>Formulario</a>
        <a href="#ong" onClick={(e) => { e.preventDefault(); scrollTo('ong'); }}>ONG</a>
      </nav>


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
