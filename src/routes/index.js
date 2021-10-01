import express from 'express';
import pingRouter from './pingRouter';

const router = express.Router();

router.get('/', (req, res) => res.send('Welcome to Market Dooly &#128516;'));
router.use('/ping', pingRouter);

export default router;
