import express from 'express';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import detailRouter from './detailRouter'
import reviewRouter from './reviewRouter';


const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.use('/cart', cartRouter);
router.use('/products/:id', detailRouter);
router.use('/products/:id/reviews', reviewRouter);


export default router;
