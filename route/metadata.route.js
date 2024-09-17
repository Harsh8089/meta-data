import { Router } from "express"
import {
    getMetaData,
    handleMetaData
} from '../controller/metadata.controller.js'

const router = Router()

router.route('/create-metadata').post(handleMetaData)
router.route('/get-metadata.json').get(getMetaData)

export default router
