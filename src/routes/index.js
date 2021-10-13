import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.get('/main', mainRouter);
router.use('/cart', cartRouter);
router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;