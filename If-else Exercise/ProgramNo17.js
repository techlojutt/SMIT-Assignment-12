var angleNo1 = 70;
var angleNo2 = 80;
var angleNo3 = 40;

if(angleNo1>0&&angleNo2>0&&angleNo3>0)
{

    if(angleNo1+angleNo2+angleNo3===180)
    {
        console.log("It,s valid Triangle");
    }

    else
    {
        console.log("Invalid Triangle");
    }

}

else 

{
    console.log("Please Enter the angle in positive & clockwise direction");
}