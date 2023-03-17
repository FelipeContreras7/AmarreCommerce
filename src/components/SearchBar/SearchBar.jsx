import "./searchbar.css";


function SearchBar () {
  return(
    <div className="search_container">
    <form className="form">
      <label className="label_titulo">
      Que estas buscando?
      <input type="text" name="name" className="barra"/>
      </label>
      <input type="submit" value="Buscar" className="boton"/>
    </form>
  </div>
)}

export default SearchBar;