interface Employee {
	id: number;
	firstName: string;
	lastName: string;
	userName: string;
	salary: number;
}

type InsertEmployee = Omit<Employee, 'id'>;
type UpdateEmployee = Omit<Employee, 'id' | 'userName'>;

export interface EmployeesInterface {
	Employee: Employee;
	InsertEmployee: InsertEmployee;
	UpdateEmployee: UpdateEmployee;
}
