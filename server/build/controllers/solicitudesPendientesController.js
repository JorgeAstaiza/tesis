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
class SolicitudesPendientesController {
    listSolicitudes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const solicitudes = yield database_1.default.query('select u.nombre, u.apellido, d.ciudad, d.direccion,d.departamento, v.idvisita, v.fecha, v.hora, v.foto_residuos, v.foto_residuos_dos from usuario as u inner join generador as g on u.id_email_usuario = g.usuario_id_email_usuario inner join direccion as d on g.id_email_generador = d.generador_id_email_generador inner join visita as v on d.iddireccion = v.direccion_iddireccion where v.estado = "pendiente";');
            res.json(solicitudes);
        });
    }
    updateSolicitud(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE visita set estado = "aceptado" WHERE idvisita = ?', [id]);
            res.json({ text: 'actualizando' });
        });
    }
}
exports.solicitudesPendientesController = new SolicitudesPendientesController();
