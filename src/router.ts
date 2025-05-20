import { Router } from 'express';

const router = Router();

router.post('/auth/registro', (req, res) => {
    res.send('Desde el el registro');
})

export default router;