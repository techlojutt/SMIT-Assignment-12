var a = 10;
var b = 10;
var c = 10;
var discriminant = (b*b) - (4*a*c);
if (discriminant<0)
{
var discriminantSqrt = Math.sqrt(-discriminant);
var realPart = -b/2*a;
var imaginaryPart = discriminantSqrt/2*a;
var x1 = realPart.toFixed(1) + " + " + imaginaryPart.toFixed(1) + "i";
var x2 = realPart.toFixed(1) + " - " + imaginaryPart.toFixed(1) + "i";
console.log("x1 = ",x1);
console.log("x2 = ",x2);
} 
else
{
var discriminantsqrt = Math.sqrt(discriminant);
var x1 = ( (-1*b) +  (discriminantsqrt) )/(2*a);
var x2 = ( (-1*b) -  (discriminantsqrt) )/(2*a);
console.log("x1 = ",x1);
console.log("x2 = ",x2); 
}

