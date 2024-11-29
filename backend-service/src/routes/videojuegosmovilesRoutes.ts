import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/videojuegosmovilesController";

const videojuegosmovilesRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: videojuegosmoviles
 *   description: CRUD relacionado con productos
 */

/**
 * @swagger
 * /api/videojuegosmoviles:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [videojuegosmoviles]
 *     responses:
 *       200:
 *         description: Lista de productos
 */
videojuegosmovilesRoutes.get("/", getAllProducts);

/**
 * @swagger
 * /api/videojuegosmoviles/{id}:
 *   get:
 *     summary: Obtener un producto por ID
 *     tags: [videojuegosmoviles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Detalles del producto
 *       404:
 *         description: Producto no encontrado
 */
videojuegosmovilesRoutes.get("/:id", getProductById);

/**
 * @swagger
 * /api/videojuegosmoviles:
 *   post:
 *     summary: Crear un nuevo producto
 *     tags: [videojuegosmoviles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Producto creado
 *       500:
 *         description: Error en el servidor
 */
videojuegosmovilesRoutes.post("/", createProduct);

/**
 * @swagger
 * /api/videojuegosmoviles/{id}:
 *   put:
 *     summary: Actualizar un producto existente
 *     tags: [videojuegosmoviles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Producto actualizado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
videojuegosmovilesRoutes.put("/:id", updateProduct);

/**
 * @swagger
 * /api/videojuegosmoviles/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [videojuegosmoviles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del producto
 *     responses:
 *       200:
 *         description: Producto eliminado
 *       404:
 *         description: Producto no encontrado
 *       500:
 *         description: Error en el servidor
 */
videojuegosmovilesRoutes.delete("/:id", deleteProduct);

export default videojuegosmovilesRoutes;