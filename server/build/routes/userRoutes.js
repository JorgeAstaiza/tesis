"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class DashboardRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.userController.listUser); //ruta inicial de mi servidor
        this.router.get('/:id', userController_1.userController.getOne);
        this.router.post('/', userController_1.userController.createUser);
        this.router.delete('/:id', userController_1.userController.deleteUser);
        this.router.put('/:id', userController_1.userController.updateUser);
        //this.router.post('/', dashboardController.createUser);
    }
}
const dashboardRoutes = new DashboardRoutes();
exports.default = dashboardRoutes.router;
