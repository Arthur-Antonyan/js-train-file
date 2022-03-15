// let name = prompt('How old are you');
// if (name>0 && name<12) {
//     document.write('You are a child');
// }
// else if (name>13 && name<16) {
//     document.write('You are a teemager')
// }
// else if (name>18 && name<30) {
//     document.write('You are a in power sunrise')
// }
// else if (name>31 && name<45) {
//     document.write('Time to  plant a tree and build a house')
// }
// else {
//     document.write('Pension time')
// }
// let name = prompt ('whats the official name of JS')
// if (name == 'Ecmascript' || 'ecmascript') {
//     alert('its true');

// let name = prompt ('whats the official name of JS')
// switch(name){
//     case 'Ecmascript': alert('1');
//     break;
//     case 'ecmascript': alert ('2')
//     break;
//     default: alert ('3')

// }

// }
// else {
// alert ('havemt you heard of Ecmascript')}
//  let number = prompt ('enter number')
//  let message = (number<0) ? '-1':
//  (number>0) ? '1':
//  (number==0) ? '0': " "

//  alert (message)

//  if (number>0) {
//      alert('1')

//  }
//  else if (number<0) {
//      alert ('-1')
//  }
//  else if (number ==0) {
//      alert ('o')

//  }

// result = (a+b<4) ? 'good':'bad';
//  ('my car')
//  console.dir('my car')
//  console.warn('my car')
//  console.error('my car')

// console.group('1');
// ('1');

// console.group('2');
// ('2');
// console.groupEnd();

// console.time('1');
// console.timeEnd('1');

// console.profile('1')
// console.profileEnd('2')

// let a=1,b=1
// console.assert(a!==b,'abb')

// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// let x=+prompt('Введите число между 0 и 3', '');
// switch(x){
//  case 0: alert('its 0');
//  break;
//  case 1: alert('its 1');
//  break;
//  case 2: alert('its 2/3');
//  break;
// default: alert ('siqo')

// }

// let x= prompt ('insert number', 100)
// let y= prompt ('insert number', 100)
// let z = prompt ('insert 1,2,3,4')

// let x = parseInt(x)
// let y= parseInt (y)
// let result
// switch (z){
//     case '1': result=x+y;
//     break;
//     case '2': result=x-y;
//     break;
//     case '3': result=x/y;
//     break;
//     case '4': result=x*y;
//     break;
//     default: result = 'no valid number'

// }
// alert(result)

// let location1 = Math.floor(Math.random()*5);;
// let location2 = location1+1;
// let location3 = location2+1;

// let guess;
// let guesses = 0;
// let hits  = 0;

// let result = false;

// while(result==false){
//     guess = prompt ('enter number from 1 to 6');
//     if (guess<0 || guess>6){
//     alert ('enter valid number pls');
//     }
//     else{
//         guesses=guesses+1;
//         if (guess ==location1 || guess ==location2 ||guess ==location3){
//         hits=hits+1;
//             if (hits == 3) {
//             result=true,  alert ('you won');
//             }
//         }else alert ('try again')

//     }

// }
// let status = 'you shot  ' + guesses + 'to shoot the vaccel ' + 'your accurancy level is ' + (3/guesses);
// alert (status);

// let text = 'whoooa';
// function checkList (text , form){

//     alert(text+form);
// }
// checkList (text, 'Ann')

// let age = prompt ('enter your age',18)

// function checkAge(age){
//         if (age>18){
//         return true
// }
//         else {
//             return confirm ('confirm your age ')
//         }

// }
// if (checkAge(age)){
//     alert ('opened')
// }
// else alert ('closed')
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }
//  let age = prompt ('enter age')
//   function checkAge(age){
//       let  message=(age> 18) ? true : confirm ('did parents allow');

//   }
// checkAge(age)
// alert (message)

// let a=prompt('enter number for a')
// let b=prompt('enter number for b')
// function min(a,b){
//     if (a>b){
//         return b
//     }
//     else return a
//     }
//     alert(min(a,b))

// let x = prompt ('enter number for x');
// let n = prompt ('enter number for n')

// function pow(x,n){
//    if (n>0) {return x**n;}
//     else return ('no walid number')

// }
// alert(pow(x,n))

// let name = prompt ('enter name')
// let year = prompt ('enter age')
// function returnYear(name, year ){
//     let x=11
// return name + (x-year) +'years'

// }
// alert(returnYear(name, year ))
// let message
// function checkAge(age){
//     if (age<10) message= 'you are still child';
//     else if (age<20) message = 'come here'
//     return message
// }  checkAge(9)
// (message)

//  let num=360
//  alert(num.toString(8))

// alert(360..toString(8))

// num=13,555
// alert(num.toFixed(2))

// alert(parseInt('12.3px'))
// alert(parseFloat('12.5px'))

// let x=4
// let y = 5

// alert(Math.max(x,y))

// let x=4
// let y = 5

// alert(Math.min(x,y))

// let x=4
// let y = 5

// alert(Math.pow(x,y))

// let x = +prompt('enterx')
// let y = +prompt ('enter y')
// alert(x+y)

// let x= +prompt ('enter number 1234')
// function readNumber(x) {

//     if (Object.is(x,1234))

//     return (x);
//     else return ('null')

// }
// alert(readNumber(x))let x= +prompt ('enter number',"")

// let x = +prompt ('enter number')

// function readNumber(x) {

//     if (isFinite(x)===true)
//     return (x);
//     else return ('null');

// }
// if (x===0 || x=== null) alert ('null') ;
//  else alert(readNumber(x))

//  function random(x,y){
//      let result = (Math.random()*(Math.max(x,y)));
//      if (result > Math.max(x,y)){
//          return Math.max(x,y)-result
//  }
//          else if (result<Math.min(x,y)){
//              return Math.min(x,y)
//          }
// alert(result)
// }

// random(1,5);

//  function random(x,y){
//      let result = Math.ceil(Math.random()*(Math.max(x,y)));
//      return result

// }
// alert(random(1,5));

// let number =['1','2','3'];
// // number.push('4','5')
// // number.pop('2');
// // number.shift()
// // number.unshift('1','2','3')
// // number[2]=4
// // number.length=(2)
// for(let i of number){
//     (i);}

// let matrix=[
//         [1,2,3],
//         [4,5,6],
//         [7,8,9]

// ]

// alert (matrix[2] [2])

// let mus = ['jazz','bluzz'];
// mus.push('rocknroll');
// mus[(Math.floor(mus.length/2))]='classic';
// mus.shift();
// mus.unshift('rap', 'reggi')
// alert(mus)

// let arr =  [sumInput = +prompt('enter number', 0)]
// while (isFinite(sumInput)===true){

//    sumInput = +prompt('enter number', 0)

// }
// function sumInput(){
// let numbers=[]
// while (true){
//     let value = prompt('enter value');
//     if (x=== ""|| x===null||!isFinite(value)) break;
//     numbers.push(+value);
// }
//     let sum=0;
//     for(let number of x){
//         sum+=number
//     }
//     return(sum);
// }
// alert(sumInput());

// function makePhrases(){
// 	let words1 = ["24/7", "Каждый день", "Сегодня", "Постоянно", "Непрерывно"];
// 	let words2 = ["мы", "команда", "компания", "сотрудники", "персонал"];
// 	let words3 = ["работаем не покладая рук", "отдыхаем на работе", "делаем чудеса"];

//     let random1 = Math.floor(Math.random()* words1.length)
//     let random2 = Math.floor(Math.random()* words2.length)
//     let random3 = Math.floor(Math.random()* words3.length)

//     let phrases = words1[random1] + words2[random2] +words3[random3];
//     alert(phrases);
// }
// makePhrases()

// let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter"];
// let last = [products.length-1];
// let recent = products[last];
// alert(recent)

// let user ={
//     name:'John',
//     age: 30,
//     ['car type']: 'yes'
// }
// let key = prompt('enter', )
// alert (user[key])
// // user.name='Smith';
// // user.weight=168;
// // delete user;
// // // (user)
// // alert(user['car type'])

// let fruit = prompt('enter fruit name',);
// let bag ={
//     [fruit]:5

// };
// alert(bag.apple)

// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = prompt("Что вы хотите узнать о пользователе?", "name");

//   // доступ к свойству через переменную
//   alert( user[key] ); // John (если ввели "name")

// let x=prompt('enter it')
// let y={
//     [x]:5
// }; alert(y.ff)

// let user = {};
// user.name = 'John';
// user.surname = 'smith';
// user.name = 'Pete';
// delete user.name;
// (user);

// function isEmpty(){
//     const object = {
//         // name:'John',
//         // age:18,
//         // admin:89
//     }
//     let empty=Object.keys(object).length;
//
//     if (empty>0){
//         alert ('false')
//     }
//  else (alert('true'))
// }   isEmpty();

// function isEmpty(obj){
//  for (let prop in obj){
//  return true;}
//  return false

// }
// alert(isEmpty())

// function isEmpty(){
//     let obj={jh:12}
//  for (let prop in obj){
//  return true;}
//  return false

// }
// alert(isEmpty())

//     let obj ={
//             John: 100,
//             Ann: 160,
//             Pete: 130,
//             Johnny: 100,
//             Annu: 160,
//             Petey: 130
//         }
//         let sum=0
//  for(let prop in obj){

//     sum+=obj[prop]
// }
// alert(sum)

// let sample = { a: 1 , b: 2 , c:3 };
// let summed = 0;

// for (let key in sample) {
//     summed += sample[key];
// };alert(summed)

// let obj ={
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//     Peteu: 'book',

// }

// for(let prop in obj){
//     let sum = obj[prop]
//     if(typeof sum === 'number') {
//     alert(sum*2)}
//     else alert (sum)

// }
// let person={
//     wantsSex:'much',
// }
// let girl = Object.create(person);

//  Object.setPrototypeOf(girl, null);
//  alert(girl.wantsSex)

// let person={
//     wantsSex:'much'
// };
// let girl= Object.create(girl,{
//     fucks:{
//     value:true
// }
// });
//     alert(girl.fucks);

// let animal = {
//     eats: true
//   };

//   let rabbit = Object.create(animal, {
//     jumps: {
//       value: true
//     }
//   });

//   alert(rabbit.jumps); // true

// let animal ={
//     eats:'carrot'

// }
// let rabbit ={
//     jumps:'long'
// }
// rabbit. __proto__ =animal;
// alert(rabbit.eats)

// let animal ={
//     eats:'carrot',
//     walks(){
//         alert('animal walks')
//     }

// }
// let rabbit ={
//     jumps:'long',
//     __proto__:animal
// }
// let mouse = {
//     __proto__:rabbit
// }
// mouse.walks()
// alert(mouse.jumps)

// let animal ={
//     eats:'carrot',

// };
// let rabbit ={
//     jumps:'long',
//     __proto__:animal
// };
// for (let prop in rabbit){
// let ff = rabbit.hasOwnProperty(prop);
// if (ff){
//     alert(`our: ${prop}`);

// }
// else{
//     alert(`inherited: ${prop}`)
// }
// }
// alert(Object.keys(rabbit))
// for (let prop in rabbit)
// alert(prop)
// }

// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3,
//     __proto__:head
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__:table
//   };

//   let pockets = {
//     money: 2000,
//     __proto__:bed
//   };
//   alert([pockets.pen])

// let hamster = {
//     stomach: [],

//     eat(food) {
//       this.stomach.push(food);
//     }
//   };

//   let speedy = {
//     __proto__: hamster
//   };

//   let lazy = {
//     __proto__: hamster
//   };

//   // Этот хомяк нашёл еду
//   speedy.eat("apple");
//   alert( speedy.stomach ); // apple

//   // У этого хомяка тоже есть еда. Почему? Исправьте
//   alert( lazy.stomach ); // apple

// let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
// let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
// let years = [1955, 1957, 1948, 1954, 1961];
// let colors = ["red", "blue", "tan", "yellow", "white"];
// let convertible = [true, false];

// function cars(){
// let random1 = Math.floor(Math.random()*makes.length)
// let random2 = Math.floor(Math.random()*models.length)
// let random3 = Math.floor(Math.random()*years.length)
// let random4 = Math.floor(Math.random()*colors.length)
// let random5 = Math.floor(Math.random()*convertible.length)
// let result  = makes[random1] + " " + models[random2] + " " + years[random3] + " " + colors[random4] + " " + convertible[random5];
// alert(result)
// }
// cars()

// let chevy = {
// 	make: "Chevy",
// 	model: "Aveo",
// 	year: 1955,
// 	color: "red",
// 	passengers: 4,
// 	convertible: false,
// 	mileage: 8000,
//     started:false,
//     fuel:0,
//     light: function(){
//         ('head lights are on')
//     },
//     start: function(){
//         if (this.fuel==0){
//             alert('trunk is empy')

//             }
//             else{
//                 this.started=true;
//             }

//     },
//     stop: function(){
//         this.started=false;
//     },
//     drive: function(){
//         if(this.started){
//         if (this.fuel>0){
//         alert(this.make + " " + this.model + " " + "is driving");
//         this.fuel=this.fuel-1;
//         (this.fuel);
//         }
//         else{
//             alert('charge the vehicle');
//             this.stop();
//         };
//         }
//         else{

//             alert('you need to zavesti the car')
//         }

//     },
//     addfuel: function(amount){
//         this.fuel=this.fuel+amount;

//     }

// };

// chevy.drive();
// chevy.start();
// chevy.addfuel(4);
// chevy.start();
// chevy.drive();
// chevy.drive();
// chevy.drive();
// chevy.stop();
// Попробуйте создать новый объект кошки со свойствами и добавьте два несколько методов:
// - метод сна (кошка спит, если сыта)
// - метод кушать (метод принимаем параметр количество каллорий еды)
// - после каждого сна кошка теряет 100 едениц еды (каллорий)

// let cat ={
//            make: 'latvian' ,
//            color: 'brown',
//            name: 'cutie',
//            age: 5,
//            stomac: 0,
//            sleep: function (){

//             if(this.stomac>0){
//                 alert('the' + " " + this.name + " "+ 'is sleeping');
//                    this.stomac=this.stomac-100;
//                    (this.stomac)
//                }else{alert('the cat need to eat');

//                 };

//            },

//            eat: function(amount){
//                this.stomac=this.stomac+amount;
//            }

// }
// cat.sleep();
// cat.eat(200);
// cat.sleep();
// cat.sleep();

// let access = document.getElementById("code2");

// let code = access.innerHTML;
// access.innerHTML="here was the p2"
// alert(code)

// alert(document.body.firstChild)

// function ask(question,yes,no){

//     if(confirm (question)) yes();
//     else no();
// }
// function showOK(){
//     alert('yes')
// }
// function showNo(){
//     alert(no)
// }
// ask('are youo?', showOK,showNo)

//                                    NUMBERS

// let x = .3-.2
// let y = .2-.1
// (x==y)

//                                     DATES
// let then = new Date (2010, 0, 1);
// let later = new Date (2021, 8, 27, 17,  40);
// let now = new Date();
// let elapsed = now - then

// (
//     // later.getFullYear()
//     // later.getMonth()
//     // later.getHours()
//     // later.getDay()
//     // later.getDate()
//     // later.toString()
//     now.toString()
// later.toDateString()
// later.toISOString()

// )
//                                    STRINGS
// let x = 'π';
// let y = "e";
//  (y.length)

// let x = "bka\nblla"
// let y = "blaa\
// blaaa\
// blaa"
// let x = 'i can\'t'
// alert(x)

// let s = 'WHAT TEH HELL';
// // let x = s.charAt(0);
// // let x = s.charAt(s.length-2);
// // let x = s.substring(5,7)
// // let x = s.slice(-2);
// // let x = s.indexOf('5');
// // let x = s.split(',');
// // let x = s.replace('how','What the fuck');
// // let x = s.toUpperCase();
// let x = s.toLowerCase();
// let x = s[2];
// (x)

// function init(){

// let x = document.getElementById('code2') ;
// x.innerHTML = 'here was a text' ;
// (x.innerHTML) ;

// let myClass = document.getElementsByClassName('code3');
// (myClass)

// let x = document.getElementById('code5');
// // x.setAttribute('class', 'redTExt');
// // x.setAttribute('name', 'fuck');
// (x);

// let x = document.getElementById('cod');
// let y = x.getAttribute('alt')
// (y)

// let x = document.getElementById('cod');
// let y = x.getAttribute('alt')
// (y)

// let x = document.body.children[3];
// x.setAttribute('class', 'redTExt');

// (x)
// let x = document.body.firstElementChild.nextElementSibling;

// (x.getAttribute('class'))
// }

// window.onload = init;

// let now = new Date()
// alert(now.toLocaleDateString())

// x = now.toLocaleTimeString();
// document.write( 'Current  is' + ' ' + (x));

// y = now.getDay()
// let week =[
//   "Sunday",
//   "Monday",
// "Tuesday",
//  "Wednesday",
// "Thursday",
// "Friday",
// "Saturday",]
// document.write('today is' + ' ' + week[y]);

// let a = 5
// let b = 6
// let c = 7
// let d = (a+b+c)/2
// let e = Math.sqrt(d*(d-a)*(d-b)*(d-c))
// (e)

// let later = new Date(2050,0,1);
// let now = 2014;
// let later = 2050;

// for(let i = now; i <=later; i++){

//     let d = new Date(i,0,1);
//     if(d.getDay()===0)
//     ('it was monday' + i)

// }

// let now = new Date (1995,7,23);
// let later = new Date(2022,0,1);
// let gap =  later - now;
// (gap/86400000)

// function divide(){
// x = document.getElementById("1").value;
// y = document.getElementById("2").value;
// document.getElementById('result').innerHTML = x/y;

// };

// function multiply(){
//     x = document.getElementById("1").value;
//     y = document.getElementById("2").value;
//     document.getElementById('result').innerHTML = x*y;

// };
// function plus(){
//     x = document.getElementById("1").value;
//     y = document.getElementById("2").value;
//     document.getElementById('result').innerHTML = Number(x) + Number(y);

// };

// function minus(){
// x = document.getElementById("1").value;
// y = document.getElementById("2").value;
// document.getElementById('result').innerHTML = x-y;

// };

// function percent(){
// x = document.getElementById("1").value;
// y = document.getElementById("2").value;
// document.getElementById('result').innerHTML = x*y/100;

// };

// calculator

// function display1(){

//     document.getElementById('inp').value = document.getElementById("1").value

// }
// function display2(){

//     document.getElementById('inp').value = document.getElementById("2").value
// }

// function convert(){
//     c = document.getElementById('1').value;
//     document.getElementById('2').value = c/5;
// };

// function convert1(){
//     f = document.getElementById('2').value;
//     document.getElementById('1').value = (f-32)/9;
// };

// function difference (){
// let x = document.getElementById('1').value;
// const y = 13;
//     if(x>13){
//         document.getElementById('result').innerHTML = (x-y)*2

//     }
//     else{
//         document.getElementById('result').innerHTML =Math.abs(x-y)*2
//     }
// }

// function compute(x,y){
//     if(x==y)
//         return (x+ y)*3

//     else
//         return (x+y)

// };

// (compute(77,5))

// function checkNumber(x,y){
//     if(y ==50 || x==50){
//         return true
//     }
//     else if(x+y == 50){
//         return true
//     }
//     else return false

// }
// (checkNumber(50,25))

// function checkInteger(){
//     x = document.getElementById('1').value;

//     if(x>20 && x<100){
//         document.getElementById('result').innerHTML= true
//     }
//     else if(x==400){
//         document.getElementById('result').innerHTML = true
//     }
//     else document.getElementById('result').innerHTML= false;
// }

// function checkPositivity(x,y){
//     if ((x>0 && y<0) || (x<0 && y>0)){
//         return true
//     }
//     else return false
// }
// (checkPositivity(-12,3))

// let x = 'guests:\n John ,\nMary. Nerd';
// let x = `guests:
//  John ,
//  Mary.
//  Nerd`;
// alert (x)

// let str = "what the fuck";

// function ucFirst(){
//   return str[0].toUpperCase()
// }
// (ucFirst())

// let str = "i like viagra "

// function checkSpam(str){
//     if (str.includes("viagra")){
//         alert('true')
//     }
//     else if(str.includes("xxx")){
//         alert('true')
//     }
//     else alert('false')
// }

// checkSpam(str)

// let str = "i like  and xxx"

// function checkSpam(str){
//     if (~str.indexOf("viagra")){
//         alert('true')
//     }
//     else if (~str.indexOf("xxx")){
//         alert('true')
//     }
//     else alert('false')
// }

// checkSpam(str)

// function checkPositivity(x,y){
//         if ((x>0 && y<0) || (x<0 && y>0)){
//             return true
//         }
//         else return false
//     }
//     (checkPositivity(-12,3))
// }
// function checkString(){
// let a = "PYsastan";
// if (a.startsWith('PY')){
//     alert(a)

// }
// else alert("PY"+a)

// }
// checkString();

// function removeCharacter(a){

//  a= a.replace(/a/g,' ')
//     return a
// }
// (removeCharacter("blablaaaa"));

// function changeLetters(){
//     let str = "what the fuck";
//      let a = str[str.length-1].toUpperCase()+str.substr(1,str.length-2) + str[0];
//      alert(a)

// }
// changeLetters()
// function checkNum(a){
//     if (a%7==0 || a%3==0){
//         return true
//     }else return false
// }
// checkNum(prompt("enter num"))

// function checkCase(a){
//     if(a.toLowerCase() == a){
//      return true
//     }else return false
// }
// (checkCase('hblLib'))

// let a = 14;
// let b = a.toString(2);
// (b)

//   let person = {
//       eat:true,
//       sleep:false,
//       work:false

//   };

//   let User = {
//       name:'John',
//       surname:'Smith',
//       prof: 'lawyer',
//       __proto__:person
//   }
//   (User.eat)

// function changeStr(a){
//     return a = (a.slice(a.length-2, a.length-1)) + a + (a.slice(a.length-2, a.length-1));
// }

// (changeStr('what'));

// function truncate(str,maxlength){

//     if(str.length>maxlength){

//         return str = str.slice(0,maxlength) + " ..."
//     } else return str

// }
// (truncate('1234567890',7))

// function checkStart(str) {
//     if(str.startsWith('java')){
//         return true
//     } else return false
// }
// (checkStart('script s the good lang'))

// function checkInt(x,y,z){
//     if((50<x && x<=99)|| (50<y && y<=99)|| (50<z && z<=99)){
//         return true
//     }else return false
// }
// (checkInt(66,9,5))

// function checkStr(str,pos){
//     if(~str.indexOf('Script')){
//     return str.slice(0,pos) + str.slice(11)
//     }
//     else return str

// }
// (checkStr("0,1, Script, 5, 6, 7,",4))

// function findLargestInt (a,b,c) {
//     if (a>b && a>c){
//         return a
//     }
//     else if (b>a && b>c){
//         return b
//     }
//     else if (c>a && c>b){
//         return c
//     }

// }
// (findLargestInt(23,13,14))

// function findNearest (a,b){
//     if (Math.abs(100-a)<Math.abs(100-b)){
//         return a
//     }
//     else return b
// }
// (findNearest(101,99))

// function check(str){
//     let x = str.indexOf('2');
//     if(x>=2 && x<=4){
//         alert (true)
//     }
//     else alert(false)
// }
// check('1  3 4 5 3 2 6')

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//    ask  (
//    "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => alert("Вы отменили выполнение.")
//   );

// function checkDigit(a,b){
//     if (Object.is(a%100,b%100)){
//         return 'yes'
//     }else return 'no'

// }
// (checkDigit(144442345,563455))

// let a = prompt('enter string')
// function changeCharacter(){
//     if(a.length>3){return a.slice(0,3).toLowerCase()+a.slice(3)
//     }else {return a.toUpperCase()}
// }
// alert(changeCharacter())
// function sum(){
// let array = [1,2,3,4,5,6,6];
// let sum =0
// for (let key of array){
// sum +=key}
// return sum
// }
// (sum())
// alert(Math.pow(8,2))

// let arr = ["Я", "изучаю", "JavaScript", "прямо", "сейчас"];
// // let arr2=[5,0,"Давай", "танцевать"];
// // let arr3=[5,0,"Давай", "танцевать"];
// arr.forEach(alert)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];

//   let idF = users.find(item=>item.id==1)
//   alert(idF.name)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];

//   // возвращает массив, состоящий из двух первых пользователей
//   let someUsers = users.filter(item => item.id < 3);

//   alert(someUsers.length)

// (parseInt(3).toString(2))

//  let str = "list - style - image";

//     let x = str.split(' ');
//      let y = x.filter(item=> item!=='-');

//     let z = y.join('');
//     alert(z);

// let arr = [5, 3, 8, 1];
// arr.sort()
// function filterRange (arr,a,b){
//     return arr.filter(item =>(item>=a && item<=b))
// }
// let filtered = filterRange(arr,1,4);
// (filtered)

// let arr = [5, 2, 1, -10, 8];
// let y = arr.sort((a,b)=>b-a);
// (y)

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = arr.sort();
// function copySorted(){
//     ( sorted.join(','));
// }
// copySorted()

// function x(){
//     alert('x')
// }
//  x()

//  let user = (userName,userAge)=>({name:userName,age:userAge});
//  let tom = user('tom',34);
//  let bob = user ('bob', 23 );
//  (tom.name, tom.age)

// let str = "2+2";
// const y = str.split('');
// let z = parseInt(y[0])  + parseInt(y[2]);
// (z)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya,petya,masha];

// let names = users.map(item=>item.name);
// alert(names)

// let i = 1234567809;
// let j = i.toString();
// let  h = j.split("");
// let sum =0;

// for (let i = 0;i<=h.length-1;i++){
//     sum+=h[i]++;

// } if(sum%2==0)(
//     ('evenish')
// );
// else ('oddish');

// let arr = ["I", "go", "home", "I", "go", "home"];
// // delete arr[2];
// // arr.splice(1,2,'brat','begi');
// // let r = arr.splice(1,2)
// // // arr.splice(-1,0,'brat')
// // let y = arr.concat(r)
// // // (arr.slice(0,3))
// // (y)

// let arr2 ={
//     1:'age',
//     2:'what',
//     [Symbol.isConcatSpreadable]:true,
//     length:3

// };
// let y = arr.concat(arr2);
// (y)

// let arr = ["1", "2", "3", "4", "5", "6"];
// // let sum = 0;
// // // let x = arr.forEach(alert);
// // arr.forEach ((item) =>{
// //     sum+=item++
// // })
// // (sum)
// let x = arr.forEach((item,index)=>{
//     (index)
// })

// let arr = ["I", "go", "home", "I", "go", "home"];
// let x = arr.lastIndexOf('go');
// let y = arr.includes('I',4)
// (y)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let x = users.find(item=>item.id==1 )
//   (x.name)

// let arr = ["1", "3", "4", "5", "6"];
// let x = arr.find(item=>item%2==0);
//     (x)

