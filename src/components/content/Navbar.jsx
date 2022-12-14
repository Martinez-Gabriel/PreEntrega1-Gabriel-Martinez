import React from 'react';
import Dropdown from '../layouts/Dropdown';
import Form from '../layouts/Form';
import Secciones from '../layouts/Secciones';

const Navbar = () => {
  const listDropdown = ["Procesadores", "Motherboards", "Memorias Ram"]
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">GabrielAPK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
              <Secciones/>
              <Dropdown lista={listDropdown}/>
            </ul>
            <Form busqueda="Buscar Producto"/>
            <button type="button" class="btn btn-success botonCarrito">Carrito de Compras</button>
          </div>
        </div>
      </nav>
      </>
    );
}

export default Navbar;
