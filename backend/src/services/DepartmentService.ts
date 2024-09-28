import { Department, DepartmentDTO } from '../models/Department';

export interface IDepartmentService {
    getAllDepartments(): Promise<Department[]>;
    createDepartment(payload: DepartmentDTO): Promise<Department>;
}

class DepartmentService implements IDepartmentService {
    constructor() {}

    async getAllDepartments(): Promise<Department[]> {
        return await Department.findAll();
    }

    async createDepartment(payload: DepartmentDTO): Promise<Department> {
        return await Department.create(payload);
    }
}

export default DepartmentService;
