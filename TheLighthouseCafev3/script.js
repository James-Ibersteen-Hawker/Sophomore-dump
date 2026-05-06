let sound;
let b = 1;
let x = 1;
let slashes = [];
let body = document.getElementsByTagName("BODY")[0];
let footerTag = document.getElementsByTagName("FOOTER").offsetHeight;
let above = document.getElementById("aboveNav")
let img = document.getElementById("aboveImg");
let navbar = [
  '<div class="aboveNav" id="aboveNav" onclick="stopAudio()"><img src="Lighthouse Logo PNG.png" class="me-auto ms-auto" onload="setAboveNav()" id="aboveImg"></div>',
  '<nav class="navbar navbar-expand-lg" id="navbar">',
  '<div class="container-fluid">',
  '<a class="navbar-brand hideLogo" href="index.html">Home</a>',
  '<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarDropdown"',
  'aria-controls="navbarDropdown" aria-expanded="false" aria-label="Toggle navigation">',
  '<span class="navbar-toggler-icon"></span>',
  '</button>',
  '<a class="nav-link hinge"><img src="hinge.png" id="hinge1"></a>',
  '<div class="collapse navbar-collapse" id="navbarDropdown">',
  '<div class="navbar-nav me-auto ms-auto">',
  '<a class="nav-link homeLink" href="index.html">Home</a>',
  '<div class="nav-link dropdown">',
  '<a class="dropdown-toggle text-dark" type="button" data-bs-toggle="dropdown" aria-expanded="false" href="#">',
  'Menu',
  '</a>',
  '<ul class="dropdown-menu">',
  '<li><a class="dropdown-item" href="breakfast.html">Breakfast</a></li>',
  '<li><a class="dropdown-item" href="lunch.html">Lunch</a></li>',
  '<li><a class="dropdown-item" href="coffee+bakery.html">Coffee + Bakery</a></li>',
  '<li><a class="dropdown-item" href="menu+specials.html">Menu + Specials</a></li>',
  '</ul>',
  '</div>',
  '<a class="nav-link" href="hours.html">Hours</a>',
  '<a class="nav-link" href="location.html">Location</a>',
  '<a class="nav-link" href="contact.html">Contact Us</a>',
  '<a class="nav-link" href="bookstore.html">Bookstore</a>',
  '</div>',
  '</div>',
  '<a class="nav-link hinge"><img src="hinge.png" id="hinge2"></a>',
  '</div>',
  '</nav>',
  '<div class="navAlerts rightAlert" data-bs-toggle="modal" data-bs-target="#settings">Settings</div>'
];
let footer = [
  '<footer>',
  '<div class="lighthouse houseRight"></div>',
  '<div class="lighthouse houseLeft"></div>',
  '<div class="container-fluid">',
  '<div class="row">',
  '<div class="col-12">',
  '<h3>The Lighthouse</h3>',
  '<h6>Piazza S. Lorenzo, 63, 16123 Genoa GE, Italy</h6>',
  '<hr class="whiteHr">',
  '</div>',
  '</div>',
  '<div class="row">',
  '<div class="col-0 col-sm-1"></div>',
  '<div class="col-12 col-sm-5" style="margin-bottom: 5px; text-align: center;">',
  '<h6>Were on Social Media!</h6>',
  '<div class="row">',
  '<div class="col-12 socialRow"><img src="socials/facebook.png" alt="Facebook" class="social"',
  'onclick="linker(\'https://www.facebook.com/_blank\')">',
  '<img src="socials/instagram.webp" alt="Instagram" class="social"',
  'onclick="linker(\'https://www.instagram.com/_blank\')">',
  '</div>',
  '</div>',
  '<hr class="whiteHr">',
  '<button class="stopAudio" onclick="stopAudio()">Control Audio</button>',
  '</div>',
  '<div class="col-12 col-sm-5 reserveRow">',
  '<h6>Make a reservation</h6>',
  '<div class="row reservationRow">',
  '<div class="col-12 col-md-6 footInputRow">',
  '<input type="text" class="footerInput" placeholder="First Name*">',
  '</div>',
  '<div class="col-12 col-md-6 footInputRow">',
  '<input type="text" class="footerInput" placeholder="Last Name*">',
  '</div>',
  '<div class="col-12 footInputRow">',
  '<input type="text" class="footerInput" placeholder="email@address.com*">',
  '</div>',
  '<div class="col-12 footInputRow">',
  '<input type="text" class="footerInput" placeholder="Phone Number*">',
  '</div>',
  '<div class="col-4 col-sm-5">',
  '<div class="dropup">',
  '<a class="btn dropdownBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">',
  '<div class="row">',
  '<div class="col-8 col-md-9" id="dropBtn">Times</div>',
  '<div class="col-4 col-md-3 dropdown-toggle"></div>',
  '</div>',
  '</a>',

  '<ul class="dropdown-menu">',
  '<li>',
  '<h6 class="dropdown-header" style="pointer-events: none;">Time</h6>',
  '</li>',
  '<li>',
  '<hr class="dropdown-divider">',
  '</li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'1:00\')" id="1:00">1:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'2:00\')" id="2:00">2:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'3:00\')" id="3:00">3:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'4:00\')" id="4:00">4:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'5:00\')" id="5:00">5:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'6:00\')" id="6:00">6:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'7:00\')" id="7:00">7:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'8:00\')" id="8:00">8:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'9:00\')" id="9:00">9:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'10:00\')" id="10:00">10:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'11:00\')" id="11:00">11:00</a></li>',
  '<li><a class="dropdown-item" onclick="setDropText(\'12:00\')" id="12:00">12:00</a></li>',
  '</ul>',
  '</div>',
  '</div>',
  '<div class="col-4">',
  '<input type="date" id="dateInput">',
  '</div>',
  '<div class="col-4 col-sm-3">',
  '<div class="row" id="incrementRow">',
  '<div class="col-10" id="incrementer"></div>',
  '<div class="col-2 arrows" style="height: 100%;">',
  '<div class="row">',
  '<div class="col-12 carets" onclick="increment(\'add\')">',
  '&#9650;',
  '</div>',
  '<div class="col-12 carets" onclick="increment(\'subtract\')">',
  '&#9660;',
  '</div>',
  '</div>',
  '</div>',
  '</div>',
  '</div>',
  '<div class="col-12 reserveCol">',
  '<button class="reserveBtn" onclick="reserver()">Reserve</button>',
  '<hr class="whiteHr">',
  '</div>',
  '</div>',
  '</div>',
  '<div class="col-0 col-sm-1"></div>',
  '</div>',
  '</div>',
  '<div class="w-100">Copyright &#169; 2024 The Lighthouse</div>',
  '</footer>'
];
let images = [
  'downStairs.avif',
  'lighthouseBeam2_upresed_BW.png',
  'lighthouseOfGenoa.png',
  'street.jpg'
];
let closeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg Icon" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/></svg>';
let collapseIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-indent Icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12.5 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5"/></svg>';
let expandIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-bar-up Icon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5m-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5"/></svg>';
let phoneIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill phoneIcon" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/></svg>';
let mailIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill mailIcon" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg>';
let upCaret = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-up-fill caretIcon" viewBox="0 0 16 16"><path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z"/></svg>';
let downCaret = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill caretIcon" viewBox="0 0 16 16"><path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/></svg>';
let number = 1;
let week = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]
let currentDate = new Date();
let currentDay = week[currentDate.getDay()];
window.onload = startUp;
window.addEventListener("resize", onResize);
function startUp() {
  // startAudio('prelude');
  navGen();
  setAboveNav();
  getURL();
  genFoot();
  makeButton();
  // settingsMenu();
  setBackDrop(0, 3);
  placeIcons();
  setIncrementer();
  setTextAccompany();
  setDay();
  scrollTo(0, 0);
  let down = document.getElementsByClassName("carets")[1];
  if (number == 1) {
    down.classList.add("disabledCaret");
  }
}
function equateH(direction, base, fitter, offset) {
  offset = (offset == null || offset == '') ? 0 : offset;
  fitter.setAttribute("style", direction.toString() + ":" + base.offsetHeight.toString() + offset.toString() + ";");
}
function placeIcons() {
  let closeCell = document.querySelectorAll(".closeCell").length;
  for (i = 0; i < closeCell; i++) {
    document.getElementsByClassName("closeCell")[i].insertAdjacentHTML("afterbegin", closeIcon);
  }
  let phoneCell = document.querySelectorAll(".phoneCell").length;
  for (i = 0; i < phoneCell; i++) {
    document.getElementsByClassName("phoneCell")[i].insertAdjacentHTML("afterbegin", phoneIcon);
  }
  let mailCell = document.querySelectorAll(".mailCell").length;
  for (i = 0; i < mailCell; i++) {
    document.getElementsByClassName("mailCell")[i].insertAdjacentHTML("afterbegin", mailIcon);
  }
  let downCell = document.querySelectorAll(".downCell").length;
  for (i = 0; i < downCell; i++) {
    document.getElementsByClassName("downCell")[i].insertAdjacentHTML("afterbegin", downCaret);
  }
  let upCell = document.querySelectorAll(".upCell").length;
  for (i = 0; i < upCell; i++) {
    document.getElementsByClassName("upCell")[i].insertAdjacentHTML("afterbegin", upCaret);
  }
}
function onResize() {
  //showWidth();
  setAboveNav();
  setIncrementer();
}
function showWidth() {
  console.log(window.innerWidth);
}
function linker(url, loc) {
  if (loc != '') {
    window.open(url, loc);
  } else {
    window.location = url;
  }
}
function reserver() {
  let fFill = 0;
  let lFill = 0;
  let eFill = 0;
  let pFill = 0;
  let tFill = 0;
  let dFill = 0;
  //text fields
  let fName = document.getElementsByClassName("footerInput")[0];
  if (fName.value == (null || '')) {
    fName.classList.add("footRequired");
    setTimeout(() => fName.classList.remove("footRequired"), 1000);
    fFill = 1;
  }
  let lName = document.getElementsByClassName("footerInput")[1];
  if (lName.value == (null || '')) {
    lName.classList.add("footRequired");
    setTimeout(() => lName.classList.remove("footRequired"), 1000);
    lFill = 1;
  }
  let email = document.getElementsByClassName("footerInput")[2];
  if (email.value == (null || '')) {
    email.classList.add("footRequired");
    setTimeout(() => email.classList.remove("footRequired"), 1000);
    eFill = 1;
  }
  let phone = document.getElementsByClassName("footerInput")[3];
  if (phone.value == (null || '')) {
    phone.classList.add("footRequired");
    setTimeout(() => phone.classList.remove("footRequired"), 1000);
    pFill = 1;
  }
  //non text fields
  let time = document.getElementById("dropBtn");
  if (time.value == 'Times') {
    time.classList.add("textRequired");
    setTimeout(() => time.classList.remove("textRequired"), 1000);
    tFill = 1;
  }
  let date = document.getElementById("dateInput");
  if (date.value == (null || '')) {
    date.classList.add("required");
    setTimeout(() => date.classList.remove("required"), 1000);
    dFill = 1;
  }
  if ((fFill + lFill + eFill + pFill + tFill + dFill) == 0) {
    let picker = Math.round(Math.random() * 10);
    let yes = document.getElementById("yes");
    let no = document.getElementById("no");
    fName.value = '';
    lName.value = '';
    email.value = '';
    phone.value = '';
    date.value = '';
    if (picker > 3) {
      yes.classList.add("flashAlert");
      setTimeout(() => yes.classList.remove("flashAlert"), 1500);
    } else {
      no.classList.add("flashAlert");
      setTimeout(() => no.classList.remove("flashAlert"), 1500);
    }
  }
}
function setAboveNav() {
  let above = document.getElementById("aboveNav")
  let img = above.getElementsByTagName("IMG")[0];
  let imgHeight = img.offsetHeight;
  above.setAttribute("style", "height:" + (imgHeight + 40) + "px;");
}
function startAudio(url) {
  sound = new Audio("music/" + url.toString() + ".mp3");
  sound.play();
}
function stopAudio() {
  if (b == 1) {
    sound.pause();
    b = 0;
    return
  }
  if (b == 0) {
    sound.play();
    b = 1;
    return
  }
}
function navGen() {
  body.insertAdjacentHTML("afterbegin", navbar.join(''));
}
function getURL() {
  let currentURL = window.location.href;
  let textString = currentURL.split('');
  let b = 0;
  for (i = 0; i < textString.length; i++) {
    if (textString[i] == '/') {
      slashes[b] = i;
      b++;
    }
  }
  let lastItem = slashes[slashes.length - 1];
  let urlString = textString.slice(lastItem + 1).join('');
  let a = document.querySelectorAll("#navbarDropdown a");
  for (i = 0; i < a.length; i++) {
    if (a[i].getAttribute("href") == urlString) {
      a[i].setAttribute("aria-current", "page");
      a[i].classList.add("active");
    }
  }
  let home = [
    document.getElementsByClassName("hideLogo")[0],
    document.getElementsByClassName("homeLink")[0]
  ];
  if (urlString == '' || urlString == null || urlString == 'index.html') {
    for (i = 0; i < home.length; i++) {
      home[i].classList.add("active");
    }
  }
}
function genFoot() {
  body.insertAdjacentHTML("afterend", footer.join(''));
  // console.log(footer.join(""));
}
function setBackDrop(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  let random = Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  let backdrop = document.querySelector(".background-img img");
  backdrop.src = 'backCarousel/' + images[random];
}


