import { Router } from 'express';
import { PrestamoController } from '../controllers/loan.controller';
import { validateLoanPayload } from '../middlewares/validateLoan.middleware';

const router = Router();

router.get('/search', PrestamoController.getLoansByFilter);
router.post('/', validateLoanPayload, PrestamoController.createLoan);
router.put('/:id/accept', PrestamoController.acceptLoanInventory);
router.get('/:id', PrestamoController.getLoanById);

export default router;