// let customers = [{
//     name: 'ABC Inc',
//     credit: 100
// }, {
//     name: 'ACME Corp',
//     credit: 200
// }, {
//     name: 'IoT AG',
//     credit: 300
// }];
// let x = customers.filter(item=>item.credit>100)
// (x)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let x = users.filter(item=>item.id !==3);
//   (x)

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let x = numbers.filter(item=>item>0);
// (x)
// let x = numbers.filter(funciton(item){
//     if item>0;
// })

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let x = numbers.filter((item,index)=>{
//     if(index>2){
//         return true
//     }else return false

// })
// (x)

// let newArr = arr.map(item=>item*2)
// (newArr)

// let newArr = arr.map((item,index)=>{
//     return item*index;
// })
// (newArr)

// let arr = [2,23,43,55,5,6];              //task 1
// let max = arr[0];
// let min = arr[0]

// for (let i=1; i<arr.length; i++){
//    if(arr[i]>max){
//       max = arr[i]
//    };

// }

// for (let i=1; i<arr.length; i++){
//    if(arr[i]<min){
//       min = arr[i]
//    }

// }(max*min)

//hometask 2
// let arr =[];

// for (let i = -100; i<=100; i++){     //hometask 2a
//   arr[i]=i

//    if (i%3 !==0){
//       (arr[i])
//    }
//    if(i>0){
//       arr [i]=i;

//    }

// }

// let arr =[];

// for (let i = -100; i<=100; i++){     //hometask 2b
//   arr[i]=i
//    (arr[i])
// }

// let arr =[];
// let count = 0;

// for (let i = -100; i<=100; i++){     //hometask 2c
//    if(i<0){
//       count+=1;

//    }
// }(count)

// let arr =[];
// let count1 = 0;
// let count2 = 0;

// for (let i = -100; i<=100; i++){     //hometask 2d
//    if(i>0){
//     a= count1+=i;
//     b = count2+=1;
//    };
// }

// (a/b)

// let arr =[];
// let count = 0;

// for (let i = -100; i<=100; i++){     //hometask 2e
//      arr[i]=i;
//      if(arr.indexOf(i)%2!==0){
//         count+=i

//         (arr.length)
//      }
// }

// let arr =[];
// let count = 0;

// for (let i = 0; i<=100; i++){     //hometask 2f
//      arr[i]=i;
//      if(arr[i]%7==0){

//       count+=arr.indexOf(i)

//      }
// }(count)

// let str = "abbe";
// let arr = str.split("");              //hometask 3
// let reverse = arr.reverse();
// let newStr = reverse.join("")
// if (Object.is(newStr,str)){
//    alert (true)
// }
// else alert(false)

// let str = "The lorem ipsum gets its name from the Latin phrase Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. which translates to “Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain.”";
// let arr = str.split(" ");
// let  newArr =[];
// for (let i = 1; i<arr.length;i=i+2){

//    a=arr[i].toUpperCase()

//    newArr[i]=arr[i-1] + " " +a;

// }
// newStr = newArr.join(" ")
// (newStr)

// let array = [1,2,3,4,5];
// let max = array[0]*array[1];
// for(let i = 0; i<array.length;i++){

//  if(array[i]*array[i+1]>max){
//      max=array[i]*array[i+1];

//  }

// }
// (max);

// let arr = [
//     { id: 15 },
//     { id: -1 },
//     { id: 0 },
//     { id: 3 },
//     { id: 12.2 },
//     { },
//     { id: null },
//     { id: NaN },
//     { id: 'undefined' }
//   ];
//  let number = 0;
//  function checkId(elem){
//      if(Number.isFinite(elem.id) && elem.id!=0 ){
//        return true;
//      }
//      number ++;
//  };

// let Arr = arr.filter(checkId);
// (number);

// let arr = {1, -2, 15, 2, 0, 8};
// (Array.isArray(arr))

// (arr.reverse())
// (arr.sort((a,b)=>{return b-a}))

// let value = arr.reduce((i,j)=>{

//     return i+j;

// },10)
// (value)

// let str = "-webkit-transition";
// let arr = str.split("-");
// let newarr = [];
// for(let i = 1;i<arr.length; i++){
//     newarr.push(arr[0]);
//     newarr[i] = arr[i].substring(0,1).toUpperCase().concat(arr[i].substring(1));

// };
// let newstr = newarr.join('');
// (newstr)

// let str = "-webkit-transition"
// function camlize (str){
//     return str
//     .split ("-")
//     .map((word,index)=>index==0?word:word[0].toUpperCase()+ word.slice(1)
//     )
//     .join('');
// }

// (camlize(str));

// let arr = [5, 3, 8, 1];
// function filter(arr,a,b){
//     return arr
//     .filter(num=>(num>=a && num<=b)
//     )
// }
// (filter(arr,1,4))
// (arr)

// let arr = [5, 2, 1, -10, 8];

// function sort2 (a,b){
//     return b-a

// }
// arr.sort(sort2)
// (arr)

// function change(arr,a,b){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i]<a || arr[i]>b){
//             arr.splice(i,1);
//             // i--;
//         }

//     }
// }
// let arr = [5, 2, 1, -10, 8];
// change(arr,1,4);
// (arr)

// function filterRangeInPlace(arr, a, b) {

//     for (let i = 0; i < arr.length; i++) {
//       let val = arr[i];

//       // удалить, если за пределами интервала
//       if (val < a || val > b) {
//         arr.splice(i, 1);
//         i--;
//       }
//     }

//   }

//   let arr = [5, 3,4,6, 8, 1];

//   filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

//   alert( arr )

// let arr = ["HTML", "JavaScript", "CSS"];
// let newArr = arr.slice();
// newArr.sort();
// (arr)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(elem=>elem.name);
// (names)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let mapped = users.map(elem=>({
// fullname:`${elem.name} ${elem.surname}`,
// id:elem.id
// }))
// (mapped)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortbyage(arr){
//    arr.sort((a,b)=> a.age>b.age?1:-1)
// }
// sortbyage(arr)
// (arr)
// let arr = [1, 2, 3]
// function sort(arr){
//     arr.sort(()=>Math.random()-0.5)
// }
// sort(arr)
// (arr)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// let mapped= arr.map(elem=>elem.age);
// let mid = 0;
// for(let i = 0;i<mapped.length;i++){
//  mid+=mapped[i];

// }
// (Math.ceil(mid/mapped.length))

// let strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна", ":-O"
// ];
// function nope (arr){
//     let result = []
//     for(let str of arr){
//         if(!result.includes(str)){
//             result.push(str)
//         }
//     }
//     return result
// }
// (nope(strings))

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];

// function func(a,b){
// //     if(a>b) return 1;
// //     if(b>a) return -1;
// //     return 0;

// // }

// let func = (a,b) => {
//     if(a>b) return 1;
//     if(b>a) return -1;
//     return 0;

// }
// numbers.sort((a,b) => {
//     if(a>b) return 1;
//     if(b>a) return -1;
//     return 0;
// });

// numbers.sort((a,b) => (a>b)?1:-1);

// (numbers)

// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];

// animals.sort((a,b)=>a>b?-1:1);
// (animals)

// let employees = [
//     {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
//     {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
//     {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
// ];
// employees.sort((x,y)=> {
//     let a=new Date(x.hireDate) ;
//     let b=new Date(y.hireDate);

//     return a-b;
// });
// console.table(employees)

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// numbers.sort((a,b)=>a-b);
// (numbers.reverse())

// let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"C++"}];
// let newa = freelancers.(element=>element.skill=="JavaScript");
// let names = newa.map(element=>element.name);

// (names)
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   let getfull = persons.map(element=>({
//        fullname:`${element.firstname} ${element.lastname}`
//   }))

//     (getfull)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];
// let sorted = arr.sort((a,b)=>a.age-b.age)
// console.table(sorted)

// let arr = [1, 2, 3];
// let change = arr.sort(()=>
//     Math.random()-0.5
// )
// (change)

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// let newarr = [];
// for(let str of strings){
//     if(!newarr.includes(str)){
//         newarr.push(str)
//     }
// }
// (newarr)

// let myColor = ["Red", "Green", "White", "Black"];
// let str = myColor.join("+");
// (str)

// let indexOn=[ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ];
// let filtered = indexOn.filter(elem=>elem.id==10)
// (filtered.map(elem=>elem.name))

// let arr = [];
// function range(a,b){
//     for(let i = a,j=0;i<=b;i++,j++){
//         arr[j]= i;

//     }
//     return arr
// }
// (range(4,7))

// function range(a,b){
//     let arr = new Array(b);
//     for(let i = a,j=0;i<=arr.length;i++,j++){
//         arr[j]= i;

//     }
//     return arr
// }
// (range(2,5))

// let array= [58, '', 'abcd', true, null, false, 0];
// let newArr = array.filter(element=>element!=(null,0,'',false))

// (newArr.slice(0,newArr.length-1))

// (3, 'default value')

//

// function cheange (a,b){
//     let arr = new Array(a);
//     for(let i =0;i<arr.length;i++){
//         arr[i]= b;

//     }
//     (arr)
// }
// cheange(4,10)

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// let newar = [];
// for(let i =0;i<numbers.length;i++){

//         newar[0]=numbers[Math.floor((i+1)*Math.random())]

// }

// (newar.toString())

// let array1 = [1, 2, 3];
// let array2 = [2, 30, 1];
// let merged = array1.concat(array2);
// let newarr = [];
// for(let key of merged){
//     if(!newarr.includes(key)){
//         newarr.push(key)
//     }
// }
// (newarr)

// let str = "";
// let arr = []
// for(let i =0;i<26;i++){
//     str+=(i+10).toString(36);
//     arr=str.split("")
// }
// for(let i = 0;i<arr.length;i+=2){
//     (arr[i])
// }

// let arr = [];
// for(let i = 0;i<26;i++){
//     arr[i]=(i+10).toString(36);
//     (arr[i])
// }

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let newarr = arr.filter(element=>{
//     if( Number.isFinite(element)==true);
//     return element
// })
// (newarr)

// let arr= [10,20,10,40,50,60,70];

// let num = 40;
// for(let i = 0;i<arr.length;i++){
//     let check1 = arr[i];
//     let check2 = arr[i+1]
//  if(check2+check1==num){

//      (arr.indexOf(check1),arr.indexOf(check2))
//  }

// }
// let arr = ["Есть", "жизнь", "на", "Марсе"];
// let newarr=arr.map(elem=>elem.length)
//     (newarr)

// let shoppingCart = [{
//     product: 'phone',
//     qty: 1,
//     price: 699
// },
// {
//     product: 'Screen Protector',
//     qty: 1,
//     price: 9.98
// },
// {
//     product: 'Memory Card',
//     qty: 2,
//     price: 20.99
// }
// ];

// let newarr = shoppingCart.reduce((a,b)=>{
//    return a+b.price;
// },0)
// (newarr)

// let arr = [10, 20, 10, 40, 50, 60, 70];
// let newarr = arr.reduce((a, b) => {
//   return Math.max(a, b);
// });
// console.warn(newarr);

// let wizards = [
//     {
//       name: 'Harry Potter',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Cedric Diggory',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Tonks',
//       house: 'Hufflepuff'
//     },
//     {
//       name: 'Ronald Weasley',
//       house: 'Gryfindor'
//     },
//     {
//       name: 'Hermione Granger',
//       house: 'Gryfindor'
//     }];

//     let points = {
//         HarryPotter: 500,
//         CedricDiggory: 750,
//         RonaldWeasley: 100,
//         HermioneGranger: 1270
//       };

// wizards.reduce((arr,wizard)=>{
// let key = wizard.name.replace( ' ', ' ');
// wizard.points=points[key];
// arr.push(wizard);
// return arr;
// },[])

//  let view=wizards=>(wizards);
//  console.time('r')
// function view(){
//     (wizards)
// }
// view();

// console.End('timer')

// let newarr = wizards.filter(elem=>elem.house=='Hufflepuff'

// )
// (newarr.map(elem=>elem.name))
// let newarr =[];
//  wizards.reduce((a,b)=>{
//      if ( b.house == 'Hufflepuff'){
//         newarr.push(b.name)
//      }

//  },0)
//  (newarr)

//     let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//     let petya = { name: "Петя", surname: "Иванов", id: 2 };
//     let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let arr = [ vasya, petya, masha ];
// let newarr = arr.map((elem)=>({
//     fullname: `${elem.name} ${elem.surname}`,
//     id:elem.id

// }))

// (newarr)

// let arr = [1,2,3,4,5];
// function newresult(arr){
//     let result =[];
//     let newarr = arr.reduce((init,curr)=>{
//         result.push(init)
//         return init+curr
//     },0)
//     result.push(newarr)
//     return result
// }
//  (newresult([-2,-1,0,1]))

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let newarr = arr.reduce((init,val)=>{
// return init.concat(val)

// },[])
// (newarr)

// (String.fromCodePoint(65))
// let str=""
// for(let i =1;i<200;i++){
//     str+=String.fromCodePoint(i)

// }(str.split(", "))

// let user ={};
//  user.name="John";
//  user.surname="Smith";
//  user.name="pete";
//  delete user.name;
//  (user)

// let user ={ggg:36};
// function check(user){
// for(let key in user){
//     return false
// }return true
// }
// (check(user))

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   function getsum(salaries){
//       let sum =0;
//       for(let prop in salaries){
//         sum+=salaries[prop]

//       }(sum)

//   }
// getsum(salaries)

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };
// function newm (salaries){
//   for(let prop in menu){
//      if(isFinite(menu[prop])){
//       menu[prop]*=2
//     }
//   }(menu)

//   }
//   newm();

// let fruit = "apple";
// let obj = {
//     [fruit]:5,
// }
// (obj.apple)
// function Car(make,model,year,owner){
// this.make=make;
// this.model=model;
// this.year=year;
// this.owner=owner

// }

// let myCar1 = new Car("BMW","E60",1996);

// function Person (name,surname){
//     this.name=name;
//     this.surname=surname;
// }
//  let Pet = new Person("pet", "Brown")
//  let myCar2 = new Car("mersedes","CLK" ,2001,Pet)
// //  (Pet)
// (myCar2)

// let a = {name:1};
// let b = {};
// for(let key in a){
//     b[key]=a[key]
// }
// b.name=2;
// (a)

// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// let clone = Object.assign(user,permissions1,permissions2);
// (clone)

// let obj = {
//   name: 'Иван',
//   sizes: {
//     height: 182,
//     width: 50,
//   },
// };
// // let copy = Object.assign({},obj);
// // (copy.sizes.height)
// let copy = JSON.parse(JSON.stringify(obj));
// obj.sizes.width++;
// (copy.sizes.width);

//   function clone(user){

//   for(let prop in user){
//    copy[prop]=(typeof(user[prop]==`object`))?user[prop]:clone(user[prop])

//   }
//   return copy
// }
//   (copy)

// let animal = {
//     walks:true,
//     // jumps(){
//     //     alert("it jumps")
//     // },

//     // sleeps(){
//     //     this.isSleeping=true;
//     // }
//     runs:true,

// };

// (Object.values(animal))

//  let rabbit = {
//      runs:true,
//      __proto__:animal,
//  }
// //  rabbit.sleeps()
//  for(let prop in rabbit){
//      if(rabbit.hasOwnProperty(prop)){
//          ("own prop is" + prop )
//      }
//  }
// let head = {
//     glasses: 1
//   };

//   let table = {
//     pen: 3,
//     __proto__:head,
//   };

//   let bed = {
//     sheet: 1,
//     pillow: 2,

//     __proto__:table
//   };

//   let pockets = {
//     money: 2000,

//     __proto__:bed

//   };
//   console.time(`timer`)
//  (head.glasses)
//  console.timeEnd(`timer`)

// let hamster = {
//     stomach: [],

//     eat(food) {
//       this.stomach.push(food);
//     }
//   };

//   let speedy = {
//     __proto__: hamster,
//     stomach:[]
//   };

//   let lazy = {
//     __proto__: hamster,
//     stomach:[]
//   };

//   speedy.eat("apple")
//   (speedy.stomach)

// let student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// let sum=0;
// for(let prop in student){
//     if(prop){
//         sum+=1
//     }
// }
// (sum)

// let library = [
//     {
//         author: 'Bill Gates',
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games',
//         readingStatus: false
//     }];
// for(let i=0;i<library.length;i++){
//     (library[i].title +library[i].author)
// }

//   let data = [6,4,0, 3,-2,1];
//   let newdata = []
//  for(let i = 0,j=1;i<data.length;){
//      if(data[i]<data[j]){
//          newdata[i]=data[i]
//      }else newdata[i]=data[j]
//      i++;
//      j++;
//  }
// (newdata)

// let library =
//     {
//         title:  'The Road Ahead',
//         author: 'Bill Gates',
//         libraryID: 1254
//     };

// // // let name1 = {
// // //     name:"tome",
// // //     __proto__:library,
// // // }
// // // for(let prop in name1)
// // // (Object.values(name1))

// let nano = Object.create(library,{
//     name:{
//         value:"tome"}
//     })
//     Object.setPrototypeOf(nano,{})
// (Object.getPrototypeOf(nano))

// // for (let prop in name1){
// //     if(name1.hasOwnProperty(prop)){
// //         ("own.properrty is" + prop)
// //     }else ("inherited prop is " + prop)
// // }

// let user = {
//     name: "John",
//     surname: "Smith",
//     get fullname(){
//        return `${this.name} ${this.surname}`;
//     },
//     set fullname(value){
//         [this.name,this.surname]=value.split(" ");
//     }
// };
// user.fullname = "Alice Cooper";
// (user.name)

// let user = {
//     name: "John",
//     surname: "Smith",

//     get fullName() {
//       return `${this.name} ${this.surname}`;
//     },

//     set fullName(value) {
//       [this.name, this.surname] = value.split(" ");
//     }
//   };

//   // set fullName запустится с данным значением
//   user.fullName = "Alice Cooper";

//   alert(user.name); // Alice
//   alert(user.surname); // Cooper
// "use strict";
// let user = {};
// // user.name="pete";
// Object.defineProperty(user,"surname",{
//     value:"Browns",
//     // enumerable:true,
//     writable:true,
//     configurable:true
// });
// user.surname="bla";
// (user.surname)

// "use strict";

// let user = {};

// Object.defineProperty(user, "name", {
//   value: "Вася",
//   writable: false, // запретить присвоение "user.name="
//   configurable: false // запретить удаление "delete user.name"
// });

// // Теперь попытаемся изменить это свойство.

// // в strict mode присвоение "user.name=" вызовет ошибку
// user.name = "Петя";
// (user.name)

// let user = {
//     name:"pete",
//     surname:"brown",

//     get fullname(){
// return this.name + this.surname
//     },
//     set fullname(value){
//        [this.name,this.surname] = value.split(" ")
//     }
// }
//     user.fullname="jorj sympson"
//     (user.fullname)
//     Object.defineProperty(user,"fullname",{
//         get:function(){
//           return   this.name+this.surname
//         }
//     })

// (user.fullname)
// // }
// Object.defineProperty(user,"toString",{enumerable:false})
// for(let prop in user){
//     (prop)
// }
// (Object.getOwnPropertyNames(user))

// let domb = new User("pasha volya")
// (domb)

// let user = {
//     name:"pete",
//     surname:"brown",
//     get fullname(){
//         return this.name+this.surname
//     },
//     set fullname(value){
//         [this.name,this.surname]=value.split(" ")
//     }
// }
// user.fullname="volya Pasha";
// (user.name)
// Object.prototype.hi=function(){
//     alert("hi")
// }

// let user = {
//     name:"pete",
//     surname:"johnson",
// }
// let newuser= Object.create(user,{
//  age:{
//      value:34
//  }
// })
// Object.setPrototypeOf(newuser,hi())
// (Object.getPrototypeOf(newuser))

// let obj = Object.create({},
//     {

//         birthYear:{
//             value:1997,
//             writable:true,
//             configurable:true,
//             enumerable:true,
//         },

//     age:{
//         get (){
//                return  new Date().getFullYear()-this.birthYear
//        },
//        set (value){
//            this.birthYear = value
//        },
//     }
// })
// obj.age=1990
// (obj.age)
// // for(let prop in obj){
//     (obj[prop])
// }

// // for(let prop in obj){
// //     (prop,obj[prop])

// // }

// const obj = {
//   birthYear: 1995,
//   get age() {
//     return 2021 - this.birthYear;
//   },
//   set age(val) {
//     this.birthYear = val;
//   },
// };
// obj.age = '1995';
// (obj.age);

// let obj={
//     birthYear:{
//    value:1997,
//    writable:true,
//   configurable:true,
//   enumerable:true,
// },
//     get age(){
//         return  new Date().getFullYear()-this.birthYear
//     },
//     set age(value){
//         this.birthYear=value

//     }

// }
// (obj.age)

// let obj = {
//     names:"Jon",
//     Surname:"smith",
//     birth:1990,
// get fullname(){
//     return  `${this.names} ${this.Surname}`
// },
// set fullname(value){
//     [this.names,this.Surname] = value.split(" ")
// },

// get age(){
//     return new Date().getFullYear()-this.birth
// },
// set age(value){
//     this.birth=value
// }
// }
// obj.fullname = "LEvon Brown"
// (obj.fullname)
// obj.age = 2001
// (obj.age)

// let obj2 = Object.create({},
//     {
//     birth:{
//         value:1990,
//         // writable:false,
//         // configurable:false,
//         // enumerable:true,

//     },
// age:{
//     get(){
//         return new Date().getFullYear()-this.birth
//     },
//     set(value){
//         this.birth=value
//     },
// }
// })

// Object.defineProperty(obj2,"birth",{
//     value:2001
// })
// // let tal = Object.getOwnPropertyDescriptor(obj2,'birth');
// // (tal)
// (obj2.birth)
// // obj2.age=2002;
// // (obj2.age)
// // for(let prop in obj2){
// //     (prop)
// // }

// let obj = Object.create({},
// {
//     birth:{
//         value:1990,
//         // writable:true,
//         configurable:true
//     },
//     name:{
//         value:"John",
//         configurable:true,
//     }
// })

// // Object.defineProperty(obj,"name",{
// //     value:"pete"
// // })
// // let a = Object.getOwnPropertyDescriptor(obj,"name");
// // (a)
// Object.defineProperties(obj,{
//     birth:{value:2001,writable:true},
//     name:{value:"lena",enumerable:true}

// })
// let b = Object.getOwnPropertyDescriptors(obj,"birth","name");
// (b)

// let obj = Object.create({},
//     {
//         birth:{
//             value:1990,
//             // writable:true,
//             configurable:true
//         },
//         name:{
//             value:"John",
//             configurable:true,
//         }
//     })
// Object.preventExtensions(obj);
// Object.isExtensible(obj);
// delete obj.name
// for(let prop in obj){
//     (prop)
// }
// (obj)

// let obj = {
// birth:1990,
// };

// let obj2={
//     name:"Ann",

// }
// // Object.setPrototypeOf(obj2,obj)
// // Object.preventExtensions(obj2)
// // obj.surname="Josh"
// // for(let prop in obj2){
// // (obj2[prop])
// // }
// // (Object.isExtensible(obj))

// Object.freeze(obj);
// obj.birth=1997;

// (obj)

// let obj = {

//   b:1,
//   a:undefined
// }
// let obj2 = {
//     a=2,
//     b=3,
// }
// let newObj ={}
// Object.assign(newObj,{a:obj2.a})
// (newObj)

// for(let prop in obj){
// if(obj.hasOwnProperty(prop) && obj[prop]!=null && Object.keys(obj).length!=0){
//     return true
// }else return false
// }

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// // // (Object.keys(data).length == Object.keys(data2).length);
// // (Object.values(data) === s(data2));

//  function check(obj1,obj2){
//      if(Object.keys(obj1).length !== Object.keys(obj2).length){
//          return false
//      }
//      let key1 = Object.keys(obj1);
//      let key2 =  Object.keys(obj2)
//      for(let prop of key1){
//          if(obj1[prop]!==obj2[prop] ){
//              return false
//          }
//      }
//      return true
//  }

//  (check(data,data2))

//  function shallowEqual(object1, object2) {
//     const keys1 = Object.keys(object1);
//     const keys2 = Object.keys(object2);
//     if (keys1.length !== keys2.length) {
//       return false;
//     }
//     for (let key of keys1) {
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

// const data = { a: 1, b: 2 };
// const data2 = { a: 1, b: 1 };
// function check (a,b){
//     let d = Object.getOwnPropertyNames(a);
//     let d2 = Object.getOwnPropertyNames(b);
//     if(d.length != d2.length){
//         return false
//     }
//     for(let i=0;i<d.length;i++){
//         let key = d[i];
//         if(a[key] !==b[key]){
//             return false
//         }

//     }
//     // return true
// }
// // (check(data,data2))

// function isEquivalent(a, b) {
//     // Create arrays of property names
//     let aProps = Object.getOwnPropertyNames(a);
//     let bProps = Object.getOwnPropertyNames(b);

//     // If number of properties is different,
//     // objects are not equivalent
//     if (aProps.length != bProps.length) {
//         return false;
//     }

//     for (let i = 0; i < aProps.length; i++) {
//         let propName = aProps[i];

//         // If values of same property are not equal,
//         // objects are not equivalent
//         if (a[propName] !== b[propName]) {
//             return false;
//         }
//     }

//     // If we made it this far, objects
//     // are considered equivalent
//     return true;
// }
// (isEquivalent(data,data2))

// const data1 = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// // function compare (a,b){
// //     let prop1 = Object.getOwnPropertyNames(a);
// //     let prop2 = Object.getOwnPropertyNames(b);
// //     if(prop1.length!=prop2.length){
// //         return false
// //     }
// //     for(let i = 0;i<prop1.length;i++){
// //         let key = prop1[i]
// //         if(a[key]!=b[key]){
// //             return false
// //         }
// //     }return true
// // }
// // (compare(data1,data2))
// (Object.isObject(data1))

// let myObject = {
//     "ircEvent": "PRIVMSG",
//     "method": "newURI",
//     "regex": "^http://.*"
// };
// delete myObject.regex;
// (myObject)

// const data1 = {
//     a: 1,
//     b:2,
//     c:3
// };

// // let data2 = Object.assign({},data1);
// // let data2 = JSON.parse(JSON.stringify(data1))
// // (data2.hasOwnProperty('c'))
// // (data2)
// // for(let prop in data1){
// // // if(Object.hasOwnProperty(prop)=="a"){

// // // }
// // }
// for(let prop in data1){
//     (prop,data1[prop])
// }

// function User(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age
// }

// let vasya = new User("Vasya","petrow",15)
// for(let prop in vasya){
//     (prop,vasya[prop])
// }

// function A(name){
//     this.name=name
// }
// function B(name){
//     this.name=name
// }
// let a = new A;
// let b = new B;
// alert(a===b)

// function Calc(read1,read2,sum,mult){
//     this.read1 = prompt("enter number")
//     this.read2 = prompt("enter number")

//     this.sum = function (){
//        return parseInt(this.read1)+parseInt(this.read2)
//     }
//     this.mult = function (num1,num2){
//        return this.read1*this.read2
//     }

// }
// let calc = new Calc;
// (calc.mult())

// function Calc(read,sum,mult){
//     this.read = function(){
//         this.a=prompt("a")
//         this.b=prompt("b")
//     };

//     this.sum = function (){
//        return this.a+this.b
//     };
//     this.mult = function (num1,num2){
//        return this.a*this.b
//     };

// }

// let calc = new Calc;
// calc.read()
// (calc.mult())

// function Accumulator (read,startvalue){
//     this.read = prompt("enter value",0);
//     this.startvalue=1;
//     this.acuum = function (){
//        alert(parseInt(this.read)+this.startvalue)
//     }
// }
// let acc = new Accumulator
// acc.read
// acc.acuum()

// function Person(){
//     this.name="Abo"
// }
// Person.prototype.surname="njfnef"
// let pers = new Person;
// (pers.surname)

// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this
//     }
//   };
//   ladder.down().showStep()

// let user  = {
//     name:"john",

// }
// let surname = Symbol.for('id')
// let age = Symbol.for('id')
// user[age]=25;
// user[surname]= "Brown"

// (user[age]==user[surname])
// // let secondname= Symbol.for("id")
// // user[secondname]=2;
// user[surname]=3;

// // (Symbol.keyFor(1))

// let clone = Object.assign({},user)
// (clone[id])
// for(let prop in user){
//     (prop)
// }
// let citizenID = Symbol.for('ssn');
// (Symbol.keyFor(citizenID));

// let obj = {
//     a:1,
//     b:2
// }
// let newarr = [];
// newarr = Object.entries(obj)

// for(let i = 0;i<newarr.length;i++){
//     newarr[i].reverse()
// }
// (Object.fromEntries(newarr))

// function invoke(object,path,func,args){
//     let x = path.split(".");
//     let y =x.reduce((acc,key)=> {
//     acc = acc[key] ? acc[key] : object[key];
//     return acc
//     },{});
//     return Array.prototype[func].apply(target, args);
// }
// (invoke()

// let obj = {
//     name:"John",
//     birth:1995,
//     get age(){
//         return new Date().getFullYear()-this.birth
//     },

//     set age(value){
//         value=this.birth
//     }
// }
// obj.birth=2001,
// (obj.age)

// let obj = {
//     1: "hi",
//     2: "you",
//     length:3
// }
// obj.join=Array.prototype.join;
// (obj.join(`,`))

//   Function.prototype.defer = function(ms){
//       setTimeout(this,ms)
//   };

//   function f() {
//     alert("Hello!");
//   };
//   f.defer(1000);

// let obj = {
//     width: 200,
//     height: 300,
//     title: "My menu"

//   }
//   let sum=0;
//   for(let prop in obj){
//       if(Number.isFinite(obj[prop])===true){
//          obj[prop]*=2
//       }

//       else  obj[prop]

//   }
//   (obj)

// let user = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// //   let clone = Object.assign({},user)

// //   (clone.sizes.width)

// let clone = JSON.parse(JSON.stringify(user));
// user.sizes.width++;
// (clone.sizes.width)

// let user = {
//     name: "Джон",
//     hi() { alert(this.name); }
//   };

//   // разделим получение метода объекта и его вызов в разных строках
//   let hi = user.hi();
//   hi();
// let rabbit = {
//     eats:true,
// }

// function Rabbit(name){
//     this.name=name;

// }
// Rabbit.prototype=rabbit;
// let carrot = new Rabbit("cheepy");
// (carrot.eats)

// function Rabbit(name){
//     this.name=name;
//     alert(name)
// };
// // (Object.getOwnPropertyNames(Rabbit.prototype))
// let rabbit2=new Rabbit("smth");

// let rabbit = {
//     eats:true,
// }

// function inherit(proto){
//     function F(){};
//     F.prototype=proto;
//     let object = new F();
//     return object;

// }
// inherit(rabbit)
// (F.eats)

// function Obj(name){
// this.name="john";

// }
// // obj.prototype ={
// //     gor:true
// // }
// // (obj.prototype.constructor===obj)
// let obj2 = new Obj.constructor("pete");
// (obj2.name)
// let User={
//     jumps:true
//   }
//   let rabbit = inherit(User);
//   (rabbit.jumps)
//   let user = new User.constructor('John');
// //   let user2 = new user.constructor('Pete');

//   alert( user.name ); // Pete (сработало!)

// function inherit (proto){
//     function F(){};
//     F.prototype=proto;
//     let obj = new F;
//     return obj;
// }
// let animal = {
//     eats: true
//   };
//   let rabbit = inherit(animal)
//   (rabbit.eats)

// let obj= {
//     name1:"john",
//     surname:"brown",
//     "name 2":13
// }
//     delete obj.name1

// (obj["name 2"])

// let fruit = prompt("enter")
// let user ={
//     [fruit]:5,
// }

// alert(user.apple)

// let user = {
//     name:"john"
// }
// let key = "name"
// alert(key ===undefined)

// let user = {
//     name:"john"
// }
// let clone ={};
// // for(let prop in user){
// //     clone[prop]=user[prop]
// // }
// Object.assign(clone,user)
// clone.name="jim"
// (clone.name)

// let user = {
//     name:"john",
//     // sayHi(){
//     //     alert("hi"+this.name)
//     // }

// }
// function sayHi(){
//     alert("hi")
// }
// user.sayHi=sayHi;
// user.sayHi()

// function User(name,age){
//     this.name=name;
//     this.age=age;
//     // return {age:34}
//     return;
// }

// let user1 = new User("ojjn",27);
// (user1.age)

// let id = Symbol("id")

// let user = {
//     name:"John",
//     age:17,
//     [Symbol.toPrimitive](hint){
//         // alert(`$(hint)`);
//         return hint=="string"?this.name:this.age;
//     }
// };
// alert(90+user)

// let user = {
//     name:"john",
//     age:12,
//     toString(){
//         return this.name;
//     },
//     // valueOf(){
//     //     return this.age;
//     // }
// }
// (4+user)

// let user = {
//     name:"john",
//     Surname:"Brown",
//     birth:1990,
//     get age (){
//         return new Date().getFullYear()-this.birth;
//     },
//     set age (value){
//         this.birth=value

//     },
//     get fullname(){
//         return `${this.name} ${this.Surname} `
//     },
//     set fullname (value){
//        [this.name,this.Surname]=value.split(" ")
//     },
//     };
//     // user.age=2001
//     // user.fullname = "levon Smith"
//     alert(user.fullname)

//     let obj = {
//     names:"Jon",
//     Surname:"smith",
//     birth:1990,
//     get fullname(){
//         return  `${this.names} ${this.Surname}`
//     },
//     set fullname(value){
//         [this.names,this.Surname] = value.split(" ")
//     },

//     get age(){
//         return new Date().getFullYear()-this.birth
//     },
//     set age(value){
//         this.birth=value
//     }
// }
// obj.fullname = "LEvon Brown"
// (obj.fullname)
// obj.age = 2001
// (obj.age)

// let animal = {
//     walk() {
//       if (!this.isSleeping) {
//         alert(`I walk`);
//       }
//     },
//     sleep() {
//       this.isSleeping = true;
//     }
//   };
//   let rabbit = {
//       name:"puppy",
//       __proto__:animal
//   }
//   for(let prop in rabbit){
//       (rabbit.hasOwnProperty(prop))
//   }
//   Object.defineProperty(rabbit,'hasOwnProperty()',{
//    value:'blabla',
//    enumerable:true,
//    configurable:true,
//    writable:true,
//   })
//   for(let prop in rabbit){
//     (rabbit.blabla(prop))
// }

// let animal = {
//     eats:true,
// };

// function Rabbit(name){
//     this.name=name
// };

// Rabbit.prototype=animal;
// let rabbit = new Rabbit();
// (rabbit.eats)

// class User{
//     constructor(name){
//         this.name=name
//     }
//     sayHi(){
//         alert("hi"+this.name)
//     }
// }
// let user = new User ("hjk");
// user.sayHi()

// class User {
//     constructor(name) { this.name = name; }
//     sayHi() { alert(this.name); }
//   }
//   ( User.prototype.sayHi)

// let User = class myClass{
//     sayHi(){
//         (myClass)
//     }
// }
// new User().sayHi()

// class User{
//     constructor(name){
//         this.name=name
//     }
//     get name(){
//         return this._name
//     }
//     set name(value){
//         if(value.length<4){
//             alert("too short name");
//             return;
//         }this._name=value
//     }
// }
// let user = new User("pet");
// (user.name)

// function clock (){
//     let date = new Date()
//     let hours = date.getHours()
//     let mins=date.getMinutes()
//     let secs = date.getSeconds()
//     (hours,mins,secs)
// }
// clock()

// class Animal{
//     constructor(name,speed){
//         this.speed=speed;
//         this.name=name;
//     }

//     run(){
//         alert (`${this.name}` + "speed is" + `${this.speed}` )
//     }
//     stop(){
//         alert(`${this.name}`+"is stopped")
//     }
// }
// let pet = new Animal("gosha",30);
// pet.stop()

// class Rabbit extends Animal{
//     constructor(name,ear){
//         super(name);
//         this.ear=ear
//     }
//     hide(){
//         alert(`${this.name}` +" is hiding")
//     }
//     stop(){
//         super.stop();
//         this.hide()
//     }

// }
// let rabbit = new Rabbit("petya",30);
// (rabbit.ear)
// // rabbit.stop()

// let animal ={
//     // name:"abo",
//     // sayHi(){
//     //     alert("hi" + this.name)

//     // }
//     eat:function(){}

// };
// let rabbit ={

//     __proto__:animal,
//    eat:function(){
//        super.eat()
//    }

// };

// let animal ={
//     // name:"abo",
//     // sayHi(){
//     //     alert("hi" + this.name)

//     // }
//     eat(){
//         alert("hi")
//     }

// };
// let rabbit ={

//     __proto__:animal,
//    eat(){
//        super.eat()
//    }

// };
// (rabbit.eat())
// let long ={
//     name:"Longear",
//     __proto__:rabbit,
//     // sayHi(){
//     //     super(sayHi)
//     // }

// }

// rabbit.sayHi()

// class Animal {

//     constructor(name) {
//       this.name = name;
//     }

//   }

//   class Rabbit extends Animal {
//     constructor(name) {
//     //   this.name = name;
//     super(name);
//       this.created = Date.now();

//     }
//   }

//   let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
//   alert(rabbit.name);

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }

//     render() {
//       let date = new Date();

//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;

//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;

//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;

//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//       (output);
//     }

//     stop() {
//       clearInterval(this.timer);
//     }

//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
// }

// class Animal {
//     constructor(name,speed){
//         this.name=name;
//         this.speed=speed;
//     }

//     walk(){
//         alert(`${this.name}` +" " + "speed is" + " " +`${this.speed}`)
//     }
//     stop(){
//         alert(`${this.name}` + " " + " stopped")
//     }

//     define(){
//         if(this.speed>0){
//            this.walk()
//         }else  this.stop()
//     }
// }
// let animal = new Animal("name", -8)
// animal.define()
// for(let prop in animal){
//     // if(this.speed>0){
//     //     return animal.walk()
//     // }else return animal.stop()

// }

// class Rabbit extends Animal{
//     constructor (name,ear){
//         super(name)
//         this.ear=ear
//     }

// hide(){

//     alert(`${this.name}` + " " + " is hiding")
//     super.stop()
// }
// }
// let rabbit = new Rabbit("pushok",10);
// (rabbit.ear)

// let  animal ={
//     name: "Животное",
//   eat() {         // animal.eat.[[HomeObject]] == animal
//     alert(`${this.name} ест.`);
//   }
// }

// let  rabbit={
//     __proto__:animal,
// //     eat(){
// // super.eat()
// //     }
// }
// // Rabbit.name="rabbi"

// let long = {
//     name:"ifneirfgne",
//     __proto__:rabbit
// }
// long.eat()

// class Article{
//     constructor(name,date){
//         this.name=name;
//         this.date=date;

//     }

//     static compare (articleA,articleB){
//         return articleA.date-articleB.date;
//     }
// }

// class Newa extends Article{

// }

// // let articles=[new Article("hyml", new Date(2019,1,3)),new Article("css", new Date(2018,4,5))]
// let articles=[new Newa("hyml", new Date(2019,1,3)),new Newa("css", new Date(2018,4,5))]

// articles.sort(Newa.compare);
// (articles[0].name)

// class Article{
//     constructor(name,date){
//         this.name=name;
//         this.date=date;

//     }
//     static articlemkr(){
//         return new this("fgerwgwg" , new Date())
//     }
// }
// let art = Article.articlemkr();
// (art.name)

// class CoffeeMachine{
//     _waterAmount=0;
//     //
//     set waterAmount(value){
//         if(value<0){
//             throw new Error("not enough water");
//             this._waterAmount=value
//         }
//     }
//    constructor(power){
//        this._power = power;
//     //    alert("coffeeMachine power is" + `${this.power}`)
//    }
//    get power(){
//     return this._power
// }
// }
// let coffeMachine = new CoffeeMachine(10);
// coffeMachine.power = 14;
//    alert("coffeeMachine power is" + `${coffeMachine.power}`)
// // coffeMachine.waterAmount=-3;

// coffeMachine()

// class Coffe{
//     #water=200
//     #checkWater(value){
//         if(value<0) throw new Error("not enough water");
//         if(value>this.#water) throw new Error("too much water");
//         this.#water = value;
//     }
// }
// let coffe = new Coffe();
// coffe.#checkWater(1500)

// class Animal{};
// class Rabbit extends Animal{};
// let rabbit = new Rabbit();
// // alert(rabbit instanceof Animal)
// // alert(rabbit.__proto__.__proto__=== Animal.prototype)
// alert(Rabbit.isPrototypeOf(rabbit))

// function pow(x,n){
//     let y  = 1;
//     for(let i =0;i<n;i++){
//         y*=x
//     }return y
// }

// alert(pow(2,0))

// function pow(x,n){
//     if(n==1){
//         return x
//     }
//     else{return x*pow(x,n-1)}

// }
// alert(pow(3,3))

// function sumTo(n){
//     if (n==1){
//         return n
//     }
//     else return (n*sumTo(n-1))
// }
// (sumTo(5))
// let sum = 0;
// for(let i = 0;i<=100;i++){
//     sum+=i
// }
// (sum)

//fibonacci

// let a1=0;
// let a2=1;
// let a3 ;
// let count=77;

// (a1,a2)

// for(let i = 2;i<count;i++){
// a3=a1+a2
//     (a3)
//     a1=a2;
//     a2=a3;

// }

// function fib(n){

//     if(n<=1){
//         return n
//     }return (fib(n-1)+fib(n-2))
// }
// (fib(77))

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
//   while(list){
//       (list.value);
//       list = list.next
//   }

// function print(list){
//     (list.value);
//     if(list.next){
//         return print(list.next)
//     }
// }
// print(list)

// function find(x,y,z){
//   if(x%z==0 && y%z==0){
//       return z
//   }  return find(x,y,z-1)
// }
// (find(2154,458,458))

// (Number.MAX_VALUE)
// let x =4,y=5;

// for(let i=Number.MAX_VALUE;i!=0;i--){
//     if(i%x==0 && i%y==0){
//          alert(i)
//     }

// }
// let arr = []
// function fib(a){

// if(a<=1){
//     return [0,1]
// }arr = fib(a-1)
// arr.push (arr[arr.length-1]+arr[arr.lengt-2])
// return arr

// }
// (fib(5))

// function check(a){
//     if(a%2==0){
//         return "even"
//     }return  "odd"
// }
// (check(10))

// function sum(...args){
//     let sum=0;
//     for(let prop of args){
//         sum+=prop;

//     }return sum
// }
// (sum(1,2,3,4,5,6,7,8,9))

// function names(name,surname,...lastname){
//     // document.write(name + surname )
//     // alert(lastname[1])
//     (arguments[2])
// }
// names("arman","grigoryan","papini","levoni")

// let arr = [1,2,3];
// let str = "hello";
// // [...str].reverse
// // ([...str].reverse())
// (Array.from(str))
// function counter(){
//     let count =0;
//     return function(){
//        return  count++
//     }
// }
// let counterr=counter()
// alert(counterr());
// alert(counterr())
// (function(){
//     let str ="hello";
//     alert(str)
// })();

// function f() {
//     let value = Math.random();

//     return function() { alert(value); };
//   }

//  f()
//   let arr = [f(), f(), f()];
//   (arr)

// function g (value){
//     let v=value
//    return  function (value1){
//         return v+value1
//     }

// }
// (g(1)(2))
// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(item=>(item>2 && item<5));
// (newarr)

// function inBetween(a,b){
// // let newArr = arr.filter(item=>(item>a && item<b));
// // return newArr
// if(item=>(item>a && item<b){
// return item
// }
// }
// (arr.filter(inBetween(2,7)))

// function inBetween(a,b){
//     let item=arr;
//     if(item>a && item<b){
//         return item
//     }

// }
// (inBetween(3,6))
// // (arr.filter(inBetween(2,5)))

// function gh(a,b){
//     return function (x){
//         return x>a && x<b
//     }
// };
// // let arr = [1,2,3,4,5,6,7,8,9];
// // (arr.filter(gh(2,5)))
// (gh(3,6))

// let a = 'global';
// function outer() {
//     let b = 'outer';
//      (b);
// function inner() {
//       let c = 'inner'
//     //   (c);   // выдаст 'inner'
//     //   (b);   // выдаст 'outer'
//     //   (a);   // выдаст 'global'
//     }
// //     // (a);     // выдаст 'global'
//        // выдаст 'outer'
//     inner();
//   }
// outer();

// // (a);
// // (b);
//     // выдаст 'outer'

// let ­scope­=­ "global­scope";­­­­­­­­­
// function­ checkscope()­{
// ­­­­let­ scope­=­"local­scope";­­­­­­
// ­­­­function­nested()­{ ­­­­­­­­let­scope­=­"nested­scope";­//­Вло­жен­ная­об­ласть­ви­ди­мо­сти­ло­каль­ных­пе­ре­мен­ных ­­­­­­­­return­scope;­­­­­­­­­­­­­­­//­Вер­нет­зна­че­ние­этой­пе­ре­мен­ной­scope
// ­­­­}
// ­­­­return­ nested();
// } checkscope()­­­

// let scope = "globalscope";
// function check(){
//     let scope = "localscope"
//    return  function nested(){
//         let scope ="nestedscope"
//         return scope
//     }

// }(check())
// let scope = "global";
// function f(){

//     let scope="local"
//     function f1(){
//     return scope
//     }return f1
// }
// (f()())

// function counter(){
//     let count=0;
//     return {
//      plus:function (){
//          return count++
//      },
//      reset:function (){
//          return count =0
//      }
//     }
// }
// let c=counter(),d=counter();

// (c.plus())
// (c.reset())
// (c.plus())
// (c.plus())
// (c.plus())
// (d.reset())
// (c.plus())

// function count(n){
//     return{
//         get c(){
//             return n++
//         },
//         set c(value){
//             if (value>=n){
//                 n=value
//             }else throw Error("the counter cant be reseted")
//         }
//     }
// }
// let d = count(150)

// (d.c)
// (d.c)
// d.c=140
// (d.c)

// function sum(a){
//     return function(b){
//         return b+a
//     }
// }
// (sum(-5)(2))

// let arr = [1,2,3,4,5];
// (arr.filter(item=>(item>=3 && item<=5)))
// function inb(a,b){
//  return function (x){
//      if(x>=a && x<=b)
//      return x
//  }
// }
// let arr = [1,2,3,4,5];
// (arr.filter(inb(1,4)))

// function check(arr){
//     return function(x){
//         return arr.includes(x)
//     }
// }
// let arr = [1,2,3,4,5];
// (arr.filter(check([1,2])))

//   (users.sort((item1,item2)=>item1.age>item2.age?1:-1))

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function change(item){

//         return (item1,item2)=>item1[item]>item2[item]?1:-1

// }

// users.sort(change('age'));
// users.forEach(user => (user.age));

// function consta (v){
//     return function(){
//         return v
//     }
// }
// let fu = [];
// for(let i = 0;i<10;i++) fu[i]=consta(i);
// (fu[5]())

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // функция shooter
//         alert( i ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//       i++;
//     }

//     return shooters;
//   }

//   let army = makeArmy();

// function makeArmy(v){
//     return function (){
//         return v
//       }

//   }

// let shooters = [];
// let i = 0;
// while (i < 10) {

//   shooters.push(i);
//   i++;
//   shooters[i]=makeArmy(i)
// }

// (shooters[3]())

// let x=7;
// function a(y){
//   return x+y
// }
// function b(z){
//   let x=8;
//   return z(9)
// }(b(a))

// function disemvowel(str) {
//   return str;
// }

// let str = "This website is for losers LOL!";
// let arr = [...str];
// // let arr = str.split("")
// // let newstr  = new String(arr)
// // (newstr.replaceAll("o"," "))
// for(let i = 0;i<arr.length;i++){
//   // if(newstr[i]=="a" || newstr[i]=="e" || newstr[i]=="i" || newstr[i]=="o" || newstr[i]=="u"){
//     // newstr.replaceAll("i"," ")
//   // }
//   if(arr[i]==="i" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u"){
//   delete arr[i]
//   }
//   (arr)
// }

// let newstr  = new String(arr)
// (newstr)

// function check(num){
//   if (num>0 || num==0) return 0-num;
//   else return num
// }
// (check(0))
// (check(9))

// function create(){
// let arr = []
//   for (let i =0;i<arr.length;i++ ){
//     arr[i]= function(){return i}
//   }return arr

// }
// let arr = create();
// (arr[5]())

// function create (v){
//   return function (){
//     return v
//   }
// }
// let arr = [];
// for (let i = 0;i<10;i++){
// arr[i]=create(i)
// }

// (arr)
// let count =0;

// function gets(){
//   let count =1;

//   return function (a,b){
//     if(count%2==0 && count>3){

//       ("hmm, I don't know!")
//     }else (a+b)

//      return count++

//   }

// }

// let  cnt=gets()
// cnt(5,6)
// cnt(5,8)
// cnt(4,6)
// cnt(2,3)
// cnt(5,6)
// cnt(5,8)

// (arr.map(item=>item*2));

// function change(arr){
//   return function (n){
//     return arr.map(item=>item*n)
//   }
// }
// let arr = [1,2,3,4];
// // let changed = change(arr);
// // (changed(5))
// (change([4,5,6,7])(3))

// let str = "3 * 2";
// let arr = str.split("");

// for(let i = 0;i<arr.length;i++){
//   if( isFinite(arr[i])){
//   arr[i]=parseInt(arr[i])
//   (arr[i])
//   }
//   // else if(arr[i]=="*"){
//   //    arr[i]='*'

//   // }

// }

// function changeStr(){

//   return function(arr){
//       for(let i = 0;i<arr.length;i++){

//           if(arr[i]== "*" && isFinite(arr[i]==true)){
//             (arr[i-1]*arr[i+1])
//           }
//           if(arr[i]== "-"){
//             (arr[i-1]-arr[i+1])
//           }
//           if(arr[i]== "+"){
//             (arr[i-1]+arr[i+1])
//           }
//           if(arr[i]== "/"){
//             (arr[i-1]/arr[i+1])
//           }
//       }return (arr)
//   }
// }
// let str = "5 * 9";
// let changed=changeStr(str);
// changed(str.split(" "))

// let str = "3*5";
// let arr = str.split("")
// for(let i = 0;i<arr.length;i++){
//   if(arr[i]== "*"){
//     (arr[i-1]*arr[i+1])
//   }

// }

// let arr = [2,3 ];

// function checkArr(arr){
//   return function (){
// for(let i=0;i<arr.length;i++){
//   if((Math.sqrt(arr[i])-Math.floor(Math.sqrt(arr[i]))!=0)){

//     return false

//   }
//   return true
// }
//   }
// }
// let x =checkArr(arr)
// (x())

// function avg(){
//   let count = 0
//   let count2=0
//   return function(x){
//     count++
//      count2+=x
//     return (count2/count).toFixed(2)
//   }
// }
// let y = avg()

// (y(5))
// (y(10))
// (y(20))
// (y(5))
// function say(a){
//   return function(b){
//     return a+" " +b
//   }
// }
// let f = say("hello");
// (f("world"))

// function pow(x){
//   if(x===1){
//     return x
//   }else return x*pow(x-1)
// }
// (pow(5))

// function fib(x){
//   if(x<=1){
//     return x
//   } return (fib(x-1)+fib(x-2))
// }
// (fib(5))

// let a1=0,a2=1,a3,n=15;
// (a1,a2)

// for(let i=1;i<n;i++){
//   a3=a1+a2
//   (a3)
//   a1=a2;
//   a2=a3
// }

// function pers(x){
//   let count =0

//   if(x<10){
//     return x
//   }return count+pers(x%10,x/10)

// }
// (pers(29))

// let x = 12345 ;
// let count =0;
//  while(x>0){

//   count+=x%10;
//   x=Math.floor(x/10)

//  }
//  (count)

// function getnum(x,y){
//     if(x==y){
//         return x
//     }return x+getnum(x+1,y)
// }
// (getnum(1,4))

// function getnum(x){
//     if(x===0){
//         return x
//     }return x+getnum(x-1)
// }
// (getnum(8))

// function repeatt(x,y){
//     return y.repeatt(x)
// }
// (repeatt(3,"hello"))

// let str = "abba"
// let arr = [...str]

// for(let i =0;i<arr.length/2;i++){
//     let temp = arr[i];
//     arr[i]=arr[arr.length-i-1];
//     arr[arr.length-i-1]=temp;

// }
// let newstr=arr.join("")
// (newstr==str)

// function check(str){
//     if(([...str].reverse().join("")).toLowerCase()===str.toLowerCase()){
//         return true
//     }else return false
// }
// let str = "Abba"
// (check(str))

// function fac(x){
//     if(x===1){
//         return x
//     }return x*fac(x-1)
// }
// (fac(3))
// (fac.length)

//

// let x = 5;
// let arr =[];
// for(let i=0;i<6;i++){

//     arr.push(x)

// }
// (arr)

// window.user={
//     name:"JOhn"
// }

// alert(user.name)

// function g(name, lastname,...notName){
// //  alert(name+lastname)
//  alert(notName[0])
// }
// g("levon","Aronyan","Smbat","papiki")

// function change(arr){
//     return function(){
//         return arr.map(item=>item*2)
//     }
// }
// let a = change([1,2,3])
// (a())

// return a function that returns n
// function always (n) {
//     return function(){
//         return n
//     }
// }
// let three = always(3)
// (three())

// function sayHi(){
//     alert("HI")
//     (sayHi.counter++)
// }
// sayHi.counter=1;
// sayHi()
// sayHi()
// sayHi()

// function cc(){
//     function counter(){
//         return counter.count++
//     }
//     counter.count=0
//     return counter
// }

// let bb = cc();
// bb.count=10;
// alert(bb())
// alert(bb())
// alert(bb())

// let sayhi=function func(who){
//     // alert("hi"+`${who}`)
//     if(who){
//         alert("hi"+`${who}`)
//     }else func("GUest")
// }
// // sayhi()
// let hom=sayhi
// sayhi=null
// hom()
// function cc(){
//     function counter(){
//         return counter.count++

//     }
//     counter.count=0
//     counter.set=function (value){
//         return counter.count=value
//     }
//     counter.decrease = function(){
//         return counter.count --
//     }
//     return counter

// }
// let counter=cc();
// // counter.count=10;

// counter.set(10)

// alert(counter())
// counter.decrease()
// alert(counter())
// function sum(a){
//     return function(b){
//         return a+b
//     }
// }
// (sum(5)(6))

// let sum = "2";
// let sum2=Number(sum)
// (typeof sum2)
// function sum(a){
//     let a
//     valueOf(){
//         return this.a
//     }
// }

// let obj ={
//     name:"John",
//     age:500,
//     // [Symbol.toPrimitive](hint){
//     //     alert(`${hint}`);
//     //    return hint=="string"?`${this.name}`:this.age

//     // }
//     toString(){
//         return this.name
//     },

//     valueOf(){
//         return this.age
//     }
// }
// alert(obj)
// alert(+obj)
// alert(obj+600)

// let a = prompt("Insert your age")
// let b =a<18?"hm, come back with dad":a>18 && a<21?"Nearly but not yet":"welkome";
// alert(b)

// let a = prompt("insert number");
// let count = 0;
// while(a){
//     count+=parseInt(a)
//     a=prompt("insert number")

// }(count)

// function sum(a){
//     let c=a;
//      function f(b){
//        c+=b;
//        return f

//    }
//    f.toString=function(){
//     return c
//    }
//    return f
// }alert( sum(0)(1)(2)(3)(4)(5) )

// let str = new Function(`a`,`b`,`alert(a+b)`)
// str(1,2)

// function hi(arg1,arg2){
//     alert(arg1+arg2)
// }

// setTimeout(hi, 5000,"name","surname");
// // setInterval(hi, 2000,"name","surname");
// // clearInterval(hi)
// clearTimeout(hi)
// alert(hi)

// let timer = setTimeout(()=>(alert("hi"),2000))

// clearTimeout(timer)
// function tim(msg){
//     alert(msg)
// }
// let tm=setInterval(tim,2000,"hello");
// clearInterval(tm)

// function b(){
//     alert("hi")
// }
// setTimeout(function tick(){
//     alert("hi")
//     setTimeout(tick,2000)
// },2000)

// let i =1;
// setInterval(function f(){alert(i)},2000)

// let i = 1;
// setTimeout(function func(){
//     alert(i)
//     setTimeout(func,2000)
// },2000)

// setTimeout(()=>alert("hello"))

// alert("hi")
// alert("hi2")

// let start = Date.now()
// let arr = []
// setTimeout(function f(){
//     arr.push(Date.now()-start)
//     if(start+100<Date.now())(arr)
//     else setTimeout(f)
// })

// setTimeout(function f(count=1){

//     alert(count)
//     setTimeout(f,1000,count++)
// },1000)

// function g(){
//     let count=0;
//     return function(){
//         return count++
//     }
// }
// let f=alert(g())
// alert (f())
// alert (f()

// alert (f())
// setTimeout(function f(count){
//     count++
//     // function(){
//     //     return count++
//     // }
//     setTimeout(f,1000,1)
// },1000)

// setInterval(f(),1000)

//

// let timer = setTimeout(function tick(){
//     alert("tick")
//     timer = setTimeout(tick,1000)
// },1000)

// let i=0;
// let arr = []
// setTimeout(function tick(){
//     arr.push(i++)
//     // for(let i = 0;i<=5;i++){

//     // }(i)

//     if(i<2)i++

//    else setTimeout(tick,1000)
// },1000)

// function f(from,to){
//     (from)
//     let time=setTimeout(f,1000,++from)
//     if(from>4){
//         clearTimeout(time)
//     }

// }
// setTimeout(f,1000,1)

// function count(from,to){
//     let timer = setInterval(function(){
//         from<=to?(from++):clearInterval(timer)},1000)
// }
// count(1,4)

// let a =setTimeout(function count(sum){

//     if(sum<4){
//         (++sum)
//     }else clearTimeout(a)
// a=setTimeout(count,1000,1)

// },1000)

// function count(from,to){
//     let a = setTimeout(function go(){
//         (from)
//         if(from<to){
//             from++
//             setTimeout(go,1000)
//         }clearTimeout(a)
//     },1000)
// }

// count(1,4)

// function count(from,to){
//     let a = setTimeout(function go(){
//         if(from<=to){
//             (from)
//             from++
//             setTimeout(go,1000)
//         }clearTimeout(a)
//     },1000)

// }
// count(1,4)

// function fact(num){

//     if(num===1){
//         return num
//     }return num*fact(num-1)
// }
// (fact(15))

// function fact(num){
//     let i=num-1
//     let a= setTimeout(function b(){

//        if (i>1){

//            (num*=i);
//            i--

//            setTimeout(b,1000)
//         }clearTimeout(a)
//     },1000)
// }
// fact(15)

// function start(){

//     let a = setTimeout(function b(){
//         (new Date())
//     },1000)
//    setTimeout(a,1000)
// }
// start()
// function start(){
//     (new Date())

// }
// setInterval(start,60000)

// let a = setTimeout(function b(){
//     (new Date)
//     setTimeout(b,1000)
// },1000)

// let map =new Map()
// map.set(12,45)
//     .set(11,46)

// ([...map.entries()])
// console.time()

// function slow(n){
//     if(n<=1){
//         return n
//     } return (slow(n-1)+slow(n-2))
// }
//  (slow(30))
//  console.timeEnd()

// console.time()
//  function cache(func){
//      let arr = []
//      return function(x){
//          let i=x.toString()
//          if(arr[i]==undefined){
//              arr[i]=func(x)
//          }
//          return arr[i];
//      };
//  }

//  slow=cache(slow)

// function cachingDecorator(func) {
//     let cache = new Map();

//     return function(x) {
//       if (cache.has(x)) {    // если кеш содержит такой x,
//         return cache.get(x); // читаем из него результат
//       }

//       let result = func(x); // иначе, вызываем функцию

//       cache.set(x, result); // и кешируем (запоминаем) результат
//       return result;
//     };
//   }
//   slow=cachingDecorator(slow)

// function cache(func){
//     let map=new Map()
//     return function(x){
//         if(map.has(x)){
//             return map.get(x)
//         }

//         // let result = func(x)
//         return map.set(x,func(x))
//         // return result
//     };

// }

// function cache(func){
//     let arr =[]
//     return function(x){
//         let i=x.toString;
//         if(arr[i]==undefined){
//             arr[i]=func(x)
//         }

//         return arr[i]
//     }
// }
// slow=cache(slow)
// //  (slow())
//  (slow(43))
//  console.timeEnd()

// console.time()

// function slow(n){
//     if(n<=1){
//         return n
//     } return (slow(n-1)+slow(n-2))
// }
//  (slow(30))
//  console.timeEnd()

// console.time()
// function cache(func){
//     let map = new Map();
//     return function(x){
//         if(map.has(x)){
//             return map.get(x)
//         }
//         // let result = func(x)
//         map.set(x,func(x));
//         return func(x)
//     };
// }

// slow=cache(slow)
// (slow(30))
// console.timeEnd()

// function sayHi(){
//     return ("hi" +this.name)
// }

// let john = {
//     name:"john"
// }
// let jane = {
//     name:"jane"
// }
// (sayHi.call(jane))
// console.time()
// let obj = {
//     method1(){
//         return 65
//     },
//     method2(x,y){
//        return Math.pow(x,this.method1())
//     }

// }
// (obj.method2(65))
// console.timeEnd()
// console.time()
// function cache(func){
//     let map=new Map()
//     return function (n){
//         if(map.has(n)){
//             return map.get(n)
//         }
//         let result = func.call(this,n)
//         map.set(n,result)
//         return result
//     }
// }
// obj.method2=cache(obj.method2)
// (obj.method2(65))
// console.timeEnd()

// console.time()
// let obj = {

//     method2(x,y){
//        return Math.pow(x,y)
//     }

// }
// (obj.method2(65,2))
// console.timeEnd()
// console.time()
// function cache(func){
//     let map=new Map()
//     return function (n,z){
//         if(map.has(n,z)){
//             return map.get(n,z)
//         }
//         let result = func.apply(obj,[n,z])
//         map.set(n,z,result)
//         return result
//     }
// }
// obj.method2=cache(obj.method2)
// (obj.method2(65,2))
// console.timeEnd()
// console.time()
// let obj = {

//     method2(x,y){
//        return Math.pow(x,y)
//     }

// }
// (obj.method2(65,65))
// console.timeEnd()

// function decor(func,hash){
//     let map =new Map()
//     return function (){
//         let key=hash(arguments)
//         if(map.has(key)){
//             map.get(key)
//         }
//         let result = func.apply(this,arguments)
//         map.set(key,result)
//         return result
//     }
// }

// function hash(arguments){
//     return arguments[0]+arguments[1]
// }
// obj.method2=decor(obj.method2,hash)
// (obj.method2(65,65))

// console.time()
// function cache(func,hash){
//     let map=new Map()
//     return function (){
//         let key = hash(arguments)
//         if(map.has(key)){
//             return map.get(key)
//         }
//         let result = func.call(this,...arguments)
//         map.set(key,result)
//         return result
//     };

// }
// function hash(arguments){
//     return arguments[0] +','+ arguments[1]
// }
// obj.method2=cache(obj.method2,hash)
// (obj.method2(65,65))
// console.timeEnd()

// function fib(n) {
//   let i = n - 1;
//   let a = setTimeout(function b() {
//     if (i > 1) {
//       ((n *= i));
//       i--;
//       setTimeout(b, 1000);
//     }
//     clearTimeout(a);
//   }, 1000);
// }
// fib(15);

// function add(n,...arguments){
//     return n(...arguments)
// }
// (add(n,2))
// function n(z){
//     return z+1
// }

// function check(o,arr){
//     return o(arr)
// }
// (check(x,[4,3,2,1,5,6,1,1]))
// function x(arr){
//     let newarr = []
//     for(let i=0,j=1;i<arr.length;i++ ){
//         if(arr[i]==arr[j]){
//             newarr.push[arr[i]]
//             j++
//         }
//         return newarr[i]
//     }
// }
// (x[1,2,3,1])

// function x(arr){
//     let z = arr.sort((a,b)=>a-b)
//     let y=[]

//     for(let i=0;i<z.length;i++ ){
//         if(z[i]==z[i+1])
//         y.push(z[i])
//     }
//     return y
// }
// function x(arr){
//     let y=[]

//     for(let i=0;i<arr.length;i++){
//        if(!y.includes(arr[i])){
//            y.push(arr[i])

//        }

//     }

//     return y
// }
// (x([1,2,3,4,1]))

// function dna(x,arr){
//     return x(arr)
// }
// (dna(x,["A","T"]))

// function x(arr){

//     for(let i=0;i<arr.length;i++){

//       arr[i]=arr[i].replace("A","T").replace("T","A")

//     }
// return arr

// }
// function change (x,num,str){
//     return x(num,str)
// }
// (change(x,[1,2,3],"asdhi"))

// function x(num,str){
//       let arr =str.split("")
//     for(let i=0;i<num.length;i++){
//         if(arr[num[i]]){
//             arr[num[i]]=arr[num[i]].toUpperCase()

//         }
//         }
//         (arr)
//     }
//    x([1,2,3],"asdhi")

// let arr = [4,5,6,3,7];
// let newar = [0,2];
// for(let i=0;i<arr.length;i++){
//     if(i=newar[i]){

//     }
// }

// let str = "abcdef"
// let num = [1,2,5],j
// let arr =str.split("")
// for(let i=0;i<num.length;i++){
//     // if(arr[num[i]]){
//     //     arr[num[i]]=arr[num[i]].toUpperCase()
//     //     // (arr[i])

//     // }

// }

// function capitalize(s,arr){

//     let capS = s.split("");

//     for(let i = 0; i < arr.length; i++) {
//       if(capS[arr[i]]) {
//         capS[arr[i]] = capS[arr[i]].toUpperCase();
//       }
//     }

//     capS = capS.join("");
//     return capS
//     };

//     (capitalize("absdef",[2,4]))

//     let count=1;
//  for(let i=1;i<=20;i++){

//      count=count*i

//      (count)

//  }

// function fact(count){
// let arr = []
// for(let i=2;i<=Number.MAX_VALUE;){

//    if(count%i==0){
//     count=count/i
//     arr.push(count)

//    i++
//    }else break

// }
// return(arr[arr.length-2].toString()+"!")
// }
//  function factOf(fact,num){
//      return fact(num)
//  }
// (factOf(fact,720))

// console.time()

// function fact(n){
//     if(n===1){
//         return n
//     }return n*fact(n-1)
// }
// (fact(200))
// console.timeEnd()

// console.time()

// function cache(func){
//     let map =new Map()
//     return function (x){
//         if(map.has(x)){
//             return map.get(x)
//         }
//         let result = func(x)
//         map.set(x,result)
//         return result;
//     }
// }

// fact = cache(fact)
// (fact(199))
// console.timeEnd()
// console.time()
// function fib(n){
//     if(n<=1){
//         return n
//     }return n+(fib(n-1)+fib(n-2))
// }
// // (fib(40))
// // console.timeEnd()

// console.time()

// function cache(fun){
//     let map=new Map
//     return function (x){
//         if(map.has(x)){
//            return map.get(x)
//         }
//         // let result = fun(x)
//        map.set(x,fun(x))
//         return fun(x)
//     }
// }
// fib=cache(fib)
// (fib(100))
// console.timeEnd()

// function fizbuzz(n){
//     for(let i=1;i<=n;i++){

//     if(i%5==0 && i%3==0){
//         ("FizzBuzz")
//     }else if(i%3==0){
//         ("Fizz")
//     }else if(i%5==0){
//         ("Buzz")
//     }else (i)
// }
// }
// fizbuzz(15)

// function isPrime(n){
//     for(let i=0;i<9;i++){
//         if(n%i==0 && i>1){return i}

//     }
// }
// (isPrime(4))

// function fibonacci(n){
//     if(n<=1){
//         return n
//     }return (fibonacci(n-1)+fibonacci(n-2))
// }
// (fibonacci(5))

// function fibonacci(n){
// let a1=0,a2=1,a3
// let arr=[0,1]
// for(let i =2;i<n;i++){

//     a3=a1+a2;
//     // (a3)
//     a1=a2
//     a2=a3
//     arr.push(a3)

// }
// (arr)
// }
// fibonacci(15)

// let arr = ["aaaegregbc","azfc","azfc","azfc","azfc","azfc","aazrfa","aazrfa","aazrfa","aazrfa"]
// let newarr=arr.sort((a,b)=>a>b?1:-1)
// (newarr.filter(value=>value.length>4))
// let count =0
// for(let i =0;i<newarr.length;i++){
//     if(arr[i]===arr[i+1]){
//         count++
//     }

// }
// (count)

// let n=15;
// const arr =new Array(n).fill(0);
// arr.length=n;
// let newarr = [];
// newarr.length=Math.floor(n/2);
// for(let i=0,j=-n;i<newarr.length;i++,j++){
//     newarr[i]=j;
//     arr[i]=newarr[i]
//     arr[newarr.length+i]=Math.abs(newarr[i])
// }
// (arr)

// console.time()

// function fact(n){
//     if(n===1){
//         return n
//     }return n*fact(n-1)
// }
// // (fact(200))

// console.time()

// function cache(func){
//     let map = new Map()
//     return function(x){
//         if(map.has(x)){
//             return map.get(x)
//         }
//         map.set(x,func(x))
//         return func(x)

//     }
// }
// fact = cache(fact)
// (fact(150))

// let user = {
//     method2(){
//         return 1
//     },
//     slow(x){
//         return x+this.method2()
//     }
// }

// function cache(func){
//     let map=new Map()
//     return function(x){
//         if(map.has(x)){
//            return map.get(x)
//         }
//         map.set(x,func.call(this,x))
//         return map.get(x)
//     }

// }

// user.slow=cache(user.slow)
// (user.slow(2))

// function say(phrase){
//     return (phrase +this.name)
// }
// let user ={
//     name:"john"
// }
// let admin={
//     name:"Jane"
// }
// (say.call(admin,"hello"))

// let arr=[]

// for(let i=500;i<510;i++){
//    arr.push(i)

// }
// let newarr = arr.sort((a,b)=>a>b?-1:1)
// for(let i =0;i<newarr.length;i++){
//     (newarr[0]+newarr[newarr.length-1])
// }

// let arr = []
// for(let i=-130,j=0;i<-118;i++,j++){
//     arr.push(i)
// }

// let newarr = arr.sort((a,b)=>a>b?-1:1)
// (newarr.indexOf(newarr[0]))
// (newarr.indexOf(newarr[newarr.length-1]))

// let arr = [11233,2323236]

// (arr.map(n))

// function n(item){
//     let count2=0
//     let count=0;
//     let count1=1
//     while(item>0){
//         count+=item%10;
//         count1*=item%10
//         item=Math.floor(item/10)
//         count2++

//     }
//     // item=count1
//     // item=count2
//     item=count
//     // (count2)
//     (item)
//     // (count1)

// }

// function hash (arguments){

//      (...arguments)

// }

// hash(5,6,7)

// let worker = {
//     slow(min, max) {
//       return min + max;
//     }
//   };

//  function memoize(f){
//      let cache = {}
//      return function(){
//         (arguments)
//         //  let key = arguments.length + Array.prototype.join.call(arguments,",")
//         let key = arguments.toString()
//          if(key in cache){
//             return cache[key]

//          }else return cache[key] = f.apply(this,arguments)
//      }
//  }

//  worker.slow = memoize(worker.slow)
//  (worker.slow(2,5,6))

// function work(a, b) {
//     return ( a + b );
//   }

//   function wrapper(func){
//       let obj = {}
//       return function(){
//           let key = arguments.toString()
//           if(key in obj){
//             //   ((obj[key]))
//            (obj[key])
//           }else (obj[key]=func.apply(this,arguments));

//       }
//   }

//   work=wrapper(work)
// //   work(3,4)
//   setTimeout(work,5000,1,2)

// function work(a, b) {
//     return ( a + b );
//   }
//   (work(3,4))
// // console.time()

//   function wrapper(func){
//       let obj = {}
//       return  function(){
//           let key = arguments.toString()
//           if(key in obj){
//              let a = ()=>{(obj[key])}
//             //   (obj[key])
//           }else let b = ()=>{(obj[key]=func.apply(this,arguments))}
//         //   (obj[key]=func.apply(this,arguments))

//       }

//   }
// //   console.timeEnd()

//   work=wrapper(work)
//   work(1,2)

// let obj = {
//     firstname:"JOhn",
//     second:"Brown",
//     say(phrase){
//         (phrase+this.firstname)
//     },

//     bye(phrase){
//         (phrase + this.second)
//     }
// }
// // setTimeout(function a(){
// //     obj.say()
// // },2000)
// // let say = obj.say.bind(obj)
// // let bye = obj.bye.bind(obj)
// for(let key in obj){
//     if(typeof obj[key] == `function`){
//         obj[key]=obj[key].bind(obj)
//     }
// }

// // say()
// setTimeout(obj.say,2000,"hello ")
// setTimeout(obj.bye,3000,"hi ")

// // setTimeout( ()=>{obj.say()},2000)

// function sum(a,b){
//     (a*b)
// }
// let double = sum.bind(null,2)
// let triple = sum.bind(null,3)

// function sayHi() {
//     alert( this.name );
//   }
//   sayHi.test = 5;

//   let bound = sayHi.bind({
//     name: "Вася"
//   });

//   alert( bound() )

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }

//   let user = {
//     name: 'Вася',

//     ok() {
//       alert(`${this.name} logged in`);
//     },

//     fail() {
//       alert(`${this.name} fa in`);
//     },

//   };
// //   user.ok=user.ok.bind(user)

// for(let key in user){
//     if(typeof user[key]==`function`){
//         user[key]=user[key].bind(user)
//     }
// }
//   askPassword(user.ok, user.fail);

// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
//   }

//   let user = {
//     name: 'John',

//     login(result) {
//       alert( this.name + (result ? ' logged in' : ' fa in') );
//     }
//   };

//   askPassword(user.login.bind(user,true),user.login.bind(user,false)); // ?

// function pow(x,y){
//     if(y===1){
//         return x
//     }return x*pow(x,y-1)

// }

// (pow(2,3))

// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],

//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],

//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };

//   function count(department){

//       if(Array.isArray(department)){
//           return department.reduce((prev,next)=>prev+next.salary,0)
//       } else{
//         let sum = 0
//           for(let key of Object.values(department)){
//              sum+=count(key)
//           }
//           return sum
//         }

//       }
//   (count(company))

// function sumto(n){
//     if(n==1){
//         return n
//     }else return n+sumto(n-1)
// }
// (sumto(10000))

// function fac (n){
//     if(n==1){
//         return n
//     }else return n*fac(n-1)
// }
// (fac(5))

// function fib(n){
//     if(n<=1){
//         return n
//     }else return(fib(n-2)+fib(n-1))
// }
// (fib(7))

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   function get(list){
//     if(typeof Object.values(list)=='number'){
//         return Object.keys(list)
//     }else
//     for(let key in list){
//         return get(key)
//     }
//   }
//   (get(list))

// function find(a,b){
//     if(Math.max(a,b)%Math.min(a,b)==0){
//         return Math.min(a,b)
//     } else return find(Math.max(a,b),Math.min(a,b)--)

// }
// find(10,20)

// function find(a,b,c=b){

//     if(a%c==0 && b%c==0){
//         return c
//     }else  return find(a,b,c-1)
// }
// (find(1,1))

// let a = 16;
// let b = 30;
// for(let i=a;i>0;i--){
//     if(b%i==0){
//         (i); break
//     }

// }

// function repeat(str,num){
//     let newstr = " "
//     if(num>1){
//         return str+repeat(str,--num)

//     }else return str
// }
// (repeat("h",5))

// function sum(n){
//     let count=0
//     if(n<1){
//        return count+=n%10

//     }else  return sum(count)

// }
// (sum(12345))

// function digital_root(n) {
//     return (n - 1) %9+1;
//   }
//   (digital_root(123456))

// function spam(count){

//    if(count>1){
//        return "hue"+spam(count-1,"hue")
//    }return "hue"
//   }
//   (spam(8))

// function num(n){
//     return Number(n.toString().split("").map(item=>item*item).join(""))
// }
// (num(3212))

// function x(num){

//     return function(num2){
//         return num+num2
//     }
// }

// (x(2)(3))
// let newarr =[100,3,5,677]
// let arr = [3,5,677,100,11,12,1,2]
// (arr.filter(check))
// function check(arr,newarr){
// for(let i = 0;i<=arr.length;i++){
//     if(arr[i]=newarr[i])
//     (arr[i])
// }
// }
// check(arr,newarr)
// (check(arr,newarr))

// function inbewteen(arr){
//     let newarr = []
//     return function(min,max){
//         return arr.filter (item=>item>min && item<max)
//     }

// }
// let x = inbewteen(arr)
// (x(2,7))

// let users = [
//     { name: "John",age: 20, surname: "Johnson" },
//     { name: "Pete",age: 18, surname: "Peterson" },
//     { name: "Ann",age: 19, surname: "Hathaway" }
//   ];
// //   (users.sort((a,b)=>a.surname>b.aurname?1:-1))

//   function sortby(arr){
//     return function(x){
//         arr.sort((a,b)=>a[x]>b[x]?1:-1)
//         return arr
//     }
//   }
//   (sortby(users)('age'))

// function cons(x){
//     return ((a,b)=>a[x]>b[x]?1:-1)

// }
// (users.sort(cons('age')))

// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//       let shooter = function() { // функция shooter
//         alert( i ); // должна выводить порядковый номер
//         shooters.push(shooter);
//         i++;
//       };

//     }

//     return shooters;
//   }

//   let army = makeArmy();

//   army[0](); // у 0-го стрелка будет номер 10
//   army[5]();

//   function make(){
//       let shooters = []
//       return function(){
//           let i=0;
//           while (i<10){
//             shooters.push(i);
//             i++

//           }
//           return shooters;
//       }
//   }

// function add(n){
//     return function(){
//         return 3+n
//     }
// }
// (add(3)())
// function add(a,b){
//     return a+b
// }

// let double = add.bind(null,2)
// (double(3))

// let greet_abe = function() {
//     let name = 'Abe';
//     return "Hello, " + name + '!';
//   };
//   name = 'Ben';
//   let greet_ben = function() {
//     return "Hello, " + name + '!';
//   };
//   (greet_abe())
// let arr = [1,2,3,4,5]
// // (arr.map(item=>item*2))

// function get(arr){
//     return function(num){
//         return arr.map(item=>item*num)
//     }
// }

// (get(arr)(2))

// let a = setTimeout(function print(){
//     let count = 0;
//     function c(){
//          return count++
//     }
//     setTimeout(c,1000)
// },1000)
// (a)

// function print(from,to){
//     for(let i =from;i<=to;i++){
//          setInterval(i,1000)
//     }
// }
// // setInterval(print,1000,1,10)
// print(1,10)

// function create(from,to){
//     let current  = from
//     let timer = setInterval(() => {
//         (current)
//         current++
//         if(current ==to){
//             clearInterval(timer)
//         }
//     }, 1000);

// }
// create(1,10)

// function print(from,to){
//     let current = from;

//     setTimeout(function go(){
//         (current)
//         current++
//         if(current<to){setTimeout(go,1000)
//         }

//     },1000)

// }
// print(1,5)

// function f(from,to){
//     (from)
//     let time=setTimeout(f,1000,++from)
//     if(from>4){
//         clearTimeout(time)
//     }

// }
// setTimeout(f,1000,1)

// function count(from,to){
//     let timer = setInterval(function(){
//         from<=to?(from++):clearInterval(timer)},1000)
// }
// count(1,4)

// let a =setTimeout(function count(sum){

//     if(sum<4){
//         (++sum)
//     }else clearTimeout(a)
// a=setTimeout(count,1000,1)

// },1000)

// function count(from,to){
//     let a = setTimeout(function go(){
//         (from)
//         if(from<to){
//             from++
//             setTimeout(go,1000)
//         }clearTimeout(a)
//     },1000)
// }

// count(1,4)

// function count(from,to){
//     let a = setTimeout(function go(){
//         if(from<=to){
//             (from)
//             from++
//             setTimeout(go,1000)
//         }clearTimeout(a)
//     },1000)

// }
// count(1,4)

// function fact(num){

//     if(num===1){
//         return num
//     }return num*fact(num-1)
// }
// (fact(15))

// function fact(num){
//     let i=num-1
//     let a= setTimeout(function b(){

//        if (i>1){

//            (num*=i);
//            i--

//            setTimeout(b,1000)
//         }clearTimeout(a)
//     },1000)
// }
// fact(15)

// function start(){

//     let a = setTimeout(function b(){
//         (new Date())
//         setTimeout(b,1000)
//     },1000)

// }
// start()
// function start(){
//     (new Date())

// }
// setInterval(start,1000)

// let a = setTimeout(function b(){
//     (new Date)
//     setTimeout(b,1000)
// },1000)

// function fact(n){
//     if(n==1){
//         return n
//     }else return n*fact(n-1)
// }
// (fact(15))
//

// (fact(15))

//      function memoize(f){
//      let cache = {}
//      return function(){
//         // (arguments)
//          let key = arguments.length + Array.prototype.join.call(arguments,",")
//         // let key = arguments.toString()
//          if(key in cache){
//             return cache[key]

//          }else return cache[key] = f.apply(this,arguments)
//      }
//  }
// fact=memoize(fact)
//     (fact(15))
//  worker.slow = cache(worker.slow)
//  (worker.slow(2,7,6))

// function fact(n){
//     if(n<=1){
//         return n
//     }return (fact(n-1)+fact(n-2))
// }
// (fact(15))
// let worker = {
//     slow(min, max) {
//       return min + max;
//     }
//   };
// let worker = {
//     someMethod() {
//       return 1;
//     },

//     slow(x) {
//       // здесь может быть страшно тяжёлая задача для процессора
//       alert("Called with " + x);
//       return x * this.someMethod(); // (*)
//     }
//   };
/////////////////////////////////////CACHING FUNCTION//////////////////////////////////////////////////////////
// function cache(func){
//     let map = new Map()
//     return function(){
//         let x=arguments
//         if(map.has(x)){
//             return map.get(x)
//         }
//         let result =func.apply(this,arguments)
//         map.set(x,result)
//         return result

//     }
// }
//     ( worker.slow(2) )
//     worker.slow = cache(worker.slow)
//    ( worker.slow(2) )

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// class User{
//     constructor(name){
//         this.name=name
//     }
//     sayhi(){
//         alert(this.name)
//     }
// }
// let user = new User("rge")
// user.sayhi()

// let b = [1,2,3,4]

// let arr = [1,2,3,4]
// (arr.find(item=>item===4))

// function finder(arr,func){
//    for(let i=0;i<arr.length;i++){
//        if(func(i)==arr[i]){
//            return arr[i]
//        }
//    }
// }

// function j(){
//     return 2
// }

// (finder(arr,j))
// let arr = [1,2,3,4]

// Array.prototype.myfind = function (fn){

//     for(let i = 0;i<this.length;i++){
//         if(fn(this[i]))
//         return this[i]

//     }
// }
// // (hr(3))

// const a = arr.find(function(item){return item==arr[2]})
// (a)
// let arr = [1,2,3,4]

// let draw =item=>{
//     item*2
// }
// // draw(3)

// /////////// findIndex

// let arr2 = [1,2,3,4,500]
// function findIndex(arr,func){
//    for(let i = 0;i<arr.length;i++){
//        if (func(i)==arr[i]){
//            return i
//        }
//    }
// }

// let check2 = findIndex(arr2,()=>2)
// (check2)

// /////////////////////some

// let arr3 = [1,2,3,4,500]
// function some(arr,func){
//    for(let i = 0;i<arr.length;i++){
//        if (func(i)==arr[i]){
//            return true
//        }
//    }return false
// }

// let check3 = some(arr3,()=>3)
// (check3)

// /////////////////////every

// let arr4 = [3,3,3,3,3,5]
// function every(arr,func){
//    for(let i = 0;i<arr.length;i++){
//        if (func(i)!=arr[i]){

//         return false
//        }

//    } return true
// }

// let check4 = every(arr4,()=>3)
// (check4)

// let User = class myname{
//     say(){
//         (myname)
//     }
// }
// let user = new User()
// user.say()

// function Make(phr){
//     return class{
//         say(){
//             (phr)
//         }
//     }
// }
// let User =  Make("hi")
// new User().say()

// class Animal{
//     constructor(name){
//         this.name=name
//         this.speed=0
//     }
//     run(speed){
//         this.speed=speed;
//         (`it runs ${this.speed}`)
//     }
//     stop(){
//         this.speed=0
//         ("it stopped")
//     }
// }
// class Rabbit extends Animal{
//     hide(){
//         (`${this.name} is hiding`)
//     }
//     stop(){
//         super.stop()
//         this.hide()
//     }
// }
// let rabbit = new Rabbit("BOb")
// // rabbit.run(5)
// rabbit.stop()

// class Animal {

//     constructor(name) {
//       this.name = name;
//     }

//   }

//   class Rabbit extends Animal {
//     constructor(name) {
//       super(name);
//       this.created = Date.now();
//     }
//   }

//   let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
//   alert(rabbit.name);

// class CoffeeMachine {
//   _waterAmount = 0;

//   set waterAmount(value) {
//     this._waterAmount = value;
//     if (value < 0) throw new Error("Отрицательное количество воды");

//   }

//   get waterAmount() {
//     return this._waterAmount;
//   }

//   constructor(power) {
//     this._power = power;
//   }

// }

// // создаём новую кофеварку
// let coffeeMachine = new CoffeeMachine(100);

// // устанавливаем количество воды
// coffeeMachine.waterAmount = 10; // Error: Отрицательное количество воды

///////////////////////////find
// let arr1 = [1,2,3,4,500]
// function find(arr,callback){
//    for(let item of arr){
//        if (callback(arr[item])){
//            return arr[item]
//        }
//    }
// }

// let check1 = find(arr1,item=>item>3)
// (check1)

/////////// findIndex

// let arr2 = [1,2,3,4,500]
// function findIndex(arr,callback){
//    for(let i = 0;i<arr.length;i++){
//        if (callback(arr[i])){
//            return i
//        }
//    }return -1
// }

// let check2 = findIndex(arr2,item=>item==1)
// (check2)

// /////////////////////some

// let arr3 = [1,2,3,4,500]
// function some(arr,callback){
//    for(let i = 0;i<arr.length;i++){
//        if (callback(arr[i])){
//            return true
//        }
//    }return false
// }

// let check3 = some(arr3,item=>item%2===0)
// (check3)

// /////////////////////every

// let arr4 = [4,5,6,7,8]
// function every(arr,callback){
//    for(let i = 0;i<arr.length;i++){
//        if (!callback(arr[i])){

//         return false
//        }

//    } return true
// }

// let check4 = every(arr4,item=>item>3)
// (check4)

// if(confirm("go to smwhere")){location.href = "https://wikipedia.org"}
// if(cancel){location.href = "https://wikipedia.org"}

// for(let i = 0;i)
// (document.body.previousElementSibling)

// (document.body.children[1].children[0].nextElementSibling)

// document.body.firstElementChild.border="1px solid black"
// let table = document.body.firstElementChild
// // table.rows[1].cells[0].style.backgroundColor="red"
// for(let i = 0;i<table.rows.length;i++){

//     table.rows[i].cells[i].style.backgroundColor="red"
// }

// let element = document.querySelectorAll("ul>li:last-child")
// for(let elem of element){
//     (elem.innerHTML)
// }

// (document.body.firstElementChild)
// if(document.body.firstElementChild.matches(".ul")){
//     alert(true)
// }
// else alert(false)

// let chapter = document.querySelector(".chapter");
// // (chapter.closest(".contents"))

// let chapter = document.querySelector("div");
// (chapter)

// let find = document.getElementsByTagName("input")
// (find)
// let find = document.getElementsByClassName("article")
// (find)
// let find = document.getElementsByTagName("input")[0].name="not age";
// // (find)
// (document.getElementsByTagName("input")[0])

// let elem1=document.querySelector('input')
// let elem2 =document.querySelector('#table')
// (elem2.contains(elem1))
// (document.querySelectorAll('#age-table label'))
// (document.getElementsByTagName('label'))
// (document.getElementsByName("search")[0].getElementsByTagName('input')[0])
// let d = document.getElementsByName("search")[0]
// (d[d.length-1])

// (document.body.constructor.name)
// (document.body.firsthild.nodeType)
// (document.body.children.nodeName)
// let a = document.body.innerHTML+=('<div>cdf</div>')
// (document.body)

// let b = document.body.querySelector("div")
// b.outerHTML="<button>hello world</button>"
// document.querySelector("button").style.fontWeight="bold"
// (document.querySelector("div"))
// let text = document.body.firstChild
// text.data="hayrumyan"
// (text)
// document.body.firstElementChild.style.backgroundColor="red"
// let b = document.body.firstElementChild
// setInterval(function(){return b.hidden=!b.hidden},1000)
// setInterval(function(){return b.hidden=false},500)

// let b = document.querySelectorAll("li")
// for(let key of b){
//     let count = key.getElementsByTagName('li').length;
//     (count)
// }
// // let b=document.getElementsByTagName("li")
// // console(b)
// console.dir(document)

// document.body.setAttribute("type","every")
// // document.body.removeAttribute("type")
// (document.body.attributes)
// let input = document.querySelector("input")
// input.setAttribute("type","radio");
// (input.type)
// input.type="checkbox"
// (input.type)

// let user = {
//     name: "Pete",
//     age: 25
//   };

//   for(let key of document.querySelectorAll("[show-info]")){
//       let field = key.getAttribute("show-info")
//      key.innerHTML=user[field]

//   }

// (document.querySelector("div").dataset.widgetName)
// let link = document.querySelector('a');
// link.style.color = 'orange';
// (link)

// let newlink = document.getElementsByTagName('a');
// // let hl=newlink.innerHTML

// for(let i=0;i<newlink.length;i++){
//     let a =newlink[i];

//     if(!a.innerHTML.startsWith('http://internal.com') && a.innerHTML.includes('://'))

//     a.style.color = "orange"
// }
// (newlink)

// let selector = 'a[href*="://"]:not([href*="http://internal.com"])'
// let links =document.querySelectorAll(selector)
// links.forEach(link=>link.style.color="orange")

// let div = document.createElement("div")
// div.className="alert"
// div.innerHTML = "Hello how are you"
// document.body.append(div)
// // setTimeout(()=>div.remove(),1000)
// let div2 = div.cloneNode(true)
// div2.innerHTML="second div"
// div.after(div2)

// ol.before("before")
// ol.after("after")
// let li=document.createElement("li")
// li.innerHTML="hello"
// ol.prepend(li)
// let li2=document.createElement("li")
// li2.innerHTML="append"
// ol.append(li2)
// ()
// ol.replaceWith(ol.children[1],li2)

// div.before("<p>Hello</p>", document.createElement("hr"))

// ol.insertAdjacentHTML('beforebegin','<p>Hello</p>')
// ol.insertAdjacentHTML("afterbegin","<span>cello</span>")
// ol.insertAdjacentHTML('beforeend','<p>beforeend<p/>')
// ol.insertAdjacentHTML('afterend','<p>afterend<p/>')
// ol.insertAdjacentHTML('beforebegin', '<p>Привет</p>')

// function create(){
//     let fragment=new DocumentFragment()
//     for(let i=0;i<4;i++){
//         let li = document.createElement("li")
//         li.append(i)
//         fragment.append(li)
//     }
//     return fragment
// }
// ol.append(create())

// function create(){
//     let fragment=[]
//     for(let i=0;i<4;i++){
//         let li = document.createElement("li")
//         li.append(i)
//        fragment.push(li)
//     }
//     return fragment
// }
// ol.append(...create())

// let element = elem.querySelectorAll("li")
// for(let key of element){
//     key.replaceWith("")
// }

// // (element.length)
// element.replaceWith("")

// function clear(elem){
//     let element = elem.querySelectorAll("li")
//     for(let key of element){
//         key.replaceWith("")
//     }
// }
// clear(blah)

// function clear(elem){
//     elem.innerHTML=""
// }
// clear(elem)

// body.remove();
//  function wrapper(){
//      let fragment=new DocumentFragment()
//    let  i = prompt("enter value")
//     while(i){
//        i = prompt("enter value")
//         let li = document.createElement("li")
//          li.insertAdjacentText("afterbegin",i)
//          fragment.append(li)

//     }
//     return fragment

//  }
//  ul.append(wrapper())

// let data = {
//     "Рыбы": {
//       "форель": 4,
//       "лосось": 3
//     },

//     "Деревья": {
//       "Огромные": {
//         "секвойя": 2,
//         "дуб": 2
//       },
//       "Цветковые": {
//         "яблоня": 2,
//         "магнолия": 3
//       }
//     }
//   };
//   function createTree(container, obj) {
//     container.append(create(obj));
//   }

// function create(obj){
//     if(!Object.keys(obj).length) return;
//     let ul = document.createElement("ul")
//     for(let key in obj){
//         let li = document.createElement("li")
//         li.innerHTML=key
//         if(create(obj[key])){
//             li.append(create(obj[key]))
//         }
//         ul.append(li)
//     }
//     return ul
// }

// let container = document.getElementById('container');
//     createTree(container, data);

// let li2 = document.createElement("li")
// li2.innerHTML=2
// let li3 = document.createElement("li")
// li3.innerHTML=3
// (li2)

// one.after(li2)
// li2.after(li3)

//   function isObject(val){
//       if(val===null){
//           return false
//       }
//       return (typeof val === 'object')
//   }

//   function iter(obj){
//       for(let prop in obj){
//           if(isObject(obj[prop])){
//               iter(obj[prop])
//           }else{
//           (prop,obj[prop])
//           }
//       };
//   };
//   iter(data)

// const isObject = function(val){
//     if(val===null){
//         return false
//     }
//     return (typeof val==='object')
// };
// const objProps= function (obj){

//     for(let val in obj){
//         if(typeof obj[val]==='object'){
//             objProps(obj[val])
//         }else{
//            let li=document.createElement("li")
//            li.innerHTML=val
//         }
//     }
// }
// objProps(data)

// let t;
// function h(){
// let today = new Date();
// let hours = today.getHours();
// if(hours<10)hours='0'+hours;
// let hh =document.querySelector("p>.hh").innerHTML=hours+":";
// let minutes= today.getMinutes();
// if(minutes<10)minutes='0'+minutes;
// let m=document.querySelector("p>.mm").innerHTML=minutes+":";
// let seconds= today.getSeconds();
// if(seconds<10)seconds='0'+seconds;
// let s=document.querySelector("p>.ss").innerHTML=seconds;
// t=setTimeout(h,1000);

// };
// document.querySelector(".stop").onclick=function(){clearTimeout(t)};
// document.querySelector(".start").onclick=function(){h()};

//  function hrs(){
// let today = new Date();
// let hours = today.getHours()/12*360+90;;
// let h=document.querySelector(".hours")
// let minutes= today.getMinutes()/60*360+90;;
// let m=document.querySelector(".minutes")
// let seconds= today.getSeconds()/60*360+90;
// let secs=document.querySelector(".seconds");
// secs.style.transform=`rotate(${seconds}deg)`;
// m.style.transform=`rotate(${minutes}deg)`;
// h.style.transform=`rotate(${hours}deg)`;

// }
// hrs()
// setInterval(hrs,1000);

// let t;
// function h(){
// let today = new Date();
// let hours = today.getHours();
// if(hours<10)hours='0'+hours;
// let hh =document.querySelector("p>.hh").innerHTML=hours+":";
// let minutes= today.getMinutes();
// if(minutes<10)minutes='0'+minutes;
// let m=document.querySelector("p>.mm").innerHTML=minutes+":";
// let seconds= today.getSeconds();
// if(seconds<10)seconds='0'+seconds;
// let s=document.querySelector("p>.ss").innerHTML=seconds;
// t=setTimeout(h,1000);

// };
// h()

// let div = document.querySelector(".hop")
// div.className="bla"
// div.classList.add("blaaaa")
// div.classList.remove("blaaaa")

// setTimeout(function f(count=1){

//     (count++)
//     setTimeout(f,1000,count++)
// },1000)

// setTimeout(function c(count=1){

//     (count++)
//     setTimeout( c,1000,count++)

// },1000)
// let a =c()
// (a())
// (a())

// let div=document.createElement("div")
// div.className="notify"

// let div=document.createElement("div");
// div.className="notify"
// document.body.prepend(div)
// // div.hidden=true
// div.style.cssText=`
// background-color:red;
// width:100px;
// height:50px;
// font-size:15px;
// box-sizing:border-box;
// border:2px solid black;
// color:orange;
// padding:5px auto;

// `
// div.insertAdjacentHTML("afterbegin","<p></p>")

// setTimeout(function a(count=1){
// // div.innerHTML="Hello"+ " "+count++
// document.querySelector("p").innerHTML="Hello"+ " "+count++
//     setTimeout(a,2000,count++)

// },1000)

// setInterval(()=>div.hidden=!div.hidden,1000)

/////forEach
// let arr = [1,2,3,4]
// let copy=[];
// function myForEach(arr,callback){
//     for(i=0;i<arr.length;i++){
//         if(callback(arr[i],i,arr)){
//         return  callback(arr[i],i,arr)

//         }
//     }
// }
// myForEach(arr,item=>{copy.push(item)})
// (copy)

////////////includes

// let arr = [1,2,3,4]
// function myIncludes(arr,callback){
//     for(i=0;i<arr.length;i++){
//        if(callback(arr[i],i,arr)){
//         return  true
//        }
//     }
//     return false
// }
// (myIncludes(arr,item=>item>2))

////////////// join

// let arr = [1,2,3,4];
// function myJoin(arr,str){
//     let string=""
//     for(i=0;i<arr.length;i++){
//        string+=arr[i].toString()+str
//     }
//     if(string.substr(string.length-1)==arr[arr.length-1]){
//         return string
//     }
//     return string.substr(0,string.length)
// }
// (myJoin(arr,"-"))

/// lastIndexof

// let arr = [1,2,5,3,4,5]
// function myLastIndexOf(arr,val,from){
//     for(let i = from?from:arr.length;i!=0;i--){
//         if(val==arr[i]){
//             return i
//         }
//     }
// }
// (myLastIndexOf(arr,5,4))

/////// pop
// let arr = [1,2,3,4,5]
// function myPop(arr){
//     if(!arr.length){
//         return undefined
//     }else {
//         let a=arr[arr.length-1]
//         arr.length=arr.length-1
//         return a
//     }

// }
// myPop(arr)
// (arr)

/////// push
// let arr = [1,2,3,4,5]
// function myPush(arr,...val){
//     for(let i=0;i<val.length;i++){
//      arr[arr.length]=val[i]
//     }
//       return arr.length

// }
// myPush(arr,1,2,3)
// (arr)

//////slice

// let arr = [1,2,3,4,5]
// function mySlice(arr,val1,val2){
//     let newarr=[];
//     for(let i=0;i<arr.length;i++){
//         if(i>=val1 && i<val2){
//             // newarr.push(arr[i])
//             myPush(newarr,arr[i]) //used my function here
//         }
//     }
//     return newarr
// }
// (mySlice(arr,1,4))

/////// shift
// let arr = [1,2,3,4,5]
// function myShift(arr){
//     if(!arr.length){
//         return undefined
//     }else {
//         let a=arr[0]
//         arr.splice(arr[arr.length],1)
//         return a
//     }

// }
// (myShift(arr))
// (arr)

// ///// unshift
// let arr = [1,2,3,4,5]
// function myUnshift(arr,...val){
//     for(let i=0;i<val.length;i++){
//         myReverse(arr)
//         arr[arr.length]=val[i]
//         myReverse(arr)////used my function here
//     }

//       return arr.length
// }
// (myUnshift(arr,6,7,8))
// (arr)

/////reverse
// let arr = [1,2,3,4,5]
// function myReverse(arr){
//     for(let i=0;i<arr.length/2;i++){
//         let temp=arr[i];
//         arr[i]=arr[arr.length-1-i]
//         arr[arr.length-1-i]=temp

//     }
//     return arr
// }

// myReverse(arr)
// (arr)

///splice
// let arr = [1,2,5,3,4,5,6,7,8]

// function mySplice(arr,start,count,...item){
//     let newarr=[...arr.slice(0, start),...item,...arr.slice(start+count)]
//     while(arr.length){
//         arr.pop()
//     }
//     arr.push(...newarr)
//       return arr

//     }
//     mySplice(arr,2,5,45,46)
//     (arr)

// let arr = [1,2,5,3,4,5]
// function myLastIndexOf(arr,val,from){
//     for(let i = from?from:arr.length;i!=0;i--){
//         if(val==arr[i]){
//             return i
//         }
//     }
// }
// (myLastIndexOf(arr,5,4))

// function myReduce(arr,func,init){
//     let result=init
//     for(let i=0;i<arr.length;i++){

//             result=func(result,arr[i],i,arr)

//     }
//     return result
// }

// (myReduce(arr,(prev,next)=>prev+next,6))

// (arr)

// const items = [1, 2, 3, 4, 5]

// const insert = (arr, index, ...newItems) => [
//   ...arr.slice(0, index),...newItems,...arr.slice(index)

// ]

// const result = insert(items, 1, 10, 20)

// (result)

// function counter(){
// //     // for(let i=0;i<3;i++){
//         alert(this.value)
// //     // }
// }
// elem.onclick=counter

// function add1(){
//     ("this 1")
// }
// function add2(){
//     alert("this 2")
// }

// elem.addEventListener("click",add1)
// elem.addEventListener("click",add2)

// (example.offsetParent)
// (example.offsetLeft)
// (example.offsetTop)

// function isHIdden(elem){
//     return !elem.clientTop && !elem.clientLeft
// }
// (isHIdden(example))

// (example.scrollHeight)

// function cl(){
//     this.scrollTop+=0
// }
// example.onclick=cl

// let arr =[1,2,3,4,5]
// function map(arr, cb){
//     let newar=[]
//     for(let i=0;i<arr.length;i++){
//         newar.push(cb(arr[i]))
//     }
//     return newar
// }
// (map(arr, item=>item*2))

// setInterval(()=>{(example.scrollTop)},1000)

// setInterval(()=>{(example.scrollTop)},3000)
// // let scrollBottom=example.scrollHeight-example.scrollTop-example.clientHeight

// function scrollBottom(elem){
//     return elem.scrollHeight-elem.scrollTop-elem.clientHeight
// }

// setInterval(()=>{(scrollBottom(example))},3000)

// let width=example.clientWidth-parseInt(getComputedStyle(example).width)
// let width=example.offsetWidth-example.clientWidth
// (width)

// let a =(field.clientWidth/2-parseInt(getComputedStyle(ball).width)/2)+"px";
// let b =(field.clientHeight/2-parseInt(getComputedStyle(ball).height)/2)+"px";
// (a)

// ball.style.left=a
// ball.style.top=b

///////document height

// (Math.max(document.body.scrollHeight,document.body.offsetHeight,document.body.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight,))

// (window.pageXOffset)
// (window.pageYOffset)

// let user =['user', 'admin', 'admin', 'user', 'admin', 'user', 'user', 'user', 'user', 'admin', 'admin', 'user']
// let filter=user.filter(item=>item==='admin')
// (filter)

// let id=['jf83urjf74jf', 'uejf83jfut75', 'ir84itjgut75u', 'jfue73urhfd8']
// let newid=id.map(item=>item+"-AM")
// (newid)

// let num=[150, 400, 200, 50, 300, 320, 500]
// let sum=num.reduce((prev,next)=>prev+next,0)
// (sum)

// setInterval(()=>{(document.querySelector("button").getBoundingClientRect())},1000)

// let x=document.documentElement.clientHeight/2;
// let y=document.documentElement.clientWidth/2

// let elem=document.elementFromPoint(y,x)
// elem.style.color="red"
// (elem)

// let elem=document.querySelector("button").getBoundingClientRect()
// function create(elem,html){
//     let message = document.createElement("div");
//     message.innerHTML=html;

//     message.style.color=`red`;
//     message.style.position=`absolute`
//     message.style.top=elem.bottom+window.pageYOffset+"px";
//     message.style.left=elem.left+window.pageXOffset+"px";

// return message
// }

// let bl=create(elem,"hello")
// document.body.append(bl)

// setTimeout(() => bl.remove(), 5000);

// let a =field.getBoundingClientRect()
// let b=field.clientWidth
// (a)
// (b)

// (field.clientX)

// function reverse(x){
//     let count=""
//     while(x>0){
//         count+=x%10
//         x=Math.floor(x/10)
//     }
//     return Number(count)
// }
// (reverse(32243))

// let x ="nurses run"

// function check(x){
//     let y=Array.from(x.split(" ").join("")).join("")
//     let z=Array.from(x.split(" ").join("")).reverse().join("")
//     return (y==z)
// }
// (check(x))

// let x="dog"
// function comb(x){
//     let y = Array.from(x)
//     let newarr=[]
//     for(let i=0 ;i<=y.length;i++){
//         for(let j=1;j<=y.length;j++){
//             newarr.push(y.slice(i,j))
//         }
//     }
//     return (newarr.filter(item=>item.length).join(", ").split(",").join(""))

// }
// (comb(x))

// let x="1 2 3"
// function comb(x){
//     let y = Array.from(x)
//     let newarr=[]
//     for(let i=0 ;i<y.length-1;i++){
//         for(let j=i+1;j<y.length;j++){
//             newarr.push(`${y[i]}`,`${y[j]}`)
//         }
//     }
//     return (newarr)

// }
// (comb(x))

// let cord1=field.getBoundingClientRect()
// // let rect1
//  let x=cord1.x ,y=cord1.y
// // let rect2
// let r2x=cord1.x+field.offsetWidth, r2y=cord1.y+field.offsetHeight
// // rect4
// let r4x =r2x-(field.offsetWidth-field.clientWidth)/2,   r4y=r2y-(field.offsetHeight-field.clientHeight)/2
// //rect3
// let r3x=x+(field.offsetWidth-field.clientWidth)/2,r3y=y+(field.offsetHeight-field.clientHeight)/2

// (x,y)
// (r2x,r2y)
// (r3x,r3y)
// (r4x,r4y)

// let coords = field.getBoundingClientRect();

// let answer1 = [coords.left, coords.top];
// let answer2 = [coords.right, coords.bottom];
// let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop]
// let answer4 = [
//     coords.right - parseInt(getComputedStyle(field).borderRightWidth),
//     coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
//   ]

// (answer1)
// (answer2)
// (answer4)

// let elem = document.querySelector("button")
// function click(){
//     ("clicked")
// }
// function click1(){
//     ("clicked 1")
// }
// elem.onclick=click1
// elem.addEventListener("click",click)
// elem.addEventListener("click",click1)

// elem.onclick=function(event){
//     (event.type + " " + event.target)
//     (event.clientX + " " + event.clientY)
// }

// elem.onclick=addEventListener("click",{
//     handleEvent(event){
//         (event.type + " "+ event.currentTarget)
//     }
// })

// let x = "webmaster"
// function change(x){
//     return x.split("").sort((a,b)=>a>b?1:-1).join("")
// }
// (change(x))

// let x= "the quick brown fox"
// function upper(x){
//     let y=x.split(" ")
//     for(let i=0;i<y.length;i++){
//       y[i]=y[i].substr(0,1).toUpperCase()+y[i].substr(1)
//     }
//     return y.join(" ")
// }
// (upper(x))

// let x = "Web Development Tutorial"
// function sort(x){
//     let y=x.split(" ")
//     let z=y.sort((a,b)=>b.length-a.length)
//     return z[0]
// }
// (long(x))

// let x = "Web Development Tutorial"
// function reduce(x){
// let y=x.split(" ")
// let z = y.reduce((prev,next)=>{
//     if(prev.length>next.length){
//         return prev
//     }else return next
// })
// return z
// }
// (reduce(x))

// let z = y.map(item=>item.length)
// let j=z.filter(item=>Math.max(item))
// (j)

// function long(x){

//     let count=0;
//     let str=""
//     for(let i=0;i<y.length;i++){
//         count=Math.max(y[i].length)
//         // if(y[i].length>count){
//         //     count=y[i].length
//         // }
//         // if(count){
//         //     str=y[i]
//         // }
//     }
//     return count
// }
// (long(x))

// let elem = document.querySelector("button")
// class Menu{
//     handleEvent(event){
//         switch(event.type){
//             case "mouseover":
//             elem.innerHTML="button pushed";
//             break;
//             case "mouseup":
//             elem.innerHTML+="button unpushed";
//             break;
//         }
//     }

//   }
//   let menu = new Menu()

//   elem.addEventListener("mouseover",menu)
//   elem.addEventListener("mouseup",menu)

// function hide(){
//     this.hidden=true
// }
// hider.onclick=hide

// field.onclick=function(event){
//     c.innerHTML=event.clientX+ ":"+ event.clientY

//     ball.style.top=(event.clientY-cl.top-field.clientTop-ball.offsetHeight/2)+"px"
//     ball.style.left=(event.clientX-cl.left-field.clientLeft-ball.offsetWidth/2)+"px"

// }

// (field.clientTop)
// document.querySelector("ul").hidden=true
// let x=document.querySelector("button")

// function h1(){
//     document.querySelector("ul").classList.toggle('open')

// }
// function h2(){
//     document.querySelector("ul").hidden=true
// }
// x.addEventListener("click",h1)
// // x.removeEventListener("click",h1)
// // x.addEventListener("click",h2)

////////////////////////////////////////////////dropdown menu

// let button=document.querySelector("#title")
// let ul=document.querySelector("#sweeties")
// button.onclick=function(){
//     ul.classList.toggle("open")
// }

////////////////////////////////closing window

// let btn=document.querySelectorAll(".remove-button");
// let div=document.querySelectorAll(".pane")
// for(let i=0;i<btn.length;i++){
// btn[i].onclick=function(){
//     div[i].style.display="none"
//     }
// }
// for(let key of div){
// key.insertAdjacentHTML("afterbegin",'<button class="remove-button">[x]</button>')
// key.firstChild.onclick=()=>key.remove()
// }
{
  /* <button class="arrow">⇦</button>
  <button class="arrow" style="position:absolute;right:5px;z-index:1">⇨</button> */
}

// let i = 1;
// for(let li of document.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }
// let arrow=document.getElementsByClassName(".arrow")
// let arrow=document.querySelector(".arrow")
// let ul=document.querySelector("ul")
// let a=ul.clientHeight/2
// (arrow)

///////////////////////////////////////carouselle
// let ul=document.querySelector("ul")
// let div = document.querySelector(".carusel")
// ul.insertAdjacentHTML("afterbegin",'<button class="arrow left" style="left:0;">⇦</button>')
// ul.insertAdjacentHTML("beforeend",'<button class="arrow right" style="right:0">⇨</button>')
// let arrow=document.querySelectorAll(".arrow")
// let a=ul.clientHeight/2-arrow[0].clientHeight
// for(let arr of arrow){
//     arr.style.top=a+"px"
// }
// ul.children[0].onclick=function(){ul.scrollBy(-b*3,0)}
// ul.lastChild.onclick=function(){ul.scrollBy(b*3,0)}

// let img1=ul.children[2]
// let b=img1.clientWidth
// let check1=document.querySelector("#rb1")
// rb1.onclick=(()=>{

//     if(check1.checked==true){
//         ul.scrollTo(0,0)
//     }
// }
// )
// let check2=document.querySelector("#rb2")
// rb2.onclick=(()=>{

//     if(check2.checked==true){
//         ul.scrollTo(b*3,0)
//     }
// }
// )
// let check3=document.querySelector("#rb3")
// rb3.onclick=(()=>{

//     if(check3.checked==true){
//         ul.scrollTo(b*6,0)
//     }
// }
// )
// let check4=document.querySelector("#rb4")
// rb4.onclick=(()=>{
//     if(check4.checked==true){
//         ul.scrollTo(b*7,0)

//     }

// }
// )

// setInterval(function(){
//     if (ul.scrollLeft<=916 && ul.scrollLeft>=790 ){
//         check4.setAttribute("checked","checked")

//     }else check4.removeAttribute("checked");

//     if (ul.scrollLeft<787 && ul.scrollLeft>395 ){
//         check3.setAttribute("checked","checked")
//     }else check3.removeAttribute("checked");

//     if (ul.scrollLeft<=390 && ul.scrollLeft>=16){
//         check2.setAttribute("checked","checked")
//     }else check2.removeAttribute("checked");

//     if (ul.scrollLeft===0){
//         check1.setAttribute("checked","checked")
//     }else check1.removeAttribute("checked");
// },1)

// let form =document.querySelector("form")
// form.onclick=function(event){
//     ("this"+event.currentTarget,"target"+event.target)
// }

// for(let elem of document.querySelectorAll("*")){
//     elem.addEventListener("click",e=>("capturing"+`${elem.tagName}`),true)
//     elem.addEventListener("click",e=>("bubbling"+`${elem.tagName}`))
// }

// let a= document.querySelectorAll("tr>td");
// for(let i=0;i<a.length;i++){
//     a[i].addEventListener("click",()=>a[i].style.backgroundColor="red")

// }

// addEventListener .

// let table =document.querySelector("table");
// let selectedTD;

// table.onclick=function(event){
//     let td = event.target.closest('td'); // (1)

//     if (!td) return; // (2)

//     if (!table.contains(td)) return; // (3)

//     highlight(td);
// }

// function highlight(td){
//     if(selectedTD){
//         selectedTD.classList.remove("highlight")
//     }
//     selectedTD=td;
//     selectedTD.classList.add("highlight")

// }

// (user2.name)
// (div.dataset.bgColor)

// let table =document.querySelector("table");
// function handler(target){return target.style.cssText="cursor:pointer;background-color:red"}
// table.addEventListener("click",(event)=>{
//     if(event.target.classList.contains("td")){
//         let target =event.target
//         handler(target)
//     }else ("mimo")
// })

// class Menu{
//     constructor(elem){
//         this.elem=elem;
//         elem.onclick=this.onClick.bind(this)
//     }

//     save() {
//         alert('сохраняю');
//       }

//       load() {
//         alert('загружаю');
//       }

//       search() {
//         alert('ищу');
//       }

//       onClick(event){
//           let action=event.target.dataset.action;
//           if(action){
//               this[action]()
//           }
//       }
// }

// new Menu(menu)

// document.addEventListener("click",(event)=>{
//     if(event.target.dataset.counter!=undefined){
//         event.target.value++
//     }
// })

// document.addEventListener("click",(event)=>{
//    let id =event.target.dataset.toggleId
//    if(!id) return;
//    let elem=document.getElementById("id")
//    elem.hidden=!elem.hidden
// })

// document.addEventListener('click', function(event) {
//     // let id = event.target.dataset.toggleId;

//     // (id)
//     // if (!id) return;

//     let elem = document.getElementById("subscribe-mail");
//     (elem)

//     elem.hidden = !elem.hidden;
//     // if(elem.hidden===true){
//     //     elem.hidden=false
//     // }else elem.hidden=true
//   });

// container.addEventListener("click",(event)=>{
//     if(event.target.className=="remove-button"){
//         event.target.closest("div").style.display="none"
//     }
// })

// tree.addEventListener('click', (event) => {
//   let x = event.target.tagName == 'LI';
//   if (x) {
//     let ul = event.target.children[0];
//     ul.hidden = !ul.hidden;
//   }
// });

// let a = grid.querySelectorAll("tbody>tr>:nth-child(1)");
// let b = grid.querySelectorAll("tbody>tr>:nth-child(2)");
// for(let i=0;i<a.length;i++){
//     a[i].setAttribute("class","number")
//     b[i].setAttribute("class","string")

// }

// grid.addEventListener("click",(event)=>{
//     let id=event.target.dataset.type;
//     let newarr=[];
//     let num;
//     let str;

//     let z=document.getElementsByClassName(id)
//     for(let i=0;i<z.length;i++){
//         newarr.push(z[i].innerHTML)
//         (newarr)
//         num=newarr.filter((item)=>parseInt(item))
//        num.sort((a,b)=>a-b)
//        str=newarr.filter((item)=>!parseInt(item))
//        str.sort((a,b)=>a>b?1:-1)

//     }
//     for(let i=0;i<num.length;i++){
//         z[i].innerHTML=num[i]

//     }
//     for(let i=0;i<str.length;i++){
//         z[i].innerHTML=str[i]
//     }
// })

// let a = grid.querySelectorAll("tbody>tr>:nth-child(1)");
// let b = grid.querySelectorAll("tbody>tr>:nth-child(2)");
// for(let i=0;i<a.length;i++){
//     a[i].setAttribute("class","number")
//     b[i].setAttribute("class","string")

// }

// grid.addEventListener("click",(event)=>{
//     let id=event.target.dataset.type;
//     let z=grid.querySelectorAll("td")
//     let newarr=[];
//     for(let i=0;i<z.length;i++){
//         let b=newarr.push(z[i].innerHTML)
//     }
//     (newarr)
// })

// const table = document.querySelector('#grid');
// let arr=[]
// for(let i=1;i<table.rows.length;i++){
//     arr.push([+table.rows[i].cells[0].innerHTML,table.rows[i].cells[1].innerHTML])
// }
// table.addEventListener("click",(event)=>{
//     if(event.target.dataset.type=="number"){
//     arr.sort((a,b)=>a[0]-b[0])
//     for(let i=1;i<table.rows.length;i++){
//         table.rows[i].cells[0].innerHTML=arr[i-1][0]
//         table.rows[i].cells[1].innerHTML=arr[i-1][1]

//     }
//     }
//     if(event.target.dataset.type=="string"){
//         arr.sort((a,b)=>a[1]>b[1]?1:-1)
//         for(let i=1;i<table.rows.length;i++){
//             table.rows[i].cells[0].innerHTML=arr[i-1][0]
//             table.rows[i].cells[1].innerHTML=arr[i-1][1]
//         }
//         }
// })

// let arr =['5', 'Вася', '2', 'Петя', '12', 'Женя', '9', 'Маша', '1', 'Илья']
// let newarr=[]
// let b;
// for(let i=0;i<arr.length;i=i+2){
// newarr.push({"age":arr[i],"name":arr[i+1]})
// b=newarr.sort((a,b)=>a.name>b.name?1:-1)

// }
// (b)

// let table=document.querySelector("#grid")
// let newarr=[];
// for(let i=1;i<table.rows.length;i++){
//     newarr.push([table.rows[i].cells[0].innerHTML,table.rows[i].cells[1].innerHTML])
//     (newarr[i][1])
// }
// (newarr)
// table.addEventListener("click",(event)=>{
//     if(event.target.dataset.type=="number"){
//         newarr.sort((a,b)=>a[0]-b[0])
//         for(let i=1;i<table.rows.length;i++){
//             table.rows[i].cells[0].innerHTML=newarr[i-1][0]
//             table.rows[i].cells[1].innerHTML=newarr[i-1][1]

//         }
//     }
//     if(event.target.dataset.type=="string"){
//         newarr.sort((a,b)=>a[1]>b[1]?1:-1)
//         for(let i=1;i<table.rows.length;i++){
//             table.rows[i].cells[0].innerHTML=newarr[i-1][0]
//             table.rows[i].cells[1].innerHTML=newarr[i-1][1]
//         }
//     }
// })

// let element;
// document.addEventListener("mouseover",(event)=>{
//     let target= event.target;
//     elemhtml=target.dataset.tooltip;
//     if(!elemhtml) return;
//     element=document.createElement("div");
//     element.innerHTML=elemhtml;
//     element.className="tooltip";
//     document.body.append(element);
//     let cords =target.getBoundingClientRect();
//     let left = cords.left+(target.offsetWidth-element.offsetWidth)/2
//     if (left < 0) left = 0;
//     let top=(cords.top-element.offsetHeight-5)+"px"
//     element.style.left=left+"px"
//     element.style.top=top+"px"

//     (element.offsetHeight)
//     (cords.top)

// })
// document.addEventListener("mouseout",(event)=>{
//     if(element){
//     element.remove()
//     element=null
//     }
// }
// )
// let menu=document.getElementById("menu")

// class Menu {
//     constructor(elem){
//         this._elem=elem;
//         elem.onclick=this.onClick.bind(this)
//     }
//     save() {
//         alert('сохраняю');
//       }

//       load() {
//         alert('загружаю');
//       }

//       search() {
//         alert('ищу');
//       }

//     onClick(event){
//         let action =event.target.dataset.action;
//         if(action){
//             this[action]()
//         }
//     }
// }
// new Menu(menu)
// class Menu {
//     constructor(elem) {
//       this._elem = elem;
//       elem.onclick = this.onClick.bind(this); // (*)
//     }

//     save() {
//       alert('сохраняю');
//     }

//     load() {
//       alert('загружаю');
//     }

//     search() {
//       alert('ищу');
//     }

//     onClick(event) {
//       let action = event.target.dataset.action;
//       if (action) {
//         this[action]();
//       }
//     }
//   }

//   new Menu(menu);
// div2.addEventListener("click",(event)=>alert(1))
// div.addEventListener("click",(event)=>alert(5),true)
// div.addEventListener("click",(event)=>alert(5))

// let ul =document.getElementById("menu")
// ul.addEventListener("click",(event)=>{
//     if(event.target.tagName!="A")return;
//    let href = event.target.getAttribute("href")
//    alert(href)
//    event.preventDefault()
// })

// elem.oncontextmenu=(event)=>{
//     event.preventDefault();
//     alert("element menu");
//     event.stopPropagation();

// }
// document.oncontextmenu=(event)=>{
//     if(event.defaultPrevented)return;
//     event.preventDefault()
//     alert("document menu")

// }
// function handler(event) {
//     alert( "..." );
//     event.preventDefault()
//   }

// contents.addEventListener("click",(event)=>{
//     if(event.target.closest("a")){
//         let a=event.target.closest("a").getAttribute("href")
//         confirm(`do you really want to visit ${a}`)?event.target:event.preventDefault()
//         }
// })

// thumbs.addEventListener("click",(event)=>{
//     event.preventDefault()
//    largeImg.setAttribute("src",event.target.closest("a").getAttribute("href"))

// })
// btn.addEventListener("mousedown",(event)=>{
//     alert(event.button)
// })
// let val=30
// document.querySelector("progress").addEventListener("mouseover",(event)=>{
//     val++
//     document.querySelector("progress").value=val
// })

// let event= new Event("mouseover")
// elem.dispatchEvent(event)

// btn.addEventListener("click",(event)=>{
//     if(event.shiftKey && (event.ctrlKey ||event.metaKey)){
//         alert("yes")
//     }
// })

// input.addEventListener("mousemove",(event)=>{
//     input.value=event.pageX+ ":" +event.pageX
// })

// span.addEventListener("dblclick",(event)=>{

//     alert("hello")
//     event.preventDefault()
// })
// span.addEventListener("mousedown",(event)=>{

//     event.preventDefault()
// })

// span.addEventListener("copy",(event)=>{

//     event.preventDefault()
//     alert("you cant copy this")
// })

///////////////////////////////////////////selected add/remove

// ul.addEventListener("click",(event)=>{
//     if(event.metaKey||event.ctrlKey){
//         toggle(event.target)

//     } else sel(event.target)

// })

// function toggle(li){
//     li.classList.add("selected")

// }
// function sel(li){
//     let selected =ul.querySelectorAll(".selected")
//     for(let elem of selected){
//         elem.classList.remove("selected")
//     }
//     li.classList.add("selected")

// }

// div.addEventListener("mouseover",(event)=>{
//     ("mouseover","target "+event.target.tagName,"related "+event.relatedTarget.tagName)
// })
// div.addEventListener("mouseout",(event)=>{
//     ("mouseout","target "+event.target.tagName,"related "+event.relatedTarget.tagName)
// })
// let current =null;
// table.addEventListener("mouseover",(event)=>{
//     if(current)return;
//     let target=event.target.closest("td")
//     if(!target)return;
//     current= target;
// //   target.style.background = 'pink';
//     (target)
// })

// table.addEventListener("mouseout",(event)=>{
//     if(!current)return;
//     let relatedtarget=event.relatedTarget
//     while(relatedtarget){
//         if(relatedtarget==current)return;
//         relatedtarget = relatedtarget.parentNode;
//     }
//     // current.style.background = '';
//   current = null;
// })

// let current=null;
// table.addEventListener("mouseover",(event)=>{
//     if(current)return;
//     let target=event.target.closest("td");
//     if(!target) return;
//     current=target;
//     current.style.backgroundColor="pink"

// })

// table.addEventListener("mouseout",(event)=>{
//     if(!current)return;
//     // let related =event.relatedTarget;
//     // (related)
//     // while(related){
//     // if(related==current)return;
//     // related=related.parentNode;
//     // }
//     current.style.backgroundColor=""
//     current=null
// })

// let current;
// table.addEventListener("mouseover",(event)=>{
//     if(current) return;
//     let target = event.target.closest("td")
//     if(!target)return;
//     current=target;
//     current.style.background="pink"

// })
// table.addEventListener("mouseout",(event)=>{
//    if(!current)return;
//    current.style.background="";
//    current=null;

// })

// let div;

// document.addEventListener("mouseover",(event)=>{
//     let target=event.target.dataset.tooltip;
//     if(!target)return;
//     div=document.createElement("div")
//     // div.className="tooltip";
//     document.body.append(div)
//     div.innerHTML=target
//     if(!div)return;
//     let cords =event.target.getBoundingClientRect()
//     let left =cords.left+(event.target.offsetWidth-div.offsetWidth)/2
//     if(left<0){left=0}
//     let top=cords.top-div.offsetHeight-5
//     if(top<0){top=cords.top+div.clientHeight+5}
//     div.style.left =left+ "px"
//     div.style.top =top+ "px"

// })

// document.addEventListener("mouseout",(event)=>{
//        div.remove()
// })

// let div;
// document.addEventListener("mouseover",(event)=>{
//     let target=event.target.dataset.tooltip;
//     if(!target)return;
//     div=document.createElement("div");
//     div.className="tooltip";
//     document.body.append(div)
//     div.innerHTML=target
//     let cords = event.target.getBoundingClientRect()
//     let left =cords.left+(event.target.offsetWidth-div.offsetWidth)/2
//     if(left<0){left=0};
//     let top=cords.top-div.offsetHeight
//     if(top<0){top=cords.top+div.clientHeight}
//     (div.offsetLeft)

//     div.style.left =left+ "px"
//     div.style.top =top+ "px"

// })

// document.addEventListener("mouseout",(event)=>{
//     if(div){
//     div.remove()
//     }
// })
// let current;

// table.addEventListener("mouseover",(event)=>{

//     if (current)return;
//     let target =event.target.closest("td")
//     if(!target)return;
//     current=target
//     current.style.background="pink"
// })

// table.addEventListener("mouseout",(event)=>{

//     if(!current) return;
//     current.style.background="";
//     current=null;
//     (event.relatedTarget)
// })

// document.ondragstart=(event)=>{return false}

// ball.addEventListener("mousedown",(event)=>{
//     ball.style.position="absolute";
//     ball.style.zIndex=100;
//     document.body.append(ball);

//     function move(pageX,pageY){
//         ball.style.left = pageX-ball.offsetWidth/2+"px";
//         ball.style.top= pageY-ball.offsetHeight/2+"px";
//     }
//     function mouseMove(event){
//         move(event.pageX,event.pageY)
//     }
//     document.addEventListener("mousemove",mouseMove)

//     ball.addEventListener("mouseup",(event)=>{
//         document.removeEventListener("mousemove",mouseMove);

//     })

// })

///////////////////////////drag element and drop  with effect
// let current=null;

// ball.addEventListener("mousedown",(event)=>{
//     ball.style.position="absolute";
//     ball.style.zIndex=2;
//     let shiftX=event.clientX-ball.getBoundingClientRect().left
//     let shiftY=event.clientY-ball.getBoundingClientRect().top
//     function move (pageX,pageY){
//         // ball.style.top =pageY-ball.offsetHeight/2+"px";
//         // ball.style.left=pageX-ball.offsetWidth/2+"px";
//          ball.style.top =pageY-shiftY+"px";
//         ball.style.left=pageX-shiftX+"px";

//     };
//     function mouse(event){
//         move(event.pageX,event.pageY);
//         ball.hidden=true;
//         let elemunder=document.elementFromPoint(event.clientX,event.clientY);
//         ball.hidden=false;
//         if(!elemunder)return;
//         let drag=elemunder.closest(".droppable");

//         if(current!=drag){
//             if(current){
//                 leaveElem(current)
//             }
//             current=drag
//             if(current){
//                 enterElem(current)
//             }
//             // current=null
//         }

//         function leaveElem(elem){
//             elem.style.background="";

//         };

//         function enterElem(elem){
//             elem.style.background="pink";

//         }

//     };
//     document.addEventListener("mousemove",mouse);
//     ball.addEventListener("mouseup",(event)=>{
//         document.removeEventListener("mousemove",mouse)
//     })

// })

// ball.ondragstart=(event)=>{return false}

// let currentDroppable = null;

// ball.onmousedown = function(event) {

//   let shiftX = event.clientX - ball.getBoundingClientRect().left;
//   let shiftY = event.clientY - ball.getBoundingClientRect().top;

//   ball.style.position = 'absolute';
//   ball.style.zIndex = 1000;
//   document.body.append(ball);

//   moveAt(event.pageX, event.pageY);

//   function moveAt(pageX, pageY) {
//     ball.style.left = pageX - shiftX + 'px';
//     ball.style.top = pageY - shiftY + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     ball.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
//     ball.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.closest('.droppable');
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) { // null если мы были не над droppable до этого события
//         // (например, над пустым пространством)
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
//         // (например, только что покинули droppable)
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

//   document.addEventListener('mousemove', onMouseMove);

//   ball.onmouseup = function() {
//     document.removeEventListener('mousemove', onMouseMove);
//     ball.onmouseup = null;
//   };

// };

// let currentDroppable = null;

// function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);

//     ball.hidden = true;
//     let elemBelow = document.elementFromPoint(event.clientX, event.clientY); //gates
//     ball.hidden = false;

//     if (!elemBelow) return;

//     let droppableBelow = elemBelow.closest('.droppable');
//     if (currentDroppable != droppableBelow) {
//       if (currentDroppable) { // null если мы были не над droppable до этого события
//         // (например, над пустым пространством)
//         leaveDroppable(currentDroppable);
//       }
//       currentDroppable = droppableBelow;
//       if (currentDroppable) { // null если мы не над droppable сейчас, во время этого события
//         // (например, только что покинули droppable)
//         enterDroppable(currentDroppable);
//       }
//     }
//   }

// function enterDroppable(elem) {
//   elem.style.background = 'pink';
// }

// function leaveDroppable(elem) {
//   elem.style.background = '';
// }

// ball.ondragstart = function() {
//   return false;
// };

//////////////////////////////dragn drop by me
//   let current =null;
//     ball.addEventListener("mousedown",(event)=>{
//         ball.style.position="absolute";
//         ball.style.zIndex=2;
//         let shiftX=event.clientX-ball.getBoundingClientRect().left;
//         let shiftY=event.clientY-ball.getBoundingClientRect().top;

//         function move(pageX,pageY){
//             ball.style.left=pageX-shiftX+"px";
//             ball.style.top=pageY-shiftY+"px";
//         }

//         function mouseMove(event){
//             move(event.pageX,event.pageY);
//             ball.hidden=true;
//             let elem = document.elementFromPoint(event.clientX,event.clientY);
//             ball.hidden=false;
//             if(!elem)return;
//             let drag=elem.closest(".droppable");
//             if(current!=drag){
//                 if(current){
//                     leaveCurrent(current)
//                 }
//                 current=drag;
//                 if(current){
//                     enterCurrent(current)
//                 }
//             }
//             function leaveCurrent(elem){
//                 elem.style.background=""
//             };
//             function enterCurrent(elem){
//                 elem.style.background="pink"
//             }

//         }
//         document.addEventListener("mousemove",mouseMove);

//         ball.addEventListener("mouseup",(event)=>{
//             document.removeEventListener("mousemove",mouseMove)
//         })

//     })

// thumb.addEventListener("mousedown",(event)=>{
//     thumb.style.position="absolute";
//     thumb.style.zIndex=100;
//     document.body.append(thumb)

//     // let shiftX=event.clientX-thumb.getBoundingClientRect().left;
//     // let shiftY=event.clientY-thumb.getBoundingClientRect().top;
// //    (event.pageX)
//     function move(pageX,pageY){
//         thumb.style.left=pageX-thumb.offsetWidth/2+"px";
//         thumb.style.top=pageY-thumb.offsetheight/2+"px"
//         if(parseInt(thumb.style.left)>310){
//             thumb.style.left=290+"px"
//         }
//     }

//     function mouseMove(event){
//         move(event.pageX,event.pageY)

//     }

//     document.addEventListener("mousemove",mouseMove);
//     thumb.addEventListener("mouseup",(event)=>{
//         document.removeEventListener("mousemove",mouseMove)
//     })

// })

// thumb.addEventListener("mousedown",(event)=>{
//     thumb.style.position="relative";
//     thumb.style.zIndex=2;

// })
// thumb.addEventListener("mousedown",(event)=>{
//     thumb.style.position="absolute";
//     thumb.style.zIndex=100;
//     document.body.append(thumb);

//     function move(pageX,pageY){
//         thumb.style.left = pageX-thumb.offsetWidth/2+"px";
//         thumb.style.top= pageY-thumb.offsetHeight/2+"px";
//     }
//     function mouseMove(event){
//         move(event.pageX,event.pageY)
//     }
//     document.addEventListener("mousemove",mouseMove)

//     thumb.addEventListener("mouseup",(event)=>{
//         document.removeEventListener("mousemove",mouseMove);

//     })

// })

// let slider=document.getElementById("slider");
// let thumb=slider.querySelector(".thumb");

// thumb.addEventListener("mousedown",(event)=>{
//     event.preventDefault()
//     thumb.style.position="absolute";
//     thumb.style.zIndex=10;
//     document.body.append(thumb)

//    function move(pageX,pageY){
//        thumb.style.top=pageY-thumb.offsetHeight/2+"px";
//        thumb.style.left=pageX-thumb.offsetWidth/2+"px";
//        if(parseInt(thumb.style.top)<slider.offsetTop){
//         thumb.style.top=slider.offsetTop+"px"
//        }

//        if(parseInt(thumb.style.top)>slider.offsetTop-5){
//         thumb.style.top=slider.offsetTop-5+"px"
//        }
//        if(parseInt(thumb.style.left)<slider.offsetLeft){
//         thumb.style.left=slider.offsetLeft+"px"
//        }
//        (slider.offsetLeft+slider.clientWidth)
//        if(parseInt(thumb.style.left)>slider.offsetLeft+slider.clientWidth){
//         thumb.style.left=slider.offsetLeft+slider.clientWidth-5+"px"
//        }

//    }
//    function mouse(event){
//        move(event.pageX,event.pageY)
//    }
//    document.addEventListener("mousemove",mouse)

//    document.addEventListener("mouseup",()=>{
//     document.removeEventListener("mousemove",mouse)
// })
//    thumb.ondragstart=()=>{return false};

// })

// let slider=document.getElementById("slider");
// let thumb=slider.querySelector(".thumb");
// thumb.addEventListener("mousedown",(event)=>{
//     event.preventDefault()
//     function move(pageX){
//         thumb.style.left=event.clientX- thumb.offsetWidth/2+"px"
//         if(parseInt(thumb.style.left)>310){thumb.style.left=310+"px"}
//
//     }

//     function mouse(event){
//         move(event.pageX)
//     }

//     document.addEventListener("mousemove",mouse)
//     document.addEventListener("mouseup",(event)=>{
//         document.removeEventListener("mousemove",mouse)
//     })
//     thumb.ondrаgstart=()=>{return false}
// })

///////////////////////slider working type

// let slider=document.getElementById("slider");
// let thumb=slider.querySelector(".thumb");

// thumb.addEventListener("mousedown",(event)=>{
//     event.preventDefault()
//    function move(pageX,pageY){
//        thumb.style.left=pageX-thumb.offsetWidth-slider.getBoundingClientRect().left+"px";

//        if(parseInt(thumb.style.left)<0){
//         thumb.style.left=0+"px"
//        }
//        if(parseInt(thumb.style.left)>slider.clientWidth){
//         thumb.style.left=slider.clientWidth+"px"
//        }

//    }
//    function mouse(event){
//        move(event.pageX)
//    }
//    document.addEventListener("mousemove",mouse)

//    document.addEventListener("mouseup",()=>{
//     document.removeEventListener("mousemove",mouse)
// })
//    thumb.ondragstart=()=>{return false};

// })

// let field = document.getElementById('field');

// document.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   let target = event.target.classList.contains('draggable');
//   // let target=event.target.getAttribute("class")="draggable"
//   if (target) {
//     (event.target);
//     event.target.style.position = 'absolute';
//     event.target.style.zIndex = 2;
//     //    document.body.append(target)
//   }
//   //    if(!target)return;

//   function move(pageX, pageY) {
//     event.target.style.left = pageX - event.target.offsetWidth / 2 + 'px';
//     event.target.style.top = pageY - event.arget.offsetHeight / 2 + 'px';
//   }
//   function mouse(event) {
//     move(event.target.pageX, event.target.pageY);
//   }
//   document.addEventListener('mousemove', mouse);
//   document.addEventListener('mouseup', (event) => {
//     document.removeEventListener('mousemove', mouse);
//   });

//   document.ondragstart = () => {
//     return false;
//   };
// });

// let field = document.getElementById('field');
// // let hero = document.querySelector('.draggable');
// // (hero);

// document.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   let target = event.target.classList.contains('draggable');
//   // let target=event.target.getAttribute("class")="draggable"
//   if (target) {
//     (target);
//     event.target.style.position = 'absolute';
//     //   event.target.style.zIndex = 2;
//     document.body.append(target);
//   }
//   //    if(!target)return;

//   //   function move(pageX, pageY) {
//   //     hero.style.left = pageX - hero.offsetWidth / 2 + 'px';
//   //     hero.style.top = pageY - hero.offsetHeight / 2 + 'px';
//   //   }
//   //   function mouse(event) {
//   //     move(event.pageX, event.pageY);
//   //   }
//   //   document.addEventListener('mousemove', mouse);
//   //   hero.addEventListener('mouseup', (event) => {
//   //     document.removeEventListener('mousemove', mouse);
//   //   });

//   //   document.ondragstart = () => {
//   //     return false;
//   //   };
// });

//////////////////////////////////////////////////heroes with delegation

// let field = document.getElementById('field');
// let current = null;

// document.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   let target = event.target.classList.contains('draggable');
//   let shiftX = event.clientX - event.target.getBoundingClientRect().left;
//   let shiftY = event.clientY - event.target.getBoundingClientRect().top;

//   if (target) {
//     event.target.style.position = 'absolute';
//     event.target.style.zIndex = 2;

//     function move(pageX, pageY) {
//       event.target.style.left = pageX - shiftX + 'px';
//       event.target.style.top = pageY - shiftY + 'px';

//       if (parseInt(event.target.style.top) < 0) {
//         event.target.style.top = 0 + 'px';
//       }
//       if (parseInt(event.target.style.left) < 0) {
//         event.target.style.left = 0 + 'px';
//       }
//       if (parseInt(event.target.style.left) > document.body.clientWidth - event.target.offsetWidth) {
//         event.target.style.left = document.body.clientWidth - event.target.offsetWidth + 'px';
//       }
//         if (parseInt(event.target.style.top) > document.body.scrollHeight - event.target.offsetWidth) {
//           event.target.style.top = document.body.scrollHeight - event.target.offsetWidth + 'px';
//         }

//     }

//     function mouse(event) {
//       move(event.pageX, event.pageY);

//       event.target.hidden = true;
//       let eldrop = document.elementFromPoint(event.clientX, event.clientY);
//       event.target.hidden = false;
//       if (!eldrop) return;
//       let trg = eldrop.closest('.droppable');
//       if (current != trg) {
//         if (current) {
//           leavecr(current);
//         }
//         current = trg;
//         if (current) {
//           entercr(current);
//         }
//       }
//       function leavecr(elem) {
//         elem.style.backgroundColor = '';
//       }
//       function entercr(elem) {
//         elem.style.backgroundColor = 'green';
//       }
//     }
//     document.addEventListener('mousemove', mouse);
//     document.addEventListener('mouseup', (event) => {
//       document.removeEventListener('mousemove', mouse);
//     });
//   }

//   document.ondragstart = () => {
//     return false;
//   };
// });
// document.addEventListener('keydown', (event) => {
//   if (event.code == 'KeyZ' && event.metaKey) {
//     alert('hello');
//   }
// });

// input.addEventListener('keydown', (event) => {
//   let key = event.key;
//   if (
//     (key >= '0' && key <= '9') ||
//     key == '+' ||
//     key == '(' ||
//     key == ')' ||
//     key == '-' ||
//     key == 'ArrowLeft' ||
//     key == 'ArrowRight' ||
//     key == 'Delete' ||
//     key == 'Backspace'
//   ) {
//     return;
//   } else event.preventDefault();
// });

/////////////multiple keys

// function runkeys(func, ...code) {
//   let pressed = new Set();
//   document.addEventListener('keydown', (event) => {
//     pressed.add(event.code);
//     for (let key of code) {
//       if (!pressed.has(key)) {
//         return;
//       }
//     }
//     pressed.clear();
//     func();
//   });

//     document.addEventListener('keyup', function (event) {
//       pressed.delete(event.code);
//     });
// }
// runkeys(() => alert('Привет!'), 'KeyQ', 'KeyZ');

// function cr(func, ...codes) {
//   let pressed = new Set();
//   document.addEventListener('keydown', (event) => {
//     pressed.add(event.code);
//     for (let key of codes) {
//       if (!pressed.has(key)) {
//         return;
//       }
//     }
//     pressed.clear();
//     func();
//   });

//   document.addEventListener('keyup', (event) => {
//     pressed.clear();
//   });
// }

// cr(() => alert('Привет!'), 'KeyQ', 'KeyZ');

// let button = document.querySelector('button');
// button.onpointerover = () => alert(pointerType);

//////////////////////////////////////////////slider with pointer
// let thumb = document.querySelector('.thumb');
// let shift2;

// thumb.addEventListener('pointerdown', (event) => {
//   event.preventDefault();
//   thumb.setPointerCapture(event.pointerId);
//   shift2 = event.clientX - thumb.getBoundingClientRect().left;
//   (shift2);
// });
// thumb.addEventListener('pointermove', (event) => {
//   let shiftX = event.clientX - shift2 - slider.getBoundingClientRect().left;
//   if (shiftX < 0) {
//     shiftX = 0;
//   }
//   if (shiftX > slider.getBoundingClientRect().width) {
//     shiftX = slider.getBoundingClientRect().width;
//   }
//   thumb.style.left = shiftX + 'px';
// });

// thumb.ondragstart = () => false;
// thumb.addEventListener('pointerup', (event) => {   //////it happens automaticaly
//   thumb.releasePointerCapture(event.pointerId);
// });

// let span = document.createElement('span');
// span.classList.add('show');
// document.body.append(span);
// window.addEventListener('scroll', (event) => {
//   span.innerHTML = pageYOffset + 'px';
//   //   if (document.documentElement.clientHeight == document.documentElement.getBoundingClientRect().bottom) {
//   //     document.body.style.height += 500 + 'px';
//   //   }
//   while (document.documentElement.getBoundingClientRect().bottom < document.documentElement.clientHeight + 100) {
//     document.body.insertAdjacentHTML('beforeend', '<p>new Date()</p>');
//   }
// });
// (document.body.style.height);

// function pop() {
//   while (true) {
//     if (document.documentElement.getBoundingClientRect().bottom > document.documentElement.clientHeight + 100) break;
//     document.body.insertAdjacentHTML('beforeend', `<p>${new Date()}</p>`);
//   }
// }
// window.addEventListener('scroll', pop);
// pop();

// function populate() {
//   while (true) {
//     let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
//     if (windowRelativeBottom > document.documentElement.clientHeight + 100) break;
//     document.body.insertAdjacentHTML('beforeend', `<p>Date: ${new Date()}</p>`);
//   }
// }

// window.addEventListener('scroll', populate);

// populate(); // инициализация документа

// let hght2 = hght - 200;

////////////////////////arrow scroll to top

// const hght2 = document.documentElement.getBoundingClientRect().bottom - document.documentElement.clientHeight;
// window.addEventListener('scroll', () => {
//   let hght = document.documentElement.getBoundingClientRect().bottom;
//   if (hght < hght2) {
//     arrowTop.hidden = false;
//   } else arrowTop.hidden = true;
// });
// arrowTop.onclick = () => {
//   window.scrollTo(0, 0);
// };

// let a = document.querySelectorAll('img[data-src]');
// for (let img of a) {
//   img.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg');
//   if (img.getBoundingClientRect().top < document.documentElement.clientHeight - 100) {
//     img.setAttribute('src', img.dataset.src);
//   }
// }

// window.addEventListener('scroll', () => {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i].getBoundingClientRect().top < document.documentElement.clientHeight - 100) {
//       a[i].setAttribute('src', a[i].dataset.src);
//     }
//   }
// });

// let b = document.querySelectorAll('img[data-src]');
// (b[1].getBoundingClientRect().top);
// (document.documentElement.clientHeight);

// (document.forms[1][0].name);
// (document.forms[2].elements.userFields);

// let login = form.login;
// login.value = 'hopla';
// (login);

// select.value = 'banana';
// select.options[2].selected = true;
// select.selectedIndex = 1;
// select.options[0].selected = true;

// // for (let x of select.options) {
// (
//   Array.from(select.options)
//     .filter((option) => option.selected)
//     .map((option) => option.value)
// );
// // }
// let option = new Option('hello', 'value', true, true);
// select.append(option);

// let x = Array.from(genres.options)
//   .filter((option) => option.selected)
//   .map((option) => option.text);
// (x);

// genres.append(new Option('Klassika', 'classic', true, true));

// input.onblur = function () {
//   if (!this.value.includes('@')) {
//     this.classList.add('invalid');
//     error.innerHTML = 'Wrong email';
//   }
// };
// input.onfocus = function () {
//   if (this.classList.contains('invalid')) {
//     this.classList.remove('invalid');
//     error.innerHTML = '';
//   }
// };

// input.onblur = function () {
//   if (!this.value.includes('@')) {
//     this.classList.add('error');
//   } else this.classList.remove('error');
//   this.focus();
// };

// form.addEventListener('focusin', (event) => {
//   event.target.classList.add('focused');
// });
// form.addEventListener('focusout', (event) => {
//   event.target.classList.remove('focused');
// });

// form.addEventListener(
//   'focus',
//   (event) => {
//     event.target.classList.add('focused');
//   },
//   true
// );
// form.addEventListener(
//   'blur',
//   (event) => {
//     event.target.classList.remove('focused');
//   },
//   true
// );

// (form.activeElement);

// let a = document.querySelector('#div');

// let b = document.createElement('textarea');
// document.body.append(b);

// b.hidden = true;

// a.addEventListener('focus', () => {
//   a.hidden = true;
//   b.hidden = false;
// });

// b.addEventListener('blur', gh);
// b.addEventListener('keydown', (event) => {
//   if (event.keyCode === 13) {
//     gh();
//   }
// });

// function gh() {
//   a.innerHTML = b.value;
//   a.hidden = false;
//   b.hidden = true;
// }

// let b = document.createElement('textarea');

// document.body.append(b);
// b.hidden = true;
// b.insertAdjacentHTML('afterbegin', '<button>kuu</button>');

// let cancel = document.createElement('button');
// cancel.innerHTML = 'cancel';
// document.body.append(cancel);
// let submit = document.createElement('button');
// submit.innerHTML = 'submit';
// document.body.append(submit);

// let table = document.querySelector('#bagua-table');
// let td = document.querySelectorAll('td');
// for (let i = 0; i < td.length; i++) {
//   td[i].setAttribute('tabindex', i + 1);
// }
// let target;

// table.addEventListener('focusin', (event) => {
//   target = event.target.closest('td');
//   let size = target.getBoundingClientRect();
//   b.style.top = size.top + 'px';
//   b.style.left = size.left + 'px';
//   b.style.width = size.width + 'px';
//   b.style.height = size.height + 'px';
//   b.hidden = false;
//   b.value = target.innerHTML;
//   b.focus();

//   table.style.pointerEvents = 'none';
// });

// submit.onclick = (event) => {
//   target.innerHTML = b.value;
//   b.hidden = true;
//   table.style.pointerEvents = '';
// };

// cancel.onclick = (event) => {
//   b.hidden = true;
//   table.style.pointerEvents = '';
// };

// let form = document.getElementsByName('calculator');
// let form = document.forms[0];
// let sumbefore = form.elements[0];
// let year = form.elements[1];
// let percent = form.elements[2];
// let green = document.getElementById('height-after');

// let before = document.getElementById('money-before');
// let after = document.getElementById('money-after');
// green.style.height = 100 + 'px';
// sumbefore.addEventListener('input', () => {
//   before.innerHTML = sumbefore.value;
// });
// year.oninput =
//   sumbefore.oninput =
//   percent.oninput =
//     () => {
//       after.innerHTML = Math.floor(parseInt(sumbefore.value) + (sumbefore.value * (percent.value / 100) * year.value) / 12);
//       green.style.height = (parseInt(after.innerHTML) - parseInt(sumbefore.value)) / 10 + 100 + 'px';
//     };

// (sumbefore.value);

// let btn = document.getElementById('clickbtn');
// let container = document.getElementById('prompt-form-container');
// let submit = document.querySelector('input[type=submit]');
// let text = document.querySelector('input[type=text]');
// let cancel = document.querySelector('input[type=button]');

// btn.onclick = () => {
//   container.hidden = false;
//   cover.hidden = false;
//   text.focus();
// };

// document.addEventListener('keydown', (event) => {
//   if (event.key == 'Enter') {
//     // event.preventDefault();
//     alert(text.value);
//     container.hidden = true;
//     cover.hidden = true;
//   } else text.focus();
// });
// submit.onclick = (event) => {
//   event.preventDefault();
//   alert(text.value);
//   container.hidden = true;
//   cover.hidden = true;
// };
// cancel.onclick = (event) => {
//   alert(null);
//   container.hidden = true;
//   cover.hidden = true;
// };

// document.addEventListener('keydown', (event) => {
//   if (event.keyCode == 27) {
//     alert(null);
//     container.hidden = true;
//     cover.hidden = true;
//   }
// });

// let lastElem = form.elements[form.elements.length - 1];
// let firstElem = form.elements[0];

// lastElem.onkeydown = function (e) {
//   if (e.key == 'Tab' && !e.shiftKey) {
//     firstElem.focus();
//     return false;
//   }
// };

// firstElem.onkeydown = function (e) {
//   if (e.key == 'Tab' && e.shiftKey) {
//     lastElem.focus();
//     return false;
//   }
// };

// document.addEventListener('DOMContentLoaded', () => {
//   alert(1);
//   alert(`${img.offsetWidth}:${img.offsetHeight}`);
// });

// window.addEventListener('load', () => {
//   alert(1);
//   alert(`${img.offsetWidth}:${img.offsetHeight}`);
// });

// window.onbeforeunload = function () {
//   return false;
// };

// window.onbeforeunload = function () {
//   return 'Есть несохранённые изменения. Всё равно уходим?';
// };

// alert(document.readyState);

// let script = document.createElement('script');
// script.src = 'https://example.com/404.js';
// document.head.append(script);

// script.onerror = function () {
//   alert('Error loading '); // Ошибка загрузки https://example.com/404.js
// };

// document.addEventListener('mousemove', (event) => {
//   event.preventDefault();
// });

// function func(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }
// func('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (scr) => {
//   (`${scr.src}`);
// });

// function newf(src, cb) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => cb(null, script);
//   script.onerror = () => cb(new Error(`cant load the script`));
//   document.head.append(script);
// }

// // newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (value) => {
// //   (value.src);
// //   newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', () => {
// //     ('again it hapend');
// //   });
// // });

// newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lsh.js', (err, value) => {
//   if (err) {
//     alert(1);
//   } else ('hello');
// });

// newf('1f', (err, scr) => {
//   if (err) {
//     alsert(1);
//   } else
//     newf('fd', (err, scr) => {
//       if (err) {
//         handle;
//       } else newf();
//     });
// });

// loadscr("1js",step1)
// function step1(error,script){
//     if(error){
//         handle
//     }
//     else loadscr("2js",step2)
// }
// function step2(error,script){
//     if(error){
//         handle
//     }
//     else loadscr("3js",step3)
// }

// function showCircle(cx, cy, radius, cb) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   div.onload = () => cb(div);
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';
//   }, 0);
// }
// showCircle(150, 150, 100, (div) => {
//   div.classList.add('message-ball');
//   div.append('Hello, world!');
// });

// function add(num, cb) {
//   (cb(num));
// }
// add(3, (num) => {
//   return num + 3;
// });
// let i = 0;
// function count() {
//   do {
//     i++;
//     div.innerHTML = i;
//   } while (i % 10000 != 0);

//   if (i < 1e5) {
//     setTimeout(count);
//   }
// }
// count();

// let c = { gret: 'hey' };
// let d = c;
// c.gret = 'hfije';
// (d.gret);

// let x = true;
// let y = 45 <= 90;
// let z = '0';
// (x && y && z);

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j < 5; j++) {
//     ('*');
//   }
// }

// function chek(date) {
//   if (date === { age: 18 }) {
//     ('1');
//   } else if (date == { age: 18 }) {
//     ('2');
//   } else (3);
// }
// chek({ age: 18 });

// (111 == true);
// let num = 0;
// (num++);
// (++num);
// (num);

// let obj = {
//   foo: 'bar',
//   func: function () {
//     let self = this;
//     (this.foo);
//     (self.foo);
//     (function () {
//       (this.foo);
//       (self.foo);
//     })();
//   },
// };

// obj.func();

// let x = [1, 2, 3, 4, 2, 3, 4];
// let y = {};
// x.forEach((fr) => {
//   y[fr] = y[fr] ? y[fr] + 1 : 1;
// });
// (y);
// ((1 && !2) || 3);
// let a = 5;

// // setTimeout(() => {
// //   a = 97;
// //   (a);
// // }, 2000);

// (a);
// let b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 97));
//   }, 2000);
// });
// b.then(() => {
//   (a);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 2000);
// });
// promise.then(
//   (result) => (result),
//   (error) => (error)
// );

// let primise = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error('Whoops')), 1000);
// });
// // primise.catch((error) => alert(error));
// primise.then(null, (error) => alert(error));

// let promise = new Promise((resolve, reject) => {
//   //   setTimeout(() => resolve('done'), 1000);
//   setTimeout(() => reject(new Error('whoop')), 1000);
// });
// promise.finally(() => ('ended'));
// promise.then(null, (error) => alert(error));

// function loadscript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error());
//     document.head.append(script);
//   });
// }
// // loadscript.then((result = (result)), (error = (error)));
// let promise = loadscript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
// promise.then(
//   (result) => (result),
//   (error) => (error)
// );

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), ms);
//   });
// }
// delay(3000).then((result) => (result));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     (result);
//     return result * 2;
//   })
//   .then((result) => {
//     (result);
//     return result * 2;
//   })
//   .then((result) => {
//     (result);
//     return result * 2;
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   });

// function load(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
//     script.onload = () => resolve(script);
//   });
// }
// load('https://learn.javascript.ru/article/promise-chaining/one.js')
//   .then((result) => load('https://learn.javascript.ru/article/promise-chaining/two.js'))
//   .then((result) => load('https://learn.javascript.ru/article/promise-chaining/three.js'))
//   .then(() => {
//     one();
//     two();
//     three();
//   });

// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((result) => {
//     return result.json();
//   })

//   .then((result) => (result));

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => (response.name));

// Запрашиваем user.json
// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => fetch(`https://api.github.com/users/${response.name}`))
//   .then((response) => response.json())
//   .then(
//     (response) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = response.avatar_url;
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(response);
//         }, 3000);
//       })
//   )

//   .then((response) => (`${response.name}`));

// function load(url) {
//   return fetch(url).then((response) => response.json());
// }

// function loadname() {
//   return fetch(`https://api.github.com/users/${response.name}`).then((response) => response.json());
// }
// function getimg(response) {
//   return new Promise((resolve, reject) => {
//     let img = document.createElement('img');
//     img.src = response.avatar_url;
//     document.body.append(img);

//     setTimeout(() => {
//       img.remove();
//       resolve(response);
//     }, 3000);
//   });
// }
// load('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => loadname(response.name))
//   .then(getimg)
//   .then((response) => (response.name));

// fetch('w;mgowmgowemg')
//   .then((response) => response.json())
//   .catch((error) => console.error('error here'));

// new Promise((resolve, reject) => {
//   resolve(1);
// })
//   .then((result) => {
//     dw();
//   })
//   .catch(alert);

// new Promise((resolve, reject) => {
//   throw new Error('error here ');
// })
//   .catch((error) => {
//     if (error instanceof URIError) {
//       alert('done');
//     } else ('icant');
//     throw error;
//   })
//   .then(() => ('continuing'));

// new Promise(() => {
//   ghrfd();
// }).then((result) => alert(result));

// window.addEventListener('unhandledrejection', (event) => {
//   //   (event.promise);
//   (event.reason);
// });
// Promise.all([
//   new Promise((resolve) => setTimeout(resolve(1), 1000)),
//   new Promise((resolve) => setTimeout(resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(resolve(3), 3000)),
// ]).then((result) => alert(result));

// Promise.all([
//   fetch('https://jsonplaceholder.typicode.com/photos').then((result) => result.json()),
//   fetch('https://jsonplaceholder.typicode.com/users').then((result) => result.json()),
//   fetch('https://jsonplaceholder.typicode.com/comments').then((result) => result.json()),
// ]).then((res) => res.forEach((res) => (res[0])));

// let url = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];

// let link = url.map((item) => fetch(item));
// // Promise.all(link).then((res) => res.forEach((res) => (res.url, res.status)));
// Promise.all(link)
//   .then((res) => Promise.all(res.map((r) => r.json())))
//   //   .then((res) => res.forEach((res) => (res.name)));
//   .then();

// Promise.all([
//   new Promise((resolve) => setTimeout(resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(reject(new Error('error here')), 2000)),
//   new Promise((resolve) => setTimeout(resolve(3), 3000)),
// ]).catch((result) => alert(result));

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://no-such-url'];

// let fetched = urls.map((r) => fetch(r));
// Promise.allSettled(fetched).then((res) => {
//   res.forEach((result, num) => {
//     if (result.status == 'fulfilled') (`${urls[num]}: ${result.value.status}`);
//     if (result.status == 'rejected') (`${urls[num]}: ${result.reason}`);
//   });
// });

// Promise.race([
//   new Promise((resolve) => setTimeout(resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(reject(new Error('error here')), 2000)),
//   new Promise((resolve) => setTimeout(resolve(3), 3000)),
// ]).then((result) => alert(result));

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// function load(src) {
//   let script = document.createElement('script');
//   script.src = src;
//   document.head.append(script);
//   return new Promise((resolve, reject) => {
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
//   });
// }
// load('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js').then((result) => (`${result.src}`));

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), ms);
//   });
// }
// delay(2000).then();

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(2), 2000);
//     });
//   })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(3), 3000);
//     });
//   })
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(4), 40(00);
//     });
//   })
//   .then();

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   //   .then((response) => response.json())
//   //   .then((response) => fetch(`https://api.github.com/users/${response.name}`))
//   //   .then((response) => response.json())
//   //   .then(
//   //     (response) =>
//   //       new Promise((resolve, reject) => {
//   //         let img = document.createElement('img');
//   //         img.src = response.avatar_url;
//   //         document.body.append(img);
//   //         setTimeout(() => {
//   //           img.remove();
//   //           resolve(response);
//   //         }, 3000);
//   //       })
//   //   )

