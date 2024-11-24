// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

// Asegúrate de que el nombre del contexto sea consistente
export const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
 export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Función para agregar un producto al carrito
    const agregarCarrito = (producto) => {
        setCarrito((prevCarrito) => {
            const existe = prevCarrito.find(item => item.id_producto === 
                producto.id_producto);
            if (existe) {
                // Si el producto ya existe, incrementar la cantidad
                return prevCarrito.map(item => 
                    item.id_producto === producto.id_producto
                        ? { ...item, count: item.count + 1 }
                        : item
                );
            }
            // Si no existe, agregar el nuevo producto con cantidad 1
return [...prevCarrito, { ...producto, count: 1 }];
        });
    };

    // Función para sumar cantidad de un producto en el carrito
    const sumarCantidad = (id_producto) => {
        setCarrito((prevCarrito) => 
            prevCarrito.map(item => 
                item.id_producto === id_producto
                    ? { ...item, count: item.count + 1 }
                    : item
            )
        );
    };

    // Función para restar cantidad de un producto en el carrito
    const restarCantidad = (id_producto) => {
        setCarrito((prevCarrito) => 
            prevCarrito.map(item => 
                item.id_producto === id_producto && item.count > 1
                    ? { ...item, count: item.count - 1 }
                    : item
            )
        );
    };

    // Función para calcular el total del carrito
    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + item.precio * item.count, 0);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarCarrito, sumarCantidad, restarCantidad, calcularTotal }}>
            {children}
        </CartContext.Provider>
    );
};
