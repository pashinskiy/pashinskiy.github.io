import createProduct from "./createProduct";

(function(ELEMENT) {
    ELEMENT.matches = ELEMENT.matches || ELEMENT.mozMatchesSelector || ELEMENT.msMatchesSelector || ELEMENT.oMatchesSelector || ELEMENT.webkitMatchesSelector;
    ELEMENT.closest = ELEMENT.closest || function closest(selector) {
        if (!this) return null;
        if (this.matches(selector)) return this;
        if (!this.parentElement) {return null}
        else return this.parentElement.closest(selector)
      };
}(Element.prototype));

const products = require('./products.json');
//поле вывода товаров
const products_section = document.querySelector('#products_section');

products.forEach(function(product, index){
    //создаем карточку товара, добавляем в поле вывода
    let div = createProduct(product, index);
    products_section.appendChild(div);

    //заполняем карточку товара
    div.querySelector("span[data-product-id]").dataset.productId = product["productId"];

    div.querySelector(".product_code").innerText = "Код: " + +product["code"];

    div.querySelector(".product_description>.product__link").innerText = product["title"];

    div.querySelector(".product__link>img").src = "https:" + product["primaryImageUrl"].slice(0,-4) 
    + "_220x220_1" + product["primaryImageUrl"].slice(-4);
    
    div.querySelector(".product_tags").innerHTML += product["assocProducts"].split("\n")
    .map(elem => "<a>" + elem.slice(0,-1))
    .join(", </a>") + ".</a>";

    div.querySelector(".goldPrice").innerText = product["priceGoldAlt"].toFixed(2);

    div.querySelector(".retailPrice").innerText = product["priceRetailAlt"].toFixed(2);
    
    let binding = div.querySelectorAll(".ng-binding");
    binding[0].innerText = `за ${product["unitAlt"]}`;
    binding[1].innerText = `за ${product["unitFull"].slice(0,-1)}у`;
    binding[2].innerText = `можно купить за ${product["bonusAmount"]} балл`;
    binding[3].innerText = `Продается ${product["unitFull"]}ми:`;
    
    div.querySelector(".unit--infoInn").innerText = product["unitRatio"] 
    + " " + product["unit"] + " = " + (product["unitRatio"]/product["unitRatioAlt"]).toFixed(2) 
    + " " + product["unitAlt"];

    //блокируем input на ввод
    div.querySelector("input").setAttribute("readonly", "readonly");
});

//событие клика по стрелкам
products_section.addEventListener("click", function(e){
    //если не стрелка выходим
    if (!e.target.classList.contains("stepper-arrow")) return;
    //1й дочерний элемент родителя input 
    let input = e.target.parentElement.children[0];
    
    e.target.classList.contains("up") ? input.value++ : input.value--;
    if (input.value < 1) input.value = 1;
    //2й класс карточки товара вида pg_№ 
    let parent = e.target.closest(".products_page");
    let index = +parent.classList[1].slice(3);
    //меняем .unit--infoInn
    parent.querySelector(".unit--infoInn").innerText = input.value 
    + " " + products[index]["unit"] + " = " + (input.value/products[index]["unitRatioAlt"]).toFixed(2) 
    + " " + products[index]["unitAlt"];
});

products_section.addEventListener("click", function(e){
    //если у элемента ли родителя нет класса .unit--select или уже есть класс .unit--active выход
    if (!e.target.closest(".unit--select") || e.target.closest(".unit--active")) return;
    //2й класс карточки товара вида pg_№ 
    let parent = e.target.closest(".products_page");
    let index = +parent.classList[1].slice(3);
    //родитель блоков .unit--select
    let wrap = e.target.closest(".unit--wrapper");

    for (let div of wrap.querySelectorAll(".unit--select")){
        //меняем наличие .unit--active
        div.classList.toggle("unit--active");

        if (div.classList.contains("unit--active")){
            if (div == wrap.children[0]){

                parent.querySelector(".goldPrice").innerText = products[index]["priceGoldAlt"].toFixed(2);
                parent.querySelector(".retailPrice").innerText = products[index]["priceRetailAlt"].toFixed(2);
         
            }
            else{

                parent.querySelector(".goldPrice").innerText = products[index]["priceGold"].toFixed(2);
                parent.querySelector(".retailPrice").innerText = products[index]["priceRetail"].toFixed(2);

            }
        }
    }
    

    


});

products_section.addEventListener("click", function(e){
    
    if (!e.target.closest(".btn_cart")) return;
    
    if (document.querySelectorAll(".cart_update")){
        for (let elem of document.querySelectorAll(".cart_update")) elem.hidden = true;
    };

    let div = document.createElement("div");
    div.innerText = "Корзина обновлена";
    div.className = "cart_update";
    div.style = 'width: 12em; background-color: rgba(0,0,0,0.7); color:#fff; font-size: 20px; padding: 0.5em; position: fixed; top: 1.5em; right: 1.5em; cursor: default;';
    
    div.innerHTML += `<p style = "font-size:10px;">Добавлен товар: id = ${e.target.closest(".btn_cart").dataset.productId}<br>Количество: ${e.target.closest(".product__wrapper").querySelector("input").value}</p>`;
    
    let x = document.createElement("div");
    x.innerHTML = "&#10006;";
    x.style = 'width: 1em; background-color: rgba(0,0,0,0); color:#fff; font-size: 20px; padding: 0; position: absolute; top: 0.55em; right: 0.4em; cursor: pointer;';
    x.onclick = (e) => e.target.parentElement.hidden = true;;
    div.appendChild(x);


    document.body.appendChild(div);
    setTimeout(() => div.remove(), 3000);
    

});

