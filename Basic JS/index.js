// console.log("Hello Saif")

let score ="saif"
//console.log(typeof score)

let numberIs= Number(score)
//console.log(numberIs)

let num= "   "
//console.log(num)
let converted=Boolean(num)
//console.log(converted);

let number=33

// console.log(typeof number )

let mun=String(number)
// console.log(typeof mun)


// console.log("1"+ 2+ 2);// all will treet as string 

// console.log("1 "+3 )
// console.log(1+5+" 6") //just last one tree as string other are same which they are 
// console.log(4+3+"  23  "+1+2)

// console.log(true)// true
// console.log(+true)// 1
// console.log(true+)// error

//compresions

// console.log(2>1);
// console.log(2<1);
// console.log(2==1);
// console.log(2!=1);

//But for different data type 
// console.log("2">1)// true => Becouse it will convert the 2 into int
// console.log("02">1)// same as above  


// console.log(true<0)
// console.log(true>0)
// console.log(true==0)
// console.log(true>=0)
// console.log(true<=0)

// for null

// console.log(null<0)
// console.log(null>0)
// console.log(null<=0)
// console.log(null>=0)
// console.log(null==0)
// console.log(null!=0)

//for undefined

// console.log(undefined<0)// for  all false 
// console.log(undefined>0)
// console.log(undefined==0)

// ===
// console.log("2"===2) //it stic check not equal  

// Now Data Types
// primetive  these are call by values 
// String , Number , Boolean , null, undefined , Symble (use for make unique), BigInt

const Id=Symbol("123")
const anotherId=Symbol("123")

// console.log(Id===anotherId)  // false =>because the Symble make them unique 

// Reference or Non-primetive
// Arrays , Objects, Functions=> (data type of arrays and object =fucyion ) and function data type (function object)
const herose=["Father ","Mother "]
// object
let obj={
    name: "Saif",
    age: "23",
    Id: "1234"
}

const myFunction=function(num1, num2){
    console.log(num1+num2)
    console.log("hello world")
}
// myFunction(5 ,5)  //  calling a the function 

// console.log(typeof myFunction)

//  +++++++++++++++++++ Stack(primitive) & Heap(Non-Primitive) ++++++++++++++++++
//Stack =>give copy of variable   and  Heap=> give reference of orignal value

// Strings
const name="Saif.looser "
const rapoCount=5
// console.log(name+rapoCount+" This is value")

// Modren way

// console.log(`hello my name is ${name} and my total repo are * ${rapoCount} * this is all from side  `)
 
const address= "Village Barkat Ali Mehar   "
const city = " Mirpurkhas"
let  cnicNumber=67834
// console.log(` My basic information **  ${address.toUpperCase} ** District ** ${city.toUpperCase} ** CNIC NO : ${cnicNumber} that's all`)

const gameName = new String("Programer can chage the future")
// console.log(gameName[0])
// console.log(gameName)
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('g'))

const newString= gameName.substring(1,6)
// console.log(newString)

const anotherString =gameName.slice(-7,2)
// console.log(anotherString)

const newOne= "     saif   mehar     S "
// console.log(newOne)
// console.log(newOne.trim())    // ignor  the spaces
// console.log(newOne.trimStart())

const url="https://saif.ullah.com%20.mehar"
// console.log(url)
// console.log(url.replace('https://', 'www.'))  //replace https:// and place(www.)at that position

// console.log(url.includes('saif'))    // to check that (saif)is aveleble  in this string or not

// console.log(url.split('.'))     //it will convert into array on bases of (.) we can do on any base
// console.log(url.split('a'))     // split into on the  base of (a)


// +++++++++++++++++ Number and Math
const val=40;
// console.log(val)

const vlau=new Number(100);
// console.log(vlau)
// console.log(val.toString().length)
// console.log(val.toFixed(2));    // add two zero after piont 

const value= 123.37768;
// console.log(value.toPrecision(4))    // it will round off the value between given numbers
const hundreds=1782400000;
// console.log(hundreds.toLocaleString());    // it add comas after every thre digit

// +++++++++++++ Math +++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))   // it always convert nagetive to posetive not posetive to nagative
// console.log(Math.round(635.7564))    // round of the values till to point
// console.log(Math.ceil(7.3))    // celing function  up the value  (8)
// console.log(Math.floor(5.8))     // floor function down the value (5)

// console.log(Math.sqrt(5))    // give radical value
// console.log(Math.min(5,2,4,6,8,1,4))
// console.log(Math.max(5,2,4,6,8,1,4))
// console.log(Math.random())     // always give rendom value between (0 , 1)
// console.log((Math.random()*10)+1)       //multiply by (10) for gate value between (0 and 10) and(+1 )for greater then (0))

