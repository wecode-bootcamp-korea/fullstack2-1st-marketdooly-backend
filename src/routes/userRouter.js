import express from 'express';
import { userController } from '../controllers';
import middlewares from '../../middlewares';

const router = express.Router();

router
  .route('/')
  .get(middlewares.tokenController.verifyToken, userController.getAllUsers);
router.route('/login').post(userController.login);
router.route('/signup').post(userController.signUp);
router.route('/account').post(userController.findAccount);
router.route('/pw').post(userController.findPassword);
router.route('/duplicate/account').post(userController.checkDuplicateAccount);
router.route('/duplicate/email').post(userController.checkDuplicateEmail);

export default router;
