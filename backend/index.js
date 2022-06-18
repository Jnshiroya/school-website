const connectToMongo=require('./db');
const express = require('express');
var cors=require('cors')

connectToMongo();

const app = express()
const port = 5000
app.use(express.json())
app.use(cors())
app.use(express.json())
app.use('/api/admin',require('./routes/admin'))
app.use('/api/staff',require('./routes/staff'))
app.use('/api/student',require('./routes/student'))
app.use('/api/mail',require('./routes/mail'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})