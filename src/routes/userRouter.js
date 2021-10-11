import express from 'express';
import { userController } from '../controllers';

const router = express.Router();

router.route('/login').post(userController.login);
router.route('/signup').post(userController.signUp);
router.route('/id').post(userController.findUser);
router.route('/pw').post(userController.findPassword);

export default router;