function submitMessage() {
  let fName = 0;
  let lName = 0;
  let dMessage = 0;
  let emailInput = 0;
  //firstName
  let fCap = document.getElementById("first").value.split("");
  let firstName;
  if (fCap == (null || '')) {
    let first = document.getElementById("first");
    first.classList.add("required");
    setTimeout(() => first.classList.remove("required"), 1000);
    fName = 1;
  } else {
    Fchecker: for (i = 0; i < fCap.length; i++) {
      if (fCap[i] != ' ') {
        firstName = fCap[i].toUpperCase() + fCap.splice(i + 1).join("");
        break Fchecker
      }
    }
    fName = 0;
  }
  //lastName
  let lCap = document.getElementById("last").value.split("");
  let lastName;
  if (lCap == (null || '')) {
    let last = document.getElementById("last");
    last.classList.add("required");
    setTimeout(() => last.classList.remove("required"), 1000)
    lName = 1;
  } else {
    Lchecker: for (i = 0; i < lCap.length; i++) {
      if (lCap[i] != ' ') {
        lastName = lCap[i].toUpperCase() + lCap.splice(i + 1).join("");
        break Lchecker
      }
    }
    lName = 0;
  };
  //if null

  //we got to here

  //message
  let message = document.getElementById("message").value.split('');
  let email = document.getElementById("emailInput").value;
  let mel;
  let dotsVal;
  let atsVal
  if (email == (null || '')) {
    mel = document.getElementById("emailInput");
    mel.classList.add("required");
    setTimeout(() => mel.classList.remove("required"), 1000)
    emailInput = 1;
  } else {
    let emailString = email.split("");
    let ats = [];
    let q = 0;
    for (i = 0; i < emailString.length; i++) {
      if (emailString[i] == '@') {
        ats[q] = i;
        q++;
      }
    }
    let dots = [];
    let z = 0;
    for (i = 0; i < emailString.length; i++) {
      if (emailString[i] == '.') {
        dots[z] = i;
        z++;
      }
    }
    if (ats.length > 0 && ats.length < 2) {
      atsVal = 0;
    } else {
      let mel = document.getElementById("emailInput");
      mel.classList.add("required");
      setTimeout(() => mel.classList.remove("required"), 1000);
      atsVal = 1;
    }
    if (dots.length > 0) {
      dotsVal = 0;
    } else {
      let mel = document.getElementById("emailInput");
      mel.classList.add("required");
      setTimeout(() => mel.classList.remove("required"), 1000);
      dotsVal = 1;
    }
    emailInput = dotsVal + atsVal;
  }
  //makeMessage
  let dearMail = 'Dear Lighthouse,';
  if (message == (null || '')) {
    let mes = document.getElementById("message");
    mes.classList.add("required");
    setTimeout(() => mes.classList.remove("required"), 1000)
    dMessage = 1;
    capital = '';
  } else {
    dMessage = 0;
  }
  let mainMail = message.join("");
  let fromMail = firstName + ' ' + lastName;
  //inputMessage
  let fromEmail = document.getElementById("fromEmail");
  fromEmail.textContent = 'From: ' + email;
  let to = document.getElementById("to");
  to.textContent = dearMail;
  let messageP = document.getElementById("messageP")
  messageP.textContent = mainMail;
  let name = document.getElementById("name");
  name.textContent == '' ? name.textContent = fromMail : name.textContent = ''; name.textContent = fromMail;
  //showEmail
  let emailBox = document.getElementById("email");
  if (fName + lName + dMessage + emailInput > 0) {
    emailBox.style.display = "none";
  } else {
    emailBox.style.display = "block";
    emailBox.classList.add("sliding");
  }
  //consoleLog
}


