"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dashboardController_1 = require("../controllers/dashboardController");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dashboardController_1.dashboardController.index); //ruta inicial de mi servidor
        this.router.post('/', dashboardController_1.dashboardController.createOperator);
        this.router.delete('/:id', dashboardController_1.dashboardController.deleteOperator);
        this.router.put('/:id', dashboardController_1.dashboardController.updateOperator);
    }
}
const dashboardRoutes = new DashboardRoutes();
exports.default = dashboardRoutes.router;
