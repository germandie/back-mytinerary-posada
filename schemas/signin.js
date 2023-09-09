import joi from "joi";

let signinSchema = joi.object({
    
    mail: joi.string().required().email().min(6).max(50).messages({
        'string.email': "mail must be a valid email address",
        'string.min': "mail must have at least 6 characters please",
        'string.max': "mail must be less than 51 characters please",
        "any.required": "mail is required",
        "string.empty": "mail is required",
        //"string.minDomainSegments": "número de segmentos necesarios para el dominio"
    }),
    password: joi.string().min(8).max(20).required().pattern(new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])")).messages({
        'string.min': "password must have at least 8 characters please",
        'string.max': "password must be less than 21 characters please",
        'string.required': "password is required",
        "string.empty": "password is required",
        'string.pattern.base': "password must contain both letters and numbers",
    }),
   
    

})

export default signinSchema