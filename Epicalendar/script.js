const now = new Date();
const currentDay = now.getDate();
console.log(currentDay);
const currentYear = now.getFullYear();
const currentMonth = now.getMonth();
const lastDayDate = new Date(currentYear, currentMonth + 1, 0);
const lastDayofTheMouth = lastDayDate.getDate();
console.log(lastDayDate);
const arrayOfDays = [];

const calendarTitle = document.getElementsByClassName("calendar-title")[0];

for (let i = 0; i < lastDayofTheMouth; i++) {
  arrayOfDays.push(i + 1);
}

const arrayOfMouths = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
];
console.log(currentMonth);
for (let i = 0; i < arrayOfMouths.length; i++) {
  if (i === currentMonth) {
    calendarTitle.innerHTML = arrayOfMouths[i];
  }
}

console.log(arrayOfDays);
const daysDiv = document.getElementsByClassName("calendar-days")[0];
for (let i = 0; i < arrayOfDays.length; i++) {
  const day = document.createElement("div");
  day.className = "day";
  day.innerHTML = i + 1;

  if (i + 1 === currentDay) {
    day.classList.add("selected");
  }

  daysDiv.appendChild(day);
}

const appointments = [];

daysDiv.addEventListener("click", (e) => {
  let appointmentFound = false;
  const selectedCell = e.target.closest(".day");
  const allDayCells = document.getElementsByClassName("day");
  const currentCellValue = parseInt(selectedCell.innerHTML);
  const currentDayHtml = document.getElementById("current-day");
  console.log(selectedCell);
  for (let i = 0; i < allDayCells.length; i++) {
    if (allDayCells[i].classList.contains("selected")) {
      allDayCells[i].classList.remove("selected");
    }
    selectedCell.classList.add("selected");
  }
  currentDayHtml.innerHTML = currentCellValue;

  const noteSec = document.getElementsByClassName("note-sec")[0];
  noteSec.innerHTML = "";

  for (let i = 0; i < appointments.length; i++) {
    console.log("e");
    if (appointments[i].day === currentCellValue) {
      console.log("e");
      const noteTitle = document.createElement("div");
      noteTitle.classList.add("note-title");
      noteTitle.innerHTML = `Titolo: ${appointments[i].name} 📅`;
      noteSec.appendChild(noteTitle);

      const noteTime = document.createElement("div");
      noteTime.classList.add("note-time");
      noteTime.innerHTML = `Ora: ${appointments[i].time} 🕙`;
      console.log("e");
      noteSec.appendChild(noteTime);
    }
  }
  console.log(appointments);
});

const submitBtn = document.getElementById("add");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const time = document.getElementById("meeting-time").value;
  const name = document.getElementById("meeting-name").value;
  const selectedDayvalue = parseInt(
    document.getElementsByClassName("selected")[0].innerHTML
  );
  if (time !== "" || name !== "") {
    const appoint = {
      name: name,
      time: time,
      day: selectedDayvalue,
    };
    appointments.push(appoint);
  }
  document.forms[0].reset();
  console.log(appointments);
});
