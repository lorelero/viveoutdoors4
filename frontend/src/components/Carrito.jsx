// src/components/Carrito.jsx
import React, { useContext } from "react";
import { CarritoContext } from "../context/carritoProvider";

const Carrito = () => {
  const { carrito, calcularTotal } = useContext(CarritoContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {carrito.map((producto, index) => (
          <li key={index}>
            {producto.titulo} - {producto.precio}
          </li>
        ))}
      </ul>
      <h3>Total: ${calcularTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Carrito;
