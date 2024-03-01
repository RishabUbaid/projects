
const http = require("http");
const url = require("url");
const fs = require("fs");


const server = http.createServer((req, res) => {
    console.log(req.url);
    let data = url.parse(req.url, true);
    console.log(data);
    if (data.pathname == "/user") {
        fs.readFile("./server.html", "utf-8", (error, data) => {
            if (error) {
                console.log(error);
                res.write("error occured");
                res.end();
                return;
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(data);
            res.end();
        });
        return;

    }

    if (data.pathname == "/set-data") {
        fs.readFile("./details.json" ,"utf-8", (error,d) => {
            if (error) {
                console.log(error);
                res.write("error occured");
                res.end();
                return;
            }
            let details = d ? JSON.parse(d) : [];
            details.push(data.query);
            fs.writeFile("./details.json",JSON.stringify(details),(error) =>
            {
                if (error) {
                    console.log(error);
                    res.write("error occured");
                    res.end();
                    return;
                }
            })
            res.write("data received successfully");
            res.end();
        });
        return;
    }

    if(data.pathname == "/get-data"){
        fs.readFile("./details.json" ,"utf-8", (error,d) => {
            if (error) {
                console.log(error);
                res.write("error occured");
                res.end();
                return;
            }
            res.writeHead(200,{"Content-type" : "application/json"});
            res.write(d);
            res.end();
        })
        return;
    }
    res.write("this is http server");
    res.end();
});




server.listen(3000, error => {
    if (error) {
        console.log(error);
        return;
    }
    console.log("server started successfully");
})