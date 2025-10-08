import '../css/formulario.css'

const Formulario = () => {
    return (
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="tipo">¿Cómo quieres ayudar?</label>
            <select id="tipo" name="tipo">
                <option>Adoptar</option>
                <option>Donar</option>
                <option>Ser voluntario</option>
            </select>

            <label htmlFor="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje"></textarea>

            <button type="submit">Enviar</button>
        </form>

    )
}

export default Formulario;