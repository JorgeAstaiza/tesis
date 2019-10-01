"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const operatorController_1 = require("../controllers/operatorController");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', operatorController_1.dashboardController.listOperator); //ruta inicial de mi servidor
        this.router.get('/:id', operatorController_1.dashboardController.getOne);
        this.router.post('/', operatorController_1.dashboardController.createOperator);
        this.router.delete('/:id', operatorController_1.dashboardController.deleteOperator);
        this.router.put('/:id', operatorController_1.dashboardController.updateOperator);
        //this.router.post('/', dashboardController.createUser);
    }
}
const dashboardRoutes = new DashboardRoutes();
exports.default = dashboardRoutes.router;
