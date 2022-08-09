// js array third portion 
// join method
const array = ['banana','apple','grape','jack fruit','apple']
// console.log(array.join(' '))
// console.log(array.join(''))
// console.log(array.join(', '))
// console.log(array.join(' + '))

// include ,indexof, lastIndexOf method
// console.log(array.includes('apple'))
// console.log(array.indexOf('apple'))
// console.log(array.lastIndexOf('apple'))


const arr =['a','b','c']
const key = arr.keys()
// console.log(key)
// console.log(key.next())
// console.log(key.next())
// console.log(key.next())
 const values = arr.values()
// console.log(values)
// console.log(values.next())
// console.log(values.next())
// console.log(values.next())
const entries = arr.entries()
// console.log(entries)
// console.log(entries.next())
// console.log(entries.next())
// console.log(entries.next())

const arr1 = [1,2,3]
const hello = {}
// console.log(typeof(arr1)) 
// console.log(typeof(hello))

// how to know array or object
// if true array , if false object
// console.log(Array.isArray(arr1)) 
// console.log(Array.isArray(hello)) 


// copy array elements 
const arr3 =[1,2,3,4,5,6]
const arr4 = [...arr3]
arr4.push(7)
//console.log(arr,arr4)
const points = [
    [10,12],
    [20,30],
    [40,50],
    [60,70]
]
const arr5 =[...points]
// arr5[0][0] = 100,
// arr5[0][1] = 120
//console.log(points,arr5)
// deep copy vs shallow copy 
// shallow copy 
const arr6 = points.map(item=>item)
//console.log(arr6)
const arr7 = points.filter(item=>item)
//console.log(arr7)
const arr8 = points.slice()
//console.log(arr8)
const arr9 = points.concat()
//console.log(arr9)
const arr10 = Array.from(points)
//console.log(arr10)


// deep copy 
const arr11 = JSON.parse(JSON.stringify(points))
// arr11[0][0] = 100
// arr11[0][1] = 120
// console.log(points,arr11)

// compare two arrays 
const array1 = [1,2,3,4] 
const array2 = [1,2,3,4]
// if(JSON.stringify(array1)==JSON.stringify(array2)){
//     console.log(true)
// }else{
//    console.log(false)
// }
const compareTwoArrays = (arr1,arr2)=>{
    if(arr1.length !==arr2.length){
        return false
    }
    for(let i =0; i<arr1.length; i++){
        if(arr1[i] !== arr2[i]) {
            return false  
        }
    }
    return true
}
console.log(compareTwoArrays(array1,array2))