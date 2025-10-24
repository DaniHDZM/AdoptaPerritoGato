import '../css/ong.css'

const Ong = () => {
  return (
    <section className="ong">
      <h2>Organizaciones que ayudan a los animales</h2>
      <p>Conoce y apoya a instituciones dedicadas al rescate y cuidado de perros y gatos:</p>

      <div className="ong-links">
        <a
          href="https://www.instagram.com/zadrigman/"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐾 Zadrigman
        </a>

        <a
          href="https://www.ssc.cdmx.gob.mx/agrupamientos/brigada-de-vigilancia-animal"
          target="_blank"
          rel="noopener noreferrer"
        >
          🐕 Brigada de Vigilancia Animal
        </a>
      </div>
    </section>
  );
};

export default Ong;
