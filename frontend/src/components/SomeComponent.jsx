// src/components/SomeComponent.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import { useContext } from 'react';
import { viveContext } from '../context/ViveProvider';

const SomeComponent = () => {
  const { carrito, agregarCarrito } = useCart();
  const { producto } = useContext(viveContext);

  const handleAgregar = (producto) => {
    agregarCarrito(producto);
  };

  return (
    <div>
      <h1>Productos Disponibles</h1>
      {producto.map((item) => (
        <div key={item.id_producto}>
          <h2>{item.nombre}</h2>
          <button onClick={() => handleAgregar(item)}>Agregar al Carrito</button>
        </div>
      ))}
      <h2>Productos en el Carrito: {carrito.length}</h2>
    </div>
  );
};

export default SomeComponent;
