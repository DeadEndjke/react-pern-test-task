import { Router } from "express";
import { register, login, getMe } from '../controllers/auth.js'
import { checkAuth } from "../utils/checkAuth.js";
const router = new Router();



//reg
router.post('/register', register)

//log
router.post('/login', login)

//getme

router.get('/getme', checkAuth, getMe)

export default router