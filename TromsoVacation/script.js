let maps = [
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11763.556399920788!2d18.99729181805373!3d69.64326596624743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c4e382e8632b%3A0x186f18c65bbac4cf!2sTromso%20Camping!5e0!3m2!1sen!2sus!4v1710194213610!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.5074510565166!2d18.959368077911794!3d69.6495061466767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c452de42927b%3A0x62660f274082faa9!2sScandic%20Ishavshotel!5e0!3m2!1sen!2sus!4v1710194507992!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.5855364116803!2d18.950070377911665!3d69.64831014678069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c5ad21e36851%3A0x9df980b4b93e2051!2sEnter%20City%20Hotel!5e0!3m2!1sen!2sus!4v1710194662101!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.4403076138576!2d18.95308537791183!3d69.65053454658717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c452d8436687%3A0x53751f72f0c12ce4!2sBardus%20Bistro!5e0!3m2!1sen!2sus!4v1710195388072!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.604803031312!2d18.955408777911618!3d69.64801504680645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c5acbe8fed21%3A0x8cc74fa7895c2c29!2sArt%20Caf%C3%A9%20Bistro!5e0!3m2!1sen!2sus!4v1710195522759!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1387.2801543593305!2d18.96198710000001!3d69.6529875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c453bc8b1507%3A0xf51bf531a3d884f3!2sHildr%20Gastro%20Bar!5e0!3m2!1sen!2sus!4v1710195461286!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1385.5250036170842!2d18.90472647791609!3d69.67986734403448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c422788e3f0f%3A0x5040733cf2f3e30e!2sTroms%C3%B8%20Airport!5e0!3m2!1sen!2sus!4v1710882011463!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5204.063135247192!2d18.955255723901708!3d69.65064959455715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c4526c3b71fd%3A0x23dca858e6ebed3!2zVHJvbXPDuCwgTm9yd2F5!5e0!3m2!1sen!2sus!4v1710176013551!5m2!1sen!2sus" width="100%" height="1005" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44361.512807597705!2d18.971358272456758!3d69.6680407072988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c443b4eb7d3b%3A0xc5a690bdd8649139!2zVHJvbXPDuHlh!5e0!3m2!1sen!2sus!4v1710971456750!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d291.6993978745757!2d18.961006028535426!3d69.6486400487863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c5a97e522b57%3A0xcf0687b87677301b!2sTroll%20Museum!5e0!3m2!1sen!2sus!4v1711222318707!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30465.93737067212!2d18.937026699004022!3d69.67458491765659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c4f552c0a3d9%3A0x17fb05a26121917!2sTroms%C3%B8ysundet!5e0!3m2!1sen!2sus!4v1711222444002!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
  '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37281.87616255886!2d18.909430600228973!3d69.68031130225968!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x45c4c38f1bdde591%3A0x74fb3b1ac57a6597!2sVardenToppen!5e0!3m2!1sen!2sus!4v1711222513828!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
];
/*let weatherWidget = [
  '<a class="weatherwidget-io" href="https://forecast7.com/en/69d6518d96/tromso/" data-label_1="TROMSØ" data-label_2="WEATHER" data-theme="original" data-basecolor="rgba(0,0,0,0)" >TROMSØ WEATHER</a>\n<script>\n!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\'https://weatherwidget.io/js/widget.min.js\';fjs.parentNode.insertBefore(js,fjs);}}(document,\'script\',\'weatherwidget-io-js\');\n</script>',
  '<a class="weatherwidget-io" href="https://forecast7.com/en/69d6518d96/tromso/?unit=us" data-label_1="TROMSØ" data-label_2="WEATHER" data-theme="original" data-basecolor="rgba(0,0,0,0)" >TROMSØ WEATHER</a>\n<script>\n!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\'https://weatherwidget.io/js/widget.min.js\';fjs.parentNode.insertBefore(js,fjs);}}(document,\'script\',\'weatherwidget-io-js\');\n</script>'
];*/
let weatherWidget = [
  document.getElementById("weather1"),
  document.getElementById("weather2")
];
let bodies = [];
let b = 0;
let webUnits = localStorage.getItem("units");
let snowDISP = localStorage.getItem("snowDISP");
let snowSession = sessionStorage.getItem("snowSession");
let tempUnit;
let alertOn = sessionStorage.getItem("alertOn");
let footer = document.getElementsByTagName("FOOTER")[0];
let amount = document.querySelectorAll(".change").length;
let textArray = [];
let pointerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill pointerIcon" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/></svg>';
let phoneIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill phoneIcon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>';
let mailIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill mailIcon" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>';
let webIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas webIcon" viewBox="0 0 16 16"><path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484q-.121.12-.242.234c-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/></svg>';
let gearIcon = '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-gear-wide gearIcon" viewBox="0 0 16 16"><path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z"/></svg>';
let snowOverlay = document.getElementsByClassName("snow-overlay")[0];
let headingsLength = document.querySelectorAll(".sideHead").length;
let weatherDiv = document.querySelectorAll(".weather").length;
let border = document.getElementById("pineBorder");
let middle = document.getElementsByClassName("middle")[0];



