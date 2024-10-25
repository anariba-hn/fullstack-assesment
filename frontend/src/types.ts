export interface IDepartment {
    id: number;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface IEmployee {
    id: number;
    department: IDepartment;
    firstName: string;
    lastName: string;
    hireDate: Date;
    phone: string;
    address: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export type EmployeeDTO = Omit<
    IEmployee,
    'id' | 'department' | 'createAt' | 'updateAt'
> & {
    departmentId: number;
};
