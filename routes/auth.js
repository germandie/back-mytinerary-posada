import { Router } from "express";

import register from "../controllers/auth/register.js";
import signin from "../controllers/auth/signin.js";

import isValidToken from "../middlewares/isValidToken.js";
import isPassOk from "../middlewares/isPassOk.js";
import notExistsUser from "../middlewares/notExistsUser.js";
import isValidPass from "../middlewares/isValidPass.js";
import existUser from "../middlewares/existUser.js";
import validator from "../middlewares/validator.js";

import registerSchema from "../schemas/register.js";
import signinSchema from "../schemas/signin.js";


let authRouter = Router();

// register
authRouter.post(
  "/register",
  validator(registerSchema),
  existUser,
  isValidPass,
  register
);

authRouter.post(
  "/signin",
  validator(signinSchema),
  notExistsUser,
  isPassOk,
  isValidToken,
  signin
);

export default authRouter;
