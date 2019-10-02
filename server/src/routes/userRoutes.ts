import { Router } from 'express';

import { userController } from '../controllers/userController';
class DashboardRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', userController.listUser) //ruta inicial de mi servidor
		this.router.get('/:id', userController.getOne) 
		this.router.post('/', userController.createUser);
		this.router.delete('/:id', userController.deleteUser);
		this.router.put('/:id', userController.updateUser);
		//this.router.post('/', dashboardController.createUser);
	}
}

const dashboardRoutes = new DashboardRoutes();
export default dashboardRoutes.router;