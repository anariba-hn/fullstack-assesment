import { Employee, EmployeeDTO } from '../models/Employee';
import { Department } from '../models/Department';

export interface IEmployeeService {
    createEmployee(payload: EmployeeDTO): Promise<Employee>;
    getAllEmployees(): Promise<Employee[] | null>;
    getEmployeeById(id: number): Promise<Employee | null>;
    updateEmployee(payload: EmployeeDTO): Promise<boolean>;
    deleteEmployee(id: number): Promise<boolean>;
}

class EmployeeService implements IEmployeeService {
    constructor() {}

    async createEmployee(payload: EmployeeDTO): Promise<Employee> {
        return await Employee.create(payload);
    }

    async getAllEmployees(): Promise<Employee[] | null> {
        return await Employee.findAll({
            include: [Department.name]
        });
    }

    async getEmployeeById(id: number): Promise<Employee | null> {
        return await Employee.findByPk(id, {
            include: [Department.name]
        });
    }

    async updateEmployee(payload: EmployeeDTO): Promise<boolean> {
        const [updatedEmployee] = await Employee.update(payload, {
            where: {
                id: payload.id
            }
        });

        return !!updatedEmployee;
    }

    async deleteEmployee(id: number): Promise<boolean> {
        const deletedEmployee = await Employee.destroy({
            where: {
                id
            }
        });

        return !!deletedEmployee;
    }
}

export default EmployeeService;
