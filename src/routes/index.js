import express from 'express';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.use('/cart', cartRouter);

export default router;
