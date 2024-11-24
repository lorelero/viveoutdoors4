const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3000;

const pool = new Pool({
  user: 'lore',
  host: 'localhost',
  database: 'viveoutdoors',
  password: '123456',
  port: 5432,
});

/ Función para insertar datos
const insertarDatos = async () => {
  try {
    // Insertar en productos_categorias
    await pool.query(`
      INSERT INTO productos_categorias (id_producto, id_categoria) VALUES
      (1, 1),
      (1, 2),
      (2, 1),
      (3, 2),
      (4, 3)
      ON CONFLICT (id_producto, id_categoria) DO NOTHING;
    `);
    console.log('Datos insertados en productos_categorias correctamente');

    // Insertar en imagenes_productos
    await pool.query(`
      INSERT INTO imagenes_productos (id_producto, url, texto_alternativo) VALUES
      (1, '/images/saco_lafuma_active.jpg', 'Saco de Dormir Lafuma Active 0º C'),
      (2, '/images/saco_lafuma_nunavut.jpg', 'Saco de Dormir Lafuma Nunavut Kid'),
      (3, '/images/saco_doite_summit.jpg', 'Saco de Dormir Summit Naranjo Doite'),
      (4, '/images/saco_lippi_xperience.jpg', 'Saco de Dormir Lippi X-Perience 0° Steam-Pro'),
      (5, '/images/colchoneta_therm_a_rest.jpg', 'Colchoneta Therm-a-Rest Z-Lite')
      ON CONFLICT (id_producto, url) DO NOTHING;  // Asegúrate de que la combinación sea única
    `);
    console.log('Datos insertados en imagenes_productos correctamente');
  } catch (error) {
    console.error('Error al insertar datos:', error);
  } finally {
    // Cerrar la conexión
    await pool.end();
  }
};

// Ejecutar la función
insertarDatos();