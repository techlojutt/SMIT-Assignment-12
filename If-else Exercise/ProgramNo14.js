var totalNumberOfElectricUnits = 400;
if(totalNumberOfElectricUnits <= 50)
{
    console.log("Total Bill = ", 0.5*totalNumberOfElectricUnits,"Rupees");
}
else if (totalNumberOfElectricUnits <=150 && totalNumberOfElectricUnits > 50) {
    console.log("Total Bill = ", 0.75*totalNumberOfElectricUnits,"Rupees");
}
else if(totalNumberOfElectricUnits<=250&&totalNumberOfElectricUnits>150)
{
    console.log("Total Bill = ", 1.20*totalNumberOfElectricUnits,"Rupees");
}
else if (totalNumberOfElectricUnits > 250)
{
    console.log("Total Bill = ", 1.50*totalNumberOfElectricUnits,"Rupees");
}
