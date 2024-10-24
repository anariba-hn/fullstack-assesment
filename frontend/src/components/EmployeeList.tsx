import React from 'react';
import useEmployees from '../hooks/useEmployees';
import { formatHireDate } from '../utils/formatHireDate';

const EmployeeList: React.FC = () => {
    const { employees, loading, error } = useEmployees();

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

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
                            <button className="btnDelete">x</button>
                        </aside>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EmployeeList;
