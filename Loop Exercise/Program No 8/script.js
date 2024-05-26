var n = prompt("Enter the value of n") ;
var i = 1 ;
var sum = 0 ;
while (i<=n) {
    if ( i % 2 != 0) {
        sum = sum + i ;
        console.log(sum)
    }
    i++;
}
console.log(sum);