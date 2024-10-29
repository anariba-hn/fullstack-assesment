import {
    Model,
    Column,
    ForeignKey,
    PrimaryKey,
    BelongsTo,
    Table,
    CreatedAt,
    UpdatedAt,
    AutoIncrement,
    Default,
    DataType
} from 'sequelize-typescript';
import { Department } from './Department';
import { Optional } from 'sequelize';

export interface IEmployeeAttributes {
    id: number;
    departmentId: number;
    firstName: string;
    lastName: string;
    hireDate: Date;
    phone: string;
    address: string;
    status?: boolean;
}

export type EmployeeDTO = Optional<IEmployeeAttributes, 'id'>;

@Table
export class Employee
    extends Model<IEmployeeAttributes, EmployeeDTO>
    implements IEmployeeAttributes
{
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

    @ForeignKey(() => Department)
    @Column
    departmentId!: number;

    @BelongsTo(() => Department)
    department!: Department;

    @Column
    firstName!: string;

    @Column
    lastName!: string;

    @Column
    hireDate!: Date;

    @Column
    phone!: string;

    @Column
    address!: string;

    @Default(true)
    @Column(DataType.BOOLEAN)
    status?: boolean;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;
}
