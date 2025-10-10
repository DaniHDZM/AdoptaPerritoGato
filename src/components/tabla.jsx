
import '../css/tabla.css'

const Tabla = () => {
  return (
    <>
      <h2>Lista de animales disponibles para adopción</h2>
      <table>
      <thead>
        <tr>
          <th scope="col">Animal</th>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Tamaño</th>
          <th scope="col">Personalidad</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Gata</td>
          <td>Luna</td>
          <td>2 años</td>
          <td>Mediana</td>
          <td>Juguetona y cariñosa</td>
        </tr>
        <tr>
          <td>Perro</td>
          <td>Max</td>
          <td>4 años</td>
          <td>Grande</td>
          <td>Tranquilo y sociable</td>
        </tr>
        <tr>
          <td>Perra</td>
          <td>Bella</td>
          <td>1 año</td>
          <td>Pequeña</td>
          <td>Enérgica y protectora</td>
        </tr>
        <tr>
          <td>Perro</td>
          <td>Toby</td>
          <td>7 años</td>
          <td>Pequeño</td>
          <td>Calmado y leal</td>
        </tr>
        <tr>
          <td>Gata</td>
          <td>Nala</td>
          <td>3 años</td>
          <td>Mediana</td>
          <td>Alegre y obediente</td>
       </tr>
      </tbody>
    </table>
    </>
  );
};

export default Tabla;
