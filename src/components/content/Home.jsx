import React, {useState, useEffect} from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';
const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    }, []);


    return (
        
        <div className="row contenedorProductos">
            <h2 className='h1Productos'>PRODUCTOS</h2>
            {productos}     
        </div>      
        
    );
}

export default Home;
