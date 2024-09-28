import {
    Model,
    Column,
    HasMany,
    Table,
    CreatedAt,
    UpdatedAt,
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript';
import { Employee } from './Employee';
import { Optional } from 'sequelize';

export interface IDepartmentAttributes {
    name: string;
}

export type DepartmentDTO = Optional<IDepartmentAttributes, 'name'>;

@Table
export class Department
    extends Model<IDepartmentAttributes, DepartmentDTO>
    implements IDepartmentAttributes
{
    @PrimaryKey
    @AutoIncrement
    @Column
    id!: number;

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
