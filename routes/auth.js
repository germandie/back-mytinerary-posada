import { Router } from "express";
import register from "../controllers/auth/register.js";

import validator from "../middlewares/validator.js";
import registerSchema from "../schemas/register.js";


let authRouter = Router()

// register 
authRouter.post('/register',validator(registerSchema), register)

export default authRouter