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
// document.write( 'Current time is' + ' ' + (x)); 


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
  
//   ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
//   );

//   let ask = ("Вы согласны?")?=>alert("Вы согласились.")


  

