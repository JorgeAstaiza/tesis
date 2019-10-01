import { Router } from 'express';

import { dashboardController } from '../controllers/operatorController';
class DashboardRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', dashboardController.listOperator) //ruta inicial de mi servidor
		this.router.get('/:id', dashboardController.getOne) 
		this.router.post('/', dashboardController.createOperator);
		this.router.delete('/:id', dashboardController.deleteOperator);
		this.router.put('/:id', dashboardController.updateOperator);
		//this.router.post('/', dashboardController.createUser);
	}
}

const dashboardRoutes = new DashboardRoutes();
export default dashboardRoutes.router;