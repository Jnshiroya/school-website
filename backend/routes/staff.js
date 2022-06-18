const express=require('express');
const router=express.Router();
const Staff=require('../models/Staff');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//CREATE ADMIN
router.post('/createstaff', [
    body('uname').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 }),
    body('post').isLength({min:3}),
    body('class').isLength({min:3})
], async (req, res) => {
    //check validation result
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.log("startong error");
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        console.log("try error");
        let staff = await Staff.findOne({ email: req.body.email });
        if (staff) {
            return res.status(400).json({ error: "Already Staff Exit!" })
        }
        const salt = await bcrypt.genSalt(10);

        const secpass = await bcrypt.hash(req.body.password, salt);
        staff = await Staff.create({
            uname: req.body.uname,
            password: secpass,
            email: req.body.email,
            post: req.body.post,
            class: req.body.class,
            joining_year:req.body.joining_year
        })
        //   .then(staff=>res.json(staff))
        // const data = {
            
        //         id: staff._id
        // }
        // const authtoken = jwt.sign(data, 'jenish');
        
        success = true
        res.json({ success:success, id:staff._id})
    } catch (error) {
        console.log("catch");
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
        let staff = await Staff.findOne({ email });
        if (!staff) {
            return res.status(400).json({ error: "Sorry Staff Does Not Exit!" });
        }
        const passwordcompare = await bcrypt.compare(password, staff.password);
        if (!passwordcompare) {
            return res.status(400).json({ error: "Please Enter Correct Passwor!" });
        }
        const data = {
            staff: {
                id: staff._id
            }
        }
        const authtoken = jwt.sign(data, 'jenish');
        success = true;
        res.json({ success, authtoken });
    } catch (error) {
        res.status(500).send("Internal Server Error!");
    }

})


module.exports = router
