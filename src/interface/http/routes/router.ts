import { NextFunction, Request, Response, Router } from 'express';
import userRouter from './UserRouter';

const router = Router();

router.get('/', (req: Request, res: Response, _: NextFunction) => {
    return res.status(200).send('Welcome to API');
});

router.use('/api/v1/user', userRouter);

export default router;
