var numberOfUnitsSold =5000;
var sellingPricePerUnit =1000;
var fixedCost = 200000;
var variableCostPerUnit = 700;

var revenue = numberOfUnitsSold * sellingPricePerUnit ;
var variableCost = variableCostPerUnit * numberOfUnitsSold ;
var totalCost = fixedCost + variableCost ; 
var profit = revenue - totalCost ;
if (profit > 0)
{
    console.log("Profit = ",profit);
}
else
{
    console.log("Loss = " ,profit );
}
