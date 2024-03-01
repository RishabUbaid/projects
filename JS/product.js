let title=document.getElementById("title");
let thumbnail=document.getElementById("thumbnail");
let price=document.getElementById("price");
let description=document.getElementById("description");

let id=location.href.split("?id=")[1];
// fetch(`https://dummyjson.com/products/${id}`)
// .then(response => response.json())
// .then(data=>{
//     title.innerHTML=data.title;
//     thumbnail.src=data.thumbnail;
//     price.innerHTML= "Rs " + data.price;
//     description.innerHTML=data.description;
   
// }) 

async function product(){
    let res=await fetch(`https://dummyjson.com/products/${id}`)
    let data=await res.json();
    
        title.innerHTML=data.title;
        thumbnail.src=data.thumbnail;
        price.innerHTML= "Rs " + data.price;
        description.innerHTML=data.description;








console.log(data);
}
product()