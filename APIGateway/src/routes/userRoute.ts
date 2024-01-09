import { Router } from 'express';
import UserController from '../controllers/userController';
import userValidator from '../validators/authValidator';
import { errorHandler } from '../middlewares/errorHandlingMiddleware';

const userController = new UserController();
const router = Router();

router.get('', userController.getAll);

router.post('/create', (req, res, next) => {
    const { error } = userValidator.createUser.validate(req.body);
    if (error) {
        return res.status(400).json(error);
    }
    next();
}, userController.getAll); 

router.use(errorHandler);

export default router;
