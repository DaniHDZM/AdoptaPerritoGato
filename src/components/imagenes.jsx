import '../css/imagenes.css'
import perritoImg from '../images/Perrito.jpeg';
import gatitoImg from '../images/gatito.jpg';

const Imagenes = () => {
    return (
        <>
            <section className='PerroGato'>
                <div>
                    <img src={perritoImg} alt="" />
                    <p>Adopta un perro</p>
                </div>
                <div>
                    <img src={gatitoImg} alt="" />
                    <p>Adopta un gato</p>
                </div>
            </section>
            <section>
                <p>Se estima una cifra mayor de 29.7 millones de perros y gatos callejeros en el país. Esto ubica a México como el país de Latinoamérica con mayor número de perros callejeros, con alrededor de 500 mil abandonos anuales. </p>

            </section>
        </>
    )
}

export default Imagenes;