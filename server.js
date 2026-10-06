const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    let file = "index.html";

    if (req.url === "/login.html") {
        file = "login.html";
    }

    if (req.url === "/register.html") {
        file = "register.html";
    }

    fs.readFile(file, (err, data) => {

        if (err) {
            res.writeHead(404, {
                "Content-Type": "text/plain"
            });

            res.end("Page not found");
            return;
        }

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(data);

    });

});

server.listen(3000, () => {

    console.log("Website running at http://localhost:3000");

});
    // Chart update

    