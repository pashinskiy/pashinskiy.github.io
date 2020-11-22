//сообщение об отправки данных
function sendMessage(){
  let div = document.createElement('div');
  div.style.backgroundColor = "rgba(246, 174, 72, .9)";
  div.style.borderRadius = "1em";
  div.style.color = "#fff";
  div.style.padding = "2em";
  div.style.position = "fixed";
  div.style.bottom = "50%";
  div.style.left = "50%";
  div.style.textAlign = "center";
  div.style.transform = "translate(-50%)";
  div.innerText = "Данные отправлены";
  document.body.appendChild(div);
  setTimeout(()=>div.remove(),3000);
}

//.base одной высоты
window.addEventListener("load", function () {
  let base = document.querySelectorAll('.base');
  if (document.documentElement.offsetWidth <= 550) return;
  let height = document.querySelector(".three_base").getBoundingClientRect().height
  for (let elem of base) {
    elem.style.height = height + "px";
  }
});

//обработчик отправки данных
document.querySelector("#callback").addEventListener("submit", function getData(e) {
  e.preventDefault();

  let fullName = e.currentTarget[0].value + " " + e.currentTarget[1].value;
  let e_mail = e.currentTarget[3].value;
  let message = e.currentTarget[2].value;
  var http = new XMLHttpRequest();
  var url = "https://script.google.com/macros/s/AKfycbyoALfl9hwyWZKNStxgIpAG5pWUry_puO9YFsVzn8fSzr_oAHDT/exec";
  var params = "p1=" + fullName + "&p2=" + e_mail + "&p3=" + message;
  http.open("GET", url + "?" + params, true);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 0) sendMessage();
  }
  http.send();
  e.currentTarget[0].value = e.currentTarget[1].value = e.currentTarget[2].value = e.currentTarget[3].value = "";

});


//выпадающее меню на мобильных
burger.addEventListener("click",function(){

  menu.style.display = window.getComputedStyle(menu).display == "none" ? "block" : "none";

  if (menu.onclick) return;

  menu.onclick = function(e){
    e.preventDefault();
    menu.style.display = window.getComputedStyle(menu).display == "none" ? "block" : "none";
    if (e.target.nodeName != "A") return;
    let height = +window.getComputedStyle(document.querySelector("nav")).height.slice(0,-2);
    let scroll = document.querySelector(e.target.hash).offsetTop;
    window.scrollTo(0,scroll-height);
  };

});



document.querySelector(".three_base").addEventListener("click",function(e){
  let parent = e.target.closest(".base");
  if (!parent) return;
  let value = parent.querySelector("h3").textContent;
  message.value = `Узнать цену пакета "${value}" для моего проекта.`;
});

document.querySelector(".servise").addEventListener("click",function(e){
  let parent = e.target.closest(".product");
  if (!parent) return;
  let value = parent.querySelector("h1").textContent;
  message.value = `Необходимо разработать ${value}.`;
});

document.querySelector(".last_job__button").addEventListener("click",function(e){
  let d = document.querySelector("#callback");
  let scroll = document.querySelector("#contact").offsetTop + document.querySelector("#callback").offsetTop;
  window.scrollTo(0,scroll);
  message.value = `Отправьте больше своих работ на мой e-mail.`;
});

document.querySelector(".trade_in__button").addEventListener("click",function(e){
  let d = document.querySelector("#callback");
  let scroll = document.querySelector("#contact").offsetTop + document.querySelector("#callback").offsetTop;
  window.scrollTo(0,scroll);
  message.value = `Оцените мой сайт.\nАдрес сайта:`;
});