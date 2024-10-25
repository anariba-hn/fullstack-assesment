import { useState, useEffect } from 'react';
import { EmployeeDTO, IEmployee } from '../types';
import {
    getAllEmployees,
    createEmployee,
    deleteEmployee
} from '../services/EmployeeService';

const useEmployees = () => {
    const [employees, setEmployees] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const data = await getAllEmployees();
                setEmployees(data);
            } catch (error) {
                const err = error as Error;
                console.log('Failed to fetch employees:', err.message);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    const addEmployee = async (employeeDto: EmployeeDTO) => {
        try {
            const newEmployee = await createEmployee(employeeDto);
            setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
        } catch (error) {
            const err = error as Error;
            console.log('Failed to create employee:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const removeEmployee = async (id: number) => {
        try {
            await deleteEmployee(id);
            const filteredEmployees = employees.filter((e) => e.id != id);
            setEmployees(filteredEmployees);
        } catch (error) {
            const err = error as Error;
            console.log('Failed to remove employee:', err.message);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { employees, loading, error, addEmployee, removeEmployee };
};

export default useEmployees;
