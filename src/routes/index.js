import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';
import orderRouter from './orderRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.use('/main', mainRouter);
router.use('/cart', cartRouter);
router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/order', orderRouter);

export default router;
