import { Request, Response } from "express";
import jobsRepositories from "../repositories/jobsRepositories.js";
import { Job } from "../protocols/Job.js";
import { JobSchema } from "../schema/jobSchema.js";

async function getJobs(req: Request, res: Response) {

    try {
        const jobs = await jobsRepositories.getJobs();

        return res.send(jobs.rows)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createJobs(req: Request, res: Response) {
    const newJob = req.body as Job;

    const { error } = JobSchema.validate(newJob);
    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        await jobsRepositories.createJobs(newJob);
        return res.sendStatus(201);
    } catch (error) {
        res.status(500).send(error.message)
    }
}  

async function updateJobs(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const salary: string = req.body.salary;
    try {
        await jobsRepositories.updateJobs(id, salary);

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteJobs(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    try {
        await jobsRepositories.deleteJobs(id);

        return res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error.message)
    }
}

export default {
    getJobs,
    createJobs,
    updateJobs,
    deleteJobs
}