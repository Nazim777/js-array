const array = [1,2,3,4,5]
for (let i = 0; i<array.length; i++){
//console.log(array[i]) 
// const value = array[i]+5
// console.log(value)  


}
let sum = 0 ;
for(let i = 0; i<array.length; i++){
    //sum = sum + array[i]
    sum+=array[i]
}
//console.log(sum)

const array2 = [1,2,3,4,5,6,7,8]
let sum2 = 0 ;
for(let i = 0 ; i<array2.length; i++){
   // sum2 = sum2+ array2[i]
   sum2+=array2[i]
}
//console.log(sum2)

// find leargest number from the array
const array3 = [8,4,53,20,6,30,60,80]
let leargestnumbr = array3[0]
for(let i = 0; i<array3.length; i++){
    if(array3[i]>leargestnumbr){
        leargestnumbr = array3[i]
    }
}
//console.log(leargestnumbr)
// find smallest number from the array 
let smallestnumber = array3[0]
for(let i= 0 ; i<array3.length; i++){
    if(array3[i]<smallestnumber){
        smallestnumber = array3[i]
    }
}
//console.log(smallestnumber)



//update array
const arr = new Array(10) 
arr.fill(2)
//console.log(arr)



const response = new Array(8)
response.fill(false)
//console.log(response)
for(let i =0; i<response.length; i++){
    const rand = Math.floor(Math.random()*10+1)
    response[i] = rand<6?'hi':'hello'
}
//console.log(response)

let names = [
    'rahim','karim','habib'
]
const updatenames = (usernames) =>{
    for(let i = 0; i<usernames.length; i++){
        usernames[i] = `${i+1}.${usernames[i]}`
    }
    return usernames

}
const updatedNames = updatenames(names)
// console.log(updatedNames)
// console.log(names)
const usernames = [
    'habib','rahim','adib'
]
const nameUpdate = (username)=>{

    for(let i =0; i<username.length;i++){
        username[i]= `${i+1}.${username[i]}`

    }
    return username
}
const nameUpdated = nameUpdate(usernames)
//console.log(nameUpdated)

// array 
const newArray = [
    [0,0],
    [1,2],
    [2,4],
    [6,8]
]

// one dimesional traverse
for(let i =0; i<newArray.length; i++){
    const x = newArray[i][0] 
    const y = newArray[i][1]
   // console.log(`x=${x},y=${y}`)

}
// two dimensional traverse 
const newArray2 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
for(let i =0;i<newArray2.length;i++){
    for(let j= 0;j<newArray2[i].length;j++){
      //  console.log(newArray2[i][j])
    }
    
}


for(let i = 0;i<newArray.length;i++){
    for(let j= 0;j<newArray[i].length;j++){
       // console.log(newArray[i][j])
    }
}



// add new element on array 


const number1 = [1,2,3]
//number1.push(4,5,6)
//console.log(number1)
const number2 = [7,8,9]
//number1.push(number2)
number1.push(...number2)
//console.log(number1)
const employe =[
    {
        name:'Rahim',
        email:'rahim@gmail.com'
    }

] 
const employe1 =[
    {
        name:'karim',
        email:'karim@gmail.com'
    }

]
//employe.push(employe1)
employe.push(...employe1)
//console.log(employe)

// array unshift method
const arrU1 = [
    1,2,3
]
arrU1.unshift(4)
//console.log(arrU1)
const arrU2 = [
    5,6,7
]
arrU1.unshift(...arrU2)
//console.log(arrU1)



// array splice method 
const arrS1 = [
    1,2,3,4,8,9
]
arrS1.splice(4,0,5)
//console.log(arrS)
const arrS2 = [6,7] 

arrS1.splice(5,0,...arrS2)
//console.log(arrS1)


// update array 
const updateArray = [
    {
        id:1,
        name:'rahim'
    },
    {
        id:2,
        name:'karim'
    },
    {
        id:3,
        name:'habib',
    },
    {
        id:4,
        name:'eyasir'
    }
]
const updatedId = 1
const updatedUserNames = 'Rahim Uddin'
// const result = updateArray.find((item)=>item.id==updatedId)
// result.name= updatedUserNames
// console.log(updateArray)
for(let i = 0; i<updateArray.length; i++){
    if(updateArray[i].id==updatedId){
        updateArray[i].name= updatedUserNames
        
    }

}
//console.log(updateArray)


