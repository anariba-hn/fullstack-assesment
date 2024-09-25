import {
    Model,
    Column,
    ForeignKey,
    BelongsTo,
    Table,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript';
import { Department } from './Department';

@Table
export class Employee extends Model<Employee> {
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
    phone!: number;

    @Column
    address!: string;

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;
}
