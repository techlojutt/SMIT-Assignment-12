var n = prompt("Enter the value of n");
var i = 1 ; 
sum = 0 ;
while(i<=n){
    if(i % 2 == 0)
    {
      sum = sum + i ;
    }

    i++ ;
}
console.log(sum)