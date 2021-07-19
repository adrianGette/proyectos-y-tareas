const express = require('express');
const router = express.Router();
const tareaController = require('../controllers/proyectoController');
const auth = require('../middleware/auth');
const { check } = require('express-validator');


// crear una tarea
// api/tareas

router.post('/',
    auth,
    [
        check('nombre', 'El nombre es obligatorio.').not().isEmpty()
    ],
    tareaController.crearTarea

);

module.exports = router;