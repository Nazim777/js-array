// js array second portion
// bubble sort method 
const array = [8,7,2,4,5,6,14,12,1]
//ascending 
// const bubbleSort = (array)=>{
//     for(let i = 0; i<array.length ; i++){
//         for(let j= 0; j<array.length; j++){
//             if(array[j]>array[j+1]){
//                 let tem= array[j]
//                 array[j] = array[j+1]
//                 array[j+1] = tem
//             }
//         }
//     }

// }
//bubbleSort(array) 
//console.log(array)
// array sort method

// ascending sort 
array.sort((a,b)=>{
    return a-b
})
//console.log(array)

// discending sort 
array.sort((a,b)=>{
    return b-a 
})
//console.log(array)

const strings = ['ball','doll','apple','Apple','cat']
strings.sort((a,b)=>{
    if(a>b) return 1 
    if(b>a) return -1 
    return 0 
})
//console.log(strings)

const product = [
    {
        id: 2,
        name:'apple',
        price:300
    },
    {
        id: 1,
        name:'banana',
        price:200
    },
    {
        id: 6,
        name:'pine apple',
        price:100
    },
    {
        id: 5,
        name:'jack fruit',
        price:400
    },
    {
        id: 4,
        name:'grape',
        price:450
    },
    {
        id: 3,
        name:'potato',
        price:150
    },
]

// sort by id 
product.sort((a,b)=>{
  if(a.id>b.id) return 1 
  if(b.id>a.id) return -1 
  return 0 

})
//console.log(product)
// sort by name 
product.sort((a,b)=>{
    if(a.name>b.name) return 1 
    if(b.name>a.name) return -1 
    return 0 
})
//console.log(product)
// sort by price 
product.sort((a,b)=>{
    if(a.price>b.price) return 1 
    if(b.price>a.price) return -1 
    return 0 
})
//console.log(product)

// linear search method
const array1 =  [8,7,2,4,5,6,14,12,1]
const linearSearch = (array,key) =>{
    
    for(let i=0; i<array.length; i++){
        if(array[i]==key){
            return i
        }
    }
    return -1
}
const s1 = linearSearch(array1,6)
//console.log(s1)


const product1 = [
    {
        id: 2,
        name:'apple',
        price:300
    },
    {
        id: 1,
        name:'banana',
        price:200
    },
    {
        id: 6,
        name:'pine apple',
        price:100
    },
    {
        id: 5,
        name:'jack fruit',
        price:400
    },
    {
        id: 4,
        name:'grape',
        price:450
    },
    {
        id: 3,
        name:'potato',
        price:150
    },
]

const linearSearchCB=(array,cb)=>{
    for(let i= 0; i<array.length; i++){
        if(cb(array[i])){
            return i
        }
    }
    return -1
}
const s2 = linearSearchCB(product1,((item)=>item.id==2))
//console.log(s2)
const s3 = linearSearchCB(product1,((item)=>item.name==='banana'))
//console.log(s3)


// binary search 
const arr = [8,7,2,4,5,6,14,12,1]
arr.sort((a,b)=>{
    return a-b
})
//console.log(arr)

const binarySearch =(array,key)=>{
   
  let lowest = 0;
   let highest = array.length-1
   while(lowest<=highest){
    let mid = Math.floor((highest+lowest)/2)
    if(array[mid]==key) return mid
    if(array[mid]<key)  lowest = mid+1
    if(array[mid]>key) highest = mid -1 
   }
   return -1

}

const hello= binarySearch(arr,4)
//console.log(hello)


// findIndex method 
const index1 = arr.findIndex((item)=>{
    return item ==2
})
//console.log(index1)
const index2 = product1.findIndex((item)=>item.id==4)
console.log(index2)
// find method 
const findProduct = product1.find((item)=>item.id==4)
//console.log(findProduct)