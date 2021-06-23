const Proyecto = require('../models/Proyecto');

exports.crearProyecto = async (req, res) => {

    try {
        // crear un nuevo proyecto
        const proyecto = new Proyecto(req.body);

        // guardar el creador via json web token
        proyecto.creador = req.usuario.id;

        // guardar proyecto
        proyecto.save();
        res.json(proyecto);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}