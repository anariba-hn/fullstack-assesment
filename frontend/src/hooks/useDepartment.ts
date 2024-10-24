import { useState, useEffect } from 'react';
import { IDepartment } from '../types';
import { getAllDepartments } from '../services/DepartmentService';

const useDepartments = () => {
    const [departments, setDepartments] = useState<IDepartment[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const data = await getAllDepartments();
                setDepartments(data);
            } catch (error) {
                const err = error as Error;
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchDepartments();
    }, []);

    return { departments, loading, error };
};

export default useDepartments;
