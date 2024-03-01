import React, { useState, useEffect }from "react";
import axios from "axios";

import "./style.css";

// class App extends React.Component {
//     constructor(props){
//         super();
//         this.state={
//             count:0,
//             todos: []
//         }
//     }
// inc = ()=> {
//     this.setState({count: this.state.count +1});

// }

// addTodo = () => {
//     let todo = document.querySelector("#todo").value;
//     this.setState({ todos:[...this.state.todos,todo ]})
//     console.log(this.state.todos);

// }
// deleteTodo = (i) => {
//         let todos = this.state.todos.filter((item, ind) => ind !== i);
//     this.setState({ todos});
// }

// editTodo = (i) => {
//     let newTodo = prompt("Edit your todo:");
//     let todos = this.state.todos.map((item,ind) => ind ===i ? newTodo : item);
//     this.setState({ todos});

// } 
//     render(){
//         return( 
//         <div>
//             <h1>this is heading</h1>
//             <p>
//                 this is my first class component
//             </p>
//             <p>{this.state.count}</p>
//             <button onClick={this.inc}>click</button>
//             <input type="text" id="todo" />
//             <button onClick={this.addTodo}>add </button>
//             <ol>
//                     {this.state.todos.map((item,index) => (
//                         <li key={index}>
//                             {item}
//                             <button onClick={() => this.editTodo(index)}>Edit</button>
//                             <button onClick={() => this.deleteTodo(index)}>Delete</button>
//                         </li>
//                     ))}
//                 </ol>
//             </div>
//         );
//     }
// }
// export default App;


// class App extends React.Component {
//     constructor(props) {
//         super();
//         this.state = {
//             data: []
//         }
//     }

// componentDidMount() {
//         axios.get("https://dummyjson.com/products")
//             .then(res => {
//                 console.log(res.data.products);
//                 this.setState({ data: res.data.products });
//             })
//     }

//     render() {
//         return (
//             <div className="product-container">
//                 <ol className="product-list">
//                     {this.state.data.map((item, i) => (
//                         <li key={i} className="product-item"> 
//                             <img src={item.thumbnail} alt="" width={"100px"} className="product-image" />
//                             <div className="product-details">
//                                 <h3 className="product-title">{item.title}</h3> 
//                                 </diimport TextField from "@mui/material/TextField";v>
//                                                           {item.description}</li>

//                     ))}
//                 </ol>
//             </div>
//         );
//     }
 
         
      

// }





// function App(props) {
//     const [data,setData] =useState(0);
//     const [data2,setData2] =useState(0);
//     useEffect(() => {
//         console.log(document.querySelector("h2"));


//     },[data, data2]);
    

//     return(

//         <div>
//             <h2>Function Component</h2>
//             <button onClick={() => setData(data + 1)}>click {data} </button>
//             <button onClick={() => setData2(data2 + 1)}>click {data2} </button>
            
//         </div>
//     );

    
// }



function App() {
    const [data, setData] = useState([]);

    const [filteredData ,setFilteredData] = useState([]);
    
    const searchHandler = (e) => {
        let value = e.target.value;
        setFilteredData(data.filter(item => item.title.includes(value)));
        console.log(filteredData);
    }
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
        .then((response) => {
            console.log(response.data.products);
            setData(response.data.products);

        })
        .catch((error) =>{
        console.error("error fetching Data:", error);
    });
 }, []);



 return(

               <div className="nav">
                <div className="search">
                
               <input type="search" onInput={searchHandler} placeholder="search" />
               <button>search</button>

             </div>
                    <div className="product-container">
                        <ol className="product-list">
                            {filteredData.map((item, i) => (
                                <li key={i} className="product-item"> 
                                    <img src={item.thumbnail} alt="" width={"100px"} className="product-image" />
                                    <div className="product-details">
                                        <h3 className="product-title">{item.title}</h3> 
                                        </div>
                                                                  {item.description}</li>
        
                            ))}
                        </ol>
                    </div>
              </div>
            
        );
    }

export default App;