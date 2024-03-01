


// let todos=[];
// let todo=document.getElementById("todo");
// let list=document.getElementById("list");




// class Todo{
//     constructor(todo,completed){
//         this.todo=todo;
//         this.completed=completed;
//     }
// }

// function addTodo(event) {
//     event.preventDefault();
//     let Obj=new Todo(todo.value,false);
//     todos.push(Obj);
//     console.log(Obj);
//     print();
    
// }

// function print() {
//     list.innerHTML="";
//     todos.forEach((item,index)=>{
//         let li=`<li>
//         ${item.todo}
//         <button onclick="edit(${index})">edit</button>
//         <button onclick="del(${index})">del</button>
//         </li>`;
//         list.innerHTML+=li;
//     })   
// }

// function edit(index){
//     let newTodo=prompt("enter new todo");
//     todos=todos.map((item,ind)=>(ind===index) ? {todo : newTodo }: item)
//     print();
// }

// function del(index) {
//     todos=todos.filter((item,ind) => ind != index )
//     print();
    
// }

// function store(event){
//     localStorage.setItem(event.target.name, event.target.value);
  
//   }
//   function setForm(){
//     let todo=localStorage.getItem("todo");
//     let list=localStorage.getItem("list");
//     document.getElementById("todo").value=todo;
//     document.getElementById("list").value=list;
// }
// setForm()



// function setTodo(event){
//     event.preventDefault();
//     let t = localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//     todos.push(event.target[0].value);
//     localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();

// }
//  function getTodo(){
//     let list= document.getElementById("list");
//     let todos= JSON.parse(localStorage.getItem("todo"));
//     list.innerHTML= "";
//     todos.forEach((todo , index) => {
//         let li=`<li>
//         ${todo}
//         <button onclick="edit(${index})">edit</button>
//          <button onclick="del(${index})">del</button>
        
        
//         </li>`;
//         list.innerHTML += li;
//     })
//  }
// getTodo()

// function del(index){
//     let t= localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//     todos=todos.filter((item,ind) => ind != index )
 
//     localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();
// }


//  function edit(index){
//     let newTodo=prompt("enter new todo");
//     let t= localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//      todos=todos.map((item,ind)=>(index ===ind) ?  newTodo : item);
//      localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();

//  }





// function setTodo(event){
//     event.preventDefault();
//     let t = localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//     todos.push(event.target[0].value);
//     localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();

// }

//  function getTodo(){
//     let list= document.getElementById("list");
//     let todos= JSON.parse(localStorage.getItem("todo"));
//     list.innerHTML= "";
//     todos.forEach((todo , index) => {
//         let li=`<li>
//         ${todo}
//         <button onclick="edit(${index})">edit</button>
//          <button onclick="del(${index})">del</button>
        
        
//         </li>`;
//         list.innerHTML += li;
//     })
//  }
// getTodo()



// function del(index){
//     let t= localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//     todos=todos.filter((item,ind) => ind != index )
 
//     localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();
// }


//  function edit(index){
//     let newTodo=prompt("enter new todo");
//     let t= localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//      todos=todos.map((item,ind)=>(index ===ind) ?  newTodo : item);
//      localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();

//  }

// import {setTodo(event) } from "./todo1.js" ;




//  function sortTodoList(){
//     let t=localStorage.getItem("todo");
//     let todos= t ? JSON.parse(t) : [];
//     todos.sort();
//     localStorage.setItem("todo" , JSON.stringify(todos));
//     getTodo();
//  }

import getTodo  from "./todo2.js" ;
import setTodo  from "./todo1.js" ;

import del from "./todo3.js" ;
import edit  from "./todo4.js" ;

 getTodo();

 document.querySelector("form")
 .addEventListener("submit", setTodo);