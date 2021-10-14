import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';
import cartRouter from './cartRouter';
import productRouter from './productRouter';
import userRouter from './userRouter';
import orderRouter from './orderRouter';
import tokenController from '../../middlewares/tokenController';

const router = express.Router();

router.get('/cookie', (req, res) => {
  try {
    tokenController.responseWithIssuedToken(
      {
        id: 1,
        account: 'onecookie',
        email: 'dooly@wecode.com',
        name: '이원국',
      },
      200,
      res
    );
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
router.get('/verifying', tokenController.verifyToken, (req, res) => {
  res.status(200).json({
    message: req.headers.payload,
  });
});
router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.use('/main', mainRouter);
router.use('/cart', cartRouter);
router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/order', orderRouter);

export default router;
