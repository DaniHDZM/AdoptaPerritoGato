import '../css/imagenes.css'
import perritoImg from '../images/Perrito.jpeg';
import gatitoImg from '../images/gatito.jpg';

const Imagenes = () => {
    return (
        <>
            <section className='PerroGato'>
                <article>
                    <img src={perritoImg} alt="Perritos en un jardin" />
                    <p>Adopta un perro</p>
                </article>
                <article>
                    <img src={gatitoImg} alt="Gato arriba de un sofa" />
                    <p>Adopta un gato</p>
                </article>
            </section>
            <section>
                <p>Se estima una cifra mayor de 29.7 millones de perros y gatos callejeros en el país. Esto ubica a México como el país de Latinoamérica con mayor número de perros callejeros, con alrededor de 500 mil abandonos anuales. </p>

            </section>
        </>
    )
}

export default Imagenes;