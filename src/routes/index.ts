import { Router } from 'express';
import userRoutes from './user.routes';
import ambienteRoutes from './ambiente.routes';
import equipoRoutes from './equipo.routes';

const router = Router();
router.use('/users', userRoutes); 
router.use('/ambientes', ambienteRoutes);
router.use('/equipos', equipoRoutes);

export default router;