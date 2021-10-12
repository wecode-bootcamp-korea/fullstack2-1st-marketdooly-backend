import express from 'express';
import { detailController } from '../controllers';

const detailRouter = express.Router();

detailRouter.get('', detailController.getDetail);

export default detailRouter;
