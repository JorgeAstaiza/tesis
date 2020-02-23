"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const solicitudesPendientesController_1 = require("../controllers/solicitudesPendientesController");
class SolicitudesPendientesRouter {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', solicitudesPendientesController_1.solicitudesPendientesController.listSolicitudes); //ruta inicial de mi servidor
        this.router.put('/:id', solicitudesPendientesController_1.solicitudesPendientesController.updateSolicitud);
    }
}
const solicitudesPendientesRouter = new SolicitudesPendientesRouter();
exports.default = solicitudesPendientesRouter.router;
