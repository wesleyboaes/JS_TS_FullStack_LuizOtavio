// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// const threeHours = 60 * 60 * 3 * 1000; // 60 seconds * 60 minutes * 3 hours * 1000 milliseconds
// const date = new Date(0 + threeHours); // 01/01/1970 Timestamp Unix ou Unix era
// console.log(date.toString());

//                    number mode
const date = new Date(2021, 3, 28, 12, 30, 15, 500); // Year, month (starts to count with zero), day, hour, minute, second, millisecond

//                    string mode
const date2 = new Date("2021-04-28 12:30:15"); // Year, month (starts to count with zero), day, hour, minute, second, millisecond

console.log(date.toString());
console.log(date2.toString());
console.log("Day", date2.getDate());
console.log("Month", date2.getMonth() + 1); // Month starts from zero
console.log("Year", date2.getFullYear());
console.log("Hour", date2.getHours());
console.log("Minute", date2.getMinutes());
console.log("Second", date2.getSeconds());
console.log("Millisecond", date2.getMilliseconds());
console.log("Week Day", date2.getDay()); // 0 is Sunday and 6 is Saturday

function leftZero(num) {
  return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {
  const day = leftZero(date.getDate());
  const month = leftZero(date.getMonth() + 1);
  const year = leftZero(date.getFullYear());
  const hour = leftZero(date.getHours());
  const min = leftZero(date.getMinutes());
  const sec = leftZero(date.getSeconds());

  return `${day}/${month}/${year} ${hour}:${min}:${sec}`;
}

const date3 = new Date();
const BrDate = formatDate(date3);
console.log(BrDate);