// delete element from array 
const arrD = [
    1,2,3,4,5,6
]
//arrD.shift()
//console.log(arrD)
//arrD.splice(3,2)
//console.log(arrD)
const deleteD = 3
for(let i =0; i<arrD.length; i++){
    if(arrD[i]==deleteD){
        arrD.splice(i,1)
    }
} 


for(let i = 0; i<arrD.length; i++){
    if(arrD[i]==2){
        arrD.splice(i,1)
    }
}
//console.log(arrD)

let arrD2 = [
    1,2,3,4,5,6
]
const deleteD2 = 6
arrD2 = arrD2.filter((item)=>item!==deleteD2)
//console.log(arrD2)


// add multiple array 
const arr1 = [
    1,2,3
]
const arr2 = [
    4,5,6
]
//console.log(arr1.concat(arr2))
const arr3 = [...arr1,...arr2]
//console.log(arr3)

// js class 
class person{
    constructor(name,age){
        this.name= name;
        this.age = age

    }
    play(){
       // console.log(`${this.name} is playing`)
    }
}
const person1 = new person('Shakib',35)
person1.play()

const mex_length = 20
class country {
    constructor(name,age){
        this.name= name;
        this.age = age
        this.array = new Array(mex_length)
    }
    famous (){
       // console.log(`${this.name} is famous for cricket`)

    }
    notFamous(){
       // console.log(`${this.name} is not famous for Cricket`)
        this.array.push('hello')
    // console.log(this.array)
    }

}
const country1 = new country('Bangladesh',50)
country1.famous()
const country2 = new country('England',100)
country2.notFamous()


class stack {
    constructor(){
        this.list = new Array(mex_length)
        this.top= -1
    }
    push(item){
        if(this.top>= mex_length){
            console.log('stack overflow')
            return false
        }
        else{
            this.list[++this.top] = item
           // console.log(this.list)
        }

    }
    pop(){
        if(this.isEmpty()){
            return false
        }else{
            const item = this.list[this.top]
            delete this.list[this.top]
            return this.top--
        }
    }
    isEmpty(){
        if(this.top<0){
            console.log('stack underflow')
            return false
        }
    }
}
const Stack = new stack
const text = 'hello'
for(let i = 0; i<text.length; i++){
    Stack.push(i)
}
Stack.pop()

const team = [
   'Bangladesh','England','South Africa'
]
team.forEach((item,index)=>{
   // console.log(`${index+1}.${item}`)
})

// js map method
const length = team.map((item)=>item.length)
const capitalLetter = team.map((item)=>item.toUpperCase())
const smallLetter= team.map((item)=>item.toLowerCase())
// console.log(length)
// console.log(capitalLetter)
// console.log(smallLetter)


const studentArray = [
    {id:1,name:'Rahim',gpa:3.46,email:'rahim@gmail.com'},
    {id:2,name:'Karim',gpa:3.30,email:'karim@gmail.com'},
    {id:3,name:'Habib',gpa:3.20,email:'habib@gmail.com'},
    {id:4,name:'Asmaul',gpa:2.60,email:'asmaul@gmail.com'},
]

const studentResult = studentArray.map((item)=>{
   return {
    ...item,
    title: `${item.name} your result has been published`,
    msg: `${item.name} your result has been published , you got ${item.gpa}, ${item.gpa>3?'passed':'failed'}`
   }
})

//console.log(studentResult)
const studentArray1 = [
    {
    id: 1,
    name:'Akash',
    email:'alamin@gmail.com',
    gpa: 3.40,
    due:true,
    dueAmount: 4000

    }
    ,
    {id:2,
    name:'Rahim',
    gpa:3.46,
    email:'rahim@gmail.com',
    due: false,
    dueAmount: 0

},
    {id:3,
    name:'Karim',
    gpa:3.30,
    email:'karim@gmail.com',
    due: false,
    dueAmount: 0


},
    {id:4,
    name:'Habib',
    gpa:2.20,
    email:'habib@gmail.com',
    due: true,
    dueAmount: 5000


},
    {id:5,
    name:'Asmaul',
    gpa:2.60,
    email:'asmaul@gmail.com',
    due: true,
    dueAmount: 3000
    
},
]


