 import getTodo from "./todo2.js";
 
 export default function setTodo(event){
    event.preventDefault();
    let t = localStorage.getItem("todo");
    let todos= t ? JSON.parse(t) : [];
    todos.push(event.target[0].value);
    localStorage.setItem("todo" , JSON.stringify(todos));
    getTodo();

}