//   .then((response) => (response));

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(resolve(3), 1000)),
// ]).then((result) => result.forEach((r) => (r)));

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];
// let names = ['iliakan', 'remy', 'jeresig'];

// let fetched = urls.map((item) => fetch(item));
// // Promise.all(fetched).then((response) => response.forEach((r) => (`${r.status}`)));

// Promise.all(fetched)
//   .then((responses) => {
//     responses.forEach((resp) => (resp.status, resp.url));
//     return responses;
//   })
//   .then((responses) => responses.map((r) => r.json()))
//   .then();

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then();

// let complete = true;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (complete) {
//       resolve('its ok');
//     } else reject('its not ok');
//   }, 3000);
// });
// (promise);
// promise.then((result) => (result.value));

// fetch('https://getpost.itgid.info/index2.php')
//   .then((data) => data.text())
//   .then((data) => (data));

// function prom(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`${error.message}`));
//   });
// }
// prom('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js').then(
//   (result) => (result),
//   (err) => (error)
// );

//   .then((result) => result.text())
//   .then((result) => {
//     (result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(2), 2000);
//     });
//   })

// function prom(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);

//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`${error.message}`));
//   });
// }
// prom('https://learn.javascript.ru/article/promise-chaining/one.js')
//   .then((result) => prom('https://learn.javascript.ru/article/promise-chaining/two.js'))
//   .then((result) => prom('https://learn.javascript.ru//article/promise-chaining/three.js'))
//   .then((reult) => {
//     one();
//     two();
//     three();
//   });

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((result) => result.json())
//   .then((result) => fetch(`https://api.github.com/users/${result.name}`))
//   .then((result) => result.json())
//   .then(
//     (result) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = result.avatar_url;
//         document.body.append(img);
//         let btn = document.createElement('button');
//         btn.innerHTML = 'click it';
//         document.body.append(btn);
//         btn.addEventListener('click', () => {
//           window.location.href = result.subscriptions_url;
//         });

