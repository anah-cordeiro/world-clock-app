function defaultTime() {
  //Washington DC
  let vancouverElement = document.querySelector("#vancouver");

  if (vancouverElement) {
    let vancouverDateElement = vancouverElement.querySelector(".date");
    let vancouverTimeElement = vancouverElement.querySelector(".time");
    let vancouverTime = moment().tz("America/Vancouver");

    vancouverDateElement.innerHTML = vancouverTime.format("MMMM     Do YYYY");
    vancouverTimeElement.innerHTML = vancouverTime.format("h:mm:ss A");
  }

  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");

  if (lisbonElement) {
    let lisbonDateElement = lisbonElement.querySelector(".date");
    let lisbonTimeElement = lisbonElement.querySelector(".time");
    let lisbonTime = moment().tz("Europe/Lisbon");

    lisbonDateElement.innerHTML = lisbonTime.format("MMMM     Do YYYY");
    lisbonTimeElement.innerHTML = lisbonTime.format("h:mm:ss A");
  }

  //Tokyo
  let tokyoElement = document.querySelector("#tokyo");

  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM     Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss A");
  }
}

defaultTime();
setInterval(defaultTime, 1000);
