

//Write a program which tells the number of days in a month

let month = prompt ("Enter the month number");

switch (month){
    case 3:
    case 5:
    case 1:
    case 7:
    case 10:
    case 12:
       alert("This month has 31 days");
    break;
    case 4:
    case 6:
      case 9:
         case 11:
       alert("This month has 30 days");
    break;

    case 2:
       alert("This month has 28 days ,leap has 29days ");
    break;
    default:
       alert("The season is Autumn");
}