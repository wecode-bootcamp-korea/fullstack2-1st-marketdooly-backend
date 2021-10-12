import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import detailRouter from './detailRouter'
import reviewRouter from './reviewRouter';


const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
<<<<<<< HEAD
<<<<<<< HEAD
router.get('/main', mainRouter);
=======
router.use('/cart', cartRouter);
router.use('/products', productRouter);
router.use('/products/:id/reviews', reviewRouter);

>>>>>>> master
=======
router.use('/cart', cartRouter);
router.use('/products/:id/reviews', reviewRouter);

>>>>>>> master

export default router;
