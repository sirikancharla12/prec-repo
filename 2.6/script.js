//map,filter,arrow fns

// function sum(a,b){
//     return a+b;
// }


// const sum=(a,b)=>{
//     return a+b;
// }
// const ans =sum(1,2);
// console.log(ans);

//[1,2,3,4,5]
//[2,4,6,8,10]

//ass: create a map function that it takes two inputs , an arr n trans fun and transforms the arr into new one using trans fun

//without map

// const input=[1,2,3,4,5];
// // const newarr=[];
// // for(let i=0;i<input.length;i++){
// //     newarr.push(input[i]*2);
// // }
// // console.log(newarr);

// //map:transformation function
// function transform(i){
//     return i*2;
// }

// const ans =input.map(transform);
// console.log(ans);

// map(arr,transform); throws error coz map exists as a fun on the array cls

//filtering

//given an inp arr n u r asked to get the even values out of it
const arr=[1,2,3,4,5];
function filterlogic(n){
    if(n%2==0){
        return true ;
    }else{
        return false;
    }
}
const ans=arr.filter(filterlogic);
console.log(ans)

//create a map fn that takes an arr and a transform fn as ip an returns the transformed arr ad op