// import { useState, useEffect } from "react";


// function App() {

//     const [data,setData] = useState([]);


//     useEffect(() => {
//         console.log(document.querySelector("h3"));
//         fetch("https://dummyjson.com/products")
//             .then(res => res.json())
//             .then(responseData => {
//                 console.log(responseData);
//                 setData(responseData.products);

//             });

//     }, []);
//     return (
//       <>
//        {/* <h3>this is function component</h3>
//        <button onClick={inc}> Click {count}</button>
//       <button onClick={{} => setCount1(count1 + 1)}> Click1 { count1 }</button > */}

//    <ol>k
//         {data.map((item, index) => (
//             <li key={index}>{item.title}</li>

//         ))}
//     </ol>
// </>
// )};



// export default App;


import React, { useState, useEffect }from "react";
import axios from "axios";

import "./style.css";

const App  = () =>{
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);


const inc = ()=> {
    setCount(count +1);

};

const addTodo = () => {
    const todo = document.querySelector("#todo").value;
    setTodos([...todos,todo ])
    console.log(todos);

};
const deleteTodo = (i) => {
    const updateTodos = todos.filter((item, ind) => ind !== i);
    setTodos(updatedTodos);
};

const editTodo = (i) => {
    const newTodo = prompt("Edit your todo:");
    const updatedTodos = todos.map((item,ind) => ind ===i ? newTodo : item);
    setTodos(updatedTodos);

};

        return( 
        <div>
           
            <input type="text" id="todo" />
            <button onClick={addTodo}> add </button>
            <ol>
                    {todos.map((item,index) => (
                        <li key={index}>
                            {item}
                            <button onClick={() => editTodo(index)}>Edit</button>
                            <button onClick={() => deleteTodo(index)}>Delete</button>
                        </li>
                    ))}
                </ol>
            </div>
        );
    };

export default App;
