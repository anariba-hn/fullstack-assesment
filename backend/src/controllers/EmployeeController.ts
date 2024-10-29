import { NextFunction, Request, Response } from 'express';
import { EmployeeDTO } from '../models/Employee';
import { IEmployeeService } from '../services/EmployeeService';

class EmployeeController {
    private readonly _service: IEmployeeService;

    constructor(employeeService: IEmployeeService) {
        this._service = employeeService;
    }

    async createEmployee(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const {
                firstName,
                lastName,
                phone,
                hireDate,
                address,
                departmentId
            } = req.body;

            const dto: EmployeeDTO = {
                firstName,
                lastName,
                phone,
                hireDate,
                address,
                departmentId
            };

            const employee = await this._service.createEmployee(dto);
            res.status(201).send({
                message: 'employee created successfully',
                data: employee
            });
        } catch (error) {
            console.log(`an error occurs on createEmployee controller \n
            error: ${error}`);
            next(error);
        }
    }

    async getAllEmployees(
        _req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const employees = await this._service.getAllEmployees();
            res.status(200).send({
                message: 'employees fetched successfully',
                data: employees
            });
        } catch (error) {
            console.log(`an error occurs on getEmployees controller \n
            error: ${error}`);
            next(error);
        }
    }

    async getEmployeeDetail(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            const employee = await this._service.getEmployeeById(id);
            res.status(200).send({
                message: 'Employee details retrieved',
                data: employee
            });
        } catch (error) {
            console.log(`an error occurs on getEmployeeDetail controller \n
            error: ${error}`);
            next(error);
        }
    }

    async updateEmployee(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const { id, departmentId, status } = req.body;

            const dto: Partial<EmployeeDTO> = {
                id,
                departmentId,
                status
            };

            const resp = await this._service.updateEmployee(dto);

            if (resp) {
                res.sendStatus(204);
            } else {
                res.status(404).send({ message: 'employee not found' });
            }
        } catch (error) {
            console.log(`an error occurs on updateEmployee controller \n
            error: ${error}`);
            next(error);
        }
    }

    async deleteEmployee(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const id = parseInt(req.params.id);
            await this._service.deleteEmployee(id);
            res.status(202).send({ message: 'employee deleted successfully' });
        } catch (error) {
            console.log(`an error occurs on deleteEmployee controller \n
            error: ${error}`);
            next(error);
        }
    }
}

export default EmployeeController;
