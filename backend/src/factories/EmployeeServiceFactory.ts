import { IEmployeeService } from '../services/EmployeeService';
import EmployeeService from '../services/EmployeeService';

class EmployeeServiceFactory {
    static createEmployeeService(): IEmployeeService {
        return new EmployeeService();
    }
}

export default EmployeeServiceFactory;
