"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rankingController_1 = require("../controllers/rankingController");
class RankingRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', rankingController_1.rankingController.rankingUsers); //ruta inicial de mi servidor
    }
}
const rankingRoutes = new RankingRoutes();
exports.default = rankingRoutes.router;
