const express = require('express')
const router = express.Router()
const Model = require('../models')
const sequelize = require("sequelize");
const matauang = require('../helper/formatuang')
const nodemailer = require('nodemailer')


router.get('/', function(req,res) {
  Model.Absence.findAll({
    attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                  ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
    include: [Model.Employee, Model.Rule, Model.JobPosition]
  })
  .then(dataAbsence => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      Model.Rule.findAll()
      .then(dataRule => {
        Model.JobPosition.findAll()
        .then(dataJobPosition => {
          // console.log(dataAbsence);
          // res.send(dataAbsence)
          res.render('absence/absence', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: null})
        })
      })
    })
  })
})

router.post('/',(req,res)=>{
  Model.Absence.findOne({
    where : {
      date: req.body.date,
      EmployeeId: req.body.EmployeeId
    }
  })
  .then(data => {
    if(data) {
      Model.Absence.findAll({
        attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                      ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
        include: [Model.Employee, Model.Rule, Model.JobPosition]
      })
      .then(dataAbsence => {
        Model.Employee.findAll()
        .then(dataEmployee => {
          Model.Rule.findAll()
          .then(dataRule => {
            Model.JobPosition.findAll()
            .then(dataJobPosition => {
              // console.log(dataAbsence);
              // res.send(dataAbsence)
              // res.redirect('/absence')
              res.render('absence/absence', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: 'ID SUDAH DI GUNAKAN'})
            })
          })
        })
      })
    } else {
      Model.Absence.create({
        date: req.body.date,
        checkin: req.body.checkin,
        checkout: req.body.checkout,
        EmployeeId: req.body.EmployeeId,
        RuleId: req.body.RuleId,
        JobPositionId: req.body.JobPositionId
      })
      .then(dataAbsence=>{
        res.redirect('/absence')
        // res.send(dataAbsence)
      })
      .catch(err=>{
        res.send(err)
      })
    }
  })
})

router.get('/delete/:id', function(req,res) {
  Model.Absence.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.redirect('/absence')
  })
  .catch(err => {
    res.send(err)
  })
})


router.get('/edit/:id', function(req,res) {
  Model.Absence.findAll({
    attributes: [['id','id'],['date','date'],['checkin','checkin'],['checkout','checkout'],['EmployeeId','EmployeeId'],
                  ['RuleId','RuleId'],['JobPositionId','JobPositionId']],
    include: [Model.Employee, Model.Rule, Model.JobPosition]
  })
  .then(dataAbsence => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      Model.Rule.findAll()
      .then(dataRule => {
        Model.JobPosition.findAll()
        .then(dataJobPosition => {
          // console.log(dataAbsence);
          // res.send(dataAbsence)
          res.render('absence/edit', {dataEmployee: dataEmployee, dataAbsence:dataAbsence,dataRule: dataRule,dataJobPosition:dataJobPosition, dataError: null})
        })
      })
    })
  })
})

router.get('/report', function(req,res) {
  let query = `SELECT
     A.bulan_tahun,
     A.id,
     A.name,
     A.deduction,
     "JobPositions"."salary" as salary,
     ("JobPositions"."salary" - A.deduction) as thp
  FROM
  (SELECT
    "Employees"."id" as id,
    max("Employees"."JobPositionId") as jobId,
    max("Employees"."first_name") as name,
    SUM("Rules"."deduction") as deduction,
    substring("Absences"."date",1,7) as bulan_tahun
  FROM "Employees", "Absences"
  LEFT JOIN "Rules" ON "Absences"."RuleId" = "Rules"."id"
  WHERE "Employees"."id" = "Absences"."EmployeeId"
  GROUP BY "Employees"."id", bulan_tahun
  ORDER BY bulan_tahun, "Employees"."id") AS A
  LEFT JOIN "JobPositions" ON "JobPositions"."id" = A.jobId`;
  Model.sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
  .then(dataReport => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      // res.send(dataReport)
      res.render('absence/report', {dataReport:dataReport, dataEmployee:dataEmployee, matauang:matauang})
    })
  })
})

router.post('/report', function(req,res) {
  let query = `SELECT
     A.bulan_tahun,
     A.id,
     A.name,
     A.deduction,
     "JobPositions"."salary" as salary,
     ("JobPositions"."salary" - A.deduction) as thp
  FROM
  (SELECT
    "Employees"."id" as id,
    max("Employees"."JobPositionId") as jobId,
    max("Employees"."first_name") as name,
    SUM("Rules"."deduction") as deduction,
    substring("Absences"."date",1,7) as bulan_tahun
  FROM "Employees", "Absences"
  LEFT JOIN "Rules" ON "Absences"."RuleId" = "Rules"."id"
  WHERE "Employees"."id" = "Absences"."EmployeeId"
  AND "Employees"."id" = '${req.body.EmployeeId}'
  GROUP BY "Employees"."id", bulan_tahun
  ORDER BY bulan_tahun, "Employees"."id") AS A
  LEFT JOIN "JobPositions" ON "JobPositions"."id" = A.jobId`;
  Model.sequelize.query(query, {type: sequelize.QueryTypes.SELECT})
  .then((dataReport2) => {
    Model.Employee.findAll()
    .then(dataEmployee => {
      console.log('MASUK ENGGA', query);
      // EMAIL

      var smtpTransport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: "harynugrahaputra@gmail.com",
        pass: "putra2910"
    }
 });

 // setup e-mail data with unicode symbols
 var mailOptions = {
    from: "harynugrahaputra@gmail.com", // sender address
    to: "harynugrahaputra@gmail.com", // list of receivers
    subject: "HALLO", // Subject line
    text: "Hello world ", // plaintext body
    html: "HALO HARI KAMU DI PECAT!!!" // html body
 }

 // send mail with defined transport object
 smtpTransport.sendMail(mailOptions, function(error, message){
    if(error){
        console.log(error);
    } else{
        console.log("Message sent: " + message.response);
    }
   })

      //
      res.render('absence/resultbyid', {dataReportId: dataReport2, dataEmployee:dataEmployee ,matauang:matauang})
      // res.redirect('/absence/report')
    })
  })
})

module.exports = router
