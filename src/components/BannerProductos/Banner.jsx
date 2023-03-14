import "./banner.css"

function Banner ({ categ }) {
  return(
    <div className="contenedor">
    {categ.map((cat) => (
      <div className="banner">
          <img src={cat.foto}/>
          <h1 href="#">{cat.titulo}</h1>
      </div>
    ))}
</div>
    )
};


export default Banner;