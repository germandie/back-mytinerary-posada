import express from'express';
import useRouter from './users.js'

let router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.use('/users',useRouter)

export default router
