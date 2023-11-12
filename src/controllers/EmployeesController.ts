import { Request, Response } from 'express';
import { EmployeesModel } from '../models/EmployeesModel';

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
		res.status(200).send('created');
	}

	updateEmployees(req: Request, res: Response) {
		res.status(200).send('updated');
	}

	deleteEmployees(req: Request, res: Response) {
		const employeeId = req.params.id;
		if (!employeeId) res.status(400).send('Error receiving employee id');
		super.setDeleteEmployee(Number(req.params.id));
		res.status(200).send('deleted');
	}
}
