require("dotenv").config();

const express = require('express');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);
app.get("/about",(req,res)=>{
    res.send("About Page");
    }
);

app.get("/contact",(req,res)=>{
    res.send("<input type='text' placeholder='Enter your name'><button>Submit</button>");
});


app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);
