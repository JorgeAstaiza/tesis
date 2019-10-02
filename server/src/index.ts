import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

//importo rutas
import indexRoutes from './routes/indexRoutes';
import operatorRoutes from './routes/operatorRoutes';
import userRoutes from './routes/userRoutes';


class Server {

	public app: Application

	constructor() {
		this.app = express();
		this.config();
		this.routes();
	}

	config(): void {
		this.app.set('port', process.env.PORT || 3000) //defino el puerto del servidor
		this.app.use(morgan('dev')) //para poder ver las peticiones por consola
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.urlencoded({extended: false}));
	}
	routes(): void {
		this.app.use('/login', indexRoutes);
		this.app.use('/api/usuarios', userRoutes); 
		this.app.use('/api/operarios', operatorRoutes )
	}
	//inicio el servidor con express
	start(): void {
		this.app.listen(this.app.get('port'), () => {
			console.log('server on ', this.app.get('port'));
		});
	}
}

const server = new Server();
server.start();