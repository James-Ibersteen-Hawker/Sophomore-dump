function equateH(direction, base, fitter, offset) {
  offset = (offset == null || offset == '') ? 0 : offset;
  fitter.setAttribute("style", direction + ":" + base.offsetHeight + offset + ";");
}

function playSound(url) {
  sound = new Audio(url.toString());
  sound.play();
}

function getLocation(char) {
  let chars = [];
  let current = window.location.href;
  let linkString = current.split('');
  let b = 0;
  for (i = 0; i < linkString; i++) {
    if (linkString[i] == char) {
      chars[b] = 1;
      b++;
    }
  }
  let lastItem = chars[chars.length - 1];
  let urlString = linkString.slice(lastItem + 1).join('');
  return urlString;
}

function psuedoA(url, loc) {
  if (loc != '') {
    window.open(url, loc);
  } else {
    window.location = url;
  }
}