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
    password: joi.string().min(8).max(20).alphanum().required().pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])")).messages({
        'string.min': "password must have at least 8 characters please",
        'string.max': "password must be less than 21 characters please",
        'string.alphanum': "Must have alphanumeric characters please",
        'string.required': "password is required",
        "string.empty": "password is required",
        'string.pattern.base': "password must contain both letters and numbers",
    }),
    country: joi.string().required().min(5).max(20).messages({
        'string.min': "last name must have at least 5 characters please",
         'string.max': "last name must be less than 21 characters please"
         
    }),


    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please",
         'string.max': "last name must be less than 21 characters please",
         "any.required": "last name is required",
         "string.empty": "last name is required"
    }),
    country: joi.string().required(),
    lastName: joi.string().min(3).max(20).empty("").messages({
        'string.min': "last name must have at least 3 characters please",
         'string.max': "last name must be less than 21 characters please",
         "any.required": "last name is required",
         "string.empty": "last name is required"
    }),

    photo: joi.string().min(5).max(300).messages({
        'string.min': 'name must have at least 100 characters please!',
        'string.max': 'name must be less than 151 characters please! ',
 
    }),

})

export default registerSchema