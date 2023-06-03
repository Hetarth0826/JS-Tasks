const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const currentHour = date.getHours();
const currentMin = date.getMinutes();
const currentSec = date.getSeconds();
const currentZone = date.getTimezoneOffset();

const weekDay = date.getDay();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["Mon", "Tue", "Wed", "Thurs", "Fri", "Sat", "Sun"];

const showDate = () => {
  document.getElementById("date").innerHTML =
    currentDate + "/" + monthNames[currentMonth] + "/" + currentYear;
};

const showTime = () => {
  document.getElementById("time").innerHTML =
    weekDays[weekDay - 1] +
    " " +
    monthNames[currentMonth] +
    " " +
    currentDate +
    " " +
    currentYear +
    " " +
    currentHour +
    ":" +
    currentMin +
    ":" +
    currentSec +
    " GMT" +
    currentZone +
    " (India Standard Time)";
};
