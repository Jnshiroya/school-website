const express=require('express');
const router=express.Router();
const Student=require('../models/Student');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//CREATE ADMIN
router.post('/createstudent', [
    body('uname').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('rollno').isLength({max:3}),
    body('class').isLength({min:3}),
    body('admission_year').isLength({max:4})
], async (req, res) => {
    //check validation result
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let student = await Student.findOne({ email: req.body.email });
        let samern= await Student.findOne({ class: req.body.class,rollno: req.body.rollno,admission_year:req.body.addmission_year });
        if (student) {
            return res.status(400).json({ error: "Already Student Exit!" })
        }
        if (samern) {
            return res.status(400).json({ error: "Already This Roll No Exit! In This Class!!" })
        }
        
        const salt = await bcrypt.genSalt(10);

        secpass = await bcrypt.hash(req.body.password, salt);
        student = await Student.create({
            uname: req.body.uname,
            password: secpass,
            email: req.body.email,
            rollno: req.body.rollno,
            class: req.body.class,
            addmission_year:req.body.addmission_year
            

        })
        //   .then(student=>res.json(student))
        // const data = {
            
        //         id: student._id
        // }
        // const authtoken = jwt.sign(data, 'jenish');
        
        success = true
        res.json({ success:success, id:student._id})
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error!");
    }

})

//LOGIN AS ADMIN
router.post('/login', [
    body('email').isEmail(),
    body('password').exists()
], async (req, res) => {
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let student = await Student.findOne({ email });
        if (!student) {
            return res.status(400).json({ error: "Sorry Student Does Not Exit!" });
        }
        const passwordcompare = await bcrypt.compare(password, student.password);
        if (!passwordcompare) {
            return res.status(400).json({ error: "Please Enter Correct Passwor!" });
        }
        const data = {
            student: {
                id: student._id
            }
        }
        const authtoken = jwt.sign(data, 'jenish');
        success = true;
        res.json({ success:success, authtoken:authtoken,rollno:student.rollno });
    } catch (error) {
        res.status(500).send("Internal Server Error!");
    }

})


module.exports = router
