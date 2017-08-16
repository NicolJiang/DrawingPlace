import express from 'express'
import {
    HomeController,
    AuthController
} from './controllers'

const router = express.Router()

router.use('/home', HomeController)
router.use('/auth', AuthController)

export default router