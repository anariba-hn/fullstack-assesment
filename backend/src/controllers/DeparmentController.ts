import { NextFunction, Request, Response } from 'express';
import { DepartmentDTO } from '../models/Department';
import { IDepartmentService } from '../services/DepartmentService';

class DepartmentController {
    private readonly _service: IDepartmentService;

    constructor(departmentService: IDepartmentService) {
        this._service = departmentService;
    }

    async createDepartment(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const name = req.body.name;

            const dto: DepartmentDTO = {
                name
            };

            const department = await this._service.createDepartment(dto);
            res.status(201).send({
                message: 'department created successfully',
                data: department
            });
        } catch (error) {
            console.log(`an error occurs on createDepartment controller \n
            error: ${error}`);
            next(error);
        }
    }

    async getAllDepartments(
        _req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const departments = await this._service.getAllDepartments();
            res.status(200).send({
                message: 'departments fetched successfully',
                data: departments
            });
        } catch (error) {
            console.log(`an error occurs on getAllDepartments controller \n
            error: ${error}`);
            next(error);
        }
    }
}

export default DepartmentController;