//         setTimeout(() => {
//           img.remove();
//           resolve(result.name);
//         }, 2000);
//       })
//   )
//   .then();
// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];

// let fetched = urls.map((item) => fetch(item));
// Promise.all(fetched)
//   .then((result) => {
//     for (let res of result) {
//       //   res.json();
//       (res.url);
//     }
//     return result;
//   })
//   .then();
// //   .then((result) => Promise.all(result.map((res) => res.json())))
// //   .then((responses) => {
// //     responses.map((r) => r.json());
// //     return responses;
// //   })

// //   .then((users) => users.forEach((user) => alert(user.name)));

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://no-such-url'];

// let fetched = urls.map((item) => fetch(item));
// Promise.allSettled(fetched).then((result) => {
//   result.forEach((result, num) => {
//     if (result.status == 'fulfilled') {
//       (`${urls[num]}: ${result.status}`);
//     }
//     if (result.status == 'rejected') {
//       (`${urls[num]}: ${result.reason}`);
//     }
//   });
// });
// Promise.race([
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => reject(new Error('its error')), 500);
//   }),
//   new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 1000);
//   }),
// ]).then();

// function promisify(f) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function cb(err, result) {
//         if (err) {
//           reject(err);
//         } else resolve(result);

//         args.push(cb);
//       }
//       f.call(this, ...args);
//     });
//   };
// }

