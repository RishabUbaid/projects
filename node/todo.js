const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  let data = url.parse(req.url, true);
  //   console.log(data);

  if (data.pathname == "/") {
    fs.readFile("./todo.html", "utf-8", (error, data) => {
      if (error) {
        console.log(error);
        res.write("Error occured");
        res.end();
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
    return;
  }

  if (data.pathname == "/set-todo") {
    fs.readFile("./todos.json", "utf-8", (error, d) => {
      if(error) {
        console.log(error);
        res.write("Error occured");
        res.end();
        return;
      }
      let todos = d ? JSON.parse(d) : [];
      todos.push(data.query.todo);
      fs.writeFile("./todos.json", JSON.stringify(todos), (error) => {
        if(error) {
          console.log(error);
          res.write("Error occured");
          res.end();
          return;
        }
        res.write("Todo added successfully");
      res.end();
      })
    })
    return;
  }

  if(data.pathname == "/get-todo") {
    fs.readFile("./todos.json", "utf-8", (error, d) => {
      if(error) {
        console.log(error);
        res.write("Error occured");
        res.end();
        return;
      }
      res.writeHead(200,{ "Content-Type": "application/json" });
      res.write(d);
      res.end();
    })
    return;
  }

  if(data.pathname == "/edit-todo") {
    let { id, newTodo } = data.query;
    fs.readFile("./todos.json", "utf-8", (error, d) => {
      if(error) {
        console.log(error);
        res.write("Error occured");
        res.end();
        return;
      }
      let todos = d ? JSON.parse(d) : [];
      todos = todos.map((item, index) => id == index ? newTodo : item);
      fs.writeFile("./todos.json", JSON.stringify(todos),(error) => {
        if(error) {
          console.log(error);
          res.write("Error occured");
          res.end();
          return;
        }
        res.write("Todo edited successfully!");
        res.end();
      })
    })
    return;
  }

  if(data.pathname == "/del-todo") {
    let { id } = data.query;
    fs.readFile("./todos.json", "utf-8", (error, d) => {
      if(error) {
        console.log(error);
        res.write("Error occured");
        res.end();
        return;
      }
      let todos = d ? JSON.parse(d) : [];
      todos = todos.filter((item, index) => id != index);
      fs.writeFile("./todos.json", JSON.stringify(todos),(error) => {
        if(error) {
          console.log(error);
          res.write("Error occured");
          res.end();
          return;
        }
        res.write("Todo edited successfully!");
        res.end();
      })
    })
    return;
  }

  res.write("This is http server!");
  res.end();
});

server.listen(3000, (error) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log("Server started successfully");
});