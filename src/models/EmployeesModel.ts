import employeesData from '../data/employee.json';
import { generateId } from '../helpers/employees';
import { EmployeesInterface } from '../interfaces/Employees';

export class EmployeesModel {
	callEmployees() {
		return employeesData;
	}

	insertEmployee(employee: EmployeesInterface['InsertEmployee']): boolean {
		const lastId = generateId(employeesData);
		const newEmployee = { id: lastId, ...employee, status: true };
		employeesData.push(newEmployee);
		return true;
	}

	setDeleteEmployee(id: number): boolean {
		const employees = employeesData.findIndex((employee) => employee.id === id);
		employeesData.splice(employees, 1);
		return true;
	}
}
