import { Router } from 'express';
import { AmbienteController } from '../controllers/ambiente.controller';

const router = Router();

router.get('/', AmbienteController.getAllAmbientes);
router.post('/', AmbienteController.createAmbiente);
router.patch('/:id', AmbienteController.patchAmbiente); // <--- Modificación parcial con PATCH

export default router;