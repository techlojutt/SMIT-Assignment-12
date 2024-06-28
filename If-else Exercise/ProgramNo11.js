var physics = prompt("Enter the physics marks");
var chemistry = prompt("Enter the chemistry marks") ;
var english = prompt("Enter the english");
var mathematics =prompt("Enter the mathematics marks");
var urdu = prompt("Enter the urdu marks");
var islamiyat = prompt("Enter the islamiyat marks");
var totalMarks = prompt("Enter total marks") ;
var percentage = (physics+chemistry+biology+mathematics+computer)*100/totalMarks;
console.log(percentage,"%");
if (percentage>=90) {
    console.log("Grade A");
}
else if (percentage>=80){
    console.log("Grade B");
}
else if (percentage>=70){
    console.log("Grade C");
}
else if (percentage>=60){
    console.log("Grade D");
}
else if (percentage>=40){
    console.log("Grade E");
}
else if (percentage<40){
    console.log("Grade F");
}
