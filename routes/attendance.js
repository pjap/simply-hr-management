const express = require('express')
const router = express.Router()
const Model = require('../models')


router.get('/', function(req,res) {
  Model.Attendance.findAll({
    // include: [Model.Employee, Model.JobPosition, Model.Rule]
  })
  .then(dataAttendance => {
    // res.render('attendance/attendance', {dataAttendance:dataAttendance})
    res.send(dataAttendance)
  })
})

router.post('/add',(req,res)=>{
  Model.Attendance.create({
    date: req.body.date,
    checkin: req.body.checkin,
    checkout: req.body.checkout,
    EmployeeId: req.body.EmployeeId,
    RuleId: req.body.RuleId,
    JobPositionId: req.body.JobPositionId
  })
  .then(dataAttendance=>{
    res.redirect('/attendance')
    // res.send(dataAttendance)
  })
  .catch(err=>{
    res.send(err)
  })
})



module.exports = router
