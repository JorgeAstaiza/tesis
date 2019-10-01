"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class DashboardController {
    index(req, res) {
        database_1.default.query('DESCRIBE prueba');
        res.json('games');
    }
    createOperator(req, res) {
        res.json({ text: 'creando un operairo' });
    }
    deleteOperator(req, res) {
        res.json({ text: 'eliminando juego' });
    }
    updateOperator(req, res) {
        res.json({ text: 'actualizando' });
    }
}
exports.dashboardController = new DashboardController();
