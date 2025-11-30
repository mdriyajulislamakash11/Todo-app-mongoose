const  express  = require("express");
const mongoose = require("mongoose");

// express app initialization
const app = express();
app.use(express.json())

// database connection with mongoose



// application route



// error function handler
function errorHandler(error, req, res, next) {
    if(res.headersSent){
        return (error)
    }
    res.status(500).json({error: error})
}

app.listen(3000, () => {
    console.log("app listening at the port 300");
})

