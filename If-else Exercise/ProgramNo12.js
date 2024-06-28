var lengthNo1 = 4;
var lengthNo2 = 5;
var lengthNo3 = 3;
if (lengthNo1+lengthNo2>lengthNo3&&lengthNo2+lengthNo3>lengthNo1&&lengthNo1+lengthNo3>lengthNo2)
    {
        console.log("Triangle is valid");
    if(lengthNo1==lengthNo2==lengthNo3){
    console.log("Equilateral Triangle");
    }
    else if (lengthNo1==lengthNo2||lengthNo2==lengthNo3||lengthNo1==lengthNo3)
    {
        console.log("Isosceles Triangle");
    }
    else 
    {
        console.log("Scalane Triangle");
    }
    }
    else{
        console.log("Triangle is not valid");
    }
