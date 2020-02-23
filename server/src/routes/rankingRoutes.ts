import { Router } from 'express';

import { rankingController } from '../controllers/rankingController';
class RankingRoutes {
	public router: Router = Router();

	constructor() {
		this.config();
	}
	config(): void {
		this.router.get('/', rankingController.rankingUsers) //ruta inicial de mi servidor
		
	}
}

const rankingRoutes = new RankingRoutes();
export default rankingRoutes.router;