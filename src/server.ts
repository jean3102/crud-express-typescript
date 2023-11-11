import express, { Express } from 'express';
import employeesRouter from './routers/employees';

const app: Express = express();
const PORT = 3030;

//Configuration
app.use(express.json());

// Routers
app.use(employeesRouter);

app.listen(PORT, () => {
	console.log(`server listening on port: http://localhost:${PORT}`);
});
