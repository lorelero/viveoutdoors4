// src/components/DetalleImagen.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
    detalle: "Colchoneta autoinflable Para una comodidad sin precedentes durante sus aventuras en el campo, el Trail Pro brinda calidez durante todo el año y el soporte legendario Therm-a-Rest. La espuma autoinflable mide 7,6 cm y presenta la construcción StrataCore, un diseño que brinda la mejor relación calidez-peso de cualquier construcción de espuma autoinflable.",
    precio: "$140.000",
  },
  // Nuevos productos añadidos
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
    detalle: "Colchoneta autoinflable Para una comodidad sin precedentes durante sus aventuras en el campo, el Trail Pro brinda calidez durante todo el año y el soporte legendario Therm-a-Rest. La espuma autoinflable mide 7,6 cm y presenta la construcción StrataCore, un diseño que brinda la mejor relación calidez-peso de cualquier construcción de espuma autoinflable.",
    precio: "$140.000",
  },
];

const DetalleImagen = () => {
  const { imagenId } = useParams();
  const navigate = useNavigate();
  const producto = productos[imagenId];

  const irADetalle = (id) => {
    navigate(`/detalle/${id}`);
  };

  const irACategoria = () => {
    navigate("/CategorySacos");
  };

  const productoAnterior = Number(imagenId) > 0 ? Number(imagenId) - 1 : 0;
  const productoSiguiente =
    Number(imagenId) < productos.length - 1
      ? Number(imagenId) + 1
      : productos.length - 1;

  return (
    <div className="container my-4">
      {/* Submenú */}
      <div className="mb-4">
        <button className="btn btn-link" onClick={irACategoria}>
          Volver a Sacos y Colchonetas
        </button>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img
            src={producto.imagen}
            alt={producto.titulo}
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{producto.titulo}</h2>
          <p>
            <strong>Detalle:</strong> {producto.detalle}
          </p>
          <p>
            <strong>Precio:</strong> <span style={{ fontWeight: 'bold', fontSize: '2em' }}>{producto.precio}</span>
          </p>
          <button className="btn btn-dark mt-3">Agregar al carrito</button>
        </div>
      </div>

      <div className="mt-4">
        <button
          className="btn btn-secondary me-2"
          onClick={() => irADetalle(productoAnterior)}
        >
          Atrás
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => irADetalle(productoSiguiente)}
        >
          Adelante
        </button>
      </div>
    </div>
  );
};

export default DetalleImagen;