// function call(src, cb) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => cb(null, script);
//   script.onerror = () => cb(new Error('no such link'));
//   document.head.append(script);
// }
// // call('https://learn.javascript.ru/promisify', (error, script) => {
// //   if (error) {
// //     (error);
// //   } else (`here is the ${script.src}`);

// // });

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// loadScriptPromise('https://learn.javascipt.ru/promisify').then().catch();
// let load = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (error, result) => {
//       if (error) {
//         reject(error);
//       } else resolve(result);
//     });
//   });
// };
// load('https://www.youtube.com/watch?v=AAMwKmM0qG4&ab_channel=NickBisignano').then().catch();

// function promisify(f) {
//   return function (...args) {
//     return new Promise((resolve, reject) => {
//       function cb(error, result) {
//         if (error) {
//           reject(error);
//         } else resolve(result);
//       }
//       args.push(cb);
//       f.apply(this, args);
//     });
//   };
// }
// let load = promisify(loadScript);
// load('https://www.youtube.com/wath?v=AAMwKmM0qG4&ab_channel=NickBisignano').then().catch();

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 2000);
//   });
//   let prom = await promise;
//   (prom);
// }
// f();

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((result) => result.json())
//   .then((result) => fetch(`https://api.github.com/users/${result.name}`))
//   .then((result) => result.json())
//   .then(
//     (result) =>
//       new Promise((resolve, reject) => {
//         let img = document.createElement('img');
//         img.src = result.avatar_url;
//         document.body.append(img);

