import "./intro.css";

function Intro ({ intro }) {
  return(
    <div className="intro">
    {intro.map((texto) => (
      <div className="intro">
          <h1 className="titulo">{texto.titulo}</h1>
          <h2 className="descripcion">{texto.descripcion}</h2>
          </div>
    ))}
</div>
    )
};

export default Intro;