const lowGpa = studentArray1.filter((item)=>{
   return item.gpa<3
       
    
})
//console.log(lowGpa)
const lowGpaMsg = lowGpa.map((item)=>{
        return{
            ...item,
            msg:`${item.name} your result has been published, you have failed, try next time `
        }
    })
//console.log(lowGpaMsg)
const dueStudent = studentArray1.filter((item)=>{
    return item.due
})
//console.log(dueStudent)
const dueMsg = dueStudent.map((item)=>{
    return{
        ...item,
        title: ` dear ${item.name}, msg from institute`,
        msg:` dear ${item.name}, please pay your due amount (${item.dueAmount})`
    }
})
//console.log(dueMsg)
const dueMsg2 = studentArray1.filter((item)=>item.gpa<3).map((item)=>{
    return{
        ...item,
        title: ` dear ${item.name}, msg from institute`,
        msg:` dear ${item.name}, please pay your due amount (${item.dueAmount})`

    }
})
//console.log(dueMsg2)
const customer = [
    {name:'shakib',response:'positive',rating:4},
    {name:'tamim',response:'positive',rating:5},
    {name:'musfik',response:'positive',rating:5},
    {name:'mahmudullah',response:'positive',rating:4},
]
const review = customer.every((item)=>item.rating>3)
if(review){
    //console.log('100% positive review')
}else{
    //console.log('not 100% positive review')
}
const customer2 = [
    {name:'shakib',response:'positive',rating:4},
    {name:'tamim',response:'positive',rating:5},
    {name:'musfik',response:'positive',rating:5},
    {name:'mahmudullah',response:'positive',rating:4},
]
const review2 =customer2.some((item)=>item.rating>3)
if(review2){
   // console.log('nice response')
}else{
   // console.log('response should be improved')
}

const number= [1,2,3,4,5]
const sum1 = number.reduce((accumulator,currentvalue)=>{
    const sum = accumulator + currentvalue
    return sum
   
   
})
//console.log(sum1)
const avg = number.reduce((a,c,index,arr)=>{
     a=a+c 
    if(index==arr.length-1){
     return  d= a/arr.length
    }
    return a
   
})
//console.log(avg)
const nesteArray = [
    1,2,[3,4],[5],6
]
const flatArray = nesteArray.flat()
//console.log(flatArray)
const flatArray2 = nesteArray.reduce((a,c)=>{
   return a.concat(c)
},[])
//console.log(flatArray2)
const array1 = [1,2,3,4,5]
//const flatArray1 = array1.map((item)=>[item*2])
// ans 
//[ [ 2 ], [ 4 ], [ 6 ], [ 8 ], [ 10 ] ]
const flatArray1 = array1.map((item)=>[item*2]).flat()
// ans 
//[ 2, 4, 6, 8, 10 ]
//console.log(flatArray1)
const flatMap = array1.flatMap((item)=>[item*2])
//console.log(flatMap)

const language = [
    'java',
    'python',
    'java',
    'python',
    'javascript',
    'java',
    'javascript'
]
// const hello = language.reduce((accumulator,currentvalue)=>{
//    if(accumulator[currentvalue]){
//     accumulator[currentvalue]++
//    }else{
//     accumulator[currentvalue]= 1
//    }
//    return accumulator

// },{})
//console.log(hello)
const hello = language.reduce((accumulator,currentvalue)=>{
    if(accumulator[currentvalue]){
        accumulator[currentvalue]++
    }else{
        accumulator[currentvalue] = 1
    }
    return accumulator
},{})
//console.log(hello)
const nums = [1,2,3,4,5]
const result = nums.reduce((accumulator,currentvalue)=>{
   // console.log(`accumulator[${accumulator}] - currentValue[${currentvalue}]`)
   return accumulator+currentvalue
})
//console.log(result)


