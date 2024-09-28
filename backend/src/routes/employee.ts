import { Router } from 'express';
import EmployeeController from '../controllers/EmployeeController';
import EmployeeServiceFactory from '../factories/EmployeeServiceFactory';

const service = EmployeeServiceFactory.createEmployeeService();
const controller = new EmployeeController(service);
const employeeRouter = Router();

employeeRouter
    .route('/')
    .get((req, res, next) => controller.getAllEmployees(req, res, next))
    .put((req, res, next) => controller.updateEmployee(req, res, next))
    .post((req, res, next) => controller.createEmployee(req, res, next));

employeeRouter
    .route('/:id')
    .get((req, res, next) => controller.getEmployeeDetail(req, res, next))
    .delete((req, res, next) => controller.deleteEmployee(req, res, next));

export default employeeRouter;
