import axios from 'axios';
import config from '../config';
import { IDepartment } from '../types';

const API_URL = config.API_URL;

export const getAllDepartments = async (): Promise<IDepartment[]> => {
    const response = await axios.get(`${API_URL}/department`);
    return response.data.data;
};
