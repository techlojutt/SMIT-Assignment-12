let amount = 5457;
if(amount>=5000)
{
 var note5000 = Math.floor(amount/5000);
 amount = amount%5000;
 if(note5000 === 1)
    {
     console.log(note5000,"note of five thousand Rupees"); 
    }
 else
   {
     console.log(note5000,"notes of five thousand Rupees");
   }
}
if(amount>=1000)
{
 var note1000 = Math.floor(amount/1000);
 amount = amount%1000;
 if(note1000 === 1)
    {
        console.log(note1000,"note of thousand Rupees"); 
    }
 else
    {
     console.log(note5000,"notes of thousand Rupees");
    }
}
if(amount>=500)
{
 var note500 = Math.floor(amount/500);
 amount = amount%500;
 if(note500 === 1)
    {
        console.log(note500,"note of five hundred Rupees"); 
    }
 else
    {
     console.log(note500,"notes of five hundred Rupees");
    }
 
}
if(amount>=100)
{
 var note100 = Math.floor(amount/100);
 amount = amount%100;
 if(note100 === 1)
    {
        console.log(note100,"note of hundred Rupees"); 
    }
 else
    {
     console.log(note100,"notes of hundred Rupees");
    }
}
if(amount>=50)
{
 var note50 = Math.floor(amount/50);
 amount = amount%50;
 if(note50 === 1)
    {
        console.log(note50,"note of fifty Rupees"); 
    }
 else
    {
     console.log(note50,"notes of fifty Rupees");
    }
}
if(amount>=20)
{
 var note20 = Math.floor(amount/20);
 amount = amount%20;
 if(note20 === 1)
    {
        console.log(note20,"note of twenty Rupees"); 
    }
 else
    {
     console.log(note20,"notes of twenty Rupees");
    }
}
if(amount>=10)
{
 var note10 = Math.floor(amount/10);
 amount = amount%10;
 if(note10 === 1)
    {
        console.log(note10,"note of ten Rupees"); 
    }
 else
    {
     console.log(note10,"notes of ten Rupees");
    }
}
if(amount>=5)
{
 var coinOf5 = Math.floor(amount/5);
 amount = amount%5;
 if(coinOf5 === 1)
    {
        console.log(coinOf5,"coin of five Rupees")  
    }
 else
    {
        console.log(coinOf5,"coins of five Rupees")  
    }

}
if(amount>=1)
{
 var coinOf1 = Math.floor(amount/1);
 amount = amount%1;
 if(coinOf1 === 1)
    {
        console.log(coinOf1,"coin of one Rupees")  
    }
 else
    {
        console.log(coinOf1,"coins of one Rupees")  
    }

}
                