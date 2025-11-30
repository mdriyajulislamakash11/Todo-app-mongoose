const  express  = require("express");
const mongoose = require("mongoose");

// express app initialization
const app = express();
app.use(express.json())

// database connection with mongoose
mongoose.connect(`mongodb://localhost/todos`)
.then(() => {
    console.log("successfully database connecting");
})
.catch((err) => {
    console.log("database error: ", err.message);
});


// application route
app.use('/todo', todoHandler);



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

