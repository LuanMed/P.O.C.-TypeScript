import express, { json } from "express";
import jobsController from "./controllers/jobsController.js";

const app = express();
app.use(json());

app.get('/jobs', jobsController.getJobs);
app.post('/jobs', jobsController.createJobs);
app.put('/jobs/:id', jobsController.updateJobs);
app.delete('/jobs/:id', jobsController.deleteJobs);

const port = 5000;
app.listen(port, () => {
    console.log(`Server rodando na porta ${port}`);
})