// console.log(Math.floor(Math.random()*10)+1)   // give whole number not points but floor 
// console.log(Math.ceil(Math.random()*10)+1)   // give whole number not points but ceil 

// For rendom

const min=10;
const max=20;
// console.log(Math.floor(Math.random()*(max-min+1))+min)   //it give rendom value between (10 and 20) but floor 

// ++++++++++++++++++ Date and Time
let myDate= new Date()

// console.log(myDate.toString())
// console.log(myDate.toTimeString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())

// console.log(typeof myDate)

// new date
// let createDate = new Date(2023, 0 , 23)
// console.log(createDate.toString())

// let createDate = new Date(2023, 0 , 23 , 5, 3)
// console.log(createDate.toLocaleString())

// another way
let myCreateDate=new Date("2024- 02-14")
// console.log(myCreateDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)// in mile second
// console.log(Math.floor(Date.now()/1000))   // in seconds 

let newDate=new Date()
// console.log(newDate)
// console.log(newDate.getTime())
// console.log(newDate.getDate())
// console.log(newDate.getDay())
// console.log(newDate.getMonth()+ 1)// add 1 becouse in js month start from 0

// ++++++++++++++++++++++++++ Arrays +++++++++++++++++


const mixValues=[1,2,3,4,true,"saif"]  // array can gate mix data
// console.log(mixValues)
// Shallow copy => shaloow copy of an object is a copy whose properties share the same refrences(point to the same underlying valiables) mean change in orignal array
// Deep copy => do not share the same refrences

// console.log(mixValues)
mixValues.push(15)// add value into array
mixValues.push(115)

console.log(mixValues.push(10))
// console.log(mixValues)

mixValues.pop()// remove last one vlaue from array

mixValues.unshift(12) // it add value at 0 index of array problem is that it shift all values to next index
// console.log(mixValues)

mixValues.shift()// remove value  first from array
// console.log(mixValues)

// console.log(mixValues.includes(13))// check that the value is present in array or not if yes true otherwise false
// console.log(mixValues.indexOf(50))// if not exist then it give (-1)


//      Slice and Splice 

const myNewArr= mixValues.slice(1,4) // print the values between the given indices
// console.log(" A  "+myNewArr)
// console.log(" B  "+mixValues)

const myNewArr2=mixValues.splice(1,4)
// console.log("C"+myNewArr2)

// **       Array part tow    **

const Hero1 = ["Father", "Mother" ,"Brother"]
const Hero2 = ["Friends" , "Teachers", "Relatives"]
// Hero1.push(Hero2)
// console.log(Hero1)

const combine= Hero1.concat(Hero2)
// console.log(combine)

const combine2 = [...Hero1, ...Hero2]// it is sprade operator
// console.log(combine2) 

const anotherArray = [1,2,3,4,[5,6],7,[12,21,13,14,[15,16,17]]]
// console.log(anotherArray)

const realAnotherArray = anotherArray.flat(Infinity)  // it will merige and make one array of all
// console.log(realAnotherArray)

const chackArray = "Mehar"
// console.log(Array.isArray(chackArray))  // it chacks that given value is array or not 

// console.log(Array.from(chackArray))  // it will convert any given value into arrays

let score1 = 100
let score2 = 200
let score3= 300
// console.log(Array.of(score1, score2 , score3 ))  // it  makes all given values into array

// +++++++++++++++++++++++ Objects ++++++++++++++++++

// Singleton => always form constractor

//  object litrals  ***


const jsUser = {

    name: "Saif",
    "fullname" : "Saifullah",
    age : 18,
    laction : "Mps" ,
    email : "saif@gmail.com" ,

}

// console.log(jsUser.fullname)
// console.log(jsUser.age)
// console.log(jsUser["email"]) // another way

jsUser.email = "SaifMehar@gamil.com" // to override
// console.log(jsUser)

// Object.freeze(jsUser)  // now no any value in jsUser will override or update


const mySymbal= Symbol("Mehar")  // use this in object as symble 
const jsUser1={
    // mySymbal : "Mehar" , // it is not a good way
    [mySymbal] : "Mehar"

}
// console.log(typeof mySymbal)

// Function

jsUser.greeting = function(){
    console.log("Hello js user")
}
// console.log(jsUser.greeting()) // calling function 
// console.log(jsUser.greeting) // give function reference 


jsUser.greetingTwo = function(){
    console.log(`Hello js user  : ${this.name}`)  // use to gating needed value from object
}

// console.log(jsUser.greetingTwo())
 




// Singalton Objects

