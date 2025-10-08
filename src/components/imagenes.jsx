import '../css/imagenes.css'

const Imagenes = () => {
    return (
        <>
            <section className='PerroGato'>
                <article>
                    <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" alt="Imagen de perrito" />
                    <p>Adopta un perro</p>
                </article>
                <article>
                    <img src="https://images.pexels.com/photos/20787/pexels-photo.jpg" alt="Imagen de gato" />
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