import { useEffect } from 'react';
import axios from 'axios';

export default function Productos() {
    let traemeProductos = async()=>{
        const res = await axios.get('https://fakerapi.it/api/v1/products?_quantity=20'
        );
        console.log(res.data.data);
    }
    useEffect(()=>{
        traemeProductos();
    }, [])
  return (
    <div>

    </div>
  )
}