window.onload = startUp;
window.addEventListener("resize", resizedFunction);
window.addEventListener("scroll", pineBorder);
snowOverlay.addEventListener("animationend", stopSnow);
function startUp() {
  moveIcon();
  moveHeadings();
  makeBody();
  placeIcons();
  setCardText();
  logSnow();
  checkSize();
  sendAlert();

  let myundefined = localStorage.getItem("units");
  if (myundefined == 'imperial' || myundefined == 'metric') myundefined = undefined;

  if (webUnits == myundefined) {
    webUnits = 'imperial';
    localStorage.setItem("units", "imperial");
  }
  if (webUnits == 'imperial') {
    change('imperial');
    if (weatherDiv != 0) {
      weatherWidget[0].style.display = "block";
      weatherWidget[1].style.display = "none";
    }
  }
  if (webUnits == 'metric') {
    change('metric');
    if (weatherDiv != 0) {
      weatherWidget[1].style.display = "block";
      weatherWidget[0].style.display = "none";
    }
  }
  
  createSettingsModal();
}
//cookie handling
function sendAlert() {
  if (alertOn == null) {
    alertOn = 'true';
  }
  if (alertOn == 'true') {
    alert("This website uses cookies.");
  }
  alertOn = 'false';
  sessionStorage.setItem("alertOn", "false");
}
//snow handling
function logSnow() {
  let myundefined = localStorage.getItem("snowDISP");
  if (myundefined == 'true' || myundefined == 'false') myundefined = undefined;

  if (snowDISP == myundefined) {
    snowDISP = 'true';
  }
  if (snowDISP == 'true') {
    let myundefined1 = localStorage.getItem("snowSession");
    if (myundefined1 == 'true' || myundefined1 == 'false') myundefined1 = undefined;

    if (snowSession == myundefined1) {
      snowSession = 'true';
    }
    if (snowSession == 'true') {
      snowOverlay.style.display = "block";
    }
  }
}
function stopSnow() {
  sessionStorage.setItem("snowSession", "false");
}
//page handling
function makeBody() {
  for (i = 0; i < maps.length; i++) {
    let modalBody = document.createElement("div");
    let filler = document.createElement("h1");
    modalBody.setAttribute("id", "mapModalBody")
    modalBody.classList.add("modal-body");
    modalBody.append(filler);
    modalBody.innerHTML = maps[i].toString();
    bodies[i] = modalBody;
  }
} //make the map modal bodies
function setCardText() {
  let cardText = document.querySelectorAll(".sizedText").length;
  if (document.body.offsetWidth > 974) {
    for (i = 0; i < cardText; i++) {
      let text = document.getElementsByClassName("sizedText")[i];
      let header = document.getElementsByClassName("card-title")[i];
      let cardBody = document.getElementsByClassName("card-body")[i];
      cardBody.setAttribute("style", "height: 300px;");
      header.setAttribute("style", "height: 25%; overflow-y: auto;");
      text.setAttribute("style", "height: 75%; overflow-y: auto;");
    }
  } else {
    for (i = 0; i < cardText; i++) {
      let text = document.getElementsByClassName("sizedText")[i];
      let header = document.getElementsByClassName("card-title")[i];
      let cardBody = document.getElementsByClassName("card-body")[i];
      cardBody.setAttribute("style", "height: auto;");
      header.setAttribute("style", "height: auto; overflow-y: visible;");
      text.setAttribute("style", "height: auto; overflow-y: visible;");
    }
  }
} //setting the card height on hotels/restaurants
function placeIcons() {
  let pointerCell = document.querySelectorAll(".pointerCell").length;
  for (i = 0; i < pointerCell; i++) {
    document.getElementsByClassName("pointerCell")[i].insertAdjacentHTML("beforebegin", pointerIcon);
  }
  let phoneCell = document.querySelectorAll(".phoneCell").length;
  for (i = 0; i < phoneCell; i++) {
    document.getElementsByClassName("phoneCell")[i].insertAdjacentHTML("beforebegin", phoneIcon);
  }
  let mailCell = document.querySelectorAll(".emailCell").length;
  for (i = 0; i < mailCell; i++) {
    document.getElementsByClassName("emailCell")[i].insertAdjacentHTML("beforebegin", mailIcon);
  }
  let webCell = document.querySelectorAll(".webCell").length;
  for (i = 0; i < webCell; i++) {
    document.getElementsByClassName("webCell")[i].insertAdjacentHTML("beforebegin", webIcon);
  }
  let gearDiv = document.createElement("div");
  gearDiv.insertAdjacentHTML("afterbegin", gearIcon);
  footer.append(gearDiv);
  gearDiv.setAttribute("data-bs-toggle", "modal");
  gearDiv.setAttribute("data-bs-target", "#settingsModal")
} //place svgs
function resizedFunction() {
  moveIcon();
  setCardText();
  moveHeadings();
} //functions to run on resize screen
function search() {
  // Declare variables
  let input;
  let filter;
  let ul;
  let li;
  let a;
  let i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";

    } else {
      li[i].style.display = "none";

    }
  }
} //search the search-list
function moveIcon() {
  let before = document.getElementById("before");
  before.setAttribute("style", "display: none;")
  let after = document.getElementById("after");
  after.setAttribute("style", "display: none;")
  if (document.documentElement.offsetWidth < 576) {
    before.style.display = "block";
  } else {
    after.style.display = "block";
  }
} //place search icon
function pineBorder() {
  let topOffset = document.getElementsByClassName("headerPic")[0].offsetHeight;
  let navHeight = document.getElementsByTagName("NAV")[0].offsetHeight;
  if (scrollY > (topOffset - 5)) {
    border.setAttribute("style", "position: fixed; top:" + navHeight.toString() + "px;");
  } else {
    border.setAttribute("style", "position: absolute;")
  }
} //set pineborder position
function showMap(i) {
  let k = i - 1;
  let content = document.getElementById("modalContent");
  if (b != 0) {
    content.innerHTML = null;
  }
  content.append(bodies[k]);
  b = i;
} //insert the map modal bodies
function checkSize() {
  let middle = document.getElementsByClassName("middle")[0];
  if (document.getElementsByClassName("body")[0] != null) {
    var bodyDiv = document.getElementsByClassName("body")[0];
    if (window.innerWidth < 1171) {
      bodyDiv.setAttribute("style", "background-blend-mode: none; background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.3)), url(img/snowBg2.jpg), url(img/snowBg1.jpg);");
    }
  }
  if (window.innerWidth < 1171) {
    middle.setAttribute("style", "background-blend-mode: none; background: radial-gradient(rgba(0,0,0,.5), rgba(0,0,0,.3)), url(img/snowBg2.jpg), url(img/snowBg1.jpg);");
  }
} //check screen size
function moveHeadings() {
  if (window.innerWidth < 993) {
    for (i = 0; i < headingsLength; i++) {
      let heading = document.getElementsByClassName("sideHead")[i];
      heading.setAttribute("style", "text-align: left;");
    }
  } else {
    for (i = 0; i < headingsLength; i++) {
      let heading = document.getElementsByClassName("sideHead")[i];
      heading.setAttribute("style", "text-align: center;");
    }
  }
} //sets specific headings to text-align: left;
function audioFunction(url) {
  let sound = new Audio(url.toString() + ".mp3");
  sound.cloneNode().play();
}
function change(unit) {
  if (unit == 'metric') {
    for (i = 0; i < amount; i++) {
      let changeDiv = document.getElementsByClassName("change")[i].textContent;
      textArray = changeDiv.split(" ");
      for (z = 0; z < textArray.length; z++) {
        if (textArray[z].substring(0, 4) == 'mile' || textArray[z].substring(0, 5) == "miles") {
          if (textArray[z].substring(0, 4) == 'mile') {
            s = z;
            p = -1;
            let u = "kilometer";
            let plural = changeNum(s, p, unit);
            if (plural) {
              u = "kilometers";
            }
            let ta = u + textArray[s].substring(5);
            console.log(ta);
            textArray[s] = ta;
          }
          if (textArray[z].substring(0, 5) == 'miles') {
            p = z;
            s = -1;
            let u = "kilometer";
            let plural = changeNum(s, p, unit);
            if (plural) {
              u = "kilometers";
            }
            let ta = u + textArray[p].substring(6);
            console.log(ta);
            textArray[p] = ta;
          }
        }
      }
      changeDiv = textArray.join(" ");
      document.getElementsByClassName("change")[i].textContent = changeDiv;
    }
  }
  if (unit == 'imperial') {
    for (i = 0; i < amount; i++) {
      let changeDiv = document.getElementsByClassName("change")[i].textContent;
      textArray = changeDiv.split(" ");
      for (z = 0; z < textArray.length; z++) {
        if (textArray[z].substring(0, 9) == 'kilometer' || textArray[z].substring(0, 10) == "kilometers") {
          if (textArray[z].substring(0, 9) == 'kilometer') {
            s = z;
            p = -1;
            let u = "mile";
            let plural = changeNum(s, p, unit);
            if (plural) {
              u = "miles";
            }
            let ta = u + textArray[s].substring(10);
            console.log(ta);
            textArray[s] = ta;
          }
          if (textArray[z].substring(0, 10) == 'kilometers') {
            p = z;
            s = -1;
            let u = "mile";
            let plural = changeNum(s, p, unit);
            if (plural) {
              u = "miles";
            }
            let ta = u + textArray[p].substring(11);
            console.log(ta);
            textArray[p] = ta;
          }
        }
      }
      changeDiv = textArray.join(" ");
      document.getElementsByClassName("change")[i].textContent = changeDiv;
    }
  }
}
function changeNum(s, p, unit) {
  let plural = false;
  if (unit == 'metric') {
    k = (p == -1 ? s - 1 : p - 1);
    let length = Number(textArray[k]);
    length = Math.round((length * 1.609344) * 10) / 10;
    textArray[k] = length;
    plural = length > 1;
  }
  if (unit == 'imperial') {
    k = (p == -1 ? s - 1 : p - 1);
    let length = Number(textArray[k]);
    length = Math.round((length / 1.609344) * 10) / 10;
    textArray[k] = length;
    plural = length > 1;
  }
  return plural;
}
function createSettingsModal() {
  let modalBody = document.createElement("div");
  modalBody.classList.add("modal");
  modalBody.classList.add("fade");
  modalBody.classList.add("settingsModal")
  modalBody.setAttribute("id", "settingsModal");
  modalBody.setAttribute("tabindex", "-1");
  modalBody.setAttribute("aria-labelledby", "settingsModalLabel");
  modalBody.setAttribute("aria-hidden", "true");
  //modal dialog
  let modalDialog = document.createElement("div");
  modalDialog.classList.add("modal-dialog");
  modalDialog.classList.add("modal-lg");
  //modal content
  let modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  //modal header
  let modalHeader = document.createElement("div");
  modalHeader.classList.add("modal-header");
  //heading
  let heading = document.createElement("h1");
  heading.classList.add("modal-title");
  heading.classList.add("settingsH")
  heading.setAttribute("id", "settingsModalLabel");
  heading.textContent = "Settings";
  //button
  let button = document.createElement("button");
  button.type = "button";
  button.classList.add("btn-close");
  button.setAttribute("data-bs-dismiss", "modal");
  button.setAttribute("aria-label", "Close");
  //body
  let body = document.createElement("div");
  body.classList.add("modal-body");
  //let sliders / buttons
  let row = document.createElement("div");
  row.classList.add("row");
  let col1 = document.createElement("div");
  col1.classList.add("col-6", "col-sm-3");
  let col2 = document.createElement("div");
  col2.classList.add("col-6", "col-sm-3");
  let col3 = document.createElement("div");
  col3.classList.add("col-6", "col-sm-3");
  let col4 = document.createElement("div");
  col4.classList.add("col-6", "col-sm-3");
  //footer
  let modalFooter = document.createElement("div");
  modalFooter.classList.add("modal-footer");
  let footButton = document.createElement("button");
  footButton.type = "button";
  footButton.classList.add("btn", "btn-secondary");
  footButton.setAttribute("data-bs-dismiss", "modal");
  footButton.setAttribute("style", "display: none;");
  footButton.textContent = "Close";
  let saveButton = document.createElement("button");
  saveButton.type = "button";
  saveButton.classList.add("btn", "btn-secondary");
  saveButton.setAttribute("data-bs-dismiss", "modal");
  saveButton.textContent = "Save Changes";
  saveButton.addEventListener("click", reload);
  //build
  footer.append(modalBody);
  modalBody.append(modalDialog);
  modalDialog.append(modalContent);
  modalContent.append(modalHeader);
  modalHeader.append(heading);
  modalHeader.append(button);
  modalContent.append(body);
  body.append(row);
  row.append(col1);
  row.append(col2);
  //row.append(col4);
  row.append(col3);
  modalContent.append(modalFooter);
  modalFooter.append(saveButton);
  modalFooter.append(footButton);


  //make alert button
  let alerts = document.createElement("h2");
  alerts.textContent = "Snow";
  let alertButton = document.createElement("label");
  alertButton.classList.add("switch");
  let alertInput = document.createElement("input");
  alertInput.type = "checkbox";
  let editDiv = document.createElement("div");
  editDiv.classList.add("editDiv");
  let alertSpan = document.createElement("span");
  alertSpan.classList.add("slider", "round");
  let alertTable = document.createElement("table");
  alertTable.classList.add("alertTable");
  let alertTr1 = document.createElement("tr");
  let alertButtonTd1 = document.createElement("td");
  let alertTextTd1 = document.createElement("td");
  editDiv.textContent = "Toggle Snow";
  alertTextTd1.classList.add("textTd");
  //build button
  col1.append(alerts);
  col1.append(alertTable);
  alertTable.append(alertTr1);
  alertTr1.append(alertButtonTd1);
  alertButtonTd1.append(alertButton);
  alertTr1.append(alertTextTd1);
  alertTextTd1.append(editDiv);
  alertButton.append(alertInput);
  alertButton.append(alertSpan);
  if (snowDISP == 'true') {
    alertInput.checked = true;
  } else {
    alertInput.checked = false;
  }
  alertInput.addEventListener("click", checked);

  //make units button 
  let unitsH = document.createElement("h2");
  unitsH.textContent = "Units"
  let table = document.createElement("table");
  let tr1 = document.createElement("tr");
  let buttonTd1 = document.createElement("td");
  let textTd1 = document.createElement("td");
  let tr2 = document.createElement("tr");
  let buttonTd2 = document.createElement("td");
  let textTd2 = document.createElement("td");
  textTd1.textContent = "Imperial";
  textTd1.classList.add("textTd");
  textTd2.textContent = "Metric";
  textTd2.classList.add("textTd");
  let button1 = document.createElement("input");
  button1.type = "radio";
  button1.classList.add("unitsButton");
  let button2 = document.createElement("input");
  button2.type = "radio";
  button2.classList.add("unitsButton");
  //build button
  table.append(tr1);
  table.append(tr2);
  tr1.append(buttonTd1);
  tr1.append(textTd1);
  tr2.append(buttonTd2);
  tr2.append(textTd2);
  buttonTd1.append(button1);
  buttonTd2.append(button2);
  col2.append(unitsH);
  col2.append(table);
  //functions
  if (webUnits == 'metric') {
    button2.checked = true;
    button1.checked = false;
  } else {
    button1.checked = true;
    button2.checked = false;
  }
  button1.name = "unit";
  button2.name = "unit";
  button1.value = "imperial";
  button2.value = "metric";
  button1.setAttribute("onclick", "changeUnit('imperial')");
  button2.setAttribute("onclick", "changeUnit('metric')");

  //make wipe cache
  let wiperH = document.createElement("h2");
  wiperH.textContent = "Storage";
  let localWiper = document.createElement("a");
  localWiper.classList.add("wiper");
  localWiper.addEventListener("click", wipeLocal);
  localWiper.textContent = "Clear Local";
  let sessionWiper = document.createElement("a");
  sessionWiper.classList.add("wiper");
  let br = document.createElement("br");
  sessionWiper.addEventListener("click", wipeSesssion);
  sessionWiper.textContent = "Clear Session";
  col3.append(wiperH);
  col3.append(localWiper);
  col3.append(br);
  col3.append(sessionWiper);
  console.log(modalBody);
}
function checked() {
  if (snowDISP == 'true') {
    snowDISP == 'false';
    localStorage.setItem("snowDISP", 'false');
  }
  if (snowDISP == 'false') {
    snowDISP == 'true';
    localStorage.setItem("snowDISP", 'true');
    sessionStorage.setItem("snowSession", 'true');
  }
}
function reload() {
  localStorage.setItem("units", tempUnit)
  location.reload();
}
function changeUnit(measure) {
  if (measure == 'imperial') {
    webUnits = 'imperial';
    tempUnit = webUnits;
  }
  if (measure == 'metric') {
    webUnits = 'metric';
    tempUnit = webUnits;
  }
}
function wipeLocal() {
  localStorage.clear();
  alert("wiped local");
}
function wipeSesssion() {
  sessionStorage.clear();
  alert("wiped sesson");
}