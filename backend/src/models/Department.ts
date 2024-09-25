import {
    Model,
    Column,
    HasMany,
    Table,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript';
import { Employee } from './Employee';

@Table
export class Department extends Model<Department> {
    @Column
    name!: string;

    @HasMany(() => Employee)
    employees!: Employee[];

    @CreatedAt
    @Column
    createdAt?: Date;

    @UpdatedAt
    @Column
    updatedAt?: Date;
}