// product invoice generate
const products = [
    {name:'mango',price:200},
    {name:'mango',price:200},
    {name:'mango',price:200},
    {name:'banana',price:100},
    {name:'banana',price:100},
    {name:'apple',price:150},
    {name:'grape',price:400},
    {name:'grape',price:400}
]

// const invoice = products.reduce((accumulator,currentvalue)=>{
//    // console.log(`accumulator[${accumulator}]- currentvalue[${currentvalue.name},${currentvalue.price}]`)
//     if(accumulator[currentvalue.name]){
//         accumulator[currentvalue.name].quantity++
//         accumulator[currentvalue.name].price += currentvalue.price

//     }else{
//         accumulator[currentvalue.name]={
//             price: currentvalue.price,
//             quantity: 1

//         }
//     }
//     return accumulator
// },{})
// console.log(invoice)
const invoice = products.reduce((accumulator,currentvalue)=>{
    if(accumulator[currentvalue.name]){
        accumulator[currentvalue.name].quantity++
      accumulator[currentvalue.name].price += currentvalue.price

    }else{
        accumulator[currentvalue.name]={
            price: currentvalue.price,
            quantity: 1
        }
    }
   return accumulator
},{})
//console.log(invoice)


// map and filter using reduce
const nums1 = [1,2,3,4,5]
const squares = nums1.reduce((accumulator,currentvalue)=>{
    accumulator.push(currentvalue*currentvalue)
    return accumulator
},[])
//console.log(squares)
const odds = nums1.reduce((accumulator,currentvalue)=>{
   if(currentvalue % 2 == 1){
    accumulator.push(currentvalue)
   }
   return accumulator
},[])
//console.log(odds)


const bigArray = []
for(let i= 0; i<5000000; i++){
    bigArray.push(i)
}
//console.time('both')
 bigArray.filter((item)=>item %2==0).map((item)=>item*2) 
//console.timeEnd('both')

//console.time('reduce')
bigArray.reduce((accumulator,currentvalue)=>{
    if(currentvalue%2==0){
        accumulator.push(currentvalue*2)
    }
    return accumulator
},[])
//console.timeEnd('reduce')

// grouping similar elements
const word = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six'
]

const group = word.reduce((accumulator,currentvalue)=>{
    const wordlength = currentvalue.length
   //console.log(` accumulator-[${accumulator}] , currentvalue -[${currentvalue}] , wordlength-[${wordlength}]`)
   if(accumulator[wordlength]){
    accumulator[wordlength].push(currentvalue)
   }else{
    accumulator[wordlength] = [currentvalue]
   }
   return accumulator
    
},{})
//console.log(group)


// combining data from different resources 
const product1 = [
    {
        id: 1,
        name:'apple',
        price:300
    },
    {
        id: 2,
        name:'banana',
        price:200
    },
    {
        id: 3,
        name:'pine apple',
        price:100
    },
    {
        id: 4,
        name:'jack fruit',
        price:400
    },
    {
        id: 5,
        name:'grape',
        price:450
    },
    {
        id: 6,
        name:'potato',
        price:150
    },
]

const discountPrice = {
    1:200,
    //2:150,
    3:50,
   // 4:300,
    5:400,
    6:100
}

// const updatedProduct = product1.reduce((accumulator,currentvalue)=>{
//     if(discountPrice[currentvalue.id]){
//         currentvalue.discountPrice= discountPrice[currentvalue.id]

//     }else{
//         currentvalue.discountPrice = 0
//     }
//     accumulator.push(currentvalue)
//     return accumulator
// },[])
// console.log(updatedProduct)
const updatedProduct = product1.reduce((accumulator,currentvalue)=>{
    if(discountPrice[currentvalue.id]){
        currentvalue.discountPrice = discountPrice[currentvalue.id] 
    }else{
        currentvalue.discountPrice= 0
    }
    accumulator.push(currentvalue)
    return accumulator
},[])
//console.log(updatedProduct)
