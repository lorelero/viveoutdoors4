// src/components/Carrito.jsx
/* import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, ListGroup } from "react-bootstrap";

const Carrito = () => {
  const {
    carrito,
    sumarCantidad,
    restarCantidad,
    calcularTotal,
    agregarCarrito,
  } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>Carrito de Compras</h2>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <ListGroup>
          {carrito.map((item) => (
            <ListGroup.Item key={item.id_producto}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.foto}
                    alt={item.nombre}
                    style={{ width: "100px", marginRight: "20px" }}
                  />
                  <div>
                    <h5>{item.nombre}</h5>
                    <p>Precio: ${item.precio}</p>
                    <p>Cantidad: {item.count}</p>
                  </div>
                </div>
                <div>
                  <Button
                    variant="outline-primary"
                    onClick={() => sumarCantidad(item.id_producto)}
                  >
                    +
                  </Button>
                  <Button
                    variant="outline-danger"
                    onClick={() => restarCantidad(item.id_producto)}
                  >
                    -
                  </Button>
                </div>
              </div>
            </ListGroup.Item>
          ))}
          <h3>Total: ${calcularTotal()}</h3>
        </ListGroup>
      )}
    </div>
  );
};

export default Carrito;
 */
/ src/components/Carrito.jsx
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