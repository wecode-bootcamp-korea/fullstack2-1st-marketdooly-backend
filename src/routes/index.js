import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import orderRouter from './orderRouter';
import reviewRouter from './reviewRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.get('/main', mainRouter);
router.use('/cart', cartRouter);
router.use('/order', orderRouter);
router.use('/products/:id/reviews', reviewRouter);

export default router;
