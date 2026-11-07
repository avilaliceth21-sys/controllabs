import { Router } from 'express';
import { EquipoController } from '../controllers/equipo.controller';

const router = Router();

router.get('/', EquipoController.getAllEquipos);
router.post('/', EquipoController.createEquipo);
router.patch('/:id', EquipoController.patchEquipo); // <--- Modificación parcial de estado técnico o ubicación con PATCH

export default router;
