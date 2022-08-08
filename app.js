const express = require('express')
const app = express()
const port = process.env.PORT_ONE || 8000
app.use(express.json())


app.post('/auth',(req, res)=>{
    let reqBody = req.body
    return res.json({message:'this is the reqBody', body: reqBody})
})

app.use('/',(req, res)=> {
    return res.json({message : 'App is running'})
})


app.listen(port, ()=> {
    console.log(`Auth service is running in ${port}`)
})