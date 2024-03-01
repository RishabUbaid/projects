export default function getTodo(){
    let list= document.getElementById("list");
    let todos= JSON.parse(localStorage.getItem("todo"));
    list.innerHTML= "";
    todos.forEach((todo , index) => {
        let li=`<li>
        ${todo}
        <button onclick="edit(${index})">edit</button>
         <button onclick="del(${index})">del</button>
        
        
        </li>`;
        list.innerHTML += li;
    })
 }



