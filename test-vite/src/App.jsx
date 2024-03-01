// import React, { useState, useEffect } from "react";
// import axios from "axios";
   
// import "./style.css";

// class App extends React.Component{
//     constructor(props){
//         super();
//         this.state = {
//             count:0,
//             todos: [], 
//             data: []
//         }
//     }




//      componentDidMount() {
//         axios.get("https://dummyjson.com/products")
//         .then(res =>{
//             console.log(res.data.products);
//             this.setState({data: res.data.products});
//         })
//      }

//     // inc = () => {
//     //     this.setState({
//     //         count: this.state.count + 1
//     //     });
//     // }

//     // addtodo = ()=> {
//     //     let todo = document.querySelector("#todo").value;
//     //     this.setState({
//     //         todos: [...this.state.todos,todo]
//     //     });
//     //     console.log(this.state.todos);
//     // }


//     // editTodo = (i) => {
//     //     let newTodo = prompt("enter new todo:");
//     //      let todos = this.state.todos.map((item,ind) => ind === i ? newTodo : item);
//     //     this.setState({todos});
       
//     // }


//     //  delTodo = (i) => {
  
//     //    let  todos = this.state.todos.filter((item,ind) => ind !== i);
//     //     this.setState({todos});
       
//     // }



    

//     render(){
//         return(
      
      
//             <div>
//                 {/* <h1>this is heading</h1>
//                 <p>this is my first component</p>
//                 <p>{this.state.count}</p>
//                 <button onClick={this.inc}>count</button>
//                 <input type="text " id="todo"/>
//                 <button onClick={this.addtodo}>add</button>
// <ol>
//                {this.state.todos.map((item,index) => (
//                  <li key={index}> {item}  
//                    <button onClick={() => this.editTodo(index)}>edit</button>
//                  <button onClick={() => this.delTodo(index)}>del</button> </li>
//                  ))}
//                </ol> */}
//     <div id="bg">
//         <div class="navbar"> <input type="text" class="srb" /> <button class="btn2">search</button></div>
//                 <div>
//                     {this.state.data.map((item,i) => ( 
//                         <div key={i} class="product-container">
//                          <img  class="product-conatainerimg" src={item.thumbnail} alt="" width={"100px"} />
//                             {item.title}<div class="product-details">{item.description }</div></div>
//                     ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }




//  function App()  {
//     const [data, setData] = useState(0);
//     const [data2, setData2] = useState(0);
      

//     useEffect(() => {
//         axios.get("https://dummyjson.com/products")
//             .then((response) => {
//                 console.log(response.data.products);
//                 setData(response.data.products);
//             })
            
//     }, [data]);

//     useEffect(() => {
//         console.log(document.querySelector("h2"));

//     },[data,data2]);
//  return(
//     <div>
//         <h2>function component</h2>
//         <button onClick={() => setData(data + 1)}>Click {data}</button>
//         <button onClick={() => setData2(data2 + 1)}>Click {data2}</button>


//         <div>
//                     {data.map((item, i) => (
//                         <div key={i} className="product-container">
//                             <img className="product-conatainerimg" src={item.thumbnail} alt="" width={"100px"} />
//                             {item.title}
//                             <div className="product-details">{item.description}</div>
//                         </div>
//                     ))}
//                 </div>
//             </div>





    
//  ) ;
// }

// export default App;








import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";





function App() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([])
    const [data2, setData2] = useState(0);

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
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
{/* 
<h2>function component</h2>
               <button onClick={() => setData2(data2 + 1)}>Click {data2}</button> 
            <h2>Function Component</h2> */}
            <div id="bg">
                <div className="navbar">
                    <input type="search" className="srb" onInput={searchHandler} />
                    <button className="btn2" >Search</button>
                </div>
                <div>
                    {filteredData.map((item, i) => (
                        <div key={i} className="product-container">
                            <img className="product-conatainerimg" src={item.thumbnail} alt="" width={"100px"} />
                            {item.title}
                            <div className="product-details">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;



