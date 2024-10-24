import { useState, useEffect } from 'react';
import { IEmployee } from '../types';
import { getAllEmployees } from '../services/EmployeeService';

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
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    return { employees, loading, error };
};

export default useEmployees;
