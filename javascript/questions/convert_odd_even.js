// convert an even to odd and vice versa

const arr=[3,45,54,6,33,45,34,543,23,244,32,54];
for(let i=0; i< arr.length;i++){
    if(arr[i]%2==0){
        console.log(arr[i]+1);
    }
    else{
        console.log(arr[i]);
    }
}