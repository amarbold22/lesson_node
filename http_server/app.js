const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", (req, res) => 
    res.send("Hello FROM Express Server")
)

app.get("/user/:userId", (req, res) => {
    const { userId } = req.params;
    const findUser = users.filter((user) => user.id === Number(userId));
    if(findUser.length === 0)
        res.status(404).json({ message: "Not Found" });
    else
        res.status(200).json({ message: "User is found", user: findUser[0] });
})

app.get("/users", () => {
    const { users } = JSON.parse(fs.readFileSync("data.json", { encoding: "utf-8" }));
    res.status(200).json({ message: "All user", users });
})

app.post("/users", (req, res) => {
    const body = req.body;
    const newUser = { id: users.length + 1, username: body.username, password: body.password };
    users.push(newUser);
    res.status(200).json({ message: "All user", users});
})

app.listen(8008, () => console.log("Server is listening at 8008 port"));