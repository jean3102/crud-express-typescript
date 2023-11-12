import { Request, Response } from 'express';
import { EmployeesModel } from '../models/EmployeesModel';
import { EmployeesInterface } from '../interfaces/Employees';

export class EmployeesController extends EmployeesModel {
	getEmployees(req: Request, res: Response) {
		const result = super.callEmployees();
		res.status(200).json({
			data: result,
		});
	}

	addEmployees(req: Request, res: Response) {
		const result = super.insertEmployee(req.body);
		if (!result) return res.status(400).send('error trying to add employee');
		res.status(201).send('created');
	}

	updateEmployees(req: Request, res: Response) {
		const data: EmployeesInterface['UpdateEmployee'] = req.body;
		const result = super.updateEmployee(req.body.id, {
			firstName: data.firstName,
			lastName: data.lastName,
			salary: data.salary,
		});

		if (!result) return res.status(400).send('error trying to update employee');
		res.status(200).send('updated');
	}

	deleteEmployees(req: Request, res: Response) {
		const employeeId = req.params.id;
		if (!employeeId) res.status(400).send('Error receiving employee id');
		const result = super.setDeleteEmployee(Number(req.params.id));
		if (!result) return res.status(400).send('error trying to delete employee');
		res.status(200).send('deleted');
	}
}
