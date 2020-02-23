import { Router } from 'express';

import { solicitudesPendientesController } from '../controllers/solicitudesPendientesController';
class SolicitudesPendientesRouter {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', solicitudesPendientesController.listSolicitudes) //ruta inicial de mi servidor
		this.router.put('/:id', solicitudesPendientesController.updateSolicitud);
		
	}
}

const solicitudesPendientesRouter = new SolicitudesPendientesRouter();
export default solicitudesPendientesRouter.router;