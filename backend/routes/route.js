import express from 'express';
import { fileUpload } from '../controller/control.js';

const router = express.Router();

router.post('/uploadData', fileUpload )


export default router;