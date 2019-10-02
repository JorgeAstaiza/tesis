import { Router } from 'express';

import { operatorController } from '../controllers/operatorController';
class DashboardRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', operatorController.listOperator) //ruta inicial de mi servidor
		this.router.get('/:id', operatorController.getOne) 
		this.router.post('/', operatorController.createOperator);
		this.router.delete('/:id', operatorController.deleteOperator);
		this.router.put('/:id', operatorController.updateOperator);
		//this.router.post('/', dashboardController.createUser);
	}
}

const dashboardRoutes = new DashboardRoutes();
export default dashboardRoutes.router;