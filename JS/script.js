// let a = Number(prompt("a:"));
// let b = Number(prompt("b:"));
// let c = Number(prompt("c:"));

// if (a > b && a > c) {
//     console.log("A is greater");
// } else if (b > a && b > c) {
//     console.log("B is greater");
// } else {
//     console.log("C is greater");
// }

// let a=0;
// for(a=0;a<10;a++){
// console.log(a);
// }

// let b=2;
// while(b>10){
//     console.log(b);
//      b=b++;

// }

// do{
//     console.log(a);
// }while(a>4)




// let c = Number(prompt("c:"));
// let i;
// for(i=2; i<=c ;i+=2 ){
     
//     console.log(i);
// }

// let f = Number(prompt("f:"));

// let a=0;
// let b=1;
// for(let i=0;b<f; i++){
//     console.log(b);
//     let temp=b
//     b=a+b;
//     a=temp;
   
  
    

//  }

 // fibonacci

// let f = Number(prompt("f:"));
//  let a=0;
// let b=1;
// let i=0;
// let arr=[];
// while (b<f) {
//     arr[i]=b;
//     i++;
   
//        let temp=b;
//        b=a+b;
//        a=temp;

// }
//        console.log(arr);

// for(i=0;i<3;i++){
//     let f = Number(prompt("f:")); 
// }

  // function add(a,b) {
  //   return(a+b)
  // }
  //   console.log(add(2,4));
   
  
//   function even(arr) {
    
  
//   let c = Number(prompt("c:"));
//   let i;
//   let j=0;
//   let even=[];
//   for(i=0;i<c;i++){
//    if(i%2==0)
//   //  even[j]=arr[i];

//    console.log(i);
//   }
// }

//even
// function even(arr) {
 
//   let i;
//    let j=0;
//   let even=[];
//   for(i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//       even[j]=arr[i];
//       j++;
//     }
    
// }
// return even; 
// }
// console.log(even([1,2,3,4,5,6,7,8,9]));



//sum
// function number(arr) {
 
//   let number=0;
//   for(let i=0;i<arr.length;i++){
//     number+=arr[i];
//   }
  
//   return number;
// }
// console.log(number([1,2,3]));

//largest
// function number(arr) {
 
//   let number=arr[0];
//   for(let i=0;i<arr.length;i++){
//     if(arr[i]>number)
//     number=arr[i];
//   }
  
//   return number;
// }
// console.log(number([1,2,3]));


// function evensum(arr) {
 
//      let number=0;
    
//    for(i=0;i<arr.length;i++){
//       if(arr[i]%2==0){
       
//        number+=arr[i];
//       }
//     }
//       return number;
      
    
//   }
//      console.log(evensum([1,2,3,4,5,6,7,8,9])); 
    


// function positive(arr) {
 
//     let i;
//       let j=0;
//      let positive=[];
//     for(i=0;i<arr.length;i++){
//       if(arr[i]>0){
//         positive[j]=arr[i];
//         j++;
//       }
      
//   }
//   return positive; 
//   }
//   console.log(positive([1,-2,3,4,-5,6,7,-8,9]));


//fn

// let myArray=[1,2,3,4,5,6,7,8,9];
// let newArray=myArray.fill(10);
// console.log(newArray);


// let myArray=[1,2,3,4,5,6,7,8,9];

// let newArray=myArray.filter(items , index){
// return items%2===0;
// }
// console.log(newArray);

// let myArray=[1,2,3,4,5,6,7,8,9];
// myArray.forEach((item,index)=>{
//   console.log(item,index);
// });

// let myArray=[1,2,3,4,5,6,7,8,9];
// myArray.map((item,index)=>{
//   console.log(item,index);
//   return item*2;
// });
// console.log(myArray);

// let myArray=[10,2,3,4,5,6,7,8,9];
// let element=myArray.find((item,index)=>{
//   console.log(item,index);
//   return item/5==2;
// });
// console.log(element);