//         setTimeout(() => {
//           img.remove();
//           resolve(result.name);
//         }, 2000);
//       })
//   )
//   .then();

// async function f() {
//   let response = await fetch('https://learn.javascript.ru//article/promise-chaining/user.json');
//   let user = await response.json();
//   let username = await fetch(`https://api.github.com/users/${user.name}`);
//   let git = await username.json();
//   let img = document.createElement('img');
//   img.src = git.avatar_url;
//   document.body.append(img);
//   setTimeout(() => {
//     img.remove();
//   }, 2000);
// }
// f();

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }

//   then(resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
//   }
// }
// async function f() {
//   let res = await new Thenable(1);
//   (res);
// }
// f();

// class Waiter {
//   async wait() {
//     return 1;
//   }
// }
// new Waiter().wait().then(alert);

// async function f() {
//   try {
//     let response = await fetch('https://learn.javascript.ru/async-await#obrabotka-oshibok');
//     let user = await response.json();
//   } catch (error) {
//     alert(error);
//   }
// }
// f();

// async function f() {
//   let response = await fetch('https://learn.javascript.ru/async-await#obrabotka-oshibok');
//   let user = await response.json();
// }
// f().catch(alert);

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson('https://learn.javascript.ru//artlicle/promise-chaining/user.json')
//   .then() // (3)
//   .catch(alert);

// function load(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else throw new Error(response.status);
//   });
// }
// load('https://learn.javascript.ru//arsticle/promise-chaining/user.json').catch(alert);

// async function load(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//     // return json;
//   } else throw new Error(response.status);
// }
// load('no-such-user.json').catch(alert);

// async function wait() {
//   //   await new Promise((resolve) => setTimeout(resolve, 1000));

//   //   return 10;
//   let x = await new Promise((resolve) => {
//     setTimeout(() => resolve(1), 1000);
//   });
//   return x;
// }

// function f() {
//   return wait().then();
// }
// f();

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }

// Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//   let name = prompt('Введите логин?', 'iliakan');

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function load(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function demo() {
//   let user;
//   while (true) {
//     let name = prompt('Введите логин?', 'iliakan');

//     try {
//       user = await load(`https://api.github.com/users/${name}`);
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     } catch (error) {
//       if (error instanceof HttpError && error.response.status == 404) {
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//       } else {
//         throw error;
//       }
//     }
//   }
// }
// demo();

// let statues = [6, 2, 3, 8];
// function solution(statues) {
//   let count = 0;

//   for (let i = 0; i < statues.length; i++) {
//     let stats = statues.sort();
//     if (stats[i + 1] - stats[i] > 1) {
//       count++;
//       statues.push(stats[i] + 1);
//     }
//   }
//   return count;
// }
// (solution(statues));

// let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';

// .then((response) => response.json())
// .then((commit) => commit[1].author.login)
// .then();
// async function h(url) {
//   let fetched = await fetch(url);
//   let commits = await fetched.json();

//   (commits[1].author.login);
// }
// h(url);

// async function h(url) {
//   let response = await fetch(url);
//   let text = await response.text();
//   (text.slice(0, 81));
// }
// h(url);

// async function bl(url) {
//   let response = await fetch(url);
//   // ([...response.headers.entries()]);
//   for (let key of response.headers) {
//     (`${key}`);
//   }
// }
// bl(url);

// async function h() {
//   let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(user),
//   });

//   let result = await response.json();
//   alert(result.message);
// }
// h();
// const url = `https://jsonplaceholder.typicode.com/users`;

// const body = {
//   name: 'John',
//   surname: 'Smith',
// };

// function send(method, url, body = null) {
//   const headers = {
//     'Content-type': 'application/json',
//   };
//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   }).then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else
//       return response.json().then((err) => {
//         throw new Error('something went wrong');
//       });
//   });
//   // .then();
// }

// send(`POST`, url, body).then();

// async function send(method, url, body = null) {
//   const headers = {
//     'Content-type': 'application/json',
//   };
//   let response = await fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers,
//   });
//   let h = await response.json();

//   return h;
// }

// send(`POST`, url, body).then();
// async function getUsers(names) {
//   let jobs = [];

//   for (let name of names) {
//     let job = fetch(`https://api.github.com/users/${name}`).then(
//       (successResponse) => {
//         if (successResponse.status != 200) {
//           return null;
//         } else {
//           return successResponse.json();
//         }
//       },
//       (failResponse) => {
//         return null;
//       }
//     );
//     jobs.push(job);
//   }

//   let results = await Promise.all(jobs);

//   return results;
// }

// getUsers(['iliakan']);

// let names = ['iliakan', 'remy', 'jeresig'];
// // let requests = names.map((item) => fetch(`https://api.github.com/users/${item}`));
// // Promise.all(requests)
// //   .then((response) => Promise.all(response.map((item) => item.json())))
// //   .then((response) => {
// //     return response.forEach((item) => (item.name));
// //   });

// async function ret(names) {
//   let result = [];
//   for (let name of names) {
//     let job = await fetch(`https://api.github.com/users/${name}`).then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       return null;
//     });

//     result.push(job);
//   }
//   let results = Promise.all(result).then((response) => {
//     response.forEach((response) => (response.name));
//   });
//   return result;
// }
// ret(names);

// new Promise((resolve, reject) => {
//   resolve('hello World');
//   reject(new Error('smth'));
// }).then();

// canva.onmousemove = (event) => {
//   let ctx = canva.getContext(`2d`);
//   ctx.lineTo(event.clientX, event.clientY);
//   ctx.stroke();
// };

// canvasElem.onmousemove = function (e) {
//   let ctx = canvasElem.getContext('2d');
//   ctx.lineTo(e.clientX, e.clientY);
//   ctx.stroke();
// };

// formElem.onsubmit = async (event) => {
//   event.preventDefault();
//   let el = await fetch('https://learn.javascript.ru/article/formdata/post/user', {
//     body: new FormData(formElem),
//     method: 'POST',
//   });
//   let res = await el.json();
//   (res.message);
// };

// let formData = new FormData();
// formData.append('header', 'zero');
// formData.append('header1', 'zero1');
// for (let [name, value] of formData) {
//   (`${name}=${value}`);
// }

// formElem.onsubmit = async (event) => {
//   event.preventDefault();
//   let get= await fetch('https://learn.javascript.ru/article/formdata/post/user',{
//     method:'POST',
//     body:new FormData(formElem),
//   })
//   let set= await get.json()
// };

// const controller = new AbortController();
// let signal = controller.signal;
// // signal.addEventListener('abort', () => ('reset'));
// controller.abort();
// (controller.signal.aborted);

// const controller = new AbortController();
// // const signal =controller.signal
// setTimeout(() => controller.abort(), 1000);

// (async function () {
//   try {
//     let sn = await fetch('https://learn.javascript.ru/article/fetch-abort/demo/hang', {
//       signal: controller.signal,
//     });
//   } catch (error) {
//     if (error.name == 'AbortError') {
//       alert('Aborted!');
//     } else {
//       throw error;
//     }
//   }
// })();

// (async () => {
//   let response = await fetch('https://site.com/service.json', {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': 'secret',
//     },
//   });
//   return response;
// })();

// let url = new URL(
//   'https://www.google.com/search?q=%3Bjbn%3Bj&oq=%3Bjbn%3Bj&aqs=chrome..69i57j0i19j0i10i19j0i19l7.1036j0j15&sourceid=chrome&ie=UTF-8'
// );
// (url.protocol);

// let url = new URL('https://google.com/search');
// url.searchParams.set('q', 'text me!');
// url.searchParams.set('vhq', 'fh:y');

// url.searchParams.set('g', 'егвег');
// (url.toString());
// for (let [name, value] of url.searchParams) {
//   (`${name}=${value}`);
// }

// const uri = encodeURIComponent('rock&roll');
// const uri1 = encodeURI('rock&roll');
// let url = new URL(`https://google.com/search/${uri1}`);
// (url.toString());

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
// xhr.send();
// xhr.onload=()=>{
//   if(xhr.status!=200){
//     ("forbidden")
//   }else alert(`${xhr.length}`)
// }
// xhr.onprogress=()=>{

// }

// xhr.onload = () => {
//   alert(`${xhr.response}`);
// };

// xhr.onerror = () => {
//   alert(`forbidden`);
// };
// xhr.progress = (event) => {
//   if (event.lengthComputable) {
//     alert(`${event.loaded} from ${event.total}`);
//   }
// };
// xhr.timeout = 3000;

// xhr.onload = () => {
//   if (xhr.status != 200) {
//     (`forbidden ${xhr.status},${xhr.statusText}`);
//   } else {
//     (`ready, got ${xhr.response.length}`);
//   }
// };
// xhr.onprogress = (event) => {
//   if (event.lengthComputable) {
//     (`${event.loaded} from  ${event.total}`);
//   } else {
//     (` got ${event.loaded} bytes`);
//   }
// };
// xhr.onerror = () => {
//   ('error');
// };

// let xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
// xhr.responseType = 'json';
// xhr.send();
// // xhr.onload = () => {
// //   (xhr.response[0]);
// //   (xhr.getResponseHeader('Cache-Control'));
// // };

// let formdata = new FormData(document.forms[0]);
// let xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
// xhr.send(formdata);
// xhr.onload = () => {
//   (xhr.response);
// };

// let json = JSON.stringify({
//   name: 'hello',
//   surname: 'world',
// });
// let xhr = new XMLHttpRequest();
// xhr.open('POST', 'link');
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.send(json);

// function upload(file) {
//   let xhr = new XMLHttpRequest();
//   xhr.upload.onprogress = (event) => {
//     if (event.lengthComputable) {
//       (`${event.loaded} from ${event.total}`);
//     } else {
//       (`${event.total}`);
//     }
//   };

//   xhr.onloadend = () => {
//     if (xhr.status != 200) {
//       ('error' + this.status);
//     } else {
//       ('win');
//     }
//   };
//   xhr.open('POST', '/article/xmlhttprequest/post/upload');
//   xhr.send(file);
// }

// for (let key in user) {
// (user.key);
// }

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// for (let prop in menu) {
//   if (typeof menu[prop] === 'number') {
//     menu[prop] *= 2;
//   }
// }
// (menu);

// let user = {
//   name: 'Джон',
//   hi() {
//     alert(this.name);
//   },
// };

// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// let hi2 = hi.bind(user);
// hi2();

// let obj = {
//   read() {
//     this.a = +prompt('a');
//     this.b = +prompt('b');
//   },
//   sum() {
//     alert(this.a + this.b);
//   },
//   mul() {
//     alert(this.a * this.b);
//   },
// };
// obj.read();
// // (obj.a + obj.b);
// obj.sum();
// obj.mul();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     // показывает текущую ступеньку
//     alert(this.step);
//   },
// };

// // ladder.up();
// // ladder.up();
// // ladder.up();
// // ladder.down();
// // ladder.showStep();

// ladder.up().up().up().down().showStep();

// function Ret() {
//   this.name = 'JOn';
//   return { name: 'johfewfn' };
// }
// let user = new Ret();
// (user.name);

// function Ret() {
//   this.name = 'JOn';
//   return;
// }
// let user = new Ret();
// (user.name);

// function Const(name) {
//   this.name = name;
//   this.sayHi = function () {
//     ('hello' + this.name);
//   };
// }

// let user = new Const('vasya');
// user.sayHi();
// let obj = {};

// function A() {
//   return obj;
// }
// function B() {
//   return obj;
// }
// let a = new A();
// let b = new B();
// (a === b);

// function Cons() {
//   this.read = function () {
//     this.a = +prompt('a');
//     this.b = +prompt('b');
//   };

//   this.sum = function () {
//     alert(this.a + this.b);
//   };

//   this.mul = function () {
//     alert(this.a * this.b);
//   };
// }
// let obj = new Cons();
// obj.read();
// obj.sum();

// function Acum(val) {
//   this.read = function () {
//     val += +prompt('a');
//     (val);
//   };
// }
// let obj = new Acum(2);
// obj.read();
// obj.read();

// let user = { address: 'hello' };
// (user?.address);
// let obj1 = {
//   admin() {
//     alert(1);
//   },
// };
// let obj2 = {};
// obj1.admin?.();
// obj2.admin?.();

// let user = {
//   home: 1,
// };

// let id = Symbol('id');
// user[id] = 2;
// (user[id]);

// let id = Symbol();
// let user = {
//   home: 1,
//   [id]: 2,
// };

// (user[id]);

// let id = Symbol.for('id');
// let newid = Symbol.for('id');
// (id == newid);
// (Symbol.keyFor(id));

// let id = Symbol.for('id');
// let newid = Symbol('id2');
// (Symbol.keyFor(id));
// (newid.description);

// let user = {
//   name: 'john',
//   age: 1000,
//   [Symbol.toPrimitive](hint) {
//     (`hint: ${hint}`);
//     return hint == 'string' ? `{name: "${this.name}"}` : this.age;
//   },
// };
// (user);

// let user = {
//   name: 'john',
//   age: 1000,
//   valueOf() {
//     return this.age;
//   },
//   toString() {
//     return this.name;
//   },
// };
// (user + 500);

//

// let user = {
//   year: 1995,
//   get age() {
//     return 2022 - this.year;
//   },
//   set age(value) {
//     this.year = value;
//   },
// };
// user.age = '2001';
// (user.age);

// let user = {
//   get name() {
//     return this._name;
//   },
//   set name(value) {
//     if (value.length < 4) {
//       ('nothing');
//       return;
//     }
//     this._name = value;
//   },
// };
// user.name = ';4334g';
// (user.name);

// let user = {
//   age: 100,
//   name: 'john',
//   adress: {
//     street: 23,
//   },
// };
// Object.defineProperty(user, 'age', { writable: false });

// let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
// user.adress.street = 24;
// let des = Object.getOwnPropertyDescriptors(clone, 'age');
// (des);

// let animal1 = {
//   eats: true,
//   walk() {
//     alert('Animal walk');
//   },
// };

// // let rabbit = {
// //   jumps: true,
// //   __proto__: animal,
// // };
// // (rabbit.eats);

// let animal = {
//   eat: true,
// };
// function RAbbit(name) {
//   this.name = name;
// }
// RAbbit.prototype = animal;

// let rabbir = new RAbbit('white');
// (rabbir.eats);
// RAbbit.prototype = animal1;
// let rb = new RAbbit('ifgn');
// (rb.eats);

// String.prototype.repeatt = function (n) {
//   return new Array(n).join(this);
// };
// ('la la'.repeat(3));

// function f(a, b) {
//   alert(a + b);
// }

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };
// f.defer(2000)(1, 2);

// function make(phrase) {
//   return class {
//     sayhi() {
//       (phrase);
//     }
//   };
// }
// let User = make('hi');
// new User().sayhi();

// class User {
//   constructor(name) {
//     this.name = name;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(val) {
//     if (val.length < 4) {
//       alert('short');
//       return;
//     }
//     this._name = val;
//   }
// }
// let obj = new User('jofefdn');
// (obj.name);

// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит.`);
//   }
// }
// class Rabbit extends Animal {
//   constructor(name, elength) {
//     super(name);
//     this.elength = elength;
//   }
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
//   stop() {
//     super.stop(this.hide());
//   }
// }

// let rabbit = new Rabbit('bunny');
// // rabbit.speed = 12;
// rabbit.stop();

// let animal = {
//   name: 'Animal',
//   eat() {
//     alert(`${this.name} ест.`);
//   },
// };

// let rabbit = {
//   __proto__: animal,
//   name: 'Кролик',
//   eat() {
//     // вот как предположительно может работать super.eat()
//     this.__proto__.eat.call(this); // (*)
//   },
// };

// rabbit.eat(); // Кролик ест.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
// alert(rabbit.name);

// class Rabbit extends Object {
//   constructor(name) {
//     super();
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit('Кроль');

// alert(rabbit.hasOwnProperty('name'));

// class Article {
//   constructor(name, date) {
//     this.name = name;
//     this.date = date;
//   }
//   static compare(a, b) {
//     return a.date - b.date;
//   }
// }

// let articles = [
//   new Article('HTML', new Date(2019, 1, 1)),
//   new Article('CSS', new Date(2019, 0, 1)),
//   new Article('JavaScript', new Date(2019, 11, 1)),
// ];
// articles.sort(Article.compare);
// (articles[0].date);

// class Machine {
//   _water = 0;
//   get water() {
//     return this._water;
//   }
//   set water(value) {
//     if (value < 0) {
//       throw new Error('you cant set it below zero');
//     } else this._water = value;
//   }
//   constructor(power) {
//     this._power = power;
//   }
//   get power() {
//     return this._power;
//   }

//   #waterlimit = 200;
//   #checkwater(value) {
//     if (value < 0) throw new Error('you cant bro');
//     if (value > this.#waterlimit) throw new Error('too muchbro');
//   }
// }

// let cofe = new Machine(200);
// // cofe.power = -6;
// (cofe.#waterlimit);

// class Arr extends Array {
//   isempty() {
//     return this.length === 0;
//   }
// }

// let arr = new Arr(1, 2, 3, 4, 5, 8, 90.45);
// let filtered = arr.filter((item) => item > 5);

// (arr instanceof Arr);

// let mix = {
//   sayHI() {
//     ('hi' + this.name);
//   },
//   sayBye() {
//     ('bye' + this.name);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(User.prototype, mix);
// let user = new User('JOhn');
// user.sayHI();

// let mix = {
//   say(phrase) {
//     (phrase);
//   },
// };

// let mix2 = {
//   __proto__: mix,
//   sayHi() {
//     super.say('hello' + this.name);
//   },
//   sayBy() {
//     super.say('by' + this.name);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(User.prototype, mix2);
// let user = new User('JOhn');
// user.sayHi();

// class Dinglemouse{

//   constructor( firstName, lastName ){
//     this.firstName=firstName
//     this.lastName=lastName
//   }

//   getFullName(){
//     return firstName+" "+lastName
//   }

// }

// class Person {
//   constructor(name, lastname, age, gender) {
//     if (!name) {
//       this.name = 'John';
//     } else this.name = name;
//     if (!lastname) {
//       this.lastname = 'Doe';
//     } else this.lastname = lastname;
//     if (!age) {
//       this.age = 0;
//     } else this.age = age;
//     if (!gender) {
//       this.gender = 'Male';
//     } else this.gender = gender;
//   }

//   get fullname() {
//     return `${this.name} ${this.lastname}`;
//   }

//   static greetExtraTerrestrials(raceName) {
//     return `Welcome to Planet Earth ${raceName}`;
//   }
// }
// let person = new Person();

// (person.fullname);
// (Person.greetExtraTerrestrials('Garo'));

// class Animal {
//   constructor(name, age, legs, species, status) {
//     this.name = name;
//     this.age = age;
//     this.legs = legs;
//     this.species = species;
//     this.status = status;
//   }
//   introduce() {
//     (`Hello, my name is ${this.name} and I am ${this.age} years old`);
//   }
// }

// class Shark extends Animal {
//   constructor(name, age, status) {
//     super(name, age, status);
//     this.legCOunt = 0;
//     this.species = 'shark';
//   }
// }

// class Cat extends Animal {
//   constructor(name, age, status) {
//     super(name, age, status);
//     this.legCOunt = 4;
//     this.species = 'cat';
//   }

//   introduce() {
//     super.introduce();
//     ('Meow Meow');
//   }
// }
// let cat = new Cat('Asli', 34, 'happy');
// cat.introduce();

// class Dog extends Animal{
//   constructor(name,age,status,master){
//   super(name,age,status)
//   this.master=master

//   }
//   static introcude(master){
//     ("hello"+master)
//   }
// }

// class Cuboid {
//   constructor(length, width, height) {
//     this.length = length;
//     this.height = height;
//     this.width = width;
//   }

//   get area() {
//     (this.height * this.width);
//   }
//   get volume() {
//     (this.height * this.width * this.length);
//   }
// }

// class Cub extends Cuboid {
//   constructor(length) {
//     super(length);
//   }
// }
// let cub = new Cub(12, 13);
// (cub.width);

// class Filed {
//   constructor(fullname, context) {
//     this._fullname = fullname;
//     this._context = context;
//     this._filename = this._fullname.substring(0, this._fullname.length - 4);
//     this._ext = this._fullname.substring(this._fullname.length - 3);
//   }

//   get fullname() {
//     return this._fullname;
//   }
//   get ext() {
//     return this._ext;
//   }
//   get filename() {
//     return this._filename;
//   }
//   get context() {
//     return this._context;
//   }
// }
// let cub = new Filed('hello.qdhqdnq.php', 'world');
// cub.ext = 'qwfinqijf';
// (cub.ext);

// class Dict {
//   entry(word, descr) {
//     this.word = word;
//     this.descr = descr;
//   }

//   look(word) {
//     if (word === this.word) {
//       (this.descr);
//     } else {
//       ('cant find fruit');
//     }
//   }

//   // entry(word,descr){
//   //   if(word){
//   //     return descr
//   //   }
//   // }
// }
// let apple = new Dict();
// apple.entry('apple', 'fruit');
// apple.look('appe');
// (apple.look());

// class Filename {
//   constructor(name) {
//     this.name = name;
//   }
//   extension() {
//     return this.name.substring(this.name.length - 3);
//   }
//   filename() {
//     for (let i = this.name.length; i < 0; i--) {
//       if (i == '/') break;
//       return this.name.substring(this.name.indexOf(i), this.name.length - 3);
//     }
//   }
// }
// const fm = new Filename('/Users/person1/Pictures/house.png');
// (fm.filename());

// setTimeout(() => {
//   try {
//     engoeg;
//   } catch (err) {
//     if (err) {
//       (err.stack);
//     }
//   }
// }, 1000);

// let json = '{"name":"John", "age": 30}';
// let user = JSON.parse(json);
// (user.name);

// let json = '{"age": 30}';
// try {
//   let user = JSON.parse(json);

//   if (!user.name) {
//     throw new SyntaxError('object has no name');
//   }
//   (user.name);
// } catch (err) {
//   // ('there is an error');
//   // (err.message);
//   (err.name);
//   // (err.stack);
// }

// let json = '{"age": 30}';

// try {
//   // let user = JSON.parse(json);
//   // if (!user.name) {
//   //   throw new SyntaxError('Данные неполны: нет имени');
//   // }
//   blabla();
// } catch (err) {
//   if (err.name == 'SyntaxError') {
//     (err.name);
//   } else throw err;
// }

// function read() {
//   let json = '{"age": 30}';
//   try {
//     rhtrg();
//   } catch (err) {
//     if (err.name != 'SyntaxError') {
//       throw err;
//     }
//   }
// }

// try {
//   read();
// } catch (err) {
//   (err);
// }

// try {
//   ('fderg');
//   wfr;
// } catch (err) {
//   (err.message);
// } finally {
//   ('finished');
// }

// let result, dif;
// let num = +prompt('Введите положительное целое число?', 35);
// function fib(n) {
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error('no such number');
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }
// let start = Date.now();
// try {
//   result = fib(num);
//   (result);
// } catch (err) {
//   (err.message);
// } finally {
//   dif = Date.now() - start;
// }

// (dif + 'ms');

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null,
// };

// let json = JSON.stringify(student);
// alert(json);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: 'Conference',
//   participants: [{ name: 'John' }, { name: 'Alice' }],
//   place: room, // meetup ссылается на room
// };

// room.x = meetup;
// // (JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));

// // (
// JSON.stringify(meetup, (key, value) => {
//   (`${key}: ${value}`);
//   return key == 'x' ? undefined : value;
// });
// // );

// let user = {
//   name: 'John',
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };

// (JSON.stringify(user, null, 2));

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let json = JSON.parse(str, (key, value) => {
//   if (key == 'date') {
//     return new Date(value);
//   }
//   return value;
// });
// (json.date.getDate());

// let user = {
//   name: 'Василий Иванович',
//   age: 35,
// };

// let obj = JSON.parse(JSON.stringify(user));
// (obj);

// let room = {
//   number: 23,
// };

// let meetup = {
//   title: 'Совещание',
//   occupiedBy: [{ name: 'Иванов' }, { name: 'Петров' }],
//   place: room,
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     return key != '' && value == meetup ? undefined : value;
//   })
// );

// let recipeMap = new Map([
//   ['огурец', 500],
//   ['помидор', 350],
//   ['лук', 50],
// ]);

// for (let rp of recipeMap.entries()) {
//   (rp);
// }

// let obj = {
//   name: 'John',
//   age: 30,
// };

// let map = new Map(Object.entries(obj));
// (map);

// let prices = new Map([
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4],
// ]);

// let obj = Object.fromEntries(prices.entries());
// (obj.banana);

// let set = new Set();
// let john = { name: 'John' };
// let pete = { name: 'Pete' };
// let mary = { name: 'Mary' };
// set.add(john);
// set.add(pete);
// set.add(mary);
// set.add(john);
// for (let sets of set.keys()) {
//   (sets);
// }

// let set = new Set(['апельсин', 'яблоко', 'банан']);
// set.forEach((value1, value2, set) => (value1));

// let values = ['Hare', 'Krishna', 'Hare', 'Krishna', 'Krishna', 'Krishna', 'Hare', 'Hare', ':-O'];

// function ret(data) {
//   let set = new Set(data);
//   return Array.from(set);
// }
// (ret(values));

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// let narr = [],
//   set;
// for (let i = 0; i < arr.length; i++) {
//   narr.push(arr[i].toString().toLowerCase().split('').sort().join(''));
//   set = new Set(narr);
// }
// (Array.from(set));

// let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
// let map = new Map();
// for (let i = 0; i < arr.length; i++) {
//   let word = arr[i].toLowerCase().split('').sort().join('');
//   map.set(word, arr[i]);
//   (Array.from(map.values()));
// }

// let map = new Map();
// map.set('name', 'John');
// let keys = Array.from(map.keys());
// keys.push('more');
// (keys);

// let john = { name: 'John' };

// // let map = new Map();
// // map.set('john', '.nj');
// // (map.get('john'));

// // let weak = new WeakMap();
// // weak.set(john, 'ok');
// // john = null;
// // (weak);

// let map = new Map();
// function get(user) {
//   let count = 0;
//   map.set(user, count + 1);
//   (count);
// }
// get(john);
// get(john);

// let cache = new WeakMap();
// function user(user) {
//   if (!cache.has(user)) {
//     cache.set(user, new Date().getMilliseconds());
//   }
//   return cache.get(user);
// }
// lena = { name: 'lena' };
// alex = { name: 'alex' };
// user(lena);
// user(alex);
// alex = null;
// (cache.has(alex));

// let messages = [
//   { text: 'Hello', from: 'John' },
//   { text: 'How goes?', from: 'John' },
//   { text: 'See you soon', from: 'Alice' },
// ];

// let sett = new WeakSet();
// sett.add(messages[0]);
// sett.add(messages[1]);
// messages[1] = null;
// sett.add(messages[2]);
// (sett);

// let arr = [1, 23];
// let [first, second] = arr;
// (first);

// let arr = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
// let [name, , title] = arr;
// (title);

// let [ad, b, c] = 'abc';
// (ad);

// let user = new Map();
// user.set('name', 'John');
// user.set('age', '30');

// for (let [key, value] of user) {
//   (`${key}`, `${value}`);
// }

// let [name = prompt('enter it'), surname = prompt('enter it')] = ['joulis'];
// (surname);

// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200,
// };

// let { title, height } = options;
// let { title: v1, width: v2 } = options;
// (v1);

// let options = {
//   size: {
//     width: 100,
//     height: 200,
//   },
//   items: ['Cake', 'Donut'],
//   extra: true,
// };

// let {
//   size: { width, height },
//   items: [item1, item2],
//   extra,
// } = options;
// (width);

// let options = {
//   title: 'hello',
//   items: ['item1', 'item2'],
// };

// // function pt({ title = 'untitled', width = 100, height = 200, items: [item1, item2] }) {
// //   (title);
// // }
// // pt(options);

// function p({}) {
//   (title);
// }
// p(options);

// let user = {
//   name: 'John',
//   years: 30,
// };

// let { name, years, isAdmin = false } = user;
// (isAdmin);

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   levon: 550,
// };

// function get(salaries) {
//   let arr = [];

//   for (let value of Object.values(salaries)) {
//     arr.push(value);
//   }
//   z = Math.max(...arr);
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value == z) {
//       (key);
//     }
//   }
// }
// get(salaries);

// function get(salaries) {
//   let val = 0;
//   let n = null;
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value > val) {
//       val = value;
//       n = key;
//     }
//   }
//   (n);
// }
// get(salaries);
// let date = new Date(24 * 3600 * 1000);
// // let date1 = new Date(50000000000);
// // (date);
// (date);

// let date = new Date('1995.01.02');
// (date);

// let date = new Date();
// date.getDate();
// (date.getDate());
// // (date.getTimezoneOffset());
// date.setHours(0);
// (date);

// let date = new Date(2016, 1, 28);
// date.setDate(date.getDate() + 2);
// (date);

// let date = new Date();
// date.setSeconds(date.getSeconds() - 70);
// (date);
// (new Date());

// let start = new Date();
// // (+date);
// for (let i = 0; i < 10000; i++) {
//   let don = i * i;
//   (don);
// }
// let end = new Date();
// (end - start);

// let start = Date.now();
// // (+date);
// for (let i = 0; i < 10000; i++) {
//   let don = i * i;
//   (don);
// }
// let end = Date.now();
// (end - start);

// function compare1(date1, date2) {
//   return date2 - date1;
// }

// function compare2(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) {
//     f(date1, date2);
//   }

//   return Date.now() - start;
// }
// (bench(compare2));
// (bench(compare1));

// let date = new Date(2012, 1, 20, 3, 12);
// (date);

// let date = new Date(2012, 0, 3).getDay();
// // (date);

// switch (date) {
//   case 0:
//     ('Sat');
//     break;
//   case 1:
//     ('Mon');
//     break;
//   case 2:
//     ('Tue');
//     break;
//   case 3:
//     ('Wed');
//     break;
//   case 4:
//     ('Thi');
//     break;
//   case 5:
//     ('Fri');
//     break;
//   case 6:
//     ('Sat');
//     break;
// }

// let date = new Date(2012, 0, 3);

// function show(date) {
//   let date1 = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
//   return date1[date.getDay()];
// }
// (show(date));

// let date = new Date(2012, 0, 3);

// // function show(date) {
// //   let date1 = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
// //   return date1[date.getUTCDay()];
// // }
// // (show(date));

// (date.getUTCDay());

// let date = new Date(2015, 0, 2);
// function show(date, days) {
//   let copy = new Date(date);
//   copy.setDate(date.getDate() - days);
//   return copy.getDate();
// }
// (show(date, 365));

// let date = new Date(2020, 1);
// let date1 = new Date(date);
// date1.setDate(date1.getDate() + 30);
// for (let i = 0; i <= 5; i++) {
//   if (date1.getMonth() == date.getMonth()) {
//     (date1);
//   } else {
//     date1.setDate(date1.getDate() - i);
//   }
// }
// (date1);

// let date = new Date(2013, 1);
// let date1 = new Date(date);
// date1.setDate(date1.getDate() + 30);
// for (let i = 0; i < 4; i++) {
//   if (date1.getMonth() == date.getMonth()) {
//     date1.getDate();
//   } else {
//     date1.setDate(date1.getDate() - i);
//     (date1);
//   }
// }

// function d(year, date) {
//   let dd = new Date(year, date + 1, 0);
//   (dd.getDate());
// }
// d(2013, 11);

// let dd = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
// let dd2 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1);
// let dd1 = new Date();
// ((dd2 - dd1) / 1000 / 3600);
// let date1 = new Date(2022, 1, 8, 20, 21, 13);
// let date2 = new Date(2022, 1, 9, 20, 21, 15);

// let date1 = new Date();
// let date2 = new Date(new Date() - 86400 * 1000);

// function format(date) {
//   let n = (date1 - date) / 1000;
//   if (n < 1) {
//     ('just now');
//   } else if (n < 60 && n > 1) {
//     (` ${n} sec before`);
//   } else if (n > 60 && n < 3600) {
//     (` ${n / 60} min before`);
//   } else {
//     let date3 = [
//       '' + date.getFullYear(),
//       '0' + date.getMonth() + 1,
//       '0' + date.getDate(),
//       '0' + date.getHours(),
//       '0' + date.getMinutes(),
//     ].map((item) => item.slice(-2));

//     (date3.slice(0, 3).join('.') + ' ' + date3.slice(3).join(':'));
//   }
// }
// format(date2);

// let inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'];

// function solution(inputArray) {
//   let inp = inputArray.map((item) => item.length);
//   let len = Math.max(...inp);
//   let g = inputArray.filter((item) => item.length == len);
//   (g);
// }

// solution(inputArray);

// s1 = 'aabcc';
// s2 = 'adcaa';
// function solution(s1, s2) {
//   let count = 0;

//   for (let i = 0; i < s2.length; i++) {
//     if (s1.includes(s2[i])) {
//       s1 = s1.replace(s2[i], '');
//       count++;
//     }
//   }
//   (count);
// }
// solution(s1, s2);

// n = 239017;

// function solution(n) {
//   let h = n.toString().split('');
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 0; i < h.length / 2; i++) {
//     count1 += parseInt(h[i]);
//   }
//   let g = h.reverse();
//   for (let i = 0; i < g.length / 2; i++) {
//     count2 += parseInt(g[i]);
//   }
//   (count2 == count1);
// }
// solution(n);

// let a = [4, 2, 9, 11, 2, 16];

// function solution(a) {
//   let b = [];

//   for (let i = 0; i < a.length; i++) {
//     if (a[i] != -1) {
//       b.push(a[i]);
//       delete a[i];
//     }
//   }
//   let c = b.sort();
//   for (let j = 0; j < c.length; j++) {
//     if (!a[j]) {
//       a[j] = c[j - 1];
//       a[j + 1] = c[j];
//     }
//   }
//   (a);
// }
// solution(a);

// function solution(a) {
//   let b = [...a].sort((a, b) => a - b).filter((item) => item != -1);
//   let index = 0;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === -1) continue;
//     else {
//       a[i] = b[index];
//       index++;
//     }
//   }
//   (a);
// }
// solution(a);

// let b = str.split('(').pop().split(')')[0];
// (b);
// function solution(inputString) {
//   let arr = str.split('');
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === '(') {
//       newarr.push(arr[i + 1]);
//       i ++;
//       if (arr[i] === ')') break;
//     }
//   }
//   (newarr);
// }
// solution(str);

// solution = (s) => {
//   if (s.indexOf('(') == -1) return s;

//   const rev = s.split('(').pop().split(')')[0];
//   s = s.replace('(' + rev + ')', rev.split('').reverse().join(''));

//   // return solution(s);
//   return solution(s);
// };
// (solution(str));
// let s = 'foo(bar)baz(jdk)';

// function solution(s) {
//   while (1) {
//     let c = s.indexOf(')');

//     if (c === -1) {
//       break;
//     }

//     let o = s.substring(0, c).indexOf('(');

//     let start = s.substring(0, o);
//     let middle = s
//       .substring(o + 1, c)
//       .split('')
//       .reverse()
//       .join('');
//     let end = s.substring(c + 1, s.length);

//     s = start + middle + end;
//   }

//   return s;
// }
// (solution(s));

// let s = 'foo(bar)baz(jdk)';
// function sol(s) {
//   while (true) {
//     let c = s.indexOf(')');
//     if (c === -1) break;

//     let o = s.substring(0, c).indexOf('(');
//     let start = s.substring(0, o);
//     let middle = s
//       .substring(o + 1, c)
//       .split('')
//       .reverse()
//       .join('');
//     let end = s.substring(c + 1);
//     s = start + middle + end;
//   }
//   return s;
// }
// (sol(s));

// a = [50, 60, 60, 45, 70];

// function sl(a) {
//   let count1 = 0;
//   let count2 = 0;
//   for (let i = 1; i < a.length; i = i + 2) {
//     count1 += a[i];
//   }
//   for (let i = 0; i < a.length; i = i + 2) {
//     count2 += a[i];
//   }
//   return [count1, count2];
// }
// (sl(a));

// function* hi(){
//   yield 1;
//   yield 2;
//   return 3;
// }

// let g = hi()
// let gh =

// function gh(x) {
//   return function (y) {
//     return x + y;
//   };
// }
// (gh(2)(3));

// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inb(arr) {
//   let narr = [];

//   return function (a, b) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= a && arr[i] <= b) {
//         narr.push(arr[i]);
//       }
//     }
//     return narr;
//   };
// }
// let ing = inb(arr);
// (arr.filter(inb(3, 6)));

// function inb(arr) {
//   return function (x) {
//     for (let prop in arr) {
//       if (x == arr[prop]) {
//         return x;
//       }
//     }
//   };
// }
// let ing = inb(arr);
// (arr.filter(inb([3, 4])));

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// function s(cryt) {
//   return function (a, b) {
//     return a[cryt] > b[cryt] ? 1 : -1;
//   };
// }
// (users.sort(s('age')));

// function* gen() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let gh = gen();
// // let one = gh.next();
// // (JSON.stringify(one));
// // (gh.next());
// // (gh.next());
// for (let prop of gh) {
//   (prop);
// }

// let obj = {
//   from: 1,
//   to: 5,
// };
// obj[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// for (let num of obj) {
//   (num);
// }

// let obj = {
//   from: 1,
//   to: 5,
// };

// obj[Symbol.iterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     next() {
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };
// for (let prop of obj) {
//   (prop);
// }

// let obj = {
//   from: 1,
//   to: 5,
//   [Symbol.iterator]: function () {
//     return this;
//   },
//   next() {
//     if (this.from <= this.to) {
//       return { done: false, value: this.from++ };
//     } else {
//       return { done: true };
//     }
//   },
// };
// for (let prop of obj) {
//   (prop);
// }

// let str = 'hello';
// // for (let prop of str) {
// //   (prop);
// // }

// let iterator = str[Symbol.iterator]();
// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   else (result.value);
// }

// let arr = Array.from(obj, (item) => item * 2);
// (arr);

// let num = 2344_2434324_4234324;
// (num);

// let obj = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let val = this.from; val < this.to; val++) {
//       yield val;
//     }
//   },
// };
// ([...obj]);

// let obj = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let val = this.from; val <= this.to; val++) {
//       yield val;
//     }
//   },
// };
// ([...obj]);

// function* gen(start, end) {
//   for (let i = start; i < end; i++) {
//     yield i;
//   }
// }

// function* combine() {
//   yield* gen(48, 57);
//   yield* gen(65, 90);
//   yield* gen(97, 122);
// }

