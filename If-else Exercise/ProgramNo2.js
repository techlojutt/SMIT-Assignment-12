var num1 = prompt("Enter the value of num1");
var num2 = prompt("Enter the value of num 2");
var num3 = prompt("Enter the value of num3");
if (num1>num2&&num1>num3) 
{
    console.log(num1,"is maximum");   
}
 else if(num2>num1&&num2>num3)
{
    console.log(num2,"is maximum");
}
else
{
    console.log(num3,"is maximum")
}