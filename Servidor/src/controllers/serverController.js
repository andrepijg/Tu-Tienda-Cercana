const productos = require ('../models/productos');

class ServerController {
    constructor() {

    }

    register(req, res) {
        productos.create(req.body, (error, data) => {
            if (error) {
                res.status(500).send();
                console.log(error);
            } else {
                res.status(201).json(data);
            }
        });
    }

    
    update(req, res) {
        let { id, nombre_tienda, telefono_tienda, email_tienda, tipo_producto, nombre_producto, precio_kg} = req.body;
        let obj = {nombre_tienda, telefono_tienda, email_tienda, tipo_producto, nombre_producto, precio_kg  }
        productos.findByIdAndUpdate(id, { $set: obj }, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    deleteUser(req, res) {
        let { id } = req.body;
        productos.findByIdAndDelete(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }


    getUsers(req, res) {
        let id = req.params.id;
        productos.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    /*    getAllUsers(req, res) {
            res.status(200).json(users);
        }*/

    getAllUsers(req, res) {
        productos.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;