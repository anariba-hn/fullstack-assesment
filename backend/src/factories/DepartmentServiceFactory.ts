import DepartmentService from '../services/DepartmentService';
import { IDepartmentService } from '../services/DepartmentService';

class DepartmentServiceFactory {
    static createDepartmentService(): IDepartmentService {
        return new DepartmentService();
    }
}

export default DepartmentServiceFactory;
