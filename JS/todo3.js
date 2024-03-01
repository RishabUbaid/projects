 import getTodo from "./todo2.js";

 export default function del(index){
    let t= localStorage.getItem("todo");
    let todos= t ? JSON.parse(t) : [];
    todos=todos.filter((item,ind) => ind != index )
 
    localStorage.setItem("todo" , JSON.stringify(todos));
    getTodo();
}