// let g = combine();
// for (let val of g) {
//   (String.fromCharCode(val));
// }

// function* gen() {
//   let result = yield '2+2=?';
//   (result);
// }
// let g = gen();
// g.next();

// setTimeout(() => g.next(4), 2000);

// function* gen() {
//   let res1 = yield '2+2=?';
//   (res1);
//   let res2 = yield '3+3=?';
//   (res2);
// }
// let g = gen();
// (g.next().value);
// (g.next(4).value);
// (g.next(9).value);

// function* gen() {
//   try {
//     let result = yield '2+2=?';
//     (result);
//   } catch (error) {
//     alert(error);
//   }
// }
// let g = gen();
// g.next();
// g.throw(new Error('something bad happend'));

// function* gen() {
//   let result = yield '2+2=?';
//   (result);
// }
// let g = gen();
// g.next();
// try {
//   g.throw(new Error('something bad happend'));
// } catch (error) {
//   alert(error);
// }

// function* rand(n) {
//   while (true) {
//     n = (n * 16807) % 2147483647;
//     yield n;
//   }
// }

// let g = rand(1);
// let one = g.next();
// let two = g.next();
// let three = g.next();
// (three);

// let range = {
//   from: 1,
//   to: 5,
// };

// range[Symbol.asyncIterator] = function () {
//   return {
//     current: this.from,
//     last: this.to,

//     async next() {
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     },
//   };
// };

// (async () => {
//   for await (let prop of range) {
//     (prop);
//   }
// })();

// import { sayhi } from './new.js';
// console.loh(sayhi);

// import say from './new.js';
// say();

// let arr = [
//   { heroe: 'heroe1', power: 'money', id: 'gustav' },
//   { heroe: 'heroe2', power: 'water', id: 'aqua' },
// ];

// // import { getValue } from './new.js';
// // getValue(arr, 'heroe');
// // // import { mapA } from './new.js';
// // mapA(arr, 'heroe');

// import { gv, mp } from './helper.js';
// gv(arr, 'heroe');
// // mp(arr, 'heroe');
// gv(arr, 'power');

// import { obj } from './helper.js';
// (obj);
// obj.name = 'John';

// import { admin, sayHi } from './helper.js';
// admin.name = 'JOhn';
// (admin.name);
// sayHi();

// import * as help from './helper.js';
// help.admin.name = 'JOhn';
// // (help.admin.name);
// help.sayHi();

// import { sayHi as hi } from './helper.js';
// hi();

// import * as say from './helper.js';
// say.hi();

// import { default as User, hi } from './helper.js';
// hi();

// import { sayHi } from './new.js';
// sayHi();

// import { hio } from './new.js';
// hio();

// import { default as User, hi } from './new.js';
// let obj = new User('john');
// (obj.name);
// hi();

// async function load() {
//   let say = await import('./helper.js');
//   say.hi();
// }
// load();

// function sumto(n) {
//   if (n == 1) {
//     return n;
//   } else return n + sumto(--n);
// }
// (sumto(3));

// function fact(n) {
//   if (n == 1) {
//     return n;
//   } else return n * fact(--n);
// }
// (fact(5));

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else return setInterval(() => fib(n - 1) + fib(n - 2), 1000);
// }
// (fib(7));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// function obj(list) {
//   if (list.value) (list.value);
//   if (list.next) {
//     obj(list.next);
//   }
// }
// (obj(list));

// function obj(list) {
//   if (list.next) {
//     obj(list.next);
//   }
//   (list.value);
// }
// (obj(list));

// function ret(n) {
//   if (n < 10) {
//     return n;
//   } else n = (n % 10) * Math.trunc(n / 10);
//   return ret(n);
// }
// (ret(99));
// function get(i) {
//   try {
//     return get(++i);
//   } catch (error) {
//     return i;
//   }
// }
// (get(0));
// let n = 999;
// n = n
//   .toString()
//   .split('')
//   .map((item) => +item)
//   .reduce((acc, item) => acc * item);
// (n);

// function ret(n) {
//   if (n < 10) {
//     return n;
//   } else
//     n = n
//       .toString()
//       .split('')
//       .map((item) => +item)
//       .reduce((acc, item) => acc * item);
//   return ret(n);
// }
// (ret(999));

// const people = {
//   Ram: {
//     fullName: 'Ram Kumar',
//     details: {
//       age: 31,
//       isEmployed: true,
//     },
//   },
//   Sourav: {
//     fullName: 'Sourav Singh',
//     details: {
//       age: 22,
//       isEmployed: false,
//     },
//   },
//   Jay: {
//     fullName: 'Jay Grewal',
//     details: {
//       age: 26,
//       isEmployed: true,
//     },
//   },
// };
// function rec(obj, ar = []) {
//   const arr = ar;
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key];
//     if (typeof value != 'object') {
//       arr.push(value);
//     } else if (typeof value === 'object') {
//       rec(value, arr);
//     }
//   });
//   return arr;
// }
// (rec(people));

// let obj = {
//   a: {
//     b: {
//       c: 12,
//       d: 'Hello World',
//     },
//     e: [1, 2, 3],
//   },
// };

// function rec(obj, ar = []) {
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key];
//     if (typeof value != 'object') {
//       ar.push(value);
//     } else if (typeof value === 'object') {
//       rec(value, ar);
//     }
//   });
//   return ar;
// }
// (rec(obj));

// let arr = [1, 2, [1, 2]];

// function rec(arr, count = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       count += arr[i];
//     } else if (Array.isArray(arr[i])) {
//       count += rec(arr[i]);
//     }
//   }
//   return count;
// }
// (rec(arr));

// let arr = [1, 2, [1, 2]];

// function rec(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       count += arr[i];
//     } else if (Array.isArray(arr[i])) {
//       count += rec(arr[i]);
//     }
//   }
//   return count;
// }
// (rec(arr));

// function rec(n) {
//   if (n == 1) {
//     return n;
//   } else return n + rec(--n);
// }
// (rec(10));

// const l = [10, [[10], 10], [10]];

// function sumSquares(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number') {
//       count += Math.pow(arr[i], 2);
//     } else if (typeof arr[i] === 'object') {
//       count += sumSquares(arr[i]);
//     }
//   }
//   return count;
// }
// (sumSquares(l));

// let num = 4321;

// // function rec(num) {
// //   if (n < 10) {
// //     return n;
// //   } else
// //     n = n
// //       .toString()
// //       .split('')
// //       .map((item) => +item)
// //       .reverse();
// //   return ret(n);
// // }

// let parseInt(n) = num
//   .toString()
//   .split('')
//   .map((item) => +item)
//   .reverse()
//   .join('');

// (n);

// function ret(n) {
//   if (n < 10) {
//     return n;
//   } else
//     n = n
//       .toString()
//       .split('')
//       .map((item) => +item)
//       .reduce((acc, item) => acc + item);
//   return ret(n);
// }
// (ret(999));

// const animals = [
//   {
//     id: 1,
//     type: 'cat',
//     pets: [
//       { id: 1, name: 'Toby', breed: 'Tabby' },
//       { id: 2, name: 'Golden Girl', breed: 'Russian Blue' },
//     ],
//   },
//   { id: 2, type: 'dog', pets: [{ id: 3, name: 'Goldilocks', breed: 'Poodle' }] },
//   { id: 3, type: 'fish', pets: [{ id: 4, name: 'Marigold', breed: 'Goldfish' }] },
// ];

// function rec(arr, cryt, array = [], count = 0) {
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     Object.keys(obj).forEach((key) => {
//       let value = obj[key];
//       if (!Array.isArray(value) && key === cryt) {
//         array.push(value);
//         // count++;
//         // (value);
//       } else if (Array.isArray(value)) {
//         rec(value, cryt, array, count);
//       }
//     });
//   }
//   return count, array;
// }

// (rec(animals, 'name'));

// function rec(arr, cryt, array = []) {
//   for (let i = 0; i < arr.length; i++) {
//     let obj = arr[i];
//     Object.keys(obj).forEach((key) => {
//       let value = obj[key];
//       if (!Array.isArray(value) && typeof value === 'string' && value.includes(cryt)) {
//         array.push(value);
//       } else if (Array.isArray(value)) {
//         rec(value, cryt, array);
//       }
//     });
//   }
//   return array.length;
// }
// (rec(animals, 'Gold'));

// const people = {
//   Ram: {
//     fullName: 'Ram Kumar',
//     details: {
//       age: 31,
//       isEmployed: true,
//     },
//   },
//   Sourav: {
//     fullName: 'Sourav Singh',
//     details: {
//       age: 22,
//       isEmployed: false,
//     },
//   },
//   Jay: {
//     fullName: 'Jay Grewal',
//     details: {
//       age: 26,
//       isEmployed: true,
//     },
//   },
// };

// function rec(obj, cryt, arr = []) {
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key];

//     if (typeof value != 'object' && key === cryt) {
//       arr.push(value);
//     } else if (typeof value === 'object') {
//       rec(value, cryt, arr);
//     }
//   });
//   return arr;
// }
// (rec(people, 'age'));

// function fib(n) {
//   if (n <= 1) {
//     return n;
//   } else return fib(n - 1) + fib(n - 2);
// }
// function cache(fun) {
//   let map = new Map();
//   return function (x) {
//     if (map.has(x)) {
//       return map.get(x);
//     } else {
//       let result = fun(x);
//       map.set(x, result);
//       return result;
//     }
//   };
// }
// fib = cache(fib);
// (fib(15));

// function say(phrase) {
//   (phrase + this.name);
// }

// let obj = {
//   name: 'john',
// };

// say.call(obj, 'hello');

// let num = 29;
// function rec(num) {
//   if (num < 10) {
//     return num;
//   } else return (num % 10) + Math.trunc(rec(num / 10));
// }
// (rec(29));

// function num(n) {
//   if (n === 1) {
//     return 9;
//   } else return parseInt('9' + num(--n));
// }
// (num(1));

// function sum(n, m) {
//   return Math.trunc(m / n) * n;
// }
// (sum(3, 10));

// let a = [1, 2, 2];
// let b = [2, 1, 1];
// // let b = Array.from(new Set(a));
// // (b);

// function sol(a, b) {
//   let a1 = Array.from(new Set(a));
//   let b1 = Array.from(new Set(b));
//   return a1.every((item) => b1.includes(item));

// }

// (sol(a, b));

// let user = {
//   firstName: 'Вася',
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   },
// };
// let f = user.sayHi;
// setTimeout(f.bind(user), 1000);

// let user = {
//   firstName: 'Вася',
// };

// function func(phrase) {
//   alert(phrase + this.firstName);
// }
// let f = func.bind(user);
// f('hi');

// let user = {
//   firstName: 'Вася',
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   },
// };
// let f = user.sayHi.bind(user);
// setTimeout(f, 1000);

// function dub(a, b) {
//   return a * b;
// }

// let d = dub.bind(null, 2);
// (d(4));

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} fa in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// let arr = [1, 1, 1];

// function sol(arr) {
//   for (let i = 0; i < arr.length; ) {
//     if (arr[i + 1] - arr[i] != 1) {
//       arr[i + 1]++;
//       i++;
//     }
//   }
//   (arr);
// }
// sol(arr);
// let arr = [1, 2, 3];

// function myevery(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!cb(arr[i])) {
//       return false;
//     } else return true;
//   }
// }
// (myevery(arr, (item) => item > 2));

// let arr = [1, 2, 3];

// function mysome(arr, cb) {
//   for (let i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       return true;
//     } else return false;
//   }
// }
// (mysome(arr, (item) => item > 1));

// let person =(job) {
//     ('hello ' + this.name);
//     (job);
//   },
// };

// let lena = {
//   name: 'lena',
// };

//.apply(lena, );

// let arr = [1, 2, 3, 4, 5];

// // Array.prototype.mult = function (n) {
// //   return this.map((item) => item * n);
// // };
// // (arr.mult(2));

// function some(arr, cb) {
//   for (let prop of arr) {
//     if (cb(prop)) return true;
//   }
//   return false;
// }
// (some(arr, (item) => item > 6));

// let btn = document.querySelector('.btn');

// // btn.onclick = change;
// let btn2 = document.querySelector('.btn2');

// btn2.onclick = () => {
//   change.call(btn, 'green');
// };
// function change(color) {
//   this.style.backgroundColor = color;
// }
// (btn2);

// let user = {
//   firstName: 'Вася',
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   },
// };
// let usr = user.sayHi.bind(user);
// setTimeout(usr, 1000);

// let user = {
//   firstName: 'Вася',
//   say(phrase) {
//     alert(`${phrase}, ${this.firstName}!`);
//   },
// };
// let usr = user.say.bind(user, 'hello');
// usr();

// let user = {
//   name: 'john',
//   say() {
//     (`${this.name} ${phrase} ${date}`);
//   },
// };
// function partial(func, ...arguments) {
//   return function (...args) {
//     return func.bind(this, arguments, args);
//   };
// }

// let count = 0;
// function add() {
//   this.innerHTML = count;
//   count++;
// }

// let btn = document.querySelector('.btn');
// let btn2 = document.querySelector('.btn2');
// // (btn);
// // btn2.addEventListener('click', () => {
// //   add.call(btn);
// // });

// // btn2.addEventListener('click', () => {
// //   add.call(btn);
// // });

// function sum(a, b, c) {
//   this.innerHTML = a + b + c;
// }

// // btn2.addEventListener('click', () => {
// //   sum.call(btn, 3, 5);
// // });

// // let sum2 = btn2.addEventListener('click', sum.bind(btn));
// const sum2 = sum.bind(btn2, 100);
// btn2.addEventListener('click', () => {
//   sum2(3, 7);
// });

// let obj = {
//   login: '12345',
//   pass: '1256',
//   isValid: false,
//   say() {
//     (this);
//     return this.pass.length > 5 ? true : false;
//   },
// };
// (obj.say());
// let obj2 = {
//   pass: '1233456',
// };
// let say2 = obj.say.bind(obj2);
// (say2());

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} fa in`);
//   },
// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' fa in') );
//   }
// };
// askPassword(login.)

// let arr = [1, 1, 1];

// function q(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length-1; i++) {
//     while (arr[i] >= arr[i + 1]) {
//       arr[i + 1]++;
//       count++;
//     }
//   }
//   return count;
// }
// (q(arr));

// let promise = new Promise((resolve, reject) => {
//   reject(new Error('cant be done'));
// });
// promise.then((result, error) => {
//   (error);
// });

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
//     document.head.append(script);
//   }).then(
//     (result) => (`${result.src} загружен!`),
//     (error) => (error)
//   );
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ok'), ms);
//   });
// }

// delay(3000).then(() => alert('выполнилось через 3 секунды'));

// let promise = new Promise((resolve) => {
//   setTimeout(() => resolve(1), 1000);
// });
// promise
//   .then((result) => {
//     (result);
//     return new Promise((resolve) => {
//       setTimeout(() => resolve(result * 2), 2000);
//     });
//   })
// .then((result) => {
//   (result);
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(result * 2), 3000);
//   });
// })
// .then();

// function loadScript(src) {
//   return new Promise((resolve, reject) => {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => resolve(script);
//     script.onerror = () => reject(new Error(`Ошибка загрузки скрипта ${src}`));
//     document.head.append(script);
//   });
// }
// loadScript('https://learn.javascript.ru//article/promise-chaining/one.js')
//   .then((result) => loadScript('https://learn.javascript.ru//article/promise-chaining/two.js'))
//   .then((result) => loadScript('https://learn.javascript.ru//article/promise-chaining/three.js'))
//   .then((result) => {
//     one(), two(), three();
//   });

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(result) {
//     setTimeout(() => result(this.num * 2), 1000);
//   }
// }
// new Promise((resolve) => {
//   resolve(1);
// })
//   .then((result) => {
//     return new Thenable(result);
//   })
//   .then();

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => {
//     return fetch(`https://api.github.com/users/${response.name}`);
//   })
//   .then((response) => response.json())
//   .then((response) => {
//     return new Promise((resolve) => {
//       let img = document.createElement('img');
//       img.src = response.avatar_url;
//       document.body.append(img);
//       setTimeout(() => {
//         img.remove(), resolve(response);
//       }, 3000);
//     }).then((response) => (response.name));
//   });

// function loadscr(src) {
//   return fetch(src).then((response) => response.json());
// }
// function loadUser(response) {
//   return fetch(`https://api.github.com/users/${response.name}`).then((response) => response.json());
// }
// function avatar(response) {
//   return new Promise((resolve) => {
//     let img = document.createElement('img');
//     img.src = response.avatar_url;
//     document.body.append(img);
//     setTimeout(() => {
//       img.remove(), resolve(response);
//     }, 3000);
//   });
// }

// loadscr('https://learn.javascript.ru/article/promise-chaining/user.json')
//   .then((response) => loadUser(response))
//   .then(avatar)
//   .then((response) => (response.name));

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => {
//     return fetch(`https://api.github.com/users/${response.name}`);
//   })
//   .then((response) => response.json())
//   .then((response) => {
//     return new Promise((resolve) => {
//       let img = document.createElement('img');
//       img.src = response.avatar_url;
//       document.body.append(img);
//       setTimeout(() => {
//         img.remove(), resolve(response);
//       }, 3000);
//     }).then((response) => (response.name));
//   })
//   .catch((err) => (err.message));

// new Promise((resolve, reject) => {
//   reject(new Error('bad error'));
// })
//   .catch((err) => {
//     if (err instanceof URIError) {
//       ('managed');
//     } else {
//       throw err;
//     }
//   })
//   .then((result) => ('new result'))
// .catch((err) => (err));

// new Promise(function () {
//   noSuchFunction(); // Ошибка (нет такой функции)
// })
//   // .catch((err) => {
//   //   if (err.name === 'ReferenceError') {
//   //     ('its ok');
//   //   } else throw Error;
//   // })
//   .then((response) => {});

// window.addEventListener('unhandledrejection', (event) => {
//   (event.promise);
//   (event.reason);
// });

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     reject(new Error('Whoops!'));
//   }, 1000);
// }).catch(alert);

// Promise.all([
//   new Promise((resolve) => setTimeout(() => resolve(1), 3000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(3), 1000)),
// ]).then(alert);

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];
// let fetched = urls.map((item) => fetch(item));
// Promise.all(fetched).then((response) =>
//   response.forEach((item) => {
//     (item.url);
//   })
// );

// let arr = [1, 2, 3, 4];
// Array.prototype.myfind = function find(cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       return i;
//     }
//   }
// };
// // (find(arr, (item) => item == 2));
// (arr.myfind((item) => item == 2));
// let arr = [1, 2, 3, 4];
// Array.prototype.mfilter = function (cb) {
//   let ar = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) {
//       ar.push(this[i]);
//     }
//   }
//   return ar;
// };
// // (filter(arr, (item) => item > 2));
// (arr.mfilter((item) => item > 2));
// Array.prototype.includ = function (cb) {
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i], i, this)) {
//       return true;
//     }
//   }
//   return false;
// };

// (arr.includ((item) => item == 2));

// Array.prototype.mjoin = function (str) {
//   let string = '';
//   for (let i = 0; i < this.length; i++) {
//     string += this[i].toString() + str;
//   }
//   if (string.substring(string.length - 1) === this[this.length - 1]) {
//     return string;
//   } else return string.substring(0, string.length - 1);
// };
// (arr.mjoin(''));

// Array.prototype.mypop = function () {
//   for (let i = 0; i < this.length; i++) {
//     let a = this[this.length - 1];
//     this.length = this.length - 1;
//     return a;
//   }
// };
// (arr.mypop());
// (arr);

// Array.prototype.mypush = function (...val) {
//   for (let i = 0; i < this.length; i++) {
//     this[this.length] = val;
//     return this.flat();
//   }
// };
// (arr.mypush(6, 7, 8));

// Array.prototype.myslice = function (start, end) {
//   let newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i >= start && i < end) {
//       newarr.push(this[i]);
//     }
//   }
//   return newarr;
// };
// (arr.myslice(0, 4));

// Array.prototype.myunshift = function (...val) {
//   for (let i = 0; i < val.length; i++) {
//     this.reverse();
//     this[this.length] = val[i];

//     this.reverse();
//   }
//   return this;
// };

// (arr.myunshift(23, 24));

// Array.prototype.myreverse = function () {
//   for (let i = 0; i < this.length / 2; i++) {
//     let temp = this[i];
//     this[i] = this[this.length - 1 - i];
//     this[this.length - 1 - i] = temp;
//   }
//   return this;
// };
// (arr.myreverse());

// let arr = [1, 2, 3, 4];

// Array.prototype.mySplice = function (start, to, ...val) {
//   let newarr = [...this.slice(0, start), ...val, ...this.slice(start + to)];

//   while (this.length) {
//     this.pop();
//   }
//   this.push(...newarr);
//   return this;
// };
// arr.mySplice(2, 5, 23);
// let arr = [10, 20, 10, 40, 50, 60, 70];
// Array.prototype.myreduce = function (cb) {
//   let res = 0;
//   for (let i = 0; i < this.length; i++) {
//     res = cb(res, this[i]);
//   }
//   return res;
// };
// // (arr.myreduce((acc, next) => acc + next));

// let newarr = arr.myreduce((a, b) => {
//   return Math.max(a, b);
// });
// console.warn(newarr);

// let x = 'dog';
// function comb(x) {
//   let arr = Array.from(x);
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 1; j <= arr.length; j++) {
//       newarr.push(arr.slice(i, j));
//     }
//   }
//   (newarr);
// }
// comb(x);

// let x = 'Web Development Tutorial';
// function red(x) {
//   let y = x.split(' ');
//   let z = y.myreduce((a, b) => {
//     if (a.length > b.length) {
//       return a;
//     } else return b;
//   });
//   return z;
// }
// (red(x));

// let names = ['iliakan', 'remy', 'jeresig'];
// let fetched = names.map((item) => fetch(`https://api.github.com/users/${item}`));
// Promise.all(fetched)
//   .then((response) => response.map((item) => item.json()))

// .then((response) => Promise.all(response))
// .then((response) => response.forEach((item) => (item.id)));
// let form = document.querySelector('div');

// form.addEventListener('click', (event) => {
//   event.stopImmediatePropagation();
// });
// form.addEventListener('click', () => {
//   alert('div');
// });

// let elem = document.querySelectorAll('*');
// for (let element of elem) {
//   element.addEventListener(
//     'click',
//     () => {
//       alert('capturing ' + element.tagName);
//     },
//     true
//   );
// element.addEventListener('click', () => {
//   alert('bubbling ' + element.tagName);
// });
// }

// document.querySelector('#three').addEventListener('click', (event) => {
//   (3);
//   event.stopPropagation();
// });
// document.querySelector('#two').addEventListener(
//   'click',
//   (event) => {
//     (2);
//   },
//   true
// );

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
//   // Загружаем данные в формате json
//   .then((response) => response.json())
//   // Делаем запрос к GitHub
//   .then((user) => fetch(`https://api.github.com/users/${user.name}`))
//   // Загружаем ответ в формате json
//   .then((response) => response.json())
//   // Показываем аватар (githubUser.avatar_url) в течение 3 секунд (возможно, с анимацией)
//   .then((githubUser) => {
//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.append(img);

//     setTimeout(() => img.remove(), 3000); // (*)
//   });

// async function avatar() {
//   let x = await fetch('https://learn.javascript.ru/article/promise-chaining/user.json');
//   let response = await x.json();
//   let user = await fetch(`https://api.github.com/users/${response.name}`);
//   let resp = await user.json();
//   let img = document.createElement('img');
//   img.src = user.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.append(img);
//   await new Promise((resolve, reject) => setTimeout(() => resolve(img.remove()), 3000));
//   return resp;
// }
// avatar();
// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new Error(response.status);
//     }
//   });
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

// async function loadJson(url) {
//   let response = await fetch(url);
//   // return resp.status == 200 ? resp.json() : new Error(resp.status);

//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new Error(response.status);
//   }
// }

// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// function loadJson(url) {
//   return fetch(url).then((response) => {
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
//   });
// }

// // Запрашивать логин, пока github не вернёт существующего пользователя.
// function demoGithubUser() {
//   let name = prompt('Введите логин?', 'iliakan');

//   return loadJson(`https://api.github.com/users/${name}`)
//     .then((user) => {
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     })
//     .catch((err) => {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
//         return demoGithubUser();
//       } else {
//         throw err;
//       }
//     });
// }

// demoGithubUser();

//

// async function x(url) {
//   let response = await fetch(url);
//   if (response.ok) {
//     let json = await response.json();
//   } else alert(response.status);
// }
// x('wonown');

// async function x(url) {
//   let response = await fetch(url);
//   if (response.ok) {
//     let json = await response.json();
//     (json[0]);
//   } else alert(response.status);
// }

// x('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// new Promise((resolve, reject) => {
//   resolve(fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits'));
// })
//   .then((response) => response.json())
//   .then((response) => (response[0].author.login));

// async function x(url) {
//   let response = await fetch(url);
//   (response.headers.get('content-type'));
// }
// x('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

// let user = {
//   name: 'John',
//   surname: 'Smith'
// };

// async function send(){
//   let sended = await fetch('https://learn.javascript.ru/article/fetch/post/user',{
//     method:"POST",
//     headers:{
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body:JSON.stringify(user)
// }
//   )
//   let sult = await sended.json()
// }
// let users = ['iliakan', 'remy', 'no.such.users'];

// async function getName(names) {
//   let arr = [];
//   // try {
//   for (let name of names) {
//     let response = await fetch(`https://api.github.com/users/${name}`);
//     if (response.status == 200) {
//       let json = await response.json();
//       arr.push(json);
//     }
//     if (response.status == 404) {
//       arr.push(null);
//     }
//   }
//   // } catch (error) {
//   //   alert(error);
//   // }
//   (arr);
// }
// getName(users).catch();

// let buffer = new ArrayBuffer(16);
// let view = new Uint32Array(buffer);
// (view.byteLength);
// view[0] = 1234;
// (view);
// document.cookie = 'name=JOhn';

// (document.cookie);

// let name1 = ' my john';
// let surname = 'brown';
// document.cookie = encodeURIComponent(name1) + '=' + encodeURIComponent(surname);
// (document.cookie);

// document.cookie = 'name=John';
// document.cookie = 'name=Hello';
// (document.cookie);
// let name1 = ' my Arthur';
// let surname = 'Antonyan';
// document.cookie = encodeURIComponent(name1) + '=' + encodeURIComponent(surname);
// (document.cookie);

// document.cookie = 'username=Jon Doe; max-age=10; path=/';

// function cookie(cname, cvalue, exsecs) {
// let d = new Date();
// d.setTime(d.getTime() + exsecs * 1000);
//   let expires = 'expires =' + d.toUTCString();
//   document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
// }

// cookie('garnik', 'Antonyan', 2);
// (document.cookie);
// let d = new Date();
// d.setTime(d.getTime() + 10000);

// let expires = d.toUTCString();
// (expires);
// document.cookie = `names=avss; expires=${expires};path=/;`;

// document.cookie = `name=lyov;max-age=10;domain=.site.com;path=/`;
// (document.cookie);

////////////////////////////////cookie functions
// function getCookie(name) {
//   let matches = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
//   return matches ? decodeURIComponent(matches[1]) : undefined;
// }
// (getCookie('Ol'));

// function setCookie(name, value, obj = {}) {
//   // let d = new Date();
//   obj = {
//     path: '/',
//     // expires: d.setTime(d.getTime() + 3000),
//     ...obj,
//   };

//   if (obj.expires instanceof Date) {
//     obj.expires = obj.expires.toUTCString();
//   }
//   let updated = encodeURIComponent(name) + '=' + encodeURIComponent(value);
//   for (let prop in obj) {
//     updated += '; ' + prop;
//     if (obj[prop] !== true) {
//       updated += '=' + obj[prop];
//     }
//   }
//   document.cookie = updated;
// }

// setCookie('email', 'kamila', { secure: true, 'max-age': 3600 });

// function deleteCookie(name) {
//   setCookie(name, '', { 'max-age': -1 });
// }

// deleteCookie('email');

// let obj = { test: 23 };
// let str = JSON.stringify(obj);

// localStorage.setItem(2, str);
// // localStorage.setItem('text', 1);
// // (localStorage.getItem('text'));

// (JSON.parse(localStorage.getItem(2)));

// (localStorage.length);

// for (let i = 0; i < localStorage.length; i++) {
//   let key = localStorage.key(i);
//   // (key);
//   (key + '=' + localStorage.getItem(key));
// }

// for (let key in localStorage) {
//   if (localStorage.hasOwnProperty(key)) {
//     (key);
//   }
// }

// (JSON.stringify(localStorage, null, 2));

// sessionStorage.setItem('test', 234);

// window.addEventListener('storage', (event) => {
//   if (event.key != 'now') return;
//   alert(event.key, event.newValue, event.url);
// });
// localStorage.setItem('now', new Date());

// window.onstorage = (event) => {
//   if (event.key != 'now') return;
//   alert(event.key + ':' + event.newValue + ' at ' + event.url);
// };

// localStorage.setItem('now', Date.now());
// localStorage.setItem('text', 1);

// let area = document.querySelector('#area');
// area.addEventListener('change', (event) => {
//   let value = event.target.value;
//   localStorage.setItem('test', `${value}`);
// });
// area.value = localStorage.getItem('test');

// let count1 = document.querySelector('.count');

// window.addEventListener('storage', (event) => {
//   count1.textContent = localStorage.getItem('txtx');
//   (event.oldValue);
//   (event.storageArea);
// });

// let tag = new RegExp(`<h3>`);
// (tag);

// let str = 'Любо, братцы, любо!';
// let res = str.match(/любо/i);
// (res.index);

// let str = 'We will, we will';
// // (str.replace(/we/gi, 'I'));
// (str.replace(/we/gi, '$& I'));

// let str = 'Я ЛюБлЮ JavaScript';
// let reg = /люблю/i;
// (reg.test(str));

// let str = '+7(903)-123-45-67';
// let reg = /\d/g;
// (str.match(reg).join(''));

// let str = 'Есть ли стандарт CSS4?';
// let reg = /CSS\d/;
// (reg.test(str));
// (str.match(reg));

// let str = 'I love HTML5!';
// let reg = /\s\w\w\w\w\d/;
// (str.match(reg));

// let str = 'A ბ ㄱ';
// let reg = /\p{L}/gu;
// (str.match(reg));

// let str = `Hello Привет 你好 123_456`;
// let reg = /\p{sc=Han}/gu;
// (str.match(reg));

// let str = `Цены: $2, €1, ¥9`;
// let reg = /\p{Sc}\d/gu;
// (str.match(reg));

// let str1 = 'Mary had a little lamb';
// let reg1 = /^Mary/;
// let reg2 = /lamb$/g;
// (str1.match(reg2));

// let goodInput = '12:34';
// let reg = /^\d\d:\d\d$/;
// (goodInput.match(reg));

// let str = `1е место: Винни
// 2е место: Пятачок
// 3е место: Слонопотам`;

// let reg = /^\d/gm;
// (str.match(reg));

// let str = `Винни: 1
// Пятачок: 2
// Слонопотам: 3`;
// // let reg = /\d$/gm;
// // (str.match(reg));

// let reg = /\d\n/gm;
// (str.match(reg));

// let str = 'Hello, JavaScript!';
// let reg = /\bJavaScript\b/i;
// (str.match(reg));

// const str = 'Завтрак в 09:00 в комнате 123:456.';
// const reg = /\b\d\d:\d\d\b/g;
// let reg2 = /\d\d:\d\d/;
// (str.match(reg2));

// ('5.1'.match(/\d\.\d/));
// ('function g()'.match(/g\(\)/));
// ('1\\\\2'.match(/\\/g));
// ('/'.match(/\//));
// ('/'.match(new RegExp('/')));
// ('5.1'.match(new RegExp('\\d\\.\\d')))
// ('Топ хоп'.match(/х[оп]/gi));
// ('Exception 0xAF'.match(/x[A-Z][A-Z]/g));
// ('Exception 0xAF'.match(/x\w\w/g));

// let regexp = /[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu;

// let str = `Hi 你好 12`;
// (str.match(regexp));
// ('alice15@gmail.com'.match(/[^a-z0-9\s]/g));
// ('alice15@gmail.com'.match(/[^\w\s]/g));

// let reg = /[+-]/g;
// ('1 + 2 - 3'.match(reg));

// ('𝒳'.match(/[𝒳𝒴]/u));
// let regexp = /\b\d\d[:-]\d\d\b/g;
// ('Завтрак в 09:00. Ужин в 21-30'.match(regexp));
// ('Мне не 12, 2345 а 1234 года'.match(/\d{3,5}/g));
// ('+7(903)-123-45-67'.match(/\d{1,}/g));
// ('+7(903)-123-45-67'.match(/\d+/g));
// ('0 1 12.345 7890'.match(/\d+\.\d+/g));
// ('<body> ... </body>'.match(/<\/?[a-z]+>/g));
// let regexp = /\.+/g;
// ('Привет!... Как дела?.....'.match(regexp));

// let regexp = /#[a-z0-9]{6}\b/gi;

// let str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';

// (str.match(regexp));

// let str = 'a "witch" and her "broom" is one';
// // let reg = /".+?"/g;
// let reg = /"[^"]+"/g;
// (str.match(reg));

// let str = '...<a href="link1" class="doc">... <a href="link2" class="doc">...';
// let str = '...<a href="link1" class="wrong">... <p style="" class="doc">..';
// // let reg = /<a href=".*?" class="doc">/g;
// let reg = /<a href="[^"]+" class="doc">/g;
// (str.match(reg));

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;
// // let reg = /<![^>]+>/g;
// // let reg = /<!--.*?-->/gs;
// (str.match(reg));

// let str = '<> <a href="/"> <input type="radio" checked> <b>';

// let reg = /[^<>]<.+>/gi;
// (str.match(reg));

// let str = 'Gogogo now!';
// let str = 'smith.users.mail.com';
// // let reg = /(go)+/gi;
// // let reg = /\.mail.com/;
// let reg = /(\w+\.)+\w+/g;
// (str.match(reg));

// let str = 'my@mail.com @ his@site.com.uk';
// let reg = /\w+@(\w+\.)+[\w]+/g;

// (str.match(reg));

// let str = '<h1>Hello, world!</h1>';
// let reg = /<(.+?)>/g;
// let tag = str.match(reg);
// (tag[1]);

// let str = '<span class="my">';
// let reg = /<((\w+) ([^>]+))>/;
// let tag = str.match(reg);
// (tag[2]);
// let str = '<h1> <h2>';
// let reg = /<(.+?)>/g;
// // (Array.from(str.matchAll(reg)));
// let result = str.matchAll(reg);
// let [item1, item2] = result;
// (item1[1]);

// let dateRegexp = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/;
// let str = '2019-04-30';
// let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// let str = '2019-10-30 2020-01-01';
// let group = str.matchAll(reg).groups;
// (group.year);
// let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
// let str = '2019-10-30 2020-01-01';
// let group = str.matchAll(reg);
// let [date1, date2] = group;
// (date1[2]);

// let str = 'John Bull';
// let reg = /(\w+) (\w+)/;
// (str.replace(reg, `$2,$1`));

// let reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
// let str = '2019-10-30 2020-01-01';
// (str.replace(reg, '$<day>.$<month>.$<year>'));

// let str = 'Gogogo John!';
// let reg = /(?:go)+ (\w+)/i;
// let res = str.match(reg);
// (res[0]);

// let str = 'color: #3f3; background-color: #AA00ef;  and: #abcd';
// let reg = /#(\w{3}){1,3}\b/g;
// (str.match(reg));

// let str = '-1.5 0 2 -123.4.';
// let reg = /-?\d+(\.\d+)?/g;

// (str.match(reg));

// let str = '0 1 12.345 -78.90';
// let reg = /-?\d+\.\d+/g;
// (str.match(reg));

// let str = '<body> ... </body>';
// let reg = /<\/?\w+>/g;
// (str.match(reg));

// let str = 'Привет!... Как дела?.....';
// let reg = /\.{3,}/g;
// (str.match(reg));

// let str = 'color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678';
// let reg = /#\d?\w{6}\b/g;
// (str.match(reg));
// let regexp = /".+?"/g;

// let str = 'a "witch" and her "broom" is one';

// (str.match(regexp));

// let regexp = /<!--.+?-->/gs;

// let str = `... <!-- My -- comment
//  test --> ..  <!----> ..
// `;

// (str.match(regexp));

// let str = '<> <a href="/"> <input type="radio" checked> <b>';
// let reg = /[^<>]<.+?>/g;
// (str.match(reg));

// let str = 'site.com my.site.com';
// let reg = /(\w+\.)+\w+/g;
// (str.match(reg));

// let str = 'my@mail.com @ his@site.com.uk';
// let reg = /\w+@\w+\.\w+(\.\w+)?/g;
// (str.match(reg));

// let str = '<h1>Hello, world!</h1>';
// let reg = /<(.+?)>/;
// let res = str.match(reg);
// (res);

// let str = '<span class="my">';
// let reg = /<(\w+)\s+([^>]+)>/;
// let res = str.match(reg);
// (res[2]);
// ('a d'.match(/a (c)?(d)?/).length);

// let regexp = /#(.{3}){1,2}\b/g;

// let str = 'color: #3f3; background-color: #AA00ef; and: #abcd';

// (str.match(regexp));
// let regexp = /[-\d]+(\.\d+)?/g;

// let str = '-1.5 0 2 -123.4.';

// (str.match(regexp));

// let str = '1.2 * 3.4';
// let reg = /(?<a>\d+(\.\d+)?)\s*?(?<p>[\+\-\*\/])\s*?(?<b>\d+(\.\d+)?)/;
// let groups = str.match(reg).groups;
// (groups.p);

// let str = '01:32:54:67:89:AB';
// // let reg = /[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}:[0-9a-f]{2}/gi;
// let reg = /^([0-9a-f]{2}:){5}[0-9a-f]{2}$/gi;
// (str.match(reg));

// let str = `He said: "She's the one!"`;
// let reg = /"(\w+)([^"]+)"/g;
// (str.match(reg));

// let str = `He said: "She's the one!".`;

// let regexp = /(['"])(.*?)\1/g;

// (str.match(regexp));

// let str = 'Сначала появился язык Java, затем HTML, потом JavaScript';
// let reg = /HTML|Java(Script)?|PHP/gi;
// (str.match(reg));
// let str = '00:00 10:10 23:59 25:99 1:2';
// let reg = /([01]\d|2[0-3]):[0-5]\d/g;
// (str.match(reg));

