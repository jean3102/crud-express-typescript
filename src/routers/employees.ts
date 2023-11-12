import { Router } from 'express';
import { EmployeesController } from '../controllers/EmployeesController';
import { validateParams } from '../middlewares/validateParams';

const employeesRouter = Router();
const employees = new EmployeesController();

//REQUESTS
employeesRouter.get('/employees', employees.getEmployees);
employeesRouter.post('/employees', validateParams, employees.addEmployees);
employeesRouter.put('/employees', validateParams, employees.updateEmployees);
employeesRouter.delete('/employees/:id', employees.deleteEmployees);

export default employeesRouter;
