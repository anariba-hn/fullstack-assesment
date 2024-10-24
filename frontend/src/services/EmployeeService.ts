import axios from 'axios';
import config from '../config';
import { IEmployee, EmployeeDTO } from '../types';

const API_URL = config.API_URL;

export const getAllEmployees = async (): Promise<IEmployee[]> => {
    const response = await axios.get(`${API_URL}/employee`);
    return response.data.data;
};

export const createEmployee = async (
    employee: Omit<IEmployee, 'id'>
): Promise<IEmployee> => {
    const response = await axios.post(`${API_URL}/employee`, employee);
    return response.data.data;
};

export const updateEmployee = async (
    id: number,
    employee: Partial<EmployeeDTO>
): Promise<IEmployee> => {
    const response = await axios.put(`${API_URL}/employee/${id}`, employee);
    return response.data.data;
};

export const deleteEmployee = async (id: number): Promise<void> => {
    await axios.delete(`${API_URL}/employee/${id}`);
};
