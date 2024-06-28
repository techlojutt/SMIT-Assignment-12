var monthNum = prompt("Enter month number");
switch(monthNum){
    case '1' :
        console.log("31 days");
        break;
    case '2':
      var year =  prompt("Enter year");
        if(year%4==0&&year%100!=0||year%400==0){
            console.log("29 days");
            break;
        }
        else{
            console.log("28 days");
            break;
        }
    case '3':
        console.log(" 31 days ");
        break;
    
    case '4':
        console.log("30 days");
        break;
    
    case '5':
        console.log("31 days");
        break;
    case '6':
      console.log("30 days");
      break;
    case '7':
        console.log("31 days");
        break;
    case '8':
        console.log("31 days");
        break;
    case '9':
     console.log("30 days");
     break;
     case '10':
        console.log("31 days");
         break;
    case '11' : 
    console.log("30 days");
    break;
    case '12' :
        console.log(" 31 days ");
        break;
    default:
        console.log("Month Number can be 1 to 12");
        break;

   }   
