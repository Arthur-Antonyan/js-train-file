// var name = prompt('How old are you');
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
//  console.log('my car')
//  console.dir('my car')
//  console.warn('my car')
//  console.error('my car')

// console.group('1');
// console.log('1');

// console.group('2');
// console.log('2');
// console.groupEnd();

// console.time('1');
// console.timeEnd('1');

// console.profile('1')
// console.profileEnd('2')

// var a=1,b=1
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

// var x=+prompt('Введите число между 0 и 3', '');
// switch(x){
//  case 0: alert('its 0');
//  break;
//  case 1: alert('its 1');
//  break;
//  case 2: alert('its 2/3');
//  break;
// default: alert ('siqo')

// }

// var x= prompt ('insert number', 100)
// var y= prompt ('insert number', 100)
// var z = prompt ('insert 1,2,3,4')

// var x = parseInt(x)
// var y= parseInt (y)
// var result
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

// var location1 = Math.floor(Math.random()*5);;
// var location2 = location1+1;
// var location3 = location2+1;

// var guess;
// var guesses = 0;
// var hits  = 0;

// var result = false;

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
// var status = 'you shot  ' + guesses + 'to shoot the vaccel ' + 'your accurancy level is ' + (3/guesses);
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
// var message
// function checkAge(age){
//     if (age<10) message= 'you are still child';
//     else if (age<20) message = 'come here'
//     return message
// }  checkAge(9)
// console.log(message)

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
//     console.log(i);}

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
// 	var words1 = ["24/7", "Каждый день", "Сегодня", "Постоянно", "Непрерывно"];
// 	var words2 = ["мы", "команда", "компания", "сотрудники", "персонал"];
// 	var words3 = ["работаем не покладая рук", "отдыхаем на работе", "делаем чудеса"];

//     var random1 = Math.floor(Math.random()* words1.length)
//     var random2 = Math.floor(Math.random()* words2.length)
//     var random3 = Math.floor(Math.random()* words3.length)

//     var phrases = words1[random1] + words2[random2] +words3[random3];
//     alert(phrases);
// }
// makePhrases()

// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter"];
// var last = [products.length-1];
// var recent = products[last];
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
// // // console.log(user)
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
// console.log(user);

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

// var sample = { a: 1 , b: 2 , c:3 };
// var summed = 0;

// for (var key in sample) {
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

// var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
// var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
// var years = [1955, 1957, 1948, 1954, 1961];
// var colors = ["red", "blue", "tan", "yellow", "white"];
// var convertible = [true, false];

// function cars(){
// var random1 = Math.floor(Math.random()*makes.length)
// var random2 = Math.floor(Math.random()*models.length)
// var random3 = Math.floor(Math.random()*years.length)
// var random4 = Math.floor(Math.random()*colors.length)
// var random5 = Math.floor(Math.random()*convertible.length)
// var result  = makes[random1] + " " + models[random2] + " " + years[random3] + " " + colors[random4] + " " + convertible[random5];
// alert(result)
// }
// cars()

// var chevy = {
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
//         console.log('head lights are on')
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
//         console.log(this.fuel);
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

// var cat ={
//            make: 'latvian' ,
//            color: 'brown',
//            name: 'cutie',
//            age: 5,
//            stomac: 0,
//            sleep: function (){

//             if(this.stomac>0){
//                 alert('the' + " " + this.name + " "+ 'is sleeping');
//                    this.stomac=this.stomac-100;
//                    console.log(this.stomac)
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

// var access = document.getElementById("code2");

// var code = access.innerHTML;
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

// var x = .3-.2
// var y = .2-.1
// console.log(x==y)

//                                     DATES
// var then = new Date (2010, 0, 1);
// var later = new Date (2021, 8, 27, 17,  40);
// var now = new Date();
// var elapsed = now - then

// console.log(
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
// var x = 'π';
// var y = "e";
//  console.log(y.length)

// var x = "bka\nblla"
// var y = "blaa\
// blaaa\
// blaa"
// var x = 'i can\'t'
// alert(x)

// var s = 'WHAT TEH HELL';
// // var x = s.charAt(0);
// // var x = s.charAt(s.length-2);
// // var x = s.substring(5,7)
// // var x = s.slice(-2);
// // var x = s.indexOf('5');
// // var x = s.split(',');
// // var x = s.replace('how','What the fuck');
// // var x = s.toUpperCase();
// var x = s.toLowerCase();
// var x = s[2];
// console.log(x)

// function init(){

// var x = document.getElementById('code2') ;
// x.innerHTML = 'here was a text' ;
// console.log(x.innerHTML) ;

// var myClass = document.getElementsByClassName('code3');
// console.log(myClass)

// var x = document.getElementById('code5');
// // x.setAttribute('class', 'redTExt');
// // x.setAttribute('name', 'fuck');
// console.log(x);

// var x = document.getElementById('cod');
// var y = x.getAttribute('alt')
// console.log(y)

// var x = document.getElementById('cod');
// var y = x.getAttribute('alt')
// console.log(y)

// var x = document.body.children[3];
// x.setAttribute('class', 'redTExt');

// console.log(x)
// var x = document.body.firstElementChild.nextElementSibling;

// console.log(x.getAttribute('class'))
// }

// window.onload = init;

// var now = new Date()
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

// var a = 5
// var b = 6
// var c = 7
// var d = (a+b+c)/2
// var e = Math.sqrt(d*(d-a)*(d-b)*(d-c))
// console.log(e)

// var later = new Date(2050,0,1);
// var now = 2014;
// var later = 2050;

// for(let i = now; i <=later; i++){

//     var d = new Date(i,0,1);
//     if(d.getDay()===0)
//     console.log('it was monday' + i)

// }

// var now = new Date (1995,7,23);
// var later = new Date(2022,0,1);
// var gap =  later - now;
// console.log(gap/86400000)

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

// console.log(compute(77,5))

// function checkNumber(x,y){
//     if(y ==50 || x==50){
//         return true
//     }
//     else if(x+y == 50){
//         return true
//     }
//     else return false

// }
// console.log(checkNumber(50,25))

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
// console.log(checkPositivity(-12,3))

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
// console.log(ucFirst())

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
//     console.log(checkPositivity(-12,3))
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
// console.log(removeCharacter("blablaaaa"));

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
// console.log(checkCase('hblLib'))

// let a = 14;
// let b = a.toString(2);
// console.log(b)

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
//   console.log(User.eat)

// function changeStr(a){
//     return a = (a.slice(a.length-2, a.length-1)) + a + (a.slice(a.length-2, a.length-1));
// }

// console.log(changeStr('what'));

// function truncate(str,maxlength){

//     if(str.length>maxlength){

//         return str = str.slice(0,maxlength) + " ..."
//     } else return str

// }
// console.log(truncate('1234567890',7))

// function checkStart(str) {
//     if(str.startsWith('java')){
//         return true
//     } else return false
// }
// console.log(checkStart('script s the good lang'))

// function checkInt(x,y,z){
//     if((50<x && x<=99)|| (50<y && y<=99)|| (50<z && z<=99)){
//         return true
//     }else return false
// }
// console.log(checkInt(66,9,5))

// function checkStr(str,pos){
//     if(~str.indexOf('Script')){
//     return str.slice(0,pos) + str.slice(11)
//     }
//     else return str

// }
// console.log(checkStr("0,1, Script, 5, 6, 7,",4))

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
// console.log(findLargestInt(23,13,14))

// function findNearest (a,b){
//     if (Math.abs(100-a)<Math.abs(100-b)){
//         return a
//     }
//     else return b
// }
// console.log(findNearest(101,99))

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
// console.log(checkDigit(144442345,563455))

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
// console.log(sum())
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

// console.log(parseInt(3).toString(2))

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
// console.log(filtered)

// let arr = [5, 2, 1, -10, 8];
// let y = arr.sort((a,b)=>b-a);
// console.log(y)

// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = arr.sort();
// function copySorted(){
//     console.log( sorted.join(','));
// }
// copySorted()

// function x(){
//     alert('x')
// }
//  x()

//  let user = (userName,userAge)=>({name:userName,age:userAge});
//  let tom = user('tom',34);
//  let bob = user ('bob', 23 );
//  console.log(tom.name, tom.age)

// let str = "2+2";
// const y = str.split('');
// let z = parseInt(y[0])  + parseInt(y[2]);
// console.log(z)

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
//     console.log('evenish')
// );
// else console.log('oddish');

// let arr = ["I", "go", "home", "I", "go", "home"];
// // delete arr[2];
// // arr.splice(1,2,'brat','begi');
// // let r = arr.splice(1,2)
// // // arr.splice(-1,0,'brat')
// // let y = arr.concat(r)
// // // console.log(arr.slice(0,3))
// // console.log(y)

// let arr2 ={
//     1:'age',
//     2:'what',
//     [Symbol.isConcatSpreadable]:true,
//     length:3

// };
// let y = arr.concat(arr2);
// console.log(y)

// let arr = ["1", "2", "3", "4", "5", "6"];
// // let sum = 0;
// // // let x = arr.forEach(alert);
// // arr.forEach ((item) =>{
// //     sum+=item++
// // })
// // console.log(sum)
// let x = arr.forEach((item,index)=>{
//     console.log(index)
// })

// let arr = ["I", "go", "home", "I", "go", "home"];
// let x = arr.lastIndexOf('go');
// let y = arr.includes('I',4)
// console.log(y)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let x = users.find(item=>item.id==1 )
//   console.log(x.name)

// let arr = ["1", "3", "4", "5", "6"];
// let x = arr.find(item=>item%2==0);
//     console.log(x)

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
// console.log(x)

// let users = [
//     {id: 1, name: "Вася"},
//     {id: 2, name: "Петя"},
//     {id: 3, name: "Маша"}
//   ];
//   let x = users.filter(item=>item.id !==3);
//   console.log(x)

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let x = numbers.filter(item=>item>0);
// console.log(x)
// let x = numbers.filter(funciton(item){
//     if item>0;
// })

