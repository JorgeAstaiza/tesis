"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class UserController {
    listUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarios = yield database_1.default.query('select U.id_email_usuario, U.nombre, U.apellido, U.fecha_nacimiento, U.genero, U.telefono, O.cedula, O.puntos, O.foto from usuario U, operario O where U.id_email_usuario = O.usuario_id_email_usuario and U.estado = "activo"');
            res.json(usuarios);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const usuario = yield database_1.default.query('select U.id_email_usuario, U.nombre, U.apellido, U.fecha_nacimiento, U.genero, U.telefono, O.cedula, O.puntos, O.foto from usuario U, operario O where U.id_email_usuario = O.usuario_id_email_usuario and U.estado = "activo" and id_email_usuario = ?', [id]);
            if (usuario.length > 0) {
                return res.json(usuario[0]);
            }
            res.status(404).json({ text: 'usuario no encontrado' });
        });
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO usuario set ?', [req.body]);
            res.json({ text: 'creando un usuario' });
        });
    }
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set estado = "inactivo" WHERE id_email_usuario = ?', [id]);
            res.json({ text: 'eliminando operador' });
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE usuario set ? WHERE id_email_usuario = ?', [req.body, id]);
            res.json({ text: 'actualizando' });
        });
    }
}
exports.userController = new UserController();
