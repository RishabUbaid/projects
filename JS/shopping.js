
let products=document.getElementById("products")


// fetch("https://dummyjson.com/products")
// .then(response => response.json())
// .then(data=>{
//     data.products.forEach(item=>{
//         let product= `
//         <div class="product">
//         <img src="${item.thumbnail}" />
//         ${item.title}
//         <a href="product.html?id=${item.id}">more</a>
//         </div>
        
//         `;
//         products.innerHTML += product;
//     })
// })   

async function shopping(){
    let res=await fetch("https://dummyjson.com/products");
    let data=await res.json();
    data.products.forEach(item=>{
              let product= `
               <div class="product">
               <img src="${item.thumbnail}" />
               ${item.title}
               <a href="product.html?id=${item.id}">more</a>
               </div>
               `;
               products.innerHTML += product;
    })



 console.log(data);
}
shopping()