// let numbers = [-2, 5, 1, -5, -1, 1, 3, 4, -1];
// let x = numbers.filter((item,index)=>{
//     if(index>2){
//         return true
//     }else return false

// })
// console.log(x)

// let newArr = arr.map(item=>item*2)
// console.log(newArr)

// let newArr = arr.map((item,index)=>{
//     return item*index;
// })
// console.log(newArr)

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

// }console.log(max*min)

//hometask 2
// let arr =[];

// for (let i = -100; i<=100; i++){     //hometask 2a
//   arr[i]=i

//    if (i%3 !==0){
//       console.log(arr[i])
//    }
//    if(i>0){
//       arr [i]=i;

//    }

// }

// let arr =[];

// for (let i = -100; i<=100; i++){     //hometask 2b
//   arr[i]=i
//    console.log(arr[i])
// }

// let arr =[];
// let count = 0;

// for (let i = -100; i<=100; i++){     //hometask 2c
//    if(i<0){
//       count+=1;

//    }
// }console.log(count)

// let arr =[];
// let count1 = 0;
// let count2 = 0;

// for (let i = -100; i<=100; i++){     //hometask 2d
//    if(i>0){
//     a= count1+=i;
//     b = count2+=1;
//    };
// }

// console.log(a/b)

// let arr =[];
// let count = 0;

// for (let i = -100; i<=100; i++){     //hometask 2e
//      arr[i]=i;
//      if(arr.indexOf(i)%2!==0){
//         count+=i

//         console.log(arr.length)
//      }
// }

// let arr =[];
// let count = 0;

// for (let i = 0; i<=100; i++){     //hometask 2f
//      arr[i]=i;
//      if(arr[i]%7==0){

//       count+=arr.indexOf(i)

//      }
// }console.log(count)

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
// console.log(newStr)

// let array = [1,2,3,4,5];
// let max = array[0]*array[1];
// for(let i = 0; i<array.length;i++){

//  if(array[i]*array[i+1]>max){
//      max=array[i]*array[i+1];

//  }

// }
// console.log(max);

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
// console.log(number);

// let arr = {1, -2, 15, 2, 0, 8};
// console.log(Array.isArray(arr))

// console.log(arr.reverse())
// console.log(arr.sort((a,b)=>{return b-a}))

// let value = arr.reduce((i,j)=>{

//     return i+j;

// },10)
// console.log(value)

// let str = "-webkit-transition";
// let arr = str.split("-");
// let newarr = [];
// for(let i = 1;i<arr.length; i++){
//     newarr.push(arr[0]);
//     newarr[i] = arr[i].substring(0,1).toUpperCase().concat(arr[i].substring(1));

// };
// let newstr = newarr.join('');
// console.log(newstr)

// let str = "-webkit-transition"
// function camlize (str){
//     return str
//     .split ("-")
//     .map((word,index)=>index==0?word:word[0].toUpperCase()+ word.slice(1)
//     )
//     .join('');
// }

// console.log(camlize(str));

// let arr = [5, 3, 8, 1];
// function filter(arr,a,b){
//     return arr
//     .filter(num=>(num>=a && num<=b)
//     )
// }
// console.log(filter(arr,1,4))
// console.log(arr)

// let arr = [5, 2, 1, -10, 8];

// function sort2 (a,b){
//     return b-a

// }
// arr.sort(sort2)
// console.log(arr)

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
// console.log(arr)

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
// console.log(arr)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [ vasya, petya, masha ];
// let names = users.map(elem=>elem.name);
// console.log(names)

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [ vasya, petya, masha ];
// let mapped = users.map(elem=>({
// fullname:`${elem.name} ${elem.surname}`,
// id:elem.id
// }))
// console.log(mapped)

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// function sortbyage(arr){
//    arr.sort((a,b)=> a.age>b.age?1:-1)
// }
// sortbyage(arr)
// console.log(arr)
// let arr = [1, 2, 3]
// function sort(arr){
//     arr.sort(()=>Math.random()-0.5)
// }
// sort(arr)
// console.log(arr)
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [ vasya, petya, masha ];
// let mapped= arr.map(elem=>elem.age);
// let mid = 0;
// for(let i = 0;i<mapped.length;i++){
//  mid+=mapped[i];

// }
// console.log(Math.ceil(mid/mapped.length))

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
// console.log(nope(strings))

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

// console.log(numbers)

// let animals = [
//     'cat', 'dog', 'elephant', 'bee', 'ant'
// ];

// animals.sort((a,b)=>a>b?-1:1);
// console.log(animals)

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
// console.log(numbers.reverse())

// let freelancers = [{name: "Harry", skill: "JavaScript"},{name: "Mark", skill: "Python"},{name: "David", skill:"C++"}];
// let newa = freelancers.(element=>element.skill=="JavaScript");
// let names = newa.map(element=>element.name);

