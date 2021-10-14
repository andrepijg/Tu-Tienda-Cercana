const express = require('express');
const serverController = require("../controllers/serverController")

class ServerRouter{
    constructor(){
        this.router = express.Router();
        this.config();
        }

    config(){
        const objServerC = new serverController.default();
        this.router.get("/productos", objServerC.getAllUsers);
        this.router.get("/productos/:id", objServerC.getUsers);
        this.router.post("/productos", objServerC.register);
        this.router.put("/productos", objServerC.update);
        this.router.delete("/productos", objServerC.deleteUser);        
    }
    
}

exports.default = ServerRouter;