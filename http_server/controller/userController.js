const { v4: uuidv4} = require("uuid");

const { readFile, writeFile } = require("../utils/fileHandler");

// const readFile = () => {
//     return JSON.parse(fs.readFileSync("users.json", { encoding: "utf-8" }));
// }

// const writeFile = ( users ) => {
//     return fs.writeFileSync("users.json", JSON.stringify({ users }), { encoding: "utf-8" })
// }

const getAllUser = (req, res) => {
    const users = readFile("users.json");
    res.status(200).json({ message: "Success", users });
}

const getUserByID = (req, res) => {
    const { userId } = req.params;
    const users = readFile("users.json");
    const index = users.findIndex((user) => user.id === userId);
    if(index === -1)
        res.status(400).json({ message: `${userId} -тай хэрэглэгч олдсонгүй.`});
    else
        res.status(200).json({ message: "Success", user: users[index]});
}

const createUser = (req, res) => {
    console.log("Create New User", req.body);
    const newUser = {  "id" : uuidv4(), ...req.body };
    const users = readFile("users.json");
    console.log(users);
    users.push(newUser);
    writeFile("users.json", users);
    res.status(201).json({ message: "Success" });
}

const updateUserByID = (req, res) => {
    const { userId } = req.params;
    const users = readFile("users.json");
    const index = users.findIndex((user) => user.id === userId);
    if(index < 0)
        res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй`})
    else{
        users[index] = { ...users[index], ...req.body };
    }
    writeFile("users.json", users);
    console.log("Update User by ID");
    res.status(200).json({ message: "Success" });
}

const deleteUserByID = (req, res) => {
    console.log("Delete User by ID");
    const { userId } = req.params;
    const users = readFile("users.json");
    const index = users.findIndex((el) => el.id === userId);
    if(index < 0)
        res.status(400).json({ message: `${userId} тай хэрэглэгч олдсонгүй`})
    else{
        users.splice(index, 1);
        writeFile("users.json", users);
        res.status(200).json({ message: `${userId} тай хэрэглэгч устгалаа`});
    }
}

module.exports = {
    getAllUser,
    getUserByID,
    createUser,
    updateUserByID,
    deleteUserByID
};