import express from 'express';
import read from '../controllers/activities/read.js';

let router = express.Router();

//READ
router.get('/', read)

export default router