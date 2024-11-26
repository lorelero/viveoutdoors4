// src/components/MiComponente.jsx
import React from 'react';
import { useCart } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta

const MiComponente = () => {
    const { carrito, agregarCarrito, calcularTotal } = useCart();

    return (
        <div>
            <h2>Total: {calcularTotal()}</h2>
            <ul>
                {carrito.map(item => (
                    <li key={item.id_producto}>
                        {item.nombre} - Cantidad: {item.count} - Precio: {item.precio}
                    </li>
                ))}
            </ul>
            {/* Aquí puedes agregar más lógica para mostrar los productos en el carrito */}
        </div>
    );
};

export default MiComponente;