function emailFunc(way) {
  let emailBox = document.getElementById("email");
  if (way == 'close') {
    emailBox.style.display = "none";
    emailBox.classList.remove("sliding");
  }
}
function sent() {
  let sentMessage = document.getElementById("sent");
  let emailBox = document.getElementById("email");
  emailBox.style.display = "none";
  sentMessage.classList.add("flashAlert");
  setTimeout(() => sentMessage.classList.remove("flashAlert"), 1500);
  let inputs = [
    document.getElementById("first"),
    document.getElementById("last"),
    document.getElementById("emailInput"),
    document.getElementById("message"),
  ];
  for (i = 0; i < inputs.length; i++) {
    inputs[i].value = '';
  }
}
function setDropText(name) {
  // let dropDownOptions = [

  // ];
  // let date = new Date();
  // console.log(date.getHours(), date.getMinutes());
  let dropBtn = document.getElementById("dropBtn");
  //set button text
  let text = name;
  dropBtn.innerHTML = text;
  //unactive all list items
  let list = document.getElementsByClassName("dropdown-item").length;
  for (i = 0; i < list; i++) {
    let listItem = document.getElementsByClassName("dropdown-item")[i];
    listItem.classList.remove("current");
  }
  //set current
  let current = document.getElementById(name.toLowerCase().toString());
  current.classList.add("current");
}
function setIncrementer() {
  let body = document.getElementById("incrementer");
  let total = document.getElementById("incrementRow");
  let arrows = document.getElementsByClassName("arrows")[0];
  body.setAttribute("style", "width:" + ((total.offsetWidth - arrows.offsetWidth) - 10) + "px;");
  body.textContent = number;
}
function increment(method) {
  let body = document.getElementById("incrementer");
  let up = document.getElementsByClassName("carets")[0];
  let down = document.getElementsByClassName("carets")[1];
  if (method == 'add') {
    down.classList.remove("disabledCaret");
    if (number == 6) {
      return;
    } else {
      if (number == 5) {
        up.classList.add("disabledCaret");
      }
      number++;
      body.textContent = number;
    }
  }
  if (method == 'subtract') {
    up.classList.remove("disabledCaret");
    if (number == 1) {
      return;
    } else {
      if (number == 2) {
        down.classList.add("disabledCaret");
      }
      number--;
      body.textContent = number;
    }
  }
}
function closeUpdate(id) {
  let closer = document.getElementById(id);
  // closer.setAttribute("style", "filter: opacity(0); pointer-events: none;");
  closer.style.display = "none";
}
function setDay() {
  let amountOf = document.querySelectorAll("#" + currentDay.toLowerCase()).length;
  for (i = 0; i < amountOf; i++) {
    let currentDiv = document.getElementById(currentDay.toLowerCase());
    console.log(currentDiv);
    currentDiv.classList.add("currentDay");
  }
}
function settingsMenu() {
  //all important
  let br = document.createElement("br");
  //modal container
  let modal = document.createElement("div");
  modal.classList.add("modal", "fade");
  modal.setAttribute("id", "settings");
  modal.setAttribute("tabindex", "-1");
  modal.setAttribute("aria-labelledby", "settingsLabel");
  modal.setAttribute("aria-hidden", "true");
  //modal body
  let dialog = document.createElement("div");
  dialog.classList.add("modal-dialog");
  let content = document.createElement("div");
  content.classList.add("modal-content");
  let header = document.createElement("div");
  header.classList.add("modal-header");
  let title = document.createElement("h1");
  title.classList.add("modal-title", "fs-5");
  title.setAttribute("id", "settingsLabel");
  title.textContent = "Settings";
  let mbody = document.createElement("div");
  mbody.classList.add("modal-body");
  let footer = document.createElement("div");
  footer.classList.add("modal-footer");
  let close = document.createElement("button");
  close.classList.add("btn", "btn-primary");
  close.textContent = "Save Changes";
  close.setAttribute("data-bs-dismiss", "modal");
  close.setAttribute("type", "button");
  close.setAttribute("onclick", "saveSettings()");
  //specifics
  let modalRow = document.createElement("div");
  modalRow.classList.add("row");
  let col1 = document.createElement("div");
  col1.classList.add("col-12", "col-md-4");
  let col2 = document.createElement("div");
  col2.classList.add("col-12", "col-md-4");
  let col3 = document.createElement("div");
  col3.classList.add("col-12", "col-md-4");
  //music
  let mHead = document.createElement("h2");
  mHead.textContent = "Music";
  let mHr = document.createElement("hr");
  let start = document.createElement("input");
  let startLabel = document.createElement("label");
  let stop = document.createElement("input");
  let stopLabel = document.createElement("label");
  start.type = "radio";
  start.id = "start";
  start.name = "music";
  startLabel.for = "start";
  startLabel.textContent = "Start";
  stop.type = "radio";
  stop.id = "stop";
  stop.name = "music";
  stopLabel.for = "stop";
  stopLabel.textContent = "Stop";
  //build
  col1.append(mHead);
  col1.append(mHr);
  col1.append(start);
  col1.append(startLabel);
  col1.append(br)
  col1.append(stop);
  col1.append(stopLabel);
  //build
  let body = document.getElementsByTagName("BODY")[0];
  body.append(modal);
  modal.append(dialog);
  dialog.append(content);
  content.append(header);
  header.append(title);
  content.append(mbody);
  mbody.append(col1);
  mbody.append(col2);
  mbody.append(col3);
  content.append(footer);
  footer.append(close);
}
function saveSettings() {
  window.location.reload();
}
function setTextAccompany() {
  let sectionCount = document.querySelectorAll(".textAccompany");
  let ImageCount = document.querySelectorAll(".imagePic");
}
function makeButton() {
  topBtn = document.createElement("a");
  topBtn.textContent = "Top";
  document.body.append(topBtn);
  topBtn.setAttribute("id", "toTop");
  topBtn.setAttribute("href", "#");
}
window.addEventListener("scroll", backtoTop);
function backtoTop() {
  if (scrollY == 0) {
    x = 1;
  }
  if (x == 1) {
    if (scrollY > body.scrollHeight - window.innerHeight - footerTag + 20) {
      topBtn.setAttribute("style", "animation-name: unfade; animation-iteration-count: 1; animation-duration: .2s; animation-fill-mode: forwards;");
    }
    else {
      if (scrollY > 250) {
        topBtn.setAttribute("style", "display: block; animation-name: fade; animation-iteration-count: 1; animation-duration: .2s; animation-fill-mode: forwards;");
      }
      else {
        topBtn.setAttribute("style", "animation-name: unfade; animation-iteration-count: 1; animation-duration: .2s; animation-fill-mode: forwards;");
      }
    }
  } else {
    topBtn.setAttribute("style", "display: none;");
  }
}