// console.log(names)
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   let getfull = persons.map(element=>({
//        fullname:`${element.firstname} ${element.lastname}`
//   }))

//     console.log(getfull)

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
// console.log(change)

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// let newarr = [];
// for(let str of strings){
//     if(!newarr.includes(str)){
//         newarr.push(str)
//     }
// }
// console.log(newarr)

// let myColor = ["Red", "Green", "White", "Black"];
// let str = myColor.join("+");
// console.log(str)

// let indexOn=[ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ];
// let filtered = indexOn.filter(elem=>elem.id==10)
// console.log(filtered.map(elem=>elem.name))

// let arr = [];
// function range(a,b){
//     for(let i = a,j=0;i<=b;i++,j++){
//         arr[j]= i;

//     }
//     return arr
// }
// console.log(range(4,7))

// function range(a,b){
//     let arr = new Array(b);
//     for(let i = a,j=0;i<=arr.length;i++,j++){
//         arr[j]= i;

//     }
//     return arr
// }
// console.log(range(2,5))

// let array= [58, '', 'abcd', true, null, false, 0];
// let newArr = array.filter(element=>element!=(null,0,'',false))

// console.log(newArr.slice(0,newArr.length-1))

// (3, 'default value')

//

// function cheange (a,b){
//     let arr = new Array(a);
//     for(let i =0;i<arr.length;i++){
//         arr[i]= b;

//     }
//     console.log(arr)
// }
// cheange(4,10)

// let numbers = [0, 1 , 2, 3, 10, 20, 30 ];
// let newar = [];
// for(let i =0;i<numbers.length;i++){

//         newar[0]=numbers[Math.floor((i+1)*Math.random())]

// }

// console.log(newar.toString())

// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// let merged = array1.concat(array2);
// let newarr = [];
// for(let key of merged){
//     if(!newarr.includes(key)){
//         newarr.push(key)
//     }
// }
// console.log(newarr)

// let str = "";
// let arr = []
// for(let i =0;i<26;i++){
//     str+=(i+10).toString(36);
//     arr=str.split("")
// }
// for(let i = 0;i<arr.length;i+=2){
//     console.log(arr[i])
// }

// let arr = [];
// for(let i = 0;i<26;i++){
//     arr[i]=(i+10).toString(36);
//     console.log(arr[i])
// }

// let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null];
// let newarr = arr.filter(element=>{
//     if( Number.isFinite(element)==true);
//     return element
// })
// console.log(newarr)

// let arr= [10,20,10,40,50,60,70];

// let num = 40;
// for(let i = 0;i<arr.length;i++){
//     let check1 = arr[i];
//     let check2 = arr[i+1]
//  if(check2+check1==num){

//      console.log(arr.indexOf(check1),arr.indexOf(check2))
//  }

// }
// var arr = ["Есть", "жизнь", "на", "Марсе"];
// let newarr=arr.map(elem=>elem.length)
//     console.log(newarr)

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
// console.log(newarr)

// let arr= [10,20,10,40,50,60,70];
// let newarr = arr.reduce((a,b)=>{
// return Math.max(a,b)
// })
// console.warn(newarr);

// var wizards = [
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

//     var points = {
//         HarryPotter: 500,
//         CedricDiggory: 750,
//         RonaldWeasley: 100,
//         HermioneGranger: 1270
//       };

// wizards.reduce((arr,wizard)=>{
// var key = wizard.name.replace( ' ', ' ');
// wizard.points=points[key];
// arr.push(wizard);
// return arr;
// },[])

//  let view=wizards=>console.log(wizards);
//  console.time('r')
// function view(){
//     console.log(wizards)
// }
// view();

// console.End('timer')

// let newarr = wizards.filter(elem=>elem.house=='Hufflepuff'

// )
// console.log(newarr.map(elem=>elem.name))
// let newarr =[];
//  wizards.reduce((a,b)=>{
//      if ( b.house == 'Hufflepuff'){
//         newarr.push(b.name)
//      }

//  },0)
//  console.log(newarr)

//     let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
//     let petya = { name: "Петя", surname: "Иванов", id: 2 };
//     let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let arr = [ vasya, petya, masha ];
// let newarr = arr.map((elem)=>({
//     fullname: `${elem.name} ${elem.surname}`,
//     id:elem.id

// }))

// console.log(newarr)

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
//  console.log(newresult([-2,-1,0,1]))

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let newarr = arr.reduce((init,val)=>{
// return init.concat(val)

// },[])
// console.log(newarr)

// console.log(String.fromCodePoint(65))
// let str=""
// for(let i =1;i<200;i++){
//     str+=String.fromCodePoint(i)

// }console.log(str.split(", "))

// let user ={};
//  user.name="John";
//  user.surname="Smith";
//  user.name="pete";
//  delete user.name;
//  console.log(user)

// let user ={ggg:36};
// function check(user){
// for(let key in user){
//     return false
// }return true
// }
// console.log(check(user))

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
//   function getsum(salaries){
//       var sum =0;
//       for(let prop in salaries){
//         sum+=salaries[prop]

//       }console.log(sum)

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
//   }console.log(menu)

//   }
//   newm();

// let fruit = "apple";
// let obj = {
//     [fruit]:5,
// }
// console.log(obj.apple)
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
// //  console.log(Pet)
// console.log(myCar2)

// let a = {name:1};
// let b = {};
// for(let key in a){
//     b[key]=a[key]
// }
// b.name=2;
// console.log(a)

// let user = { name: "Иван" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// let clone = Object.assign(user,permissions1,permissions2);
// console.log(clone)

// let obj = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };
//   let copy = Object.assign({},obj);
//   console.log(copy.sizes.height)
// let copy = JSON.parse(JSON.stringify(obj))
// obj.sizes.width++;
// console.log(copy.sizes.width)

//   function clone(user){

//   for(let prop in user){
//    copy[prop]=(typeof(user[prop]==`object`))?user[prop]:clone(user[prop])

//   }
//   return copy
// }
//   console.log(copy)

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

// console.log(Object.values(animal))

//  let rabbit = {
//      runs:true,
//      __proto__:animal,
//  }
// //  rabbit.sleeps()
//  for(let prop in rabbit){
//      if(rabbit.hasOwnProperty(prop)){
//          console.log("own prop is" + prop )
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
//  console.log(head.glasses)
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
//   console.log(speedy.stomach)

// var student = {
//     name : "David Rayy",
//     sclass : "VI",
//     rollno : 12 };

// let sum=0;
// for(let prop in student){
//     if(prop){
//         sum+=1
//     }
// }
// console.log(sum)

// var library = [
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
//     console.log(library[i].title +library[i].author)
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
// console.log(newdata)

// var library =
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
// // // console.log(Object.values(name1))

// let nano = Object.create(library,{
//     name:{
//         value:"tome"}
//     })
//     Object.setPrototypeOf(nano,{})
// console.log(Object.getPrototypeOf(nano))

// // for (let prop in name1){
// //     if(name1.hasOwnProperty(prop)){
// //         console.log("own.properrty is" + prop)
// //     }else console.log("inherited prop is " + prop)
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
// console.log(user.name)

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
// console.log(user.surname)

// "use strict";

// var user = {};

// Object.defineProperty(user, "name", {
//   value: "Вася",
//   writable: false, // запретить присвоение "user.name="
//   configurable: false // запретить удаление "delete user.name"
// });

// // Теперь попытаемся изменить это свойство.

// // в strict mode присвоение "user.name=" вызовет ошибку
// user.name = "Петя";
// console.log(user.name)

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
//     console.log(user.fullname)
//     Object.defineProperty(user,"fullname",{
//         get:function(){
//           return   this.name+this.surname
//         }
//     })

// console.log(user.fullname)
// // }
// Object.defineProperty(user,"toString",{enumerable:false})
// for(let prop in user){
//     console.log(prop)
// }
// console.log(Object.getOwnPropertyNames(user))

// let domb = new User("pasha volya")
// console.log(domb)

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
// console.log(user.name)
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
// console.log(Object.getPrototypeOf(newuser))

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
// console.log(obj.age)
// // for(let prop in obj){
//     console.log(obj[prop])
// }

// // for(let prop in obj){
// //     console.log(prop,obj[prop])

// // }

// const obj = {
//     birthYear: 1995,
//     get age() {
//         return 2021-this.birthYear
//     },
//     set age(val) {
//         this.birthYear = val
//     }
// }
// obj.age = "1997"
// console.log(obj.age)

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
// console.log(obj.age)

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
// console.log(obj.fullname)
// obj.age = 2001
// console.log(obj.age)

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
// // console.log(tal)
// console.log(obj2.birth)
// // obj2.age=2002;
// // console.log(obj2.age)
// // for(let prop in obj2){
// //     console.log(prop)
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
// // console.log(a)
// Object.defineProperties(obj,{
//     birth:{value:2001,writable:true},
//     name:{value:"lena",enumerable:true}

// })
// let b = Object.getOwnPropertyDescriptors(obj,"birth","name");
// console.log(b)

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
//     console.log(prop)
// }
// console.log(obj)

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
// // console.log(obj2[prop])
// // }
// // console.log(Object.isExtensible(obj))

// Object.freeze(obj);
// obj.birth=1997;

// console.log(obj)

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
// console.log(newObj)

// for(let prop in obj){
// if(obj.hasOwnProperty(prop) && obj[prop]!=null && Object.keys(obj).length!=0){
//     return true
// }else return false
// }

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// // // console.log(Object.keys(data).length == Object.keys(data2).length);
// // console.log(Object.values(data) === s(data2));

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

//  console.log(check(data,data2))

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
// // console.log(check(data,data2))

// function isEquivalent(a, b) {
//     // Create arrays of property names
//     var aProps = Object.getOwnPropertyNames(a);
//     var bProps = Object.getOwnPropertyNames(b);

//     // If number of properties is different,
//     // objects are not equivalent
//     if (aProps.length != bProps.length) {
//         return false;
//     }

//     for (var i = 0; i < aProps.length; i++) {
//         var propName = aProps[i];

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
// console.log(isEquivalent(data,data2))

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
// // console.log(compare(data1,data2))
// console.log(Object.isObject(data1))

// let myObject = {
//     "ircEvent": "PRIVMSG",
//     "method": "newURI",
//     "regex": "^http://.*"
// };
// delete myObject.regex;
// console.log(myObject)

// const data1 = {
//     a: 1,
//     b:2,
//     c:3
// };

// // let data2 = Object.assign({},data1);
// // let data2 = JSON.parse(JSON.stringify(data1))
// // console.log(data2.hasOwnProperty('c'))
// // console.log(data2)
// // for(let prop in data1){
// // // if(Object.hasOwnProperty(prop)=="a"){

// // // }
// // }
// for(let prop in data1){
//     console.log(prop,data1[prop])
// }

// function User(name,surname,age){
//     this.name=name;
//     this.surname=surname;
//     this.age=age
// }

// let vasya = new User("Vasya","petrow",15)
// for(let prop in vasya){
//     console.log(prop,vasya[prop])
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
// console.log(calc.mult())

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
// console.log(calc.mult())

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
// console.log(pers.surname)

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

// console.log(user[age]==user[surname])
// // let secondname= Symbol.for("id")
// // user[secondname]=2;
// user[surname]=3;

// // console.log(Symbol.keyFor(1))

// let clone = Object.assign({},user)
// console.log(clone[id])
// for(let prop in user){
//     console.log(prop)
// }
// let citizenID = Symbol.for('ssn');
// console.log(Symbol.keyFor(citizenID));

// let obj = {
//     a:1,
//     b:2
// }
// let newarr = [];
// newarr = Object.entries(obj)

// for(let i = 0;i<newarr.length;i++){
//     newarr[i].reverse()
// }
// console.log(Object.fromEntries(newarr))

// function invoke(object,path,func,args){
//     let x = path.split(".");
//     let y =x.reduce((acc,key)=> {
//     acc = acc[key] ? acc[key] : object[key];
//     return acc
//     },{});
//     return Array.prototype[func].apply(target, args);
// }
// console.log(invoke()

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
// console.log(obj.age)

// let obj = {
//     1: "hi",
//     2: "you",
//     length:3
// }
// obj.join=Array.prototype.join;
// console.log(obj.join(`,`))

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
//   console.log(obj)

// let user = {
//     name: "Иван",
//     sizes: {
//       height: 182,
//       width: 50
//     }
//   };

// //   let clone = Object.assign({},user)

// //   console.log(clone.sizes.width)

// let clone = JSON.parse(JSON.stringify(user));
// user.sizes.width++;
// console.log(clone.sizes.width)

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
// console.log(carrot.eats)

// function Rabbit(name){
//     this.name=name;
//     alert(name)
// };
// // console.log(Object.getOwnPropertyNames(Rabbit.prototype))
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
// console.log(F.eats)

// function Obj(name){
// this.name="john";

// }
// // obj.prototype ={
// //     gor:true
// // }
// // console.log(obj.prototype.constructor===obj)
// let obj2 = new Obj.constructor("pete");
// console.log(obj2.name)
// let User={
//     jumps:true
//   }
//   let rabbit = inherit(User);
//   console.log(rabbit.jumps)
//   let user = new User.constructor('John');
// //   let user2 = new user.constructor('Pete');

//   alert( user.name ); // Pete (сработало!)

// function inherit (proto){
//     function F(){};
//     F.prototype=proto;
//     let obj = new F;
//     return obj;
// }
// var animal = {
//     eats: true
//   };
//   let rabbit = inherit(animal)
//   console.log(rabbit.eats)

// let obj= {
//     name1:"john",
//     surname:"brown",
//     "name 2":13
// }
//     delete obj.name1

// console.log(obj["name 2"])

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
// console.log(clone.name)

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
// console.log(user1.age)

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
// console.log(4+user)

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
// console.log(obj.fullname)
// obj.age = 2001
// console.log(obj.age)

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
//       console.log(rabbit.hasOwnProperty(prop))
//   }
//   Object.defineProperty(rabbit,'hasOwnProperty()',{
//    value:'blabla',
//    enumerable:true,
//    configurable:true,
//    writable:true,
//   })
//   for(let prop in rabbit){
//     console.log(rabbit.blabla(prop))
// }

// let animal = {
//     eats:true,
// };

// function Rabbit(name){
//     this.name=name
// };

// Rabbit.prototype=animal;
// let rabbit = new Rabbit();
// console.log(rabbit.eats)

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
//   console.log( User.prototype.sayHi)

// let User = class myClass{
//     sayHi(){
//         console.log(myClass)
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
// console.log(user.name)

// function clock (){
//     let date = new Date()
//     let hours = date.getHours()
//     let mins=date.getMinutes()
//     let secs = date.getSeconds()
//     console.log(hours,mins,secs)
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
// console.log(rabbit.ear)
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
// console.log(rabbit.eat())
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

//       console.log(output);
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
// console.log(rabbit.ear)

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
// console.log(articles[0].name)

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
// console.log(art.name)

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
// console.log(sumTo(5))
// let sum = 0;
// for(let i = 0;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

//fibonacci

// let a1=0;
// let a2=1;
// let a3 ;
// let count=77;

// console.log(a1,a2)

// for(let i = 2;i<count;i++){
// a3=a1+a2
//     console.log(a3)
//     a1=a2;
//     a2=a3;

// }

// function fib(n){

//     if(n<=1){
//         return n
//     }return (fib(n-1)+fib(n-2))
// }
// console.log(fib(77))

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
//       console.log(list.value);
//       list = list.next
//   }

// function print(list){
//     console.log(list.value);
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
// console.log(find(2154,458,458))

// console.log(Number.MAX_VALUE)
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
// console.log(fib(5))

// function check(a){
//     if(a%2==0){
//         return "even"
//     }return  "odd"
// }
// console.log(check(10))

// function sum(...args){
//     let sum=0;
//     for(let prop of args){
//         sum+=prop;

//     }return sum
// }
// console.log(sum(1,2,3,4,5,6,7,8,9))

// function names(name,surname,...lastname){
//     // document.write(name + surname )
//     // alert(lastname[1])
//     console.log(arguments[2])
// }
// names("arman","grigoryan","papini","levoni")

// let arr = [1,2,3];
// let str = "hello";
// // [...str].reverse
// // console.log([...str].reverse())
// console.log(Array.from(str))
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
//   console.log(arr)

// function g (value){
//     let v=value
//    return  function (value1){
//         return v+value1
//     }

// }
// console.log(g(1)(2))
// let arr = [1,2,3,4,5,6,7,8,9];
// let newarr = arr.filter(item=>(item>2 && item<5));
// console.log(newarr)

// function inBetween(a,b){
// // let newArr = arr.filter(item=>(item>a && item<b));
// // return newArr
// if(item=>(item>a && item<b){
// return item
// }
// }
// console.log(arr.filter(inBetween(2,7)))

// function inBetween(a,b){
//     let item=arr;
//     if(item>a && item<b){
//         return item
//     }

// }
// console.log(inBetween(3,6))
// // console.log(arr.filter(inBetween(2,5)))

// function gh(a,b){
//     return function (x){
//         return x>a && x<b
//     }
// };
// // let arr = [1,2,3,4,5,6,7,8,9];
// // console.log(arr.filter(gh(2,5)))
// console.log(gh(3,6))

// let a = 'global';
// function outer() {
//     let b = 'outer';
//      console.log(b);
// function inner() {
//       let c = 'inner'
//     //   console.log(c);   // выдаст 'inner'
//     //   console.log(b);   // выдаст 'outer'
//     //   console.log(a);   // выдаст 'global'
//     }
// //     // console.log(a);     // выдаст 'global'
//        // выдаст 'outer'
//     inner();
//   }
// outer();

// // console.log(a);
// // console.log(b);
//     // выдаст 'outer'

// var ­scope­=­ "global­scope";­­­­­­­­­
// function­ checkscope()­{
// ­­­­var­ scope­=­"local­scope";­­­­­­
// ­­­­function­nested()­{ ­­­­­­­­var­scope­=­"nested­scope";­//­Вло­жен­ная­об­ласть­ви­ди­мо­сти­ло­каль­ных­пе­ре­мен­ных ­­­­­­­­return­scope;­­­­­­­­­­­­­­­//­Вер­нет­зна­че­ние­этой­пе­ре­мен­ной­scope
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

// }console.log(check())
// let scope = "global";
// function f(){

//     let scope="local"
//     function f1(){
//     return scope
//     }return f1
// }
// console.log(f()())

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

// console.log(c.plus())
// console.log(c.reset())
// console.log(c.plus())
// console.log(c.plus())
// console.log(c.plus())
// console.log(d.reset())
// console.log(c.plus())

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

// console.log(d.c)
// console.log(d.c)
// d.c=140
// console.log(d.c)

// function sum(a){
//     return function(b){
//         return b+a
//     }
// }
// console.log(sum(-5)(2))

// let arr = [1,2,3,4,5];
// console.log(arr.filter(item=>(item>=3 && item<=5)))
// function inb(a,b){
//  return function (x){
//      if(x>=a && x<=b)
//      return x
//  }
// }
// let arr = [1,2,3,4,5];
// console.log(arr.filter(inb(1,4)))

// function check(arr){
//     return function(x){
//         return arr.includes(x)
//     }
// }
// let arr = [1,2,3,4,5];
// console.log(arr.filter(check([1,2])))

//   console.log(users.sort((item1,item2)=>item1.age>item2.age?1:-1))

// let users = [
//     { name: "John", age: 20, surname: "Johnson" },
//     { name: "Pete", age: 18, surname: "Peterson" },
//     { name: "Ann", age: 19, surname: "Hathaway" }
//   ];

// function change(item){

//         return (item1,item2)=>item1[item]>item2[item]?1:-1

// }

// users.sort(change('age'));
// users.forEach(user => console.log(user.age));

// function consta (v){
//     return function(){
//         return v
//     }
// }
// let fu = [];
// for(let i = 0;i<10;i++) fu[i]=consta(i);
// console.log(fu[5]())

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

// console.log(shooters[3]())

// let x=7;
// function a(y){
//   return x+y
// }
// function b(z){
//   let x=8;
//   return z(9)
// }console.log(b(a))

// function disemvowel(str) {
//   return str;
// }

// let str = "This website is for losers LOL!";
// let arr = [...str];
// // let arr = str.split("")
// // let newstr  = new String(arr)
// // console.log(newstr.replaceAll("o"," "))
// for(let i = 0;i<arr.length;i++){
//   // if(newstr[i]=="a" || newstr[i]=="e" || newstr[i]=="i" || newstr[i]=="o" || newstr[i]=="u"){
//     // newstr.replaceAll("i"," ")
//   // }
//   if(arr[i]==="i" || arr[i]=="e" || arr[i]=="i" || arr[i]=="o" || arr[i]=="u"){
//   delete arr[i]
//   }
//   console.log(arr)
// }

// let newstr  = new String(arr)
// console.log(newstr)

// function check(num){
//   if (num>0 || num==0) return 0-num;
//   else return num
// }
// console.log(check(0))
// console.log(check(9))

// function create(){
// let arr = []
//   for (let i =0;i<arr.length;i++ ){
//     arr[i]= function(){return i}
//   }return arr

// }
// let arr = create();
// console.log(arr[5]())

// function create (v){
//   return function (){
//     return v
//   }
// }
// let arr = [];
// for (let i = 0;i<10;i++){
// arr[i]=create(i)
// }

// console.log(arr)
// let count =0;

// function gets(){
//   let count =1;

//   return function (a,b){
//     if(count%2==0 && count>3){

//       console.log("hmm, I don't know!")
//     }else console.log(a+b)

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

// console.log(arr.map(item=>item*2));

// function change(arr){
//   return function (n){
//     return arr.map(item=>item*n)
//   }
// }
// let arr = [1,2,3,4];
// // let changed = change(arr);
// // console.log(changed(5))
// console.log(change([4,5,6,7])(3))

// let str = "3 * 2";
// let arr = str.split("");

// for(let i = 0;i<arr.length;i++){
//   if( isFinite(arr[i])){
//   arr[i]=parseInt(arr[i])
//   console.log(arr[i])
//   }
//   // else if(arr[i]=="*"){
//   //    arr[i]='*'

//   // }

// }

// function changeStr(){

//   return function(arr){
//       for(let i = 0;i<arr.length;i++){

//           if(arr[i]== "*" && isFinite(arr[i]==true)){
//             console.log(arr[i-1]*arr[i+1])
//           }
//           if(arr[i]== "-"){
//             console.log(arr[i-1]-arr[i+1])
//           }
//           if(arr[i]== "+"){
//             console.log(arr[i-1]+arr[i+1])
//           }
//           if(arr[i]== "/"){
//             console.log(arr[i-1]/arr[i+1])
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
//     console.log(arr[i-1]*arr[i+1])
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
// console.log(x())

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

// console.log(y(5))
// console.log(y(10))
// console.log(y(20))
// console.log(y(5))
// function say(a){
//   return function(b){
//     return a+" " +b
//   }
// }
// let f = say("hello");
// console.log(f("world"))

// function pow(x){
//   if(x===1){
//     return x
//   }else return x*pow(x-1)
// }
// console.log(pow(5))

// function fib(x){
//   if(x<=1){
//     return x
//   } return (fib(x-1)+fib(x-2))
// }
// console.log(fib(5))

// let a1=0,a2=1,a3,n=15;
// console.log(a1,a2)

// for(let i=1;i<n;i++){
//   a3=a1+a2
//   console.log(a3)
//   a1=a2;
//   a2=a3
// }

// function pers(x){
//   let count =0

//   if(x<10){
//     return x
//   }return count+pers(x%10,x/10)

// }
// console.log(pers(29))

// let x = 12345 ;
// let count =0;
//  while(x>0){

//   count+=x%10;
//   x=Math.floor(x/10)

//  }
//  console.log(count)

// function getnum(x,y){
//     if(x==y){
//         return x
//     }return x+getnum(x+1,y)
// }
// console.log(getnum(1,4))

// function getnum(x){
//     if(x===0){
//         return x
//     }return x+getnum(x-1)
// }
// console.log(getnum(8))

// function repeatt(x,y){
//     return y.repeatt(x)
// }
// console.log(repeatt(3,"hello"))

// let str = "abba"
// let arr = [...str]

// for(let i =0;i<arr.length/2;i++){
//     let temp = arr[i];
//     arr[i]=arr[arr.length-i-1];
//     arr[arr.length-i-1]=temp;

// }
// let newstr=arr.join("")
// console.log(newstr==str)

// function check(str){
//     if(([...str].reverse().join("")).toLowerCase()===str.toLowerCase()){
//         return true
//     }else return false
// }
// let str = "Abba"
// console.log(check(str))

// function fac(x){
//     if(x===1){
//         return x
//     }return x*fac(x-1)
// }
// console.log(fac(3))
// console.log(fac.length)

//

// let x = 5;
// let arr =[];
// for(let i=0;i<6;i++){

//     arr.push(x)

// }
// console.log(arr)

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
// console.log(a())

// return a function that returns n
// function always (n) {
//     return function(){
//         return n
//     }
// }
// var three = always(3)
// console.log(three())

// function sayHi(){
//     alert("HI")
//     console.log(sayHi.counter++)
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
// console.log(sum(5)(6))

// let sum = "2";
// let sum2=Number(sum)
// console.log(typeof sum2)
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

// }console.log(count)

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
//     if(start+100<Date.now())console.log(arr)
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

//     // }console.log(i)

//     if(i<2)i++

//    else setTimeout(tick,1000)
// },1000)

// function f(from,to){
//     console.log(from)
//     let time=setTimeout(f,1000,++from)
//     if(from>4){
//         clearTimeout(time)
//     }

// }
// setTimeout(f,1000,1)

// function count(from,to){
//     let timer = setInterval(function(){
//         from<=to?console.log(from++):clearInterval(timer)},1000)
// }
// count(1,4)

// let a =setTimeout(function count(sum){

//     if(sum<4){
//         console.log(++sum)
//     }else clearTimeout(a)
// a=setTimeout(count,1000,1)

// },1000)

// function count(from,to){
//     let a = setTimeout(function go(){
//         console.log(from)
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
//             console.log(from)
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
// console.log(fact(15))

// function fact(num){
//     let i=num-1
//     let a= setTimeout(function b(){

//        if (i>1){

//            console.log(num*=i);
//            i--

//            setTimeout(b,1000)
//         }clearTimeout(a)
//     },1000)
// }
// fact(15)

// function start(){

//     let a = setTimeout(function b(){
//         console.log(new Date())
//     },1000)
//    setTimeout(a,1000)
// }
// start()
// function start(){
//     console.log(new Date())

// }
// setInterval(start,60000)

// let a = setTimeout(function b(){
//     console.log(new Date)
//     setTimeout(b,1000)
// },1000)

// let map =new Map()
// map.set(12,45)
//     .set(11,46)

// console.log([...map.entries()])
// console.time()

// function slow(n){
//     if(n<=1){
//         return n
//     } return (slow(n-1)+slow(n-2))
// }
//  console.log(slow(30))
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
// //  console.log(slow())
//  console.log(slow(43))
//  console.timeEnd()

// console.time()

// function slow(n){
//     if(n<=1){
//         return n
//     } return (slow(n-1)+slow(n-2))
// }
//  console.log(slow(30))
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
// console.log(slow(30))
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
// console.log(sayHi.call(jane))
// console.time()
// let obj = {
//     method1(){
//         return 65
//     },
//     method2(x,y){
//        return Math.pow(x,this.method1())
//     }

// }
// console.log(obj.method2(65))
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
// console.log(obj.method2(65))
// console.timeEnd()

// console.time()
// let obj = {

//     method2(x,y){
//        return Math.pow(x,y)
//     }

// }
// console.log(obj.method2(65,2))
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
// console.log(obj.method2(65,2))
// console.timeEnd()
// console.time()
// let obj = {

//     method2(x,y){
//        return Math.pow(x,y)
//     }

// }
// console.log(obj.method2(65,65))
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
// console.log(obj.method2(65,65))

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
// console.log(obj.method2(65,65))
// console.timeEnd()

// function fib(n){
//     let i=n-1
//     let a = setTimeout(function b(){
//         if(i>1){

//             console.log(n*=i)
//             i--
//             setTimeout(b,1000)
//         }clearTimeout(a)
//     },1000)

// }
// fib(15)

// function add(n,...arguments){
//     return n(...arguments)
// }
// console.log(add(n,2))
// function n(z){
//     return z+1
// }

// function check(o,arr){
//     return o(arr)
// }
// console.log(check(x,[4,3,2,1,5,6,1,1]))
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
// console.log(x[1,2,3,1])

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
// console.log(x([1,2,3,4,1]))

// function dna(x,arr){
//     return x(arr)
// }
// console.log(dna(x,["A","T"]))

// function x(arr){

//     for(let i=0;i<arr.length;i++){

//       arr[i]=arr[i].replace("A","T").replace("T","A")

//     }
// return arr

// }
// function change (x,num,str){
//     return x(num,str)
// }
// console.log(change(x,[1,2,3],"asdhi"))

// function x(num,str){
//       let arr =str.split("")
//     for(let i=0;i<num.length;i++){
//         if(arr[num[i]]){
//             arr[num[i]]=arr[num[i]].toUpperCase()

//         }
//         }
//         console.log(arr)
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
//     //     // console.log(arr[i])

//     // }

// }

// function capitalize(s,arr){

//     var capS = s.split("");

//     for(var i = 0; i < arr.length; i++) {
//       if(capS[arr[i]]) {
//         capS[arr[i]] = capS[arr[i]].toUpperCase();
//       }
//     }

//     capS = capS.join("");
//     return capS
//     };

//     console.log(capitalize("absdef",[2,4]))

//     let count=1;
//  for(let i=1;i<=20;i++){

//      count=count*i

//      console.log(count)

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
// console.log(factOf(fact,720))

// console.time()

// function fact(n){
//     if(n===1){
//         return n
//     }return n*fact(n-1)
// }
// console.log(fact(200))
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
// console.log(fact(199))
// console.timeEnd()
// console.time()
// function fib(n){
//     if(n<=1){
//         return n
//     }return n+(fib(n-1)+fib(n-2))
// }
// // console.log(fib(40))
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
// console.log(fib(100))
// console.timeEnd()

// function fizbuzz(n){
//     for(let i=1;i<=n;i++){

//     if(i%5==0 && i%3==0){
//         console.log("FizzBuzz")
//     }else if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("Buzz")
//     }else console.log(i)
// }
// }
// fizbuzz(15)

// function isPrime(n){
//     for(let i=0;i<9;i++){
//         if(n%i==0 && i>1){return i}

//     }
// }
// console.log(isPrime(4))

// function fibonacci(n){
//     if(n<=1){
//         return n
//     }return (fibonacci(n-1)+fibonacci(n-2))
// }
// console.log(fibonacci(5))

// function fibonacci(n){
// let a1=0,a2=1,a3
// let arr=[0,1]
// for(let i =2;i<n;i++){

//     a3=a1+a2;
//     // console.log(a3)
//     a1=a2
//     a2=a3
//     arr.push(a3)

// }
// console.log(arr)
// }
// fibonacci(15)

// let arr = ["aaaegregbc","azfc","azfc","azfc","azfc","azfc","aazrfa","aazrfa","aazrfa","aazrfa"]
// let newarr=arr.sort((a,b)=>a>b?1:-1)
// console.log(newarr.filter(value=>value.length>4))
// let count =0
// for(let i =0;i<newarr.length;i++){
//     if(arr[i]===arr[i+1]){
//         count++
//     }

// }
// console.log(count)

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
// console.log(arr)

// console.time()

// function fact(n){
//     if(n===1){
//         return n
//     }return n*fact(n-1)
// }
// // console.log(fact(200))

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
// console.log(fact(150))

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
// console.log(user.slow(2))

// function say(phrase){
//     return (phrase +this.name)
// }
// let user ={
//     name:"john"
// }
// let admin={
//     name:"Jane"
// }
// console.log(say.call(admin,"hello"))

// let arr=[]

// for(let i=500;i<510;i++){
//    arr.push(i)

// }
// let newarr = arr.sort((a,b)=>a>b?-1:1)
// for(let i =0;i<newarr.length;i++){
//     console.log(newarr[0]+newarr[newarr.length-1])
// }

// let arr = []
// for(let i=-130,j=0;i<-118;i++,j++){
//     arr.push(i)
// }

// let newarr = arr.sort((a,b)=>a>b?-1:1)
// console.log(newarr.indexOf(newarr[0]))
// console.log(newarr.indexOf(newarr[newarr.length-1]))

// let arr = [11233,2323236]

// console.log(arr.map(n))

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
//     // console.log(count2)
//     console.log(item)
//     // console.log(count1)

// }

// function hash (arguments){

//      console.log(...arguments)

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
//         console.log(arguments)
//         //  let key = arguments.length + Array.prototype.join.call(arguments,",")
//         let key = arguments.toString()
//          if(key in cache){
//             return cache[key]

//          }else return cache[key] = f.apply(this,arguments)
//      }
//  }

//  worker.slow = memoize(worker.slow)
//  console.log(worker.slow(2,5,6))

// function work(a, b) {
//     return ( a + b );
//   }

//   function wrapper(func){
//       let obj = {}
//       return function(){
//           let key = arguments.toString()
//           if(key in obj){
//             //   console.log((obj[key]))
//            console.log(obj[key])
//           }else console.log(obj[key]=func.apply(this,arguments));

//       }
//   }

//   work=wrapper(work)
// //   work(3,4)
//   setTimeout(work,5000,1,2)

// function work(a, b) {
//     return ( a + b );
//   }
//   console.log(work(3,4))
// // console.time()

//   function wrapper(func){
//       let obj = {}
//       return  function(){
//           let key = arguments.toString()
//           if(key in obj){
//              let a = ()=>{console.log(obj[key])}
//             //   console.log(obj[key])
//           }else let b = ()=>{console.log(obj[key]=func.apply(this,arguments))}
//         //   console.log(obj[key]=func.apply(this,arguments))

//       }

//   }
// //   console.timeEnd()

//   work=wrapper(work)
//   work(1,2)

// let obj = {
//     firstname:"JOhn",
//     second:"Brown",
//     say(phrase){
//         console.log(phrase+this.firstname)
//     },

//     bye(phrase){
//         console.log(phrase + this.second)
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
//     console.log(a*b)
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
//       alert(`${this.name} failed to log in`);
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
//       alert( this.name + (result ? ' logged in' : ' failed to log in') );
//     }
//   };

//   askPassword(user.login.bind(user,true),user.login.bind(user,false)); // ?

// function pow(x,y){
//     if(y===1){
//         return x
//     }return x*pow(x,y-1)

// }

// console.log(pow(2,3))

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
//   console.log(count(company))

// function sumto(n){
//     if(n==1){
//         return n
//     }else return n+sumto(n-1)
// }
// console.log(sumto(10000))

// function fac (n){
//     if(n==1){
//         return n
//     }else return n*fac(n-1)
// }
// console.log(fac(5))

// function fib(n){
//     if(n<=1){
//         return n
//     }else return(fib(n-2)+fib(n-1))
// }
// console.log(fib(7))

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
//   console.log(get(list))

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
// console.log(find(1,1))

// let a = 16;
// let b = 30;
// for(let i=a;i>0;i--){
//     if(b%i==0){
//         console.log(i); break
//     }

// }

// function repeat(str,num){
//     let newstr = " "
//     if(num>1){
//         return str+repeat(str,--num)

//     }else return str
// }
// console.log(repeat("h",5))

// function sum(n){
//     let count=0
//     if(n<1){
//        return count+=n%10

//     }else  return sum(count)

// }
// console.log(sum(12345))

// function digital_root(n) {
//     return (n - 1) %9+1;
//   }
//   console.log(digital_root(123456))

// function spam(count){

//    if(count>1){
//        return "hue"+spam(count-1,"hue")
//    }return "hue"
//   }
//   console.log(spam(8))

// function num(n){
//     return Number(n.toString().split("").map(item=>item*item).join(""))
// }
// console.log(num(3212))

// function x(num){

//     return function(num2){
//         return num+num2
//     }
// }

// console.log(x(2)(3))
// let newarr =[100,3,5,677]
// let arr = [3,5,677,100,11,12,1,2]
// console.log(arr.filter(check))
// function check(arr,newarr){
// for(let i = 0;i<=arr.length;i++){
//     if(arr[i]=newarr[i])
//     console.log(arr[i])
// }
// }
// check(arr,newarr)
// console.log(check(arr,newarr))

// function inbewteen(arr){
//     let newarr = []
//     return function(min,max){
//         return arr.filter (item=>item>min && item<max)
//     }

// }
// let x = inbewteen(arr)
// console.log(x(2,7))

// let users = [
//     { name: "John",age: 20, surname: "Johnson" },
//     { name: "Pete",age: 18, surname: "Peterson" },
//     { name: "Ann",age: 19, surname: "Hathaway" }
//   ];
// //   console.log(users.sort((a,b)=>a.surname>b.aurname?1:-1))

//   function sortby(arr){
//     return function(x){
//         arr.sort((a,b)=>a[x]>b[x]?1:-1)
//         return arr
//     }
//   }
//   console.log(sortby(users)('age'))

// function cons(x){
//     return ((a,b)=>a[x]>b[x]?1:-1)

// }
// console.log(users.sort(cons('age')))

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
// console.log(add(3)())
// function add(a,b){
//     return a+b
// }

// let double = add.bind(null,2)
// console.log(double(3))

// var greet_abe = function() {
//     let name = 'Abe';
//     return "Hello, " + name + '!';
//   };
//   name = 'Ben';
//   var greet_ben = function() {
//     return "Hello, " + name + '!';
//   };
//   console.log(greet_abe())
// let arr = [1,2,3,4,5]
// // console.log(arr.map(item=>item*2))

// function get(arr){
//     return function(num){
//         return arr.map(item=>item*num)
//     }
// }

// console.log(get(arr)(2))

// let a = setTimeout(function print(){
//     let count = 0;
//     function c(){
//          return count++
//     }
//     setTimeout(c,1000)
// },1000)
// console.log(a)

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
//         console.log(current)
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
//         console.log(current)
//         current++
//         if(current<to){setTimeout(go,1000)
//         }

//     },1000)

// }
// print(1,5)

// function f(from,to){
//     console.log(from)
//     let time=setTimeout(f,1000,++from)
//     if(from>4){
//         clearTimeout(time)
//     }

// }
// setTimeout(f,1000,1)

// function count(from,to){
//     let timer = setInterval(function(){
//         from<=to?console.log(from++):clearInterval(timer)},1000)
// }
// count(1,4)

// let a =setTimeout(function count(sum){

//     if(sum<4){
//         console.log(++sum)
//     }else clearTimeout(a)
// a=setTimeout(count,1000,1)

// },1000)

// function count(from,to){
//     let a = setTimeout(function go(){
//         console.log(from)
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
//             console.log(from)
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
// console.log(fact(15))

// function fact(num){
//     let i=num-1
//     let a= setTimeout(function b(){

//        if (i>1){

//            console.log(num*=i);
//            i--

//            setTimeout(b,1000)
//         }clearTimeout(a)
//     },1000)
// }
// fact(15)

// function start(){

//     let a = setTimeout(function b(){
//         console.log(new Date())
//         setTimeout(b,1000)
//     },1000)

// }
// start()
// function start(){
//     console.log(new Date())

// }
// setInterval(start,1000)

// let a = setTimeout(function b(){
//     console.log(new Date)
//     setTimeout(b,1000)
// },1000)

// function fact(n){
//     if(n==1){
//         return n
//     }else return n*fact(n-1)
// }
// console.log(fact(15))
//

// console.log(fact(15))

//      function memoize(f){
//      let cache = {}
//      return function(){
//         // console.log(arguments)
//          let key = arguments.length + Array.prototype.join.call(arguments,",")
//         // let key = arguments.toString()
//          if(key in cache){
//             return cache[key]

//          }else return cache[key] = f.apply(this,arguments)
//      }
//  }
// fact=memoize(fact)
//     console.log(fact(15))
//  worker.slow = cache(worker.slow)
//  console.log(worker.slow(2,7,6))

// function fact(n){
//     if(n<=1){
//         return n
//     }return (fact(n-1)+fact(n-2))
// }
// console.log(fact(15))
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
//     console.log( worker.slow(2) )
//     worker.slow = cache(worker.slow)
//    console.log( worker.slow(2) )

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
// console.log(arr.find(item=>item===4))

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

// console.log(finder(arr,j))
// let arr = [1,2,3,4]

// Array.prototype.myfind = function (fn){

//     for(let i = 0;i<this.length;i++){
//         if(fn(this[i]))
//         return this[i]

//     }
// }
// // console.log(hr(3))

// const a = arr.find(function(item){return item==arr[2]})
// console.log(a)
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
// console.log(check2)

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
// console.log(check3)

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
// console.log(check4)

// let User = class myname{
//     say(){
//         console.log(myname)
//     }
// }
// let user = new User()
// user.say()

// function Make(phr){
//     return class{
//         say(){
//             console.log(phr)
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
//         console.log(`it runs ${this.speed}`)
//     }
//     stop(){
//         this.speed=0
//         console.log("it stopped")
//     }
// }
// class Rabbit extends Animal{
//     hide(){
//         console.log(`${this.name} is hiding`)
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
// console.log(check1)

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
// console.log(check2)

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
// console.log(check3)

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
// console.log(check4)

// if(confirm("go to smwhere")){location.href = "https://wikipedia.org"}
// if(cancel){location.href = "https://wikipedia.org"}

// for(let i = 0;i)
// console.log(document.body.previousElementSibling)

// console.log(document.body.children[1].children[0].nextElementSibling)

// document.body.firstElementChild.border="1px solid black"
// let table = document.body.firstElementChild
// // table.rows[1].cells[0].style.backgroundColor="red"
// for(let i = 0;i<table.rows.length;i++){

//     table.rows[i].cells[i].style.backgroundColor="red"
// }

// let element = document.querySelectorAll("ul>li:last-child")
// for(let elem of element){
//     console.log(elem.innerHTML)
// }

// console.log(document.body.firstElementChild)
// if(document.body.firstElementChild.matches(".ul")){
//     alert(true)
// }
// else alert(false)

// let chapter = document.querySelector(".chapter");
// // console.log(chapter.closest(".contents"))

// let chapter = document.querySelector("div");
// console.log(chapter)

// let find = document.getElementsByTagName("input")
// console.log(find)
// let find = document.getElementsByClassName("article")
// console.log(find)
// let find = document.getElementsByTagName("input")[0].name="not age";
// // console.log(find)
// console.log(document.getElementsByTagName("input")[0])

// let elem1=document.querySelector('input')
// let elem2 =document.querySelector('#table')
// console.log(elem2.contains(elem1))
// console.log(document.querySelectorAll('#age-table label'))
// console.log(document.getElementsByTagName('label'))
// console.log(document.getElementsByName("search")[0].getElementsByTagName('input')[0])
// let d = document.getElementsByName("search")[0]
// console.log(d[d.length-1])

// console.log(document.body.constructor.name)
// console.log(document.body.firsthild.nodeType)
// console.log(document.body.children.nodeName)
// let a = document.body.innerHTML+=('<div>cdf</div>')
// console.log(document.body)

// let b = document.body.querySelector("div")
// b.outerHTML="<button>hello world</button>"
// document.querySelector("button").style.fontWeight="bold"
// console.log(document.querySelector("div"))
// let text = document.body.firstChild
// text.data="hayrumyan"
// console.log(text)
// document.body.firstElementChild.style.backgroundColor="red"
// let b = document.body.firstElementChild
// setInterval(function(){return b.hidden=!b.hidden},1000)
// setInterval(function(){return b.hidden=false},500)

// let b = document.querySelectorAll("li")
// for(let key of b){
//     let count = key.getElementsByTagName('li').length;
//     console.log(count)
// }
// // let b=document.getElementsByTagName("li")
// // console(b)
// console.dir(document)

// document.body.setAttribute("type","every")
// // document.body.removeAttribute("type")
// console.log(document.body.attributes)
// let input = document.querySelector("input")
// input.setAttribute("type","radio");
// console.log(input.type)
// input.type="checkbox"
// console.log(input.type)

// let user = {
//     name: "Pete",
//     age: 25
//   };

//   for(let key of document.querySelectorAll("[show-info]")){
//       let field = key.getAttribute("show-info")
//      key.innerHTML=user[field]

//   }

// console.log(document.querySelector("div").dataset.widgetName)
// let link = document.querySelector('a');
// link.style.color = 'orange';
// console.log(link)

// let newlink = document.getElementsByTagName('a');
// // let hl=newlink.innerHTML

// for(let i=0;i<newlink.length;i++){
//     let a =newlink[i];

//     if(!a.innerHTML.startsWith('http://internal.com') && a.innerHTML.includes('://'))

//     a.style.color = "orange"
// }
// console.log(newlink)

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
// console.log()
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

// // console.log(element.length)
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
// console.log(li2)

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
//           console.log(prop,obj[prop])
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

//     console.log(count++)
//     setTimeout(f,1000,count++)
// },1000)

// setTimeout(function c(count=1){

//     console.log(count++)
//     setTimeout( c,1000,count++)

// },1000)
// let a =c()
// console.log(a())
// console.log(a())

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
// console.log(copy)

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
// console.log(myIncludes(arr,item=>item>2))

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
// console.log(myJoin(arr,"-"))

/// lastIndexof

// let arr = [1,2,5,3,4,5]
// function myLastIndexOf(arr,val,from){
//     for(let i = from?from:arr.length;i!=0;i--){
//         if(val==arr[i]){
//             return i
//         }
//     }
// }
// console.log(myLastIndexOf(arr,5,4))

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
// console.log(arr)

/////// push
// let arr = [1,2,3,4,5]
// function myPush(arr,...val){
//     for(let i=0;i<val.length;i++){
//      arr[arr.length]=val[i]
//     }
//       return arr.length

// }
// myPush(arr,1,2,3)
// console.log(arr)

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
// console.log(mySlice(arr,1,4))

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
// console.log(myShift(arr))
// console.log(arr)

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
// console.log(myUnshift(arr,6,7,8))
// console.log(arr)

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
// console.log(arr)

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
//     console.log(arr)

// let arr = [1,2,5,3,4,5]
// function myLastIndexOf(arr,val,from){
//     for(let i = from?from:arr.length;i!=0;i--){
//         if(val==arr[i]){
//             return i
//         }
//     }
// }
// console.log(myLastIndexOf(arr,5,4))

// function myReduce(arr,func,init){
//     let result=init
//     for(let i=0;i<arr.length;i++){

//             result=func(result,arr[i],i,arr)

//     }
//     return result
// }

// console.log(myReduce(arr,(prev,next)=>prev+next,6))

// console.log(arr)

// const items = [1, 2, 3, 4, 5]

// const insert = (arr, index, ...newItems) => [
//   ...arr.slice(0, index),...newItems,...arr.slice(index)

// ]

// const result = insert(items, 1, 10, 20)

// console.log(result)

// function counter(){
// //     // for(let i=0;i<3;i++){
//         alert(this.value)
// //     // }
// }
// elem.onclick=counter

// function add1(){
//     console.log("this 1")
// }
// function add2(){
//     alert("this 2")
// }

// elem.addEventListener("click",add1)
// elem.addEventListener("click",add2)

// console.log(example.offsetParent)
// console.log(example.offsetLeft)
// console.log(example.offsetTop)

// function isHIdden(elem){
//     return !elem.clientTop && !elem.clientLeft
// }
// console.log(isHIdden(example))

// console.log(example.scrollHeight)

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
// console.log(map(arr, item=>item*2))

// setInterval(()=>{console.log(example.scrollTop)},1000)

// setInterval(()=>{console.log(example.scrollTop)},3000)
// // let scrollBottom=example.scrollHeight-example.scrollTop-example.clientHeight

// function scrollBottom(elem){
//     return elem.scrollHeight-elem.scrollTop-elem.clientHeight
// }

// setInterval(()=>{console.log(scrollBottom(example))},3000)

// let width=example.clientWidth-parseInt(getComputedStyle(example).width)
// let width=example.offsetWidth-example.clientWidth
// console.log(width)

// let a =(field.clientWidth/2-parseInt(getComputedStyle(ball).width)/2)+"px";
// let b =(field.clientHeight/2-parseInt(getComputedStyle(ball).height)/2)+"px";
// console.log(a)

// ball.style.left=a
// ball.style.top=b

///////document height

// console.log(Math.max(document.body.scrollHeight,document.body.offsetHeight,document.body.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight,))

// console.log(window.pageXOffset)
// console.log(window.pageYOffset)

// let user =['user', 'admin', 'admin', 'user', 'admin', 'user', 'user', 'user', 'user', 'admin', 'admin', 'user']
// let filter=user.filter(item=>item==='admin')
// console.log(filter)

// let id=['jf83urjf74jf', 'uejf83jfut75', 'ir84itjgut75u', 'jfue73urhfd8']
// let newid=id.map(item=>item+"-AM")
// console.log(newid)

// let num=[150, 400, 200, 50, 300, 320, 500]
// let sum=num.reduce((prev,next)=>prev+next,0)
// console.log(sum)

// setInterval(()=>{console.log(document.querySelector("button").getBoundingClientRect())},1000)

// let x=document.documentElement.clientHeight/2;
// let y=document.documentElement.clientWidth/2

// let elem=document.elementFromPoint(y,x)
// elem.style.color="red"
// console.log(elem)

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
// console.log(a)
// console.log(b)

// console.log(field.clientX)

// function reverse(x){
//     let count=""
//     while(x>0){
//         count+=x%10
//         x=Math.floor(x/10)
//     }
//     return Number(count)
// }
// console.log(reverse(32243))

// let x ="nurses run"

// function check(x){
//     let y=Array.from(x.split(" ").join("")).join("")
//     let z=Array.from(x.split(" ").join("")).reverse().join("")
//     return (y==z)
// }
// console.log(check(x))

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
// console.log(comb(x))

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
// console.log(comb(x))

// let cord1=field.getBoundingClientRect()
// // let rect1
//  let x=cord1.x ,y=cord1.y
// // let rect2
// let r2x=cord1.x+field.offsetWidth, r2y=cord1.y+field.offsetHeight
// // rect4
// let r4x =r2x-(field.offsetWidth-field.clientWidth)/2,   r4y=r2y-(field.offsetHeight-field.clientHeight)/2
// //rect3
// let r3x=x+(field.offsetWidth-field.clientWidth)/2,r3y=y+(field.offsetHeight-field.clientHeight)/2

// console.log(x,y)
// console.log(r2x,r2y)
// console.log(r3x,r3y)
// console.log(r4x,r4y)

// let coords = field.getBoundingClientRect();

// let answer1 = [coords.left, coords.top];
// let answer2 = [coords.right, coords.bottom];
// let answer3 = [coords.left + field.clientLeft, coords.top + field.clientTop]
// let answer4 = [
//     coords.right - parseInt(getComputedStyle(field).borderRightWidth),
//     coords.bottom - parseInt(getComputedStyle(field).borderBottomWidth)
//   ]

// console.log(answer1)
// console.log(answer2)
// console.log(answer4)

// let elem = document.querySelector("button")
// function click(){
//     console.log("clicked")
// }
// function click1(){
//     console.log("clicked 1")
// }
// elem.onclick=click1
// elem.addEventListener("click",click)
// elem.addEventListener("click",click1)

// elem.onclick=function(event){
//     console.log(event.type + " " + event.target)
//     console.log(event.clientX + " " + event.clientY)
// }

// elem.onclick=addEventListener("click",{
//     handleEvent(event){
//         console.log(event.type + " "+ event.currentTarget)
//     }
// })

// let x = "webmaster"
// function change(x){
//     return x.split("").sort((a,b)=>a>b?1:-1).join("")
// }
// console.log(change(x))

// let x= "the quick brown fox"
// function upper(x){
//     let y=x.split(" ")
//     for(let i=0;i<y.length;i++){
//       y[i]=y[i].substr(0,1).toUpperCase()+y[i].substr(1)
//     }
//     return y.join(" ")
// }
// console.log(upper(x))

// let x = "Web Development Tutorial"
// function sort(x){
//     let y=x.split(" ")
//     let z=y.sort((a,b)=>b.length-a.length)
//     return z[0]
// }
// console.log(long(x))

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
// console.log(reduce(x))

// let z = y.map(item=>item.length)
// let j=z.filter(item=>Math.max(item))
// console.log(j)

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
// console.log(long(x))

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

// console.log(field.clientTop)
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
// console.log(arrow)

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
//     console.log("this"+event.currentTarget,"target"+event.target)
// }

// for(let elem of document.querySelectorAll("*")){
//     elem.addEventListener("click",e=>console.log("capturing"+`${elem.tagName}`),true)
//     elem.addEventListener("click",e=>console.log("bubbling"+`${elem.tagName}`))
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

// console.log(user2.name)
// console.log(div.dataset.bgColor)

// let table =document.querySelector("table");
// function handler(target){return target.style.cssText="cursor:pointer;background-color:red"}
// table.addEventListener("click",(event)=>{
//     if(event.target.classList.contains("td")){
//         let target =event.target
//         handler(target)
//     }else console.log("mimo")
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

//     // console.log(id)
//     // if (!id) return;

//     let elem = document.getElementById("subscribe-mail");
//     console.log(elem)

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
//         console.log(newarr)
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
//     console.log(newarr)
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
// console.log(b)

// let table=document.querySelector("#grid")
// let newarr=[];
// for(let i=1;i<table.rows.length;i++){
//     newarr.push([table.rows[i].cells[0].innerHTML,table.rows[i].cells[1].innerHTML])
//     console.log(newarr[i][1])
// }
// console.log(newarr)
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

//     console.log(element.offsetHeight)
//     console.log(cords.top)

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
//     console.log("mouseover","target "+event.target.tagName,"related "+event.relatedTarget.tagName)
// })
// div.addEventListener("mouseout",(event)=>{
//     console.log("mouseout","target "+event.target.tagName,"related "+event.relatedTarget.tagName)
// })
// let current =null;
// table.addEventListener("mouseover",(event)=>{
//     if(current)return;
//     let target=event.target.closest("td")
//     if(!target)return;
//     current= target;
// //   target.style.background = 'pink';
//     console.log(target)
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
//     // console.log(related)
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
//     console.log(div.offsetLeft)

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
//     console.log(event.relatedTarget)
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
// //    console.log(event.pageX)
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
//        console.log(slider.offsetLeft+slider.clientWidth)
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
//         console.log
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
//     console.log(event.target);
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
// // console.log(hero);

// document.addEventListener('mousedown', (event) => {
//   event.preventDefault();
//   let target = event.target.classList.contains('draggable');
//   // let target=event.target.getAttribute("class")="draggable"
//   if (target) {
//     console.log(target);
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
//   console.log(shift2);
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
// console.log(document.body.style.height);

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
// console.log(b[1].getBoundingClientRect().top);
// console.log(document.documentElement.clientHeight);

// console.log(document.forms[1][0].name);
// console.log(document.forms[2].elements.userFields);

// let login = form.login;
// login.value = 'hopla';
// console.log(login);

// select.value = 'banana';
// select.options[2].selected = true;
// select.selectedIndex = 1;
// select.options[0].selected = true;

// // for (let x of select.options) {
// console.log(
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
// console.log(x);

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

// console.log(form.activeElement);

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

// console.log(sumbefore.value);

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
//   console.log(`${scr.src}`);
// });

// function newf(src, cb) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => cb(null, script);
//   script.onerror = () => cb(new Error(`cant load the script`));
//   document.head.append(script);
// }

// // newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (value) => {
// //   console.log(value.src);
// //   newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', () => {
// //     console.log('again it hapend');
// //   });
// // });

// newf('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lsh.js', (err, value) => {
//   if (err) {
//     alert(1);
//   } else console.log('hello');
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
//   console.log(cb(num));
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
// console.log(d.gret);

// let x = true;
// let y = 45 <= 90;
// let z = '0';
// console.log(x && y && z);

// for (let i = 1; i <= 5; i++) {
//   for (let j = i; j < 5; j++) {
//     console.log('*');
//   }
// }

// function chek(date) {
//   if (date === { age: 18 }) {
//     console.log('1');
//   } else if (date == { age: 18 }) {
//     console.log('2');
//   } else console.log(3);
// }
// chek({ age: 18 });

// console.log(111 == true);
// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);

// let obj = {
//   foo: 'bar',
//   func: function () {
//     var self = this;
//     console.log(this.foo);
//     console.log(self.foo);
//     (function () {
//       console.log(this.foo);
//       console.log(self.foo);
//     })();
//   },
// };

// obj.func();

// let x = [1, 2, 3, 4, 2, 3, 4];
// let y = {};
// x.forEach((fr) => {
//   y[fr] = y[fr] ? y[fr] + 1 : 1;
// });
// console.log(y);
// console.log((1 && !2) || 3);
// let a = 5;

// // setTimeout(() => {
// //   a = 97;
// //   console.log(a);
// // }, 2000);

// console.log(a);
// let b = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve((a = 97));
//   }, 2000);
// });
// b.then(() => {
//   console.log(a);
// });

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => resolve('done'), 2000);
// });
// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
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
// promise.finally(() => console.log('ended'));
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
// // loadscript.then((result = console.log(result)), (error = console.log(error)));
// let promise = loadscript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js');
// promise.then(
//   (result) => console.log(result),
//   (error) => console.log(error)
// );

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), ms);
//   });
// }
// delay(3000).then((result) => console.log(result));

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   })
//   .then((result) => {
//     console.log(result);
//     return result * 2;
//   });

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(result * 2), 1000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
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

