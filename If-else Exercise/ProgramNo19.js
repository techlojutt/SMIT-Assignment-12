var basicSalary = 5361253 ;

if(basicSalary<=10000)
{
    let  totalHRA = basicSalary * 20/100;
    let totalDA = basicSalary * 80/100;
    let grossSalary = totalDA + totalHRA + basicSalary ;
    console.log(grossSalary,"$");

}
else if(basicSalary<=20000)
{
    let  totalHRA = basicSalary * 25/100;
    let totalDA = basicSalary * 90/100;
    let grossSalary = totalDA + totalHRA + basicSalary ;
    console.log(grossSalary,"$");

}
else if(basicSalary>10000)
{
    let  totalHRA = basicSalary * 30/100;
    let totalDA = basicSalary * 95/100;
    let grossSalary = totalDA + totalHRA + basicSalary ;
    console.log(grossSalary,"$");

}