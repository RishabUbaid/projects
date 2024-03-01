import getTodo from "./todo2.js";


export default function edit(index){
    let newTodo=prompt("enter new todo");
    let t= localStorage.getItem("todo");
    let todos= t ? JSON.parse(t) : [];
     todos=todos.map((item,ind)=>(index ===ind) ?  newTodo : item);
     localStorage.setItem("todo" , JSON.stringify(todos));
    getTodo();

 }
 
