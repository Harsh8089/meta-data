import { Router } from "express"
import {
    getMetaData,
    handleMetaData
} from '../controller/metadata.controller.js'

const router = Router()

router.route('/create-metadata').post(handleMetaData)
router.route('/get-metadata.json').post(getMetaData)

export default router