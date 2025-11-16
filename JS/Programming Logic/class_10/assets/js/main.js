const h1 = document.querySelector(".container h1");
const date = new Date();

// Hard way
// function getWeekDayString(weekDay) {
//   let weekDayString;

//   switch (weekDay) {
//     case 0:
//       weekDayString = "Sunday";
//       return weekDayString;
//     case 1:
//       weekDayString = "Monday";
//       return weekDayString;
//     case 2:
//       weekDayString = "Tuesday";
//       return weekDayString;
//     case 3:
//       weekDayString = "Wednesday";
//       return weekDayString;
//     case 4:
//       weekDayString = "Thursday";
//       return weekDayString;
//     case 5:
//       weekDayString = "Friday";
//       return weekDayString;
//     case 6:
//       weekDayString = "Saturday";
//       return weekDayString;
//     default:
//       weekDayString = "";
//       return weekDayString;
//   }
// }

// function getMonthString(month) {
//   let monthString;

//   switch (month) {
//     case 0:
//       monthString = "January";
//       return monthString;

//     case 1:
//       monthString = "February";
//       return monthString;
//     case 2:
//       monthString = "March";
//       return monthString;
//     case 3:
//       monthString = "April";
//       return monthString;
//     case 4:
//       monthString = "May";
//       return monthString;
//     case 5:
//       monthString = "June";
//       return monthString;
//     case 6:
//       monthString = "July";
//       return monthString;
//     case 7:
//       monthString = "August";
//       return monthString;
//     case 8:
//       monthString = "September";
//       return monthString;
//     case 9:
//       monthString = "October";
//       return monthString;
//     case 10:
//       monthString = "November";
//       return monthString;
//     case 11:
//       monthString = "December";
//       return monthString;
//   }
// }

// function leftZero(minute) {
//   return minute >= 10 ? minute : `0${minute}`;
// }

// h1.innerHTML = `${getWeekDayString(date.getDay())} -
// ${getMonthString(date.getMonth())}
// ${date.getDate()},
// ${date.getFullYear()} -
// ${date.getHours()}:${leftZero(date.getMinutes())}`;

// Now, the easy way

const options = {
  dateStyle: "full",
  timeStyle: "short",
};

h1.innerHTML = date.toLocaleString("pt-BR", options);
