// src/vistas/CategorySacos.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css"; 

const productos = [
  {
    id: 0,
    imagen: "/saco.webp",
    titulo: "Saco 1",
    detalle: "Saco ligero y resistente.",
    precio: "$50",
  },
  {
    id: 1,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco Lafuma",
    detalle: "Saco ideal para camping.",
    precio: "$70",
  },
  {
    id: 2,
    imagen: "/sacoDoite2.jpg",
    titulo: "Saco Doite",
    detalle: "Saco de alta calidad.",
    precio: "$80",
  },
  {
    id: 3,
    imagen: "/sacoLippi.webp",
    titulo: "Saco Lippi",
    detalle: "Saco cómodo y cálido.",
    precio: "$60",
  },
  {
    id: 4,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Z-Lite",
    detalle: "Colchoneta ligera y fácil de transportar.",
    precio: "$30",
  },
  {
    id: 5,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi",
    detalle: "Colchoneta cómoda y duradera.",
    precio: "$40",
  },
  {
    id: 6,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Doite",
    detalle: "Colchoneta de camping.",
    precio: "$35",
  },
  {
    id: 7,
    imagen: "/colchonetatherm.jpg",
    titulo: "Therm-a-rest Trail Pro",
    detalle: "Colchoneta aislante.",
    precio: "$45",
  },
  {
    id: 8,
    imagen: "/saco.webp",
    titulo: "Saco 1",
    detalle: "Saco ligero y resistente.",
    precio: "$50",
  },
  {
    id: 9,
    imagen: "/sacoLafuma.jpg",
    titulo: "Saco Lafuma",
    detalle: "Saco ideal para camping.",
    precio: "$70",
  },
  {
    id: 10,
    imagen: "/sacoDoite2.jpg",
    titulo: "Saco Doite",
    detalle: "Saco de alta calidad.",
    precio: "$80",
  },
  {
    id: 11,
    imagen: "/sacoLippi.webp",
    titulo: "Saco Lippi",
    detalle: "Saco cómodo y cálido.",
    precio: "$60",
  },
  {
    id: 12,
    imagen: "/colchoneta-z-lite.jpg",
    titulo: "Colchoneta Z-Lite",
    detalle: "Colchoneta ligera y fácil de transportar.",
    precio: "$30",
  },
  {
    id: 13,
    imagen: "/ColchonetaLippi.jpg",
    titulo: "Colchoneta Lippi",
    detalle: "Colchoneta cómoda y duradera.",
    precio: "$40",
  },
  {
    id: 14,
    imagen: "/colchonetaDoite.jpeg",
    titulo: "Colchoneta Doite",
    detalle: "Colchoneta de camping.",
    precio: "$35",
  },
  {
    id: 15,
    imagen: "/colchonetatherm.jpg",
    titulo: "Therm-a-rest Trail Pro",
    detalle: "Colchoneta aislante.",
    precio: "$45",
  },
];

const CategorySacos = () => {
  const navigate = useNavigate();

  const irADetalle = (id) => {
    navigate(`/detalle/${id}`);
  };

  return (
    <div className="container">
      <h2 className="my-4 text-center">Sacos y Colchonetas</h2>
      <div className="row">
        {productos.map((producto) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={producto.id}>
            <div className="card" onClick={() => irADetalle(producto.id)}>
              <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
              <div className="card-body">
                <h5 className="card-title">{producto.titulo}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySacos;
