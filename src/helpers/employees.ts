import { EmployeesInterface } from '../interfaces/Employees';

const generateId = (employees: EmployeesInterface['Employee'][]): number => {
	const id = employees.map((employee) => employee.id);
	const maxId = Math.max(...id);
	return maxId + 1;
};

const isObjectNotEmpty = (obj: {}): boolean => {
	return Object.keys(obj).length > 0;
};

export { generateId, isObjectNotEmpty };
