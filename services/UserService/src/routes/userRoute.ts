import { Router } from 'express';
import UserController from '../controllers/userController';

const userController = new UserController();
const router = Router();

router.get('', async (req, res) => {
  return await userController.getAll(req, res);
});

router.get('/user', async (req, res) => {
  return await userController.getUser(req, res);
});

export default router;
