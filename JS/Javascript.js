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

