import express from 'express';
const router=express.Router();
import {EmployeeController} from '../controllers/EmployeeController.js';
router.get('/',EmployeeController.getAllDoc);
router.post('/newEmployee',EmployeeController.createDoc);
router.post('/login',EmployeeController.login);
router.post('/update/:id',EmployeeController.updateDoc);
router.get('/edit/:id',EmployeeController.editDoc);
router.post('/delete/:id',EmployeeController.deleteDoc);
export {router}; 