const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req);
    // res.statusCode = 200;
    // res.setHeader("Content-Type", "text/html");
    // res.end("<h1>Hello world</h1>");
    if(req.method === "GET")
    res.end("<h1>GET huselt ilgeesen bn<h1/>");
}) 

server.listen(8008, () => {
    console.log("Working");
});

const app = express();

app.get("/", (trigger,response));