// const tinderUser = new Object()  
// console.log(tinderUser)

const tinderUser ={}
    tinderUser.id = "123",
    tinderUser.name = " Saifullah  ",
    tinderUser.isLogedIn  = false

// console.log(tinderUser)

// console.log(tinderUser) //it just print the 
// console.log(Object.keys(tinderUser)) //it give keys  
// console.log(Object.values(tinderUser)); //it give keys values
// console.log(Object.entries(tinderUser))  // it give every key with its value in array form 
// console.log(tinderUser.hasOwnProperty('name'));  // it chack that (name ) is aveleble or not 


const regularUser = {
    email : "saif@123" , 
    fullname : { 
        userFull : {
            firstName : "Safi" , 
            lastName :  "Mehar"
        }
    }
}

// console.log(regularUser.fullname) // it will all internal values of fullname 

// console.log(regularUser.fullname.userFull.firstName) 

// console.log(regularUser.fullname?.userFull.firstName) // ? to check and work on it. it is use in api

const obj1 = {1:" a " , 2 : " b " }
const obj2 = {3 : " a " , 4 : "b"}
// const  obj3 = {obj1 ,obj2} // it will give object in object 
// console.log(obj3)
const  obj3 = {...obj1 , ...obj2} // it will give 

// console.log(obj3)

// array object 

const users = [
    {
        id : 123,
        name : "Naser" 
    },
    {
        id : 123,
        name : "Naser" 
    },
    {
        id : 123,
        name : "Naser" 
    },
    
]
// console.log(users)


// destracturing in Object *********

const course = {
    courseName : "JS " ,
    price : 2000 , 
    courseTeacher : "Naser"
}

// course.courseTeacher

const {courseTeacher} = course  //{} these are use
// console.log(courseTeacher);

const {courseTeacher : Teacher} = course // now its name is teacher not courseTeacher
// console.log(Teacher);



// API call by JSON 
//JSON is like an object but it no name but we can convert it into object (it is also called js object notation )
 
// {
//     course : "DSA" , 
//     "price" : "free" ,
//     "Teacher" : "Khan"

// }

//  some time API give data in the form of array
// [
//     {},
//     {},
//     {}

// ]





// +++++++++++++++ Functions +++++++++++++++++


// function addition(num1 ,num2){
//     console.log(num1+num2)

// }

// addition(5,5)
//but
// const result = addition(5 ,6)
// console.log(result) // it give result  undefiened becouse function not returns so can not be store in veriable


function addition(num1 ,num2){
    const result= num1+num2
    return result

}

const res = addition(10,11)
//  console.log(res); // now it return so  it can be store in veriable

function login(username) {
    return `${username}  just loged in`

} 
// login("Saif") // it will not print something becouse it returns we not toled it to print 
// console.log(login("Saif"))
 // now it print
// console.log(login()) // it will give undefined 


 function user1(name){
    if (!name){
        console.log("Please enter user name");
        return
    }
    return `${name} just loged in `
 }

//  user1()
function user2(name1 ){   //   ???????????????????
    if (!name1){
        console.log("Please enter user name");
        return
    }
    return `${name1} just loged in `

 }

//  user2("Ali") // it print this and override the value (abc)


function calculateCartPrice(val1,val2 ,...num1){ //  (...) use rest operator it is also spred operator based on use 
    return num1
}
// console.log( calculateCartPrice(60,20, 30, 10, 50)) // these all run in the form of array becouse we use rest (...) operator

// function with object
const user = {
   name: "saif" ,
   Id : 134
}

// function handleObject(anyObject){
//       console.log(`User name is ${anyObject.name} and price is ${anyObject.Id}`);
      
// }

// handleObject(user)

// simple way
function handleObject(anyObject){
    console.log(`User name is ${anyObject.name} and price is ${anyObject.Id}`);
    
}
// handleObject({
//     name : "Naser",
//     Id : 200
// })

// function with array 

const myNewArray = [10,12,23,34,45]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([10,12,21,45,67])); // anothe way 

// 

function usingArray(){
    const arr = [100, 200, 300, 400]
    console.log(arr);
    
}
// usingArray()

// +++++++++++++  scope of veriable  +++++++++++++++
if(true){
    let a=10
    const b=20
    var c=30
}
// console.log(a);  //  rror becouse no return in if condition
// console.log(b); // error becouse no return in if condition
// console.log(c);  // ======== this will run becouse (var) data type used that's why we not use this data type


function One(){
    const userName = "Saif"
    function two(){
        const website = "Google.com" 
        console.log(userName)
    }
    // console.log(website)  // error becouse no scope no return
    two() // print userName
}
// One()


