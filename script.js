function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function _apply() {
  document.getElementById("loading_img").style.width = "164";
  document.getElementById("loading_img").style.opacity = "1";
  document.getElementById("loading_img2").style.width = "0";
  let title = document.getElementById("title");
  let imgs = document.getElementById("loading");
  let body = document.getElementsByTagName("body");
  body[0].style.visibility = "visible";
  let title_container = document.getElementById("title-container");
  let font_size = 5;
  //let bg = document.getElementById("background");
  /*if (window.innerWidth <= 640) {
    bg.src =
      "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/Heve_tel.png?v=1711793950637";
  } else {
    bg.src =
      "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/Heve_ordi.png?v=1711793957612";
  }*/
  let diviseur = 1;
  if (title.classList.contains("title-50p")) {
    diviseur = 2;
  }
  const limit = title_container.offsetWidth;
  while (title_container.offsetWidth <= window.innerWidth / diviseur) {
    title.style.fontSize = `${font_size}rem`;

    font_size += 1;
  }
  if (window.innerWidth <= 640) {
    font_size -= 3.1;
  } else {
    font_size -= 2;
  }
  title.style.fontSize = `${font_size}rem`;

  let navbar = document.getElementById("navbar");

  if (window.innerWidth <= 640) {
    navbar.style.top = `33vh`;
  } else {
    navbar.style.top = `${title_container.offsetHeight}px`;
  }

  let content_list = document.getElementById("content-list");
}

function _showAnim() {
  document.getElementById("loading2").style.opacity = "0";
  let img = document.getElementById("loading");
  img.style.opacity = "1";
}
function _showAnim2() {
  document.getElementById("loading").style.opacity = "0";
  let img2 = document.getElementById("loading2");
  img2.style.opacity = "1";
}

function changeImg() {
  let img = document.getElementById("join-img");

  let images = [
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit5.jpg?v=1711577657592",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit7.jpg?v=1711577659978",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit4.jpg?v=1711577656056",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit3.jpg?v=1711577655061",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit2.jpg?v=1711577653820",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit1.jpg?v=1711577651073",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit6.jpg?v=1711577658216",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit9.jpg?v=1711577649882",
    "https://cdn.glitch.global/e5414ed1-8c63-41fa-9343-9c30e2e12e71/voit8.jpg?v=1711577648381",
  ];
  for (let i = 0; i < images.length; i++) {
    setTimeout(() => { img.src = images[i] }, i*100);
  }
}
//window.setTimeout(_showAnim2, 0);
//window.setTimeout(_showAnim, 500);
window.setTimeout(_apply, 1000);
window.setInterval(changeImg, 1000);
