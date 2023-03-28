function showSelectedCityDate(event) {
  if (event.target.value.length > 0) {
    let currentDate = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY H:mA");
    alert(`It is ${currentDate} in ${event.target.value}`);
  }
}

let citySelect = document.querySelector("#cityTime");

citySelect.addEventListener("change", showSelectedCityDate);

function displayTime() {
  let date = document.querySelector("#date");

  date.innerHTML = new Date();
}

setInterval(displayTime, 1000);

let honoluluTime = moment()
  .tz("Pacific/Honululu")
  .format("dddd, MMMM D, YYYY H:mA");
let honululuElement = document.querySelector("#");
