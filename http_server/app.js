const express = require("express");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const PORT = 8008;

const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
    const { users } = JSON.parse(fs.readFileSync("users.json", { encoding: "utf-8" }));
    res.status(200).json({ message: "Success", users });
})

app.post('/api/users', (req, res) => {
    console.log("Create New User", req.body);
    const newUser = {  "id" : uuidv4(), ...req.body };
    const { users } = JSON.parse(fs.readFileSync("users.json", { encoding: "utf-8" }));
    console.log(users);
    users.push(newUser);
    fs.writeFileSync("users.json", JSON.stringify({ users }), { encoding: "utf-8" });
    res.status(201).json({ message: "Success" });
})

app.put('/api/users/:userId', (req, res) => {
    const { userId } = req.params;
    const newUserCont = { "id" : uuidv4(), ...req.body };
    const { users } = JSON.parse(fs.readFileSync("users.json", { encoding: "utf-8" }));
    const index = users.findIndex((el) => el.id === userId);
    if(index < 0)
        res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй`})
    else{
        users[index] = newUserCont;
    }
    fs.writeFileSync("users.json", JSON.stringify({ users }), { encoding: "utf-8" });
    console.log("Update User by ID");
    res.status(200).json({ message: "Success" });
})

app.delete('/api/users/:userId', (req, res) => {
    console.log("Delete User by ID");
    const { userId } = req.params;
    const { users } = JSON.parse(fs.readFileSync("users.json", { encoding: "utf-8" }));
    const index = users.findIndex((el) => el.id === userId);
    if(index < 0)
        res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй`})
    else{
        users.splice(index, 1);
        fs.writeFileSync("users.json", JSON.stringify({ users }), { encoding: "utf-8" });
        res.status(200).json({ message: `${userId} тай хэрэглэгч устгалаа`});
    }
})

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port`));