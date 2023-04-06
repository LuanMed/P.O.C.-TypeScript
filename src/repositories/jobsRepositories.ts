import db from "../config/database.js";
import { QueryResult } from "pg";
import { Job } from "../protocols/Job.js";

async function getJobs(): Promise<QueryResult<Job>> {
    return db.query(`SELECT * FROM jobs;`)
}

async function createJobs (newJob: Job): Promise<QueryResult<Job>> {
    return db.query(`INSERT INTO jobs (title, salary, until)
    VALUES ($1, $2, $3)
    `, [newJob.title, newJob.salary, newJob.until]);
}

async function updateJobs (id: number, salary: string) {
    return db.query(`
    UPDATE jobs SET salary = $1 WHERE id = $2
    `, [salary, id]);
}

async function deleteJobs (id: number) {
    return db.query(`
    DELETE FROM jobs WHERE id = $1
    `, [id])
}

export default {
    getJobs,
    createJobs,
    updateJobs,
    deleteJobs
}