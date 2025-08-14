// console.log('hello world')

// let fav=2
// let np=fav
// console.log(fav)
// fav=4
// console.log(fav)
// console.log(np)

// let a=8
// console.log(typeof a)
// console.log(1 + a)
// let c=2.3
// let d=4.3
// console.log(c+d)

// let a="utkarsh"
// let b="vijay"
// console.log("hello myname is "+a+" "+b)
// console.log(typeof a)

// let a=true
// console.log(a)
// console.log(!a)
// console.log(typeof a)
// let b=false
// console.log(a && b)

// let a=undefined
// console.log(a)
// let b=null
// console.log(b)

// let a="a"
// let b="c"
// console.log(a==b)
// console.log(a<b)
// let x=nulllet 
// let y=undefined
// console.log(x==y)

// function sayHi(){
//     console.log("hello")
// }
// sayHi()
// function sum(a,b){
//     return a+b
//     // console.log(a+b)
// }
// sum(2,3)
// sum()
// let s=sum(2,3)
// console.log(s)
// let sum2=sum(4,s)
// console.log(sum2)

// function printVar(variable){
//     console.log(variable)
// }
// // console.log(printVar)
// function func(x){
//     x("hello")
// }
// func(printVar)
// function sum(a,b,callback){
//     callback(a+b)
// }
// function handle(s){
//     console.log(s)
// }
// sum(1,2,handle)
// function printName(name,call){
//     call("hello " +name)
// }
// function modify(s){
//     console.log(s)
// }
// printName("utkarsh",modify)
// function printName(name,call){
//     call("hello " +name)
// }
// printName("bittu",function(variable){
//     console.log(variable)
// })

// let sumArrow=(a,b)=> a+b;
// console.log(sumArrow(1,3));

// const a=[1,2,3,4,5];
// const b=a.reduce((sum ,number)=>{
//     return sum+number;
// },2)
// console.log(b);

// let a="hello";
// let b=`world`;
// console.log(a+" " +b);
// console.log(`${a} ${b}`);

// function User(name,age){
//     return {name:name,age:age};
// }
// const a=User("utkarsh",24);
// console.log(a);
// const date=new Date();
// console.log(date);

// console.log(window);
// alert("hello");
// window.addEventListener("resize",()=>{
//     console.log("resized");
// })

// console.log(document);
// const element=document.createElement("span");
// element.innerText="hello world";
// document.body.appendChild(element);

// const a=document.getElementById("div-id");
// a.style.color="blue";
// const b=document.getElementsByClassName("div-class");
// b[0].style.color="green";
// const c=Array.from(b);
// c.forEach(div=>(div.style.color="red"))

// const a=document.querySelector('[data-test]');
// const b=document.querySelectorAll(".div-class");
// const c=document.querySelector("input");
// console.log(a);
// console.log(b);
// console.log(c);
// a.style.color="green";
// b.forEach(div=>(div.style.color="red"))

// const a=document.querySelector('[data-btn]');
// console.log(a);
// function printClick(){
//     console.log("clicked");
// }
// a.addEventListener("click",printClick);
// a.addEventListener("click",()=>{
//     console.log("clicked 2");
// })
// a.removeEventListener("click",printClick);
// a.addEventListener("click",e=>{
//     console.log(e);
// })
// const b=document.querySelector('[data-input-text]');
// b.addEventListener("input",()=>{
//     console.log("changed");
// })
// b.addEventListener("input",e=>{
//     console.log(e.target.value==="");
// })
// const c=document.querySelector('[data-form]');
// c.addEventListener("submit",e=>{
//     e.preventDefault();
//     console.log("submitted");
// })
// const d=document.querySelector('a');
// d.addEventListener("click",e=>{
//     e.preventDefault();
//     console.log("prevented");
// })

// const btn=document.querySelector('[data-test]');
// console.log(btn.dataset);
// btn.dataset.test="1234";
// const btns=document.querySelectorAll("button");
// btns.forEach(button=>{
//     button.addEventListener("click",()=>{
//         const curr=parseInt(button.dataset.clicks);
//         button.dataset.clicks=curr+1;
//     })
// })

// function print(name){
//     name=name ||"Default";
//     console.log(name);
// }
// print(" ");

// setTimeout(()=>{
//     console.log('Inside');
// },1000)
// console.log("outside");

// const promise=new Promise((resolve,reject)=>{
//     const sum=1+1;
//     if(sum===2){
//         resolve("done");
//     }
//     else{
//         reject("error");
//     }
// })
// promise
// .then(msg=>{  //resolve
//     console.log(msg);
// })
// .catch(msg=>{  //reject
//     console.log(msg);
// })

// setPromise(250)
// .then(()=>{
//     console.log("hello");
// }).then(()=>{
//     console.log("world");
// })
// function setPromise(duration){
//      return new Promise((resolve,reject)=>{
//         setTimeout(resolve,duration);
//     })
// }

// const btn=document.querySelector('button');
// function EventList(element,method){
//     return new Promise((resolve,reject)=>{
//         element.addEventListener(method,resolve)
//     })
// }
// EventList(btn,'click').then(e=>{
//     console.log("clicked");
//     console.log(e);
// })

// Promise.all([
//     Promise.resolve("1"),
//     Promise.reject("2"),
//     Promise.resolve("3")
// ])
// .then(msg =>{
//     console.log(msg);
// })
// .catch(err=>{
//     console.error(err);
// })

// function setPromise(dur){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(`you waited ${dur} milisec`)
//         },dur)
//     })
// }
// async function doe(){
//     try{
//     const msg=await setPromise(1000)
//     console.log(msg)
//     console.log("1")
//     const msg2=await setPromise(1000)
//     console.log(msg2)
//     console.log("2")
//     }
//     catch(e){
//         console.log("catch");
//         console.error(e)
//     }
// }
// doe()

// function getVal(value,delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(value)
//         },delay)
//     })
// }
// async function does(){
//     try{
//     const msg1=await getVal("bittu",1000)
//     console.log(msg1)
//     const msg2=await getVal("vijay",1000)
//     console.log(msg2)
//     }
//     catch(e){
//         console.error(e);
//     }
// }
// does()

// const btn=document.querySelectorAll('button');
// btn.forEach(btns=>{
//     btns.addEventListener('click',e=>{
//         e.stopPropagation()
//         console.log("button");
//     })
// })
// document.addEventListener("click",()=>{
//     console.log("document");
// })
// document.body.addEventListener("click",()=>{
//     console.log("body");
// },{capture:true})

// document.addEventListener("click",e=>{
//     if(e.target.matches("button")){
//         console.log("clicked");
//     }
// })
// const newBtn=document.createElement('button');
// newBtn.innerText="button 5"
// document.body.append(newBtn)

// localStorage.setItem('Name',"utkarsh");
// sessionStorage.setItem('age',"25");
// localStorage.removeItem("Name");
// console.log(sessionStorage.getItem("age"));

// const date =new Date(9999,0,1).toUTCString()
// document.cookie=`name=bittu;expires=${date}`
// console.log(document.cookie)