const express = require("express");
// const connectDatabase = require('./database')

// connectDatabase();
const app = express();
const port = 3000;

app.use(express.json());

app.get("/user", (req, res) => {
    const listuser =[
        {
            id: 1,
            name:A

        },
        {
            id: 2,
            name:B

        },

    ];
  res.send(listuser);
});

app.get("/user:id", (req, res) => {
    const userid = req.params.id;
    const user = {
        
            id: userid,
            name:'A'

    };
    res.send(user);
});

app.post("/user", (req, res) => {
    const body = req.body;
    const response = {
        status: 'success',
        user:body,
    };
  res.status(201).send(response);
});

app.put("/user:id", (req, res) => {
    const body = req.body;
    const response = {
        status: 'success',
        user:body,
    };
  res.send(response);
});

app.patch("/user:id", (req, res) => {
    const body = req.body;
    const response = {
        status: 'success',
        user:body,
    };
  res.send(response);
});

app.delete("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});