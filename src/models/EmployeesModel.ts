import employeesData from '../data/employee.json';
import { generateId } from '../helpers/employees';
import { EmployeesInterface } from '../interfaces/Employees';

export class EmployeesModel {
	callEmployees() {
		return employeesData;
	}

	insertEmployee(employee: EmployeesInterface['InsertEmployee']): boolean {
		const employeeLength = employeesData.length;
		const lastId = generateId(employeesData);
		const newEmployee = { id: lastId, ...employee };
		const isInsert = employeesData.push(newEmployee);
		return isInsert > employeeLength; //check if insert already
	}

	updateEmployee(
		id: number,
		data: EmployeesInterface['UpdateEmployee']
	): boolean {
		const findIndex = employeesData.findIndex((employee) => employee.id === id);
		if (findIndex === -1) return false; // return false if the employee is not found

		// This allows for updating specific properties of the employee without modifying the rest of the employee object
		employeesData[findIndex] = { ...employeesData[findIndex], ...data };
		return true;
	}

	setDeleteEmployee(id: number): boolean {
		const findIndex = employeesData.findIndex((employee) => employee.id === id);
		if (findIndex === -1) return false; // return false if the employee is not found

		// deletes the employee with the specified `id` from the employeesData
		employeesData.splice(findIndex, 1);
		return true;
	}
}
