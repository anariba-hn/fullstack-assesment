import React from 'react';
import { formatHireDate } from '../utils/formatHireDate';
import { IEmployee } from '../types';

interface IEmployeeListProps {
    employees: IEmployee[];
    loading: boolean;
    onRemove: (id: number) => void;
}

const EmployeeList: React.FC<IEmployeeListProps> = ({
    employees,
    loading,
    onRemove
}) => {
    if (loading) return <div>Loading...</div>;

    return (
        <ul>
            {employees.map((employee) => (
                <li key={employee.id}>
                    <div className="employeeListContainer">
                        <img src="" alt="" />
                        <div className="employeeData">
                            <strong>
                                {employee.firstName} {employee.lastName} ({' '}
                                {employee.department.name} )
                            </strong>
                            <p>Hire Date</p>
                            {formatHireDate(employee.hireDate)}
                        </div>
                        <aside>
                            <button className="btnDetails">View Details</button>
                            <button
                                className="btnDelete"
                                onClick={() => onRemove(employee.id)}
                            >
                                &times;
                            </button>
                        </aside>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EmployeeList;
