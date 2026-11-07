import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const router = Router();

router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.patch('/:id', UserController.patchUser); // <--- Aquí usas PATCH como pide la práctica

export default router;