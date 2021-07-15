/*  var arr=[[1,2,3],
            [4,5,6],
            [7,8,9]]

        for(var i=0; i<arr.length; i++){
         console.log(arr[i][i])  

     }   */

/* 
    var arr=[[1,2,3],
            [4,5,6],
            [7,8,9]]

        for(var i=0; i<arr.length; i++){
         console.log(arr[i][arr.length-1-i])
    }  */
 
 /*  var sum=0
var arr=[[1,2,3], [4,5,6], [7,8,9]]
   
 for (var i=0; i<arr.length; i++){
     if(arr[i]%2===0){
    sum+=arr[i];
   
 }
}  
console.log(sum)   */ 

/* var arr=[[1,2,3],
        [4,5,6],
        [7,8,9]];

var mainSum=0;
var c=0;
for(var i=0; i<arr.length; i++){
    mainSum+=arr[i][i]
    c++
}
 console.log(mainSum/c) */

 /*  var arr=[[1,2,3],
        [4,5,6],
        [7,8,9]];

var secondarySum=0;
var c=0;
for(var i=0; i<arr.length; i++){
    secondarySum+=arr[i][arr.length-1-i]
    c++
}
 console.log(secondarySum/c)  */
/* 
var arr=[[1,2,-3],
        [4,-7,8],
        [10,5,6]]; 
    var p=1;
    for(var i=0; i<arr.length; i++){
        if(arr[i][arr.length-1-i]<0){
            p*=arr[i][arr.length-1-i]
        }
    }
console.log(p) */