// let str = 'Java JavaScript PHP C++ C';
// let reg = /PHP|Java(script)?|C(\+\+)?/gi;
// (str.match(reg));

// let str = '..[url]http://ya.ru[/url]..';
// let reg = /\[(b|url|quote)].+?\[\/\1]/gs;
// (str.match(reg));

// let str = '<style> <styler> <style test="...">';
// let reg = /<style\b(\s[^>]+)?>/g;
// (str.match(reg));
// let str = '1 индейка 2$ стоит 30€';
// // let reg = /\d+\p{Sc}/gu;
// let reg = /\d+(?=€)/g;
// (str.match(reg));

// let str = '1 индейка стоит 30€';
// let reg = /\d+(?=\s)(?=.+30)/g;
// (str.match(reg));

// let str = '1 индейка стоит 30€';
// let reg = /\d+(?!€|\d)/g;
// (str.match(reg));

// let str = '1 индейка стоит $30';
// let reg = /(?<=\$)\d+/g;
// (str.match(reg));

// let str = '1 индейка стоит $30';
// let reg = /(?<!\$)\d+/;
// (str.match(reg));

// let str = '1 индейка стоит 30€';
// let reg = /\d+(?=(€|k))/;
// (str.match(reg));

// let str = '0 12 -5 123 -18';
// let reg = /(?<!\-|\d+)\d+/g;
// (str.match(reg));

// let regexp = /^(\w+\s?)*$/;
// let str = 'An input string that takes a long time or even makes this regexp to hang!';
// alert(regexp.test(str));

// let regexp = /^(\w+)*$/;
// let str = '012345678901234567890123456789!';
// alert(regexp.test(str));

// function find(str) {
//   let newarr = [];
//   if (str.length < 2) {
//     return str;
//   } else {
//     for (let i = 0; i < str.length; i++) {
//       let x = str[i];
//       if (str.indexOf(x) != i) continue;
//       let perms = str.slice(0, i) + str.slice(i + 1);
//       for (let perm of find(perms)) {
//         newarr.push(x + perm);
//       }
//     }
//   }
//   return newarr;
// }
// let newarr = find('aba');
// function check(arr) {
//   let ar2 = arr.map((item) => item.split('').reverse().join(''));
//   for (let i = 0; i < ar2.length; i++) {
//     if (ar2[i] === arr[i]) {
//       return true;
//     }
//   }
//   return false;
// }
// (check(newarr));

// let str = 'let letName';
// let reg = /\w+/g;
// // let word1 = reg.exec(str);
// // let word2 = reg.exec(str);
// while ((res = reg.exec(str))) {
//   (res[0]);
// }

// let str = '12-34-56';
// (str.replace(/\-/g, ':'));

// let str = 'John Smith';
// (str.replace(/(\w+) (\w+)/g, '$2 $1'));
// let str = 'html and css';
// (str.replace(/html|css/g, (str) => str.toUpperCase()));

// ('Хо-Хо-хо'.replace(/хо/gi, (match, offset, input) => offset));

// let str = 'John Smith';
// (str.replace(/(\w+) (\w+)/, (...match) => `${match[2]},${match[1]}`));

// let str = 1000000;
// let reg = /(\d)(\d{3})/g;
// (str.match(reg));
// (str.toLocaleString());
// let str = 'goodbye';
// // let reg = /[^aeiou]/gi;

// // (str.match(reg).join(''));
// (str.replace(/o/g, 'z'));

// function replaceAll(input, find, replace) {
//   let r = new RegExp(`${find}`, 'gi');
//   return input.replace(r, replace);
// }
// (replaceAll('1', '', '-'));

// let str = '"example quote #1" some text "example quote #2"';
// let reg = /".+?"/g;
// (str.match(reg));

// let str = '-3.14e-21';
// let reg = /(?<=\.).+/gi;
// let arr = str.match(reg);
// let newa = parseInt(arr.join(','));
// (newa);

// ((2e-14).toFixed(2));

// let num = 454793;
// let st = new String(num);
// let reg = /[13579](?=[13579])/g;
// (
//   str.replace(reg, (match) => {
//     return (match += '-');
//   })
// );

// // (st);
// let newarr = [];
// for (let i = 0; i < st.length; i++) {
//   if (parseInt(st[i]) % 2 != 0 && parseInt(st[i + 1]) % 2 != 0 && i != st.length - 1) {
//     st[i] += '-';
//   }
//   newarr.push(st[i]);
// }
// (newarr.join(''));

// let str = '7979797';
// (str.replace(/(?<=7)9(?=7)/g, ''));

// let num = 1012356895;
// let str = new String(num);
// let reg = /([13579](?=[13579]))/g;
// let reg2 = /([2468](?=[2468]))/g;

// let newstr = str.replace(reg, (match) => {
//   return (match += '-');
// });
// (newstr.replace(reg2, (match) => (match += '*')));

// let num = 'one.two.three';
// let reg = /\./g;
// (num.replace(reg, '-'));

// let str = 'Tomorrow is going to be raining';
// let reg = /[a,e,i,o,u]/g;
// reg.lastIndex = 2;
// (str.replace(reg, (match, offset) => offset));
// let num = '123456789';
// (num.replace(/(...)(...)(.*)/, '($1) $2-$3'));

// let str = 'the-stealth-warrior';
// let reg = /\-(\w)/g;
// let reg2 = /-/g;
// let newstr = str.replace(reg, (match, p) => p.toUpperCase());
// (newstr);

// function perm(str) {
//   if (str.length < 2) {
//     return str;
//   }
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let x = str[i];
//     let z = str.slice(0, i) + str.slice(i + 1);
//     if (str.indexOf(x) != i) continue;
//     for (let prop of perm(z)) {
//       arr.push(x + prop);
//     }
//   }
//   return arr;
// }
// (perm('123'));
// class Triple {
//   static triple(n) {
//     if (n === undefined) {
//       n = 1;
//     }
//     return n * 3;
//   }
// }

// class Triple2 extends Triple {
//   static triple(n) {
//     return super.triple(n) * super.triple(n);
//   }
// }
// (Triple.triple(3));
// (Triple2.triple(3));

// class Car {
//   constructor(price) {
//     this.price = price;
//   }
//   static sell(car) {
//     return `selling for ${car.price}`;
//   }
// }
// let obj = new Car(100);
// (Car.sell(obj));

// class Toy extends Car {
//   constructor(price) {
//     super(price);
//   }
//   static sell(car) {
//     return `toyota${super.sell(car)}`;
//   }
// }
// let obj2 = new Toy(300);
// (Toy.sell(obj2));

// let sayHiMixin = {
//   sayhi() {
//     alert(`Привет, ${this.name}`);
//   },
//   sayBye() {
//     alert(`Пока, ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(User.prototype, sayHiMixin);
// new User('john').sayhi();

// let sayMix = {
//   say(phrase) {
//     (phrase);
//   },
// };
// let sayH = {
//   __proto__: sayMix,
//   sayHi() {
//     super.say(`hello ${this.name}`);
//   },
//   sayBye() {
//     super.say(`bye ${this.name}`);
//   },
// };

// class User {
//   constructor(name) {
//     this.name = name;
//   }
// }
// Object.assign(User.prototype, sayH);

// let obj = new User('john');
// obj.sayBye();

// function test(selector, count) {
//   let elem = document.querySelectorAll(selector);
//   if (elem.length == count) {
//     return true;
//   } else return false;
// }
// (test('*[data-action]:not([data-action*=" delete"])', 2));
// (test('li:nth-child(odd)', 3));
// (test('h3+ul', 1));
// (test('li:last-child', 1));
// let video = document.querySelector('video');
// let btn = document.querySelector('button');
// // btn.addEventListener('click', () => {
// //   if (video.paused) {
// //     video.play();
// //     btn.innerHTML = 'PLay';
// //   } else {
// //     video.pause();
// //     btn.innerHTML = 'Pause';
// //   }
// // });

// btn.addEventListener('click', () => {
//   // if (video.classList) {
//   //   video.unmute();
//   //   btn.innerHTML = 'Mute';
//   // } else {
//   //   video.muted();
//   //   btn.innerHTML = 'Unmute';
//   // }
//   // video.muted = true;
//   video.volume -= 0.2;
// });
// let range = document.querySelector('#range');

// let video = document.querySelector('video');

// // setInterval(() => (video.volume = range.value), 1);
// video.addEventListener('click', () => {
//   video.muted = true;
// });

// let count = +prompt('enter');
// Array.prototype.myfind = function (fn) {
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       return this[i];
//     } else return false;
//   }
// };
// let arr = [1, 2, 3];
// (arr.myfind((item) => item > 0));

// Array.prototype.myfind = function (fn) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };
// let arr = [1, 2, 3];
// (arr.myfind((item) => item > 1));

// Array.prototype.myfind = function (fn) {
//   for (let i = 0; i < this.length; i++) {
//     if (fn(this[i])) {
//       return i;
//     }
//   }
//   return false;
// };
// let arr = [1, 2, 3];
// // (arr.myfind((item) => item < 0));

// Array.prototype.sm = function (fn) {
//   for (let prop of this) {
//     if (fn(prop)) {
//       return true;
//     }
//   }
//   return false;
// };
// (arr.sm((item) => item < 0));

// Array.prototype.mrdc = function (fn) {
//   let x = 0;
//   for (let i = 0; i < this.length; i++) {
//     x = fn(x, this[i]);
//   }
//   return x;
// };
// (arr.mrdc((a, b) => a + b));

// Array.prototype.mypop = function () {
//   this.length -= 1;
//   return this;
// };

// (arr.mypop());
// (arr.mypop());
// let arr = [1, 2, 3];
// Array.prototype.mypush = function (...x) {
//   for (let i = 0; i < x.length; i++) {
//     this[this.length] = x[i];
//   }
//   return this;
// };
// arr.mypush(6, 7);
// (arr);

// Array.prototype.myslice = function (x, y) {
//   let newarr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (i >= x && i < y) {
//       newarr.push(this[i]);
//     }
//   }
//   return newarr;
// };
// (arr.myslice(0, 2));
// let arr = [1, 2, 3];
// Array.prototype.myshift = function () {
//   this.reverse();
//   this.length -= 1;
//   this.reverse();
//   return this;
// };
// (arr.myshift());
// let arr = [1, 2, 3, 4, 5];
// Array.prototype.myshift = function () {
//   let a = this[0];
//   this.reverse();
//   this.length -= 1;
//   this.reverse();
//   return a;
// };
// (arr.myshift());
// (arr);

// Array.prototype.myunshift = function (...x) {
//   this.reverse();
//   for (let i = 0; i < x.length; i++) {
//     this[this.length] = x[i];
//   }
//   return this.reverse();
// };
// arr.mypush(6, 7);
// (arr);

// let arr = [1, 2, 3, 4, 5];

// // Array.prototype.myreverse = function () {
// //   for (let i = 0; i < this.length / 2; i++) {
// //     let temp = this[i];
// //     this[i] = this[this.length - 1 - i];
// //     this[this.length - 1 - i] = temp;
// //   }
// //   return this;
// // };
// // arr.myreverse();
// // (arr);

// Array.prototype.mysplice = function (x, y, ...z) {
//   let arr = [...this.slice(0, x), ...z, ...this.slice(x + y)];
//   while (this.length) {
//     this.pop();
//   }
//   this.push(...arr);
//   return this;
// };
// (arr.mysplice(2, 1, 45));

// let str = '123';
// function comb(str) {
//   let arr = [];
//   if (str.length < 2) {
//     return str;
//   }
//   for (let i = 0; i < str.length; i++) {
//     let x = str[i];
//     if (str.indexOf(x) != i) continue;
//     let perm = str.slice(0, i) + str.slice(i + 1);
//     for (let prop of comb(perm)) {
//       arr.push(x + prop);
//     }
//   }
//   return arr;
// }

// (comb(str));

// let x="dog"
// function comb(x){
//     let y = Array.from(x)
//     let newarr=[]
//     for(let i=0 ;i<=y.length;i++){
//         for(let j=1;j<=y.length;j++){
//             newarr.push(y.slice(i,j))
//         }
//     }
//     return (newarr.filter(item=>item.length).join(", ").split(",").join(""))

// }
// (comb(x))

// let arr = [1, 2, 5, 3, 4, 5];
// Array.prototype.last = function (num, from) {
//   for (let i = from ? from : this.length; i != 0; i--) {
//     if (num == this[i]) {
//       return i;
//     }
//   }
//   return -1;
// };
// (arr.last(5));

// let str = 'the quick brown fox';
// let reg = /\b\w/g;
// (str.replace(reg, (match) => match.toUpperCase()));

// let str = 'Web Development Tutorial';
// let reg = /\w+/g;
// let arr = str.match(reg);
// let min = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (min < arr[i].length) {
//     min = arr[i].length;
//   }
// }
// for (let i = 0; i < arr.length; i++) {
//   if (min === arr[i].length) {
//     (arr[i]);
//   }
// }

// let ball = document.querySelector('#ball');
// document.addEventListener('keydown', (event) => {
//   switch (event.key) {
//     case 'ArrowRight':
//       ball.style.left += 100 + 'px';
//       break;
//     case 'ArrowLeft':
//       ball.style.left -= 100 + 'px';
//       break;
//     case 'ArrowUp':
//       ball.style.top += 100 + 'px';
//       break;
//     case 'ArrowDown':
//       ball.style.top -= 100 + 'px';
//       break;
//   }
// });

// Array.prototype.mufilter=function(cb){
//   let arr=[]
//   for(let i=0;i<this.length;i++){
//     if()
//   }
// }

// let arr = [99, 2, 2, 23, 19];
// let newarr = arr.sort((a, b) => b - a);
// (newarr[0] + newarr[1]);
// for (let i = 1; i < 100; i++) {
//   if (i % 2 == 0) {
//     (i);
//   }
// }
// const a = {
//   function1: () => {
//     const b = {
//       function2: function () {
//         const c = {
//           function3: () => (this),
//         };
//         c.function3();
//       },
//     };
//     b.function2();
//   },
// };
// a.function1();
// let a = 10;
// do {
//   (1);
//   a++;
// } while (a < 0);
// do {
//   (1);
//   a--;
// } while (a >= 10);
// while (a > 10) {
//   (1);
//   a--;
// }

// function perm(str) {
//   if (str.length < 2) {
//     return str;
//   }
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let permuted = str.slice(0, i) + str.slice(i + 1);
//     if (str.indexOf(char) != i) continue;
//     for (let perms of perm(permuted)) {
//       arr.push(char + perms);
//     }
//   }
//   return arr;
// }
// (perm('abba'));
// function rev(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].reverse();
//   }
//   return arr;
// }
// (rev(perm('abba')));

// function abc() {
//   let find =function (str) {
//     let newarr = [];
//     if (str.length < 2) {
//       return str;
//     } else {
//       for (let i = 0; i < str.length; i++) {
//         let x = str[i];
//         if (str.indexOf(x) != i) continue;
//         let perms = str.slice(0, i) + str.slice(i + 1);
//         for (let perm of find(perms)) {
//           newarr.push(x + perm);
//         }
//       }
//     }
//     return newarr;
//   }
//  ;
//   function check(arr) {
//     let ar2 = arr.map((item) => item.split('').reverse().join(''));
//     for (let i = 0; i < ar2.length; i++) {
//       if (ar2[i] === arr[i]) {
//         return true;
//       }
//     }
//     return false;
//   }
//   return check(newarr);
// }
// (abc()('abba'));
/////////////////////////////////////canvas

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// ctx.fillStyle = 'red';
// ctx.fillRect(100, 50, 150, 75);
// ctx.fillStyle = 'blue';
// ctx.fillRect(150, 75, 120, 75);
// ctx.clearRect(0, 0, 400, 200);
// ctx.strokeStyle = 'green';
// ctx.lineWidth = '10';
// ctx.fillStyle = 'red';
// ctx.rect(45, 50, 100, 30);
// ctx.stroke();
// ctx.fill();

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.strokeStyle = 'red';
// ctx.lineWidth = '10';
// ctx.moveTo(50, 100);
// ctx.lineTo(150, 150);

// ctx.stroke();

// // ctx.lineTo(300, 50);
// ctx.beginPath();
// ctx.strokeStyle = 'blue';
// ctx.lineWidth = '30';
// ctx.moveTo(200, 50);
// ctx.lineTo(300, 50);
// ctx.lineTo(300, 100);
// // ctx.lineCap = 'round';
// // ctx.lineCap = 'square';
// // ctx.lineCap = 'butt';
// ctx.stroke();
// ctx.clearRect(0, 0, 400, 200);

// ctx.beginPath();
// ctx.moveTo(50, 150);
// ctx.lineTo(250, 150);
// ctx.lineTo(150, 50);
// ctx.closePath();
// // ctx.lineTo(50, 150);
// ctx.lineCap = 'butt';
// ctx.strokeStyle = 'red';
// ctx.lineWidth = '5';
// ctx.fillStyle = 'blue';

// ctx.stroke();

// // ctx.fill();

// let canvas = document.getElementById('c1');
// let color = document.getElementById('color');
// // let ctx = canvas.getContext('2d');

// // canvas.onmousemove = function (event) {
// //   let x = event.clientX;
// //   let y = event.clientY;
// //   ctx.fillStyle = 'red';

// //   ctx.fillRect(x - 10, y - 10, 10, 10);
// // };

// canvas.onmousedown = function (event) {
//   canvas.onmousemove = function (event) {
//     let x = event.clientX;
//     let y = event.clientY;
//     ctx.fillStyle = color.value;

//     ctx.fillRect(x - 10, y - 10, 10, 10);
//   };
//   canvas.onmouseup = function (event) {
//     canvas.onmousemove = null;
//   };
// };

// (color.value);

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// let pi = Math.PI;
// ctx.beginPath();
// ctx.arc(100, 100, 75, 0, 2 * pi, false);
// // ctx.closePath();
// ctx.fillStyle = 'yellow';
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'red';

// ctx.stroke();
// ctx.fill();

// ctx.beginPath();
// ctx.arc(300, 100, 75, 0, 2 * pi, false);
// // ctx.closePath();
// ctx.fillStyle = 'pink';
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'blue';

// ctx.stroke();
// ctx.fill();

// // canvas.onmousemove = (event) => {
// //   ctx.clearRect(0, 0, 400, 200);
// //   ctx.beginPath();
// //   let x = event.clientX;
// //   let y = event.clientY;
// //   ctx.arc(x, y, Math.abs(x - 100), pi * 2, false);
// //   ctx.stroke();
// //   canvas.onclick = () => {
// //     canvas.onmousemove = null;
// //   };
// // };
// canvas.onmousedown = (event) => {
//   canvas.onmousemove = (event) => {
//     ctx.clearRect(0, 0, 400, 200);
//     ctx.beginPath();
//     let x = event.clientX;
//     let y = event.clientY;
//     ctx.arc(x, y, Math.abs(x - 100), pi * 2, false);
//     ctx.stroke();
//   };

//   canvas.onmouseup = () => {
//     canvas.onmousemove = null;
//   };
// };

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// let x = 0;

// function drawSin() {
//   let y = 100 + 20 * Math.sin(x);
//   if (x >= 400) {
//     // x = 0;
//     ctx.clearRect();
//   } else {
//     x += 0.3;
//   }

//   ctx.fillRect(x * 5, y, 10, 10);
//   setTimeout(drawSin, 10);
// }
// drawSin();

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');

// let x, y;

// canvas.onmousemove = (event) => {
//   ctx.clearRect(0, 0, 400, 200);
//   x = event.offsetX;
//   y = event.offsetY;
//   ctx.beginPath();
//   ctx.moveTo(50, 100);
//   ctx.quadraticCurveTo(x, y, 200, 100);
//   ctx.stroke();
// };

// growing.onclick = function () {
//   this.style.cssText = `
//   font-size:15px;
//   color:red
//   `;
// };
// digit.onclick = function () {
//   stripe.classList.add('animate');
// };

// let fly = document.getElementById('flyjet');

// fly.onclick = function () {
//   this.style.cssText = `
//     width:400px;
//     height:240px

//   `;
//   // fly.addEventListener('transitionend', () => {
//   //   alert('done');
//   // });
//   let ended = false;

//   fly.addEventListener('transitionend', function () {
//     if (!ended) {
//       ended = true;
//       alert('Done!');
//     }
//   });
// };

// let canvas = document.getElementById('c1');
// let ctx = canvas.getContext('2d');
// let pi = Math.PI;
// ctx.arc(100, 50, 50, pi * 2, false);
// // ctx.stroke();
// canvas.onclick = function () {
//   ctx.stroke();
//   ctx.arc(100, 50, 100, pi * 2, false);
//   ctx.stroke();
// };
// let div = document.getElementById('circle');
// let div;
// document.onclick = function (event) {
//   div = document.createElement('div');
//   document.body.append(div);
//   div.style.width = '0px';
//   div.style.height = '0px';
//   div.style.borderRadius = '50%';
//   div.style.backgroundColor = 'red';
//   div.style.position = 'absolute';
//   div.style.left = event.clientX - 150 + 'px';
//   div.style.top = event.clientY - 150 + 'px';
// };
// setTimeout(() => {
//   div.style.width = '300px';
//   div.style.height = '300px';
// }, 2000);
// (Date.now(), performance.now());

// let prev = performance.now();
// let times = 0;
// requestAnimationFrame(function animate(time) {
//   document.body.insertAdjacentHTML('beforeend', Math.floor(time - prev) + ' ');
//   times++;
//   prev = time;
//   if (times <= 10) requestAnimationFrame(animate);
// });
// let div = document.querySelector('#img');
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then((response) => response.json())
//   .then((response) => {
//     for (let prop of response) {
//       let img = document.createElement('img');
//       img.src = prop.url;
//       div.appendChild(img);
//     }
//   });

// (div);
// fetch('https://jsonplaceholder.typicode.com/photos', {
//   method: 'POST',
//   body: JSON.stringify({
//     ttile: 'newIMg',
//     url: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg',
//   }),
// });
//  int [][] matrix = new int [5][5];

//  for(int i = 0; i<matrix.length;i++){
//      for(int j =0; j<matrix[i].length;j++){
//          matrix[i][j]=i-j;
//          System.out.print(matrix[i][j]+" ");
//      }System.out.println();
//  }

// let matrix = [[]];
// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     matrix[i][j] = 15 - 3;
//   }
// }
// (matrix);

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     (matrix[i]);
//   }
// }

// let store = {
//   state: {
//     MessagePage: {
//       newMessage: '',
//       message: [
//         { message: 'Hello albviebieqblqebflqibf' },
//         {
//           message: 'How are flqbflqeibfgiqrb3hot13hgt13hgt3hg34hgoi3;hgo3;hg3ohgf3o41hgf3o1hfg31o4hgf3pigfq3piugfqp3fyou',
//         },
//         { message: 'yo qelbglqebfqlbjqbfqfjhw bfj bf' },
//       ],
//       user: [
//         { name: 'John', path: 1, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
//         {
//           name: 'Josh',
//           path: 2,
//           img: 'https://img.lovepik.com/element/45001/3052.png_860.png',
//         },
//         { name: 'Nelly', path: 3, img: 'https://www.w3schools.com/howto/img_avatar2.png' },
//         { name: 'Rob', path: 4, img: 'https://img.lovepik.com/element/45001/3052.png_860.png' },
//         { name: 'Angel', path: 5, img: 'https://www.w3schools.com/w3images/avatar5.png' },
//         {
//           name: 'Scarlet',
//           path: 6,
//           img: 'https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg',
//         },
//       ],
//     },
//     PostPage: {
//       post: [
//         { id: 1, text: 'Post1', like: 'Like3' },
//         { id: 2, text: 'Post2', like: 'Like4' },
//       ],
//       newPost: '',
//     },
//   },
//   send() {
//     this.state.MessagePage.message.push({ message: this.newMessage });
//     this.state.MessagePage.newMessage = '';
//     // renderDom(this);
//   },
//   addPost() {
//     this.state.PostPage.post.push({ id: 3, text: this.state.PostPage.newPost, like: 'Like 5' });
//     this.state.PostPage.newPost = '';
//     // renderDom(this);
//   },

//   set newMessage(text) {
//     this.state.MessagePage.newMessage = text;
//     // renderDom(this);
//   },
//   get newMessage() {
//     return this.state.MessagePage.newMessage;
//   },
//   set change(text) {
//     this.state.PostPage.newPost = text + 'iyaaa';
//     // renderDom(this);
//   },
//   get change() {
//     return this.state.PostPage.newPost;
//     // renderDom(this);
//   },
// };
// store.newMessage = 'hellowwqcfwcf';
// (store.newMessage);

// store.send();
// (store.state.MessagePage.message);
// (store.state.MessagePage.newMessage);

// let matrix = [
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
//   [1, 2, 3, 4, 5, 6, 7, 8, 9],
// ];

// let answersFilled = [];
// const checkRowsArrFilled = [];
// const checkGridArrFilled = [];
// const checkColumnsArrFilled = [];
// function checkGridFilled(matrix) {
//   answersFilled.length = 0;
//   let z, z1, z2;
//   for (let i = 0; i < matrix.length; i++) {
//     checkRowsArrFilled.splice(0, z);
//     // checkColumnsArrFilled.splice(0, z2);
//     // checkGridArrFilled.splice(0, z1);
//     for (let j = 0; j < matrix[i].length; j++) {
//       checkRowsArrFilled.push(matrix[i][j]);
//       // checkGridArrFilled.push(matrix[i][j]);
//       // checkColumnsArrFilled.push(matrix[j][i]);
//       z = checkRowsArrFilled.length;
//       // z1 = checkGridArrFilled.length;
//       // z2 = checkColumnsArrFilled.length;
//     }

//     const x = new Set(checkRowsArrFilled);
//     // const y = new Set(checkGridArrFilled);
//     // const g = new Set(checkColumnsArrFilled);
//     // debugger;
//     if (x.size != z) {
//       answersFilled.push(false);
//       (answersFilled);
//       // break;
//     }
//   }
// }
// checkGridFilled(matrix);

// let n = 13;
// let arr1 = [];
// let arr2 = [];
// let arr3 = [];
// let arr4 = [];

// for (let i = -Math.floor(n / 2); i < 0; i++) {
//   arr1.push(i);
// }

// for (let i = 0; i <= n / 2; i++) {
//   arr2.push(i);
// }
// (arr2);
// arr3 = arr1.concat(arr2);
// (arr3);
// if (arr3.length != n) {
//   arr4 = arr3.filter((item) => item != 0);
//   (arr4);
// }
// let a = 0;
// let b = 1;
// (a, b);
// let c;
// let n = 15;
// for (let i = 2; i <= n; i++) {
//   c = a + b;
//   (c);
//   a = b;
//   b = c;
// }
// let arr = [
//   ['banana', 1],
//   ['orange', 2],
//   ['meat', 4],
// ];
// let obj = Object.fromEntries(arr);
// (obj);

// let map = new Map();
// map.set('banana', 1);
// map.set('orange', 2);
// map.set('meat', 4);

// let obj = Object.fromEntries(map);
// (obj);

// let user = {
//   name: 'John',
//   age: 30,
// };
// for (let [key, value] of Object.entries(user)) {
//   (key);
// }

// let user = new Map();
// user.set('name', 'John');
// user.set('age', '30');

// for (let [key, value] of user.entries()) {
//   (value);
// }

// let [name, surname, ...adress] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];
// (adress[0]);

// let options = {
//   title: 'Menu',
//   width: 100,
//   height: 200,
// };

// let { width } = options;
// (width);

// const fib = [1, 2, 3, 5, 8, 13];

// for (let i = 0; i < fib.length; i++) {
//   setTimeout(function () {
//     (`fib ${i}=${fib[i]}`);
//   }, 1000);
// }

// let user = {
//   name: 'John',
// };
// // (Object.getOwnPropertyDescriptor(user, 'name'));
// // Object.defineProperty(user, 'name', {
// //   configurable: false,
// // });
// // (Object.getOwnPropertyDescriptor(user, 'name'));
// Object.defineProperty(user, 'name', {
//   enumerable: false,
// });
// // (Object.getOwnPropertyDescriptor(user, 'name'));
// for (let prop in user) {
//   (prop);
// }
// let animal = {
//   eats: true,
// };
// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype = animal;
// let rabbit = new Rabbit('bunny');
// (rabbit.eats);

// function Rabbit(name) {
//   this.name = name;
// }
// let rabbit = new Rabbit('bunny');
// (rabbit.constructor == Rabbit);
// let rabbit2 = new rabbit.constructor('hello');
// (rabbit2.name);

// function Rabbit() {}
// Rabbit.prototype = {
//   jumps: true,
//   constructor: Rabbit,
// };
// // Rabbit.prototype.jumps = true;
// let rabbit = new Rabbit();
// (rabbit.jumps);
// let rabbit2 = new rabbit.constructor();
// (rabbit2.jumps);

// let animal = {
//   walks: true,
//   walk() {
//     ('waslking');
//   },
// };
// let rabbit = {
//   jumps: true,
//   __proto__: animal,
// };
// rabbit.walk();

// let admin = {
//   name: 'JOhn',
//   surname: 'smith',
//   get fullname() {
//     return `${this.name} ${this.surname}`;
//   },
//   set fullname(value) {
//     [this.name, this.surname] = value.split(' ');
//   },
// };

// let user = {
//   __proto__: admin,
// };
// user.fullname = 'Alice cooper';
// (user.name);

// let animal = {
//   walks: true,
// };
// let rabbit = {
//   jumps: false,
//   __proto__: animal,
// };
// for (let prop in rabbit) {
//   if (rabbit.hasOwnProperty(prop)) {
//     (prop);
//   }
// }

// let arr = [1, 2, 3];
// (arr.__proto__.__proto__.__proto__);

// let obj = {
//   0: 'hello',
//   1: 'world',
//   length: 2,
// };
// obj.join = Array.prototype.join;
// (obj.join(','));

// Function.prototype.defer = function (ms) {
//   setTimeout(this, ms);
// };

// function f() {
//   alert('Hello!');
// }

// f.defer(1000);

// let animal = {
//   walks: true,
// };

// let rabbit = Object.create(animal, {
//   jumps: {
//     value: true,
//     enumerable: false,
//     writable: true,
//     configurable: true,
//   },
// });
// // (Object.getOwnPropertyDescriptor(rabbit, 'jumps'));
// (rabbit.__proto__ == animal);

// const people = {
//   Ram: {
//     fullName: 'Ram Kumar',
//     details: {
//       age: 31,
//       isEmployed: true,
//     },
//   },
//   Sourav: {
//     fullName: 'Sourav Singh',
//     details: {
//       age: 22,
//       isEmployed: false,
//     },
//   },
//   Jay: {
//     fullName: 'Jay Grewal',
//     details: {
//       age: 26,
//       isEmployed: true,
//     },
//   },
// };

// function se(obj, cryt, arr = []) {
//   Object.keys(obj).forEach((item) => {
//     let value = obj[item];
//     if (typeof value != 'object' && item === cryt) {
//       arr.push(value);
//     } else if (typeof value === 'object') {
//       se(value, cryt, arr);
//     }
//   });
//   return arr;
// }

// (se(people, 'age'));

// function rec(obj, cryt, arr = []) {
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key];

//     if (typeof value != 'object' && key === cryt) {
//       arr.push(value);
//     } else if (typeof value === 'object') {
//       rec(value, cryt, arr);
//     }
//   });
//   return arr;
// }
// (rec(people, 'age'));

// let company = {
//   sales: [
//     {
//       name: 'John',
//       salary: 1000,
//     },
//     {
//       name: 'Alice',
//       salary: 600,
//     },
//   ],

//   development: {
//     sites: [
//       {
//         name: 'Peter',
//         salary: 2000,
//       },
//       {
//         name: 'Alex',
//         salary: 1800,
//       },
//     ],

//     internals: [
//       {
//         name: 'Jack',
//         salary: 1300,
//       },
//     ],
//   },
// };

// function rec(obj, cryt, arr = []) {
//   Object.keys(obj).forEach((key) => {
//     let value = obj[key];
//     if (typeof value != 'object' && key === cryt) {
//       arr.push(value);
//     } else if (typeof value === 'object') {
//       rec(value, cryt, arr);
//     }
//   });
//   return arr.reduce((acc, curr) => acc + curr);
// }

// (rec(company, 'salary'));

// function sum(n) {
//   if (n == 1) {
//     return n;
//   } else return n + sum(n - 1);
// }
// (sum(100));

// function rec(n) {
//   if (n < 3) {
//     return n;
//   } else return n + rec(--n);
// }
// (rec(4));
// function makecounter() {
//   function counter() {
//     return counter.count++;
//   }

//   counter.count = 0;
//   counter.set = function (value) {
//     this.count = value;
//   };
//   counter.set(12);
//   counter
//   return counter;
// }

// let cc = makecounter();

// (cc());
// (cc());

// let sum = new Function('a', 'b', 'return a+b');
// (sum(1, 2));

// function sum() {
//   let x = 2;
//   let a = new Function('(x)');
//   a();
// }
// sum();

// setTimeout(function x() {
//   (1);
//   setTimeout(x, 1000);
// }, 1000);
// for(let i=0;i<10;i++){
// setTimeout(() => {
//   (i)
// }, 0);
// }

// let user = {
//   name: 'john',
// };

// let user1 = {
//   name: 'john1',
// };
// //   say() {
// //     ('hello ' + this.name);
// //   },
// // };
// // setTimeout(usdr.say.bind(usdr), 1000);
// function x() {
//   (this.name);
// }
// let y = x.bind(user);
// let z = y.bind(user1);
// z();

// function askPassword(ok, fail) {
//   let password = prompt('Password?', '');
//   if (password == 'rockstar') ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} fa in`);
//   },
// };

// let x = askPassword.bind(user);
// // x(user.loginOk, user.loginFail);
// let user = {
//   name: 'Джон',
//   hi() {
//     (this.name);
//   },
//   bye() {
//     ('Пока');
//   },
// };

// // user.hi(); // Джон (простой вызов метода работает хорошо)

// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// user.name == 'Джон' ? user.hi.bind(user)() : user.bye.bind(user)();
// ('use strict');

// const myFunction = () => {
//   (this);
// };

// // Вызовем функцию
// myFunction();
// let nn;
// (nn);
// nn = 'hello';

// class Article {
//   constructor(title, date) {
//     this.date = date;
//     this.title = title;
//   }
//   static compare(a, b) {
//     return a.date - b.date;
//   }
// }
// let articles = [
//   new Article('HTML', new Date(2019, 1, 1)),
//   new Article('CSS', new Date(2019, 0, 1)),
//   new Article('JavaScript', new Date(2019, 11, 1)),
// ];
// (articles.sort(Article.compare));

// setTimeout(() => {
//   try {
//     fnfnff;
//   } catch (error) {
//     (error.stack);
//   }
// }, 100);

// let json = '{ "age": 30 }';
// function renderError() {
//   try {
//     // let user = JSON.parse(json);
//     // if (!user.name) {
//     //   throw new SyntaxError('Data is not complete');
//     // }
//     // (user.name);
//     blahh();
//   } catch (error) {
//     if (error.name != 'SyntaxError') {
//       throw error;
//     }
//   }
// }
// try {
//   renderError();
// } catch (error) {
//   (error.name);
// }

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// function loadScript(src){
//   return new Promise((resolve,reject)=>{
//     resolve
//   })
// }

// fetch('https://learn.javascript.ru/article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => fetch(`https://api.github.com/users/${response.name}`))
//   .then((response) => response.json())
//   .then((response) => {
//     // new Promise(function (resolve, reject) {
//     let img = document.createElement('img');
//     img.src = response.avatar_url;
//     document.body.append(img);
//     setTimeout(() => {
//       img.remove();
//       // resolve(response);
//     }, 2000);
//     return response;
//   })
//   .then((response) => (response.name));

// for (let prop of document.querySelectorAll('*')) {
//   prop.addEventListener('click', () => ('capturing  ' + prop.tagName), true);
//   prop.addEventListener('click', () => ('bubbling ' + prop.tagName));
// }

// async function hello() {
//   let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');
//   //   (response.headers);
//   for (let prop of response.headers) {
//     (prop);
//   }
// }
// // }
// hello();

// async function get() {
//   let res = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100');
//   // let response = res.body.getReader();
//   (res.headers.get('Content-Length'));
// }
// get();

// const a = 1,
//   b = 3,
//   c = 5;
// const arr = [a, b, c];
// Math.max(a, b, c);
// Math.min(a, b, c);
// arr.some((item) => item === 1);
// arr.filter((item) => item === 2).length === 2;
// a + b == c || b + c == a || c + a == b ? 'y=1' : 'y=2';

// function checkProg(arr) {
//   let diff = arr[1] - arr[0];
//   let ratio = arr[1] / arr[0];

//   let arith = true;
//   let geo = true;

//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] - arr[i] !== diff) arith = false;
//     if (arr[i + 1] / ratio !== arr[i]) geo = false;
//   }

//   return 'arithmetic-' + arith, 'geometric -' + geo;
// }

// arr.sort();
// arr.sort((a, b) => b - a);
// arr.map((item) => Math.pow(item, 2)).reduce((curr, next) => curr + next);

// function h(...thing) {
//   console.log(thing[0]);
// }
// h.call('1', '2');

// (function count() {
//   let arr = [];
//   for (let i = 1; i < 100; i += 2) {
//     arr.push(i);
//   }
//   console.log(arr.reduce((prev, next) => prev * next));
// })();

// (function (n) {
//   let count1 = 0;
//   let count2 = 0;
//   let count3 = 0;
//   let count4 = 0;
//   let count5 = 0;
//   for (let i = 50; i < 150; i++) {
//     if (i % n == 2) count1 += i;
//     if (i > 9 && i % 3 == 0) count2 += i;
//     if (i > 9 && i % 3 == 0 && i % 5 == 0) count3 += i;
//     if (i > 99 && i % 5 != 0) count4 += i;
//     if (i > 99 && i % 3 == 1 && i % 4 == 2) count5 += i;
//   }
//   console.log(count1, count2, count3, count4, count5);
// })(104);

(function (n) {
  let i = 999;
  while (i > 99) if (Math.pow(i, 1 / 2) > n) break;
  console.log(i);
  i--;
})(30);

function factorial(n) {
  if (n <= 1) {
    return n;
  } else return n * factorial(n - 1);
}
console.log(factorial(5));
