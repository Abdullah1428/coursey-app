import express from 'express'
const router = express.Router()

import { getCourseDetail } from '../controllers/courseController.js'

router.route('/course/:id').get(getCourseDetail)

export default router
