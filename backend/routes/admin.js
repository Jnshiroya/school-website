const express=require('express');
const router=express.Router();
const Admin=require('../models/Admin');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

//CREATE ADMIN
router.post('/createadmin', [
    body('uname').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    //check validation result
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        let admin = await Admin.findOne({ email: req.body.email });
        if (admin) {
            return res.status(400).json({ error: "Already Admin Exit!" })
        }
        const salt = await bcrypt.genSalt(10);

        secpass = await bcrypt.hash(req.body.password, salt);
        admin = await Admin.create({
            uname: req.body.uname,
            password: secpass,
            email: req.body.email,
            

        })
        //   .then(admin=>res.json(admin))
        // const data = {
            
        //         id: admin._id
        // }
        // const authtoken = jwt.sign(data, 'jenish');
        
        success = true
        res.json({ success:success, id:admin._id})
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
        let admin = await Admin.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: "Sorry Admin Does Not Exit!" });
        }
        const passwordcompare = await bcrypt.compare(password, admin.password);
        if (!passwordcompare) {
            return res.status(400).json({ error: "Please Enter Correct Passwor!" });
        }
        const data = {
            admin: {
                id: admin._id
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
