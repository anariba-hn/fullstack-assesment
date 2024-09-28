import { Router } from 'express';
import employeeRouter from './employee';
import departmentRouter from './department';

const router = Router();

router.use('/employee', employeeRouter);
router.use('/department', departmentRouter);

export default router;