// let myArray=[10,2,3,4,5,6,7,8,9];
// let element=myArray.findIndex((item,index)=>{
//   console.log(item,index);
//   return item/5==2;
// });
// console.log(element);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// let element=myArray.findLast((item,index)=>{
//   console.log(item,index);
//   return item===1;
// });
// console.log(element);



// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// let element=myArray.findLastIndex((item,index)=>{
//   console.log(item,index);
//   return item===1;
// });
// console.log(element);


// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// myArray.pop();
// console.log(myArray);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// myArray.push();
// console.log(myArray);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// myArray.shift();
// console.log(myArray);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// myArray.unshift(1);
// console.log(myArray);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// let result=myArray.reduce((item1,item2)=>{
//   console.log(item1,item2);
//   return item1+item2;
// });
// console.log(result);



// let myArray=[10,2,3,4,5,6,7,8,9];
// let newArray=myArray.filter((items , index)=>{
//   return items%5===0;
//   })
//   console.log(newArray);


// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.splice(2,6);
// console.log(result);
// let positive=[];
// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.slice(2,6);
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.sort();
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.join(0);
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.at(0);
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.indexOf(9);
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9,9];
// console.log(myArray);
// let result=myArray.lastIndexOf(9);
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.reverse();
// console.log(result);

// let myArray=[10,2,3,4,5,6,7,8,9];
// console.log(myArray);
// let result=myArray.toString();
// console.log(result);

// let myArray=["blue", "green","red","violet"];
// o=["st","nd","rd",'th'];
// let op=myArray.map((item,index)=>{
// let x = index < 3 ? o[index] : o[3]
// return (index+1)+ x  +" choice is " + item});
// console.log(op);

// let myArray=[10,2,3,4,5,6,7,1,8,1,9];
// let result=myArray.reduce((item1,item2)=>{
  
//   return (item2>item1) ? item2:item1;
// });
// console.log(result);


// console.log(document);
// let x=document.getElementById("abcd");
// console.log(x);


// console.log(document);
// let x=document.getElementsByClassName("abcd");
// console.log(x);

// console.log(document);
// let x=document.getElementsByTagName("div");
// console.log(x);

// console.log(document);
// let x=document.getElementById("abcd");
// console.log(x);

// console.log(document);
// let x=document.getElementById("abcd");
// x.textContent="hi";
// x.style.color="blue";
// x.style.backgroundColor="green";
// x.style.border="3px solid black";

// let a=document.getElementsByTagName("a")[0];
// a.href="http://google.com";
// a.target="_blank";

// let date=new date();
// console.log(date);



// let date=new Date();
// console.log(date);
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

//clock
// Calling showTime function at every second
// setInterval(showTime, 1000);

// // Defining showTime funcion
// function showTime() {
// 	// Getting current time and date
// 	let time = new Date();
// 	let hour = time.getHours();
// 	let min = time.getMinutes();
// 	let sec = time.getSeconds();
// 	am_pm = "AM"
// 	if (hour >= 12) {
// 		if (hour > 12) hour -= 12;
// 		am_pm = "PM";
// 	} else if (hour == 0) {
// 		hr = 12;
// 		am_pm = "AM";
// 	}

// 	hour =
// 		hour < 10 ? "0" + hour : hour;
// 	min = min < 10 ? "0" + min : min;
// 	sec = sec < 10 ? "0" + sec : sec;

// 	let currentTime =
// 		hour +
// 		":" +
// 		min +
// 		":" +
// 		sec +
// 		am_pm;

// 	// Displaying the time
// 	document.getElementById(
// 		"clock"
// 	).innerHTML = currentTime;
// }

// showTime();



// fetch("https://dummyjson.com/products")
// .then(response => response.json())
// .then(data=>{
// 	console.log(data.products);
// })
// .catch(error=>{
// 	console.log(error);
// })
// .finally(()=>{
// 	console.log("finally");
// })



// class User{
//   constructor(name,place,age){
//     this.name=name;
//     this.place=place;
//     this.age=age;
//   }
// }
// let user1=new User("ardra","calicut",23);
// console.log(user1);


