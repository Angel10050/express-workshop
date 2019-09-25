const express = require( 'express' )
const app = express()
const fs = require('fs')
const formidable = require('express-formidable')

app.use(express.static("public"));

app.use(formidable());

app.post("/create-post", function(req, res) {

    const post = req.fields

    fs.readFile(__dirname + "/data/posts.json", function(error, file) {
        const parsedFile = JSON.parse(file);
        
        const byDate = Date.now()

        parsedFile[byDate] = post.blogpost

       const dateLikeKey = JSON.stringify(parsedFile)
       fs.writeFile('./data/posts.json',dateLikeKey ,function(error){}) 
        
      });

});

    app.get('/get-posts', function(req ,res){
    res.sendFile(__dirname + "/data/posts.json")
})

app.listen(3331, () => {
    console.log('Server is listening on port 3000, Ready to accept request!')
})