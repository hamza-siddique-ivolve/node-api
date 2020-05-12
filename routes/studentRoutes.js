const { Router } = require('express');

const studentController = require('../controller/studentController');

const studentRoutes = Router()
    .post('/create',studentController.createstudent)
    .get('/list',studentController.getAllStudent)
    .get('/list/:studentId',studentController.getFindStudent)
    .delete('/list/:studentId',studentController.getDeleteStudent)
    .post('/list/:studentId',studentController.getUpdateStudent);




module.exports = studentRoutes;