var num = 8;
if(num == 1){
    console.log( num , "is neither a prime nor composite.");
}else if(num < 1){
     console.log(num , "is not a prime number");
}else{
    for(var i = 2; i<num; i++){
        if(num%i === 0){
          console.log(num, "is not a prime number");
          break;
        }else{
            console.log(num, "is prime number");
        }
    }
}