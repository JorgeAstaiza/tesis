import { Request, Response } from 'express';

import pool from '../database'

class SolicitudesPendientesController {
	public async listSolicitudes(req: Request, res: Response) {
		const solicitudes = await pool.query('select u.nombre, u.apellido, d.ciudad, d.direccion,d.departamento, v.idvisita, v.fecha, v.hora, v.foto_residuos, v.foto_residuos_dos from usuario as u inner join generador as g on u.id_email_usuario = g.usuario_id_email_usuario inner join direccion as d on g.id_email_generador = d.generador_id_email_generador inner join visita as v on d.iddireccion = v.direccion_iddireccion where v.estado = "pendiente";')
		res.json(solicitudes)
	}
	public async updateSolicitud(req: Request, res: Response): Promise<void>{
		const { id } = req.params;
		await pool.query('UPDATE visita set estado = "aceptado" WHERE idvisita = ?', [id])
		res.json({text: 'actualizando'})
	}
	

}
export const solicitudesPendientesController = new SolicitudesPendientesController();