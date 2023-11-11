interface Employee {
	id: number;
	name: string;
	lastName: string;
	salary: number;
	status: boolean;
}

type InsertEmployee = Omit<Employee, 'id'>;

export interface EmployeesInterface {
	Employee: Employee;
	InsertEmployee: InsertEmployee;
}
