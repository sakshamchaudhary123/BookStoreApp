import express from 'express';
import usercontroller  from '../controller/usercontroller.js';

const router = express.Router();

router.post('/signup', usercontroller.signup);
router.post('/login', usercontroller.login);

export default router;