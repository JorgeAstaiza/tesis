"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//importo rutas
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const operatorRoutes_1 = __importDefault(require("./routes/operatorRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //defino el puerto del servidor
        this.app.use(morgan_1.default('dev')); //para poder ver las peticiones por consola
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/login', indexRoutes_1.default);
        this.app.use('/api/operarios', operatorRoutes_1.default);
    }
    //inicio el servidor con express
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('server on ', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
