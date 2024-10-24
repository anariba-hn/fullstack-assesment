export interface IDepartment {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IEmployee {
    id: number;
    departmentId: number;
    firstName: string;
    lastName: string;
    hireDate: Date;
    phone: string;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type EmployeeDTO = Omit<IEmployee, 'id' | 'createdAt' | 'updatedAt'>;