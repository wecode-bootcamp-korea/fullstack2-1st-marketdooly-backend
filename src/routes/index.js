import express from 'express';
import mainRouter from './mainRouter';
import pingRouter from './pingRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);
router.get('/main', mainRouter);

export default router;
