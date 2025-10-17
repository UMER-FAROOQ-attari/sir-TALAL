let arr = [2,4,8,3,5]
for(let i =0 ; i<arr.length;1++){
    for(let j = 0; j<arr.length-1-i;i++){
   if(arr[j]>arr[j+1]){
    let temp = arr[j]
    arr[j] = arr[j +1]
    arr[j+1]=temp
    console.log(arr,i,j)
   }
    }
}