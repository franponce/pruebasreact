import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemListado from '../components/ItemListado';

export default function Productos() {
    const [mercaderia, setMercaderia] = useState([]);
    let traemeProductos = async () => {
        const res = await axios.get('https://fakerapi.it/api/v1/products?_quantity=20'
        );
        setMercaderia(res.data.data);
    }
    useEffect(() => {
        traemeProductos();
    }, [])
    return (
        <>
            <h1>Productos</h1>
            {mercaderia.map((item) => (
                <ItemListado {...item}></ItemListado>
            ))}
        </>
    )
}
