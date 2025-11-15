const date = new Date("1990-05-05 10:30:00");
let weekDay = date.getDay();
let weekDayString;

switch (weekDay) {
  case 0:
    weekDayString = "Sunday";
    break;
  case 1:
    weekDayString = "Monday";
    break;
  case 2:
    weekDayString = "Tuesday";
    break;
  case 3:
    weekDayString = "Wednesday";
    break;
  case 4:
    weekDayString = "Thursday";
    break;
  case 5:
    weekDayString = "Friday";
    break;
  case 6:
    weekDayString = "Saturday";
    break;
  default:
    weekDayString = "";
    break;
}

console.log(weekDayString);
