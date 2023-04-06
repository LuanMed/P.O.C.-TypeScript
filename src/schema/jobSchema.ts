import Joi from "joi";

export const JobSchema  = Joi.object({
    title: Joi.string().required(),
    salary: Joi.number().required(),
    until: Joi.date() || Joi.string(),
})