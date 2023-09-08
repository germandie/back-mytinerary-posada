import { Router } from "express";
import register from "../controllers/auth/register.js";

import isValidPass from "../middlewares/isValidPass.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";


let authRouter = Router()

// register 
authRouter.post('/register',validator(registerSchema), existUser, isValidPass, register)

export default authRouter