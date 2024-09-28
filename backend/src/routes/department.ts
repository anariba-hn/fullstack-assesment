import { Router } from 'express';
import DepartmentController from '../controllers/DeparmentController';
import DepartmentServiceFactory from '../factories/DepartmentServiceFactory';

const service = DepartmentServiceFactory.createDepartmentService();
const controller = new DepartmentController(service);
const departmentRouter = Router();

departmentRouter
    .route('/')
    .post((req, res, next) => controller.createDepartment(req, res, next))
    .get((req, res, next) => controller.getAllDepartments(req, res, next));

export default departmentRouter;
