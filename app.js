const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // for serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // set the template engine
app.set('views', path.join(__dirname, 'views'))  // set the views directory





// ENDPOINTS
app.get('/', (req,res)=>{
    const con = 'This is the content of the pug file';
    const params = {'title': 'I want to play Pubg', 'content': con};
    res.status(200).render('index.pug',params);
})

app.post('/', (req,res)=>{

 let name =req.body.name
    email =req.body.email
    phone =req.body.phone
    address =req.body.address
    let outputToWrite=`The name of the client is ${name}, email is ${email}, phone is ${phone}, and address is ${address}`
    fs.writeFileSync('output.txt',outputToWrite)
    const params = {'message': 'Your form has been submitted'};
    res.status(200).render('index.pug',params);
})

// START THE SERVER

app.listen(port,()=>{
    console.log(`Express app is successfully run on port ${(port)}`)
});