// class User{
//   constructor(name,place,age){
//     this.name=name;
//     this.place=place;
//     this.age=age;
//   }
//   getDetails(){
//     console.log(`${this.name} from ${this.place}`);
//   }
// }
// let user1=new User("ardra","calicut",23);
// console.log(user1);

// class User{
//    #name="";
//   constructor(name,place,age){
//     this.name=name;
//     this.place=place;
//     this.age=age;
//   }
//   getDetails(){
//          console.log(`${this.name} from ${this.place}`);
//      }
//      static staticFunction(){
//       console.log(this.staticFunction);
//      }
//      get name(){
//       return this.#name;
//      }
//      set name(n){
//       if(n.length>6){
//         this.#name=n;
//       }
//     }
//     }

// let user1=new User("ardra","calicut",23);
// user1.name="my 2"
// console.log(user1.name);
// user1.getDetails();
// User.staticFunction()


// class User{
//   constructor(name,place,age){
//        this.name=name;
//         this.place=place;
//         this.age=age;
//         console.log("Parent Constuctor");
// }
// printData(){
//   console.log(`${this.name} from ${this.place}`);
//     }
// }

// class AdminUser extends User{
//   constructor(name,place,age,db_access){
//     super(name,place,age);
//     this.db_access=db_access;
//     console.log("child constructor");
//   }
// }

// let au=new AdminUser("manji","kannur Bus stand",50,true);
// console.log(au);
// au.printData();

// class SuperAdminUser extends AdminUser{
//   constructor(name,place,age,db_access){
//   }
// }


// let box=document.querySelector(".box");
// console.log(box);

// let box=document.querySelectorAll("div");
// box.forEach(item=>{
//   console.log(item);
// })

// let button=document.querySelector("button");
// button.addEventListener("click" , ()=>{
//   alert();
// });

// document.addEventListener("scroll",()=>{
//   alert("data loaded");
// })



// function store(event){
//   localStorage.setItem(event.target.name, event.target.value);

// }

// function setForm(){
//   let username=localStorage.getItem("username");
//   let email=localStorage.getItem("email");
//   let number=localStorage.getItem("number");
//   let address=localStorage.getItem("address");
//   document.getElementById("username").value=username;
//   document.getElementById("email").value= email;
//   document.getElementById("number").value=number;
//   document.getElementById("address").value=address;
// }
// setForm()

// document.querySelectorAll("button").forEach((item)=>{
//   item.addEventListener("click", (event)=>{
//     document.querySelector(
//       "img"
//     ).src=`./${event.target.textContent}.jpeg`;
//   });
// });

// function show(imgSrc){
//   window.open(imgSrc, '_blank');
// }

// let images=["img1","img2","img3","img4","img5","img6","img7","img8","img9","img10","img11","img12","img13","img14"];
// let gal=document.querySelector(".gallery");
// images.forEach((item)=>{
//   let img=`
//   <img class="image" src="./${item}.jpeg" />
//   `;
//   gal.innerHTML+= img;
// });
// document.querySelectorAll(".image").forEach((item)=>{
//   item.addEventListener("click",(event)=>{
//     item.classList.add("image-popup");
//   });
// });
// document.querySelector("button")
// .addEventListener("click",()=>{
//   document.querySelectorAll(".image")
//   .forEach(item=>item.classList.remove("image-popup"))
// })



// export let x=0;
// export let y=4;
// let z=9;
// export default z;

// export let a=1+2;
// export let b=5-3;
// export let c=4/2;
// export let d=3*3;



// let a=50;
// let i= parseInt(a/2);
// let j=i*2;
// if(a==j){
//   console.log("even");
// }
// else{
//   console.log("odd");
// }

// let array = [];
// for (let i = 1; i <=100; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     array.push("buzz fizz");
//   }
//   else if (i % 3 == 0) {
//     array.push("fizz");
//   }
//   else if (i % 5 == 0) {
//     array.push("buzz");
//   }
//   else {
//     array.push(i);
//   }
// }
// console.log(array);

// let regEx = /^\+91[0-9]{10}$/;
// console.log(regEx.test("+911234567890"));

let regex2 =/^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/;
console.log(regex2.test("aegjnk@gmail.com"));