//   .then((result) => console.log(result));

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then((response) => console.log(response.name));

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

//   .then((response) => console.log(`${response.name}`));

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
//   .then((response) => console.log(response.name));

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
//     } else console.log('icant');
//     throw error;
//   })
//   .then(() => console.log('continuing'));

// new Promise(() => {
//   ghrfd();
// }).then((result) => alert(result));

// window.addEventListener('unhandledrejection', (event) => {
//   //   console.log(event.promise);
//   console.log(event.reason);
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
// ]).then((res) => res.forEach((res) => console.log(res[0])));

// let url = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];

// let link = url.map((item) => fetch(item));
// // Promise.all(link).then((res) => res.forEach((res) => console.log(res.url, res.status)));
// Promise.all(link)
//   .then((res) => Promise.all(res.map((r) => r.json())))
//   //   .then((res) => res.forEach((res) => console.log(res.name)));
//   .then(console.log);

// Promise.all([
//   new Promise((resolve) => setTimeout(resolve(1), 1000)),
//   new Promise((resolve, reject) => setTimeout(reject(new Error('error here')), 2000)),
//   new Promise((resolve) => setTimeout(resolve(3), 3000)),
// ]).catch((result) => alert(result));

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://no-such-url'];

// let fetched = urls.map((r) => fetch(r));
// Promise.allSettled(fetched).then((res) => {
//   res.forEach((result, num) => {
//     if (result.status == 'fulfilled') console.log(`${urls[num]}: ${result.value.status}`);
//     if (result.status == 'rejected') console.log(`${urls[num]}: ${result.reason}`);
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
// load('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js').then((result) => console.log(`${result.src}`));

