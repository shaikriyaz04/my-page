/*Check if The season is Autumn, Winter, Spring or Summer. If The user input is :
- September, October or November, The season is Autumn.
- December, January or February, The season is Winter.
- March, April or May, The season is Spring
- June, July or August, The season is Summer*/

//Solution
let month = prompt ("Enter The month number");

switch (month){
    case 11:
    case 0:
    case 1:
       alert("The season is Winter");
    break;
    case 2:
    case 3:
    case 4:
       alert("The season is Spring");
    break;
    case 5:
    case 6:
    case 7:
       alert("The season is Summmer");
    break;
    default:
       alert("The season is Autumn");
}