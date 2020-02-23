import { Request, Response } from 'express';

import pool from '../database'

class RankingController {
	public async rankingUsers(req: Request, res: Response) {
    const usuarios = await pool.query('select U.id_email_usuario, U.nombre, U.apellido, G.puntos from usuario U, generador G where U.id_email_usuario = G.usuario_id_email_usuario and U.estado = "activo" order by G.puntos DESC;');
		res.json(usuarios)
    }

}
export const rankingController = new RankingController();