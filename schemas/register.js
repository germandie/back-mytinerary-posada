import joi from "joi";

let registerSchema = joi.object({
    name: joi.string().required().min(3).max(20).messages({
        'string.min': "name must have at least 3 characters please",
         'string.max': "name must be less than 21 characters please",
         "any.required": "name is required",
         "string.empty": "name is required"
    }),
    mail: joi.string().required().email().min(6).max(50).messages({
        'string.email': "mail must be a valid email address",
        'string.min': "mail must have at least 6 characters please",
        'string.max': "mail must be less than 51 characters please",
        "any.required": "mail is required",
        "string.empty": "mail is required",
        //"string.minDomainSegments": "número de segmentos necesarios para el dominio"
    }),
    password: joi.string().alphanum().min(8).max(20).required().messages({
        "string.alphanum": "password must contain only alphanumeric characters",
        'string.min': "password must have at least 8 characters please",
        'string.max': "password must be less than 21 characters please",
        'string.required': "password is required",
         "string.empty": "password is required",
         
         
         
         
    }),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please",
         'string.max': "last name must be less than 21 characters please",
         "any.required": "last name is required",
         "string.empty": "last name is required"
    }),

})

export default registerSchema