// function delay(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done'), ms);
//   });
// }
// delay(2000).then(console.log);

// new Promise((resolve, reject) => {
//   setTimeout(() => resolve(1), 1000);
// })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(2), 2000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(3), 3000);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => resolve(4), 40(00);
//     });
//   })
//   .then(console.log);

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

//   .then((response) => console.log(response));

// Promise.all([
//   new Promise((resolve, reject) => setTimeout(resolve(1), 3000)),
//   new Promise((resolve, reject) => setTimeout(resolve(2), 2000)),
//   new Promise((resolve, reject) => setTimeout(resolve(3), 1000)),
// ]).then((result) => result.forEach((r) => console.log(r)));

// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];
// let names = ['iliakan', 'remy', 'jeresig'];

// let fetched = urls.map((item) => fetch(item));
// // Promise.all(fetched).then((response) => response.forEach((r) => console.log(`${r.status}`)));

// Promise.all(fetched)
//   .then((responses) => {
//     responses.forEach((resp) => console.log(resp.status, resp.url));
//     return responses;
//   })
//   .then((responses) => responses.map((r) => r.json()))
//   .then(console.log);

// fetch('https://learn.javascript.ru//article/promise-chaining/user.json')
//   .then((response) => response.json())
//   .then(console.log);

// let complete = true;

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (complete) {
//       resolve('its ok');
//     } else reject('its not ok');
//   }, 3000);
// });
// console.log(promise);
// promise.then((result) => console.log(result.value));

// fetch('https://getpost.itgid.info/index2.php')
//   .then((data) => data.text())
//   .then((data) => console.log(data));

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
//   (result) => console.log(result),
//   (err) => console.log(error)
// );

//   .then((result) => result.text())
//   .then((result) => {
//     console.log(result);
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
//   .then(console.log);
// let urls = ['https://api.github.com/users/iliakan', 'https://api.github.com/users/remy', 'https://api.github.com/users/jeresig'];

// let fetched = urls.map((item) => fetch(item));
// Promise.all(fetched)
//   .then((result) => {
//     for (let res of result) {
//       //   res.json();
//       console.log(res.url);
//     }
//     return result;
//   })
//   .then(console.log);
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
//       console.log(`${urls[num]}: ${result.status}`);
//     }
//     if (result.status == 'rejected') {
//       console.log(`${urls[num]}: ${result.reason}`);
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
// ]).then(console.log);

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
// //     console.log(error);
// //   } else console.log(`here is the ${script.src}`);

// // });

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;

//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`Ошибка загрузки скрипта ${src}`));

//   document.head.append(script);
// }

// loadScriptPromise('https://learn.javascipt.ru/promisify').then(console.log).catch(console.log);
// let load = function (src) {
//   return new Promise((resolve, reject) => {
//     loadScript(src, (error, result) => {
//       if (error) {
//         reject(error);
//       } else resolve(result);
//     });
//   });
// };
// load('https://www.youtube.com/watch?v=AAMwKmM0qG4&ab_channel=NickBisignano').then(console.log).catch(console.log);

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
// load('https://www.youtube.com/wath?v=AAMwKmM0qG4&ab_channel=NickBisignano').then(console.log).catch(console.log);

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve(1), 2000);
//   });
//   let prom = await promise;
//   console.log(prom);
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
//   .then(console.log);

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
//   console.log(res);
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
//   .then(console.log) // (3)
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
//   return wait().then(console.log);
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
