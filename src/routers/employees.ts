import { Router } from 'express';
import { EmployeesController } from '../controllers/EmployeesController';

const employeesRouter = Router();
const employees = new EmployeesController();
//REQUESTS
employeesRouter.get('/employees', employees.getEmployees);
employeesRouter.post('/employees', employees.addEmployees);
employeesRouter.put('/employees', employees.updateEmployees);
employeesRouter.delete('/employees/:id', employees.deleteEmployees);

export default employeesRouter;
