import polifill from "./closestMatchesPolifill";
polifill();

//массив объектов
const products = require('./products.json');
//поле вывода товаров
const products_section = document.querySelector('#products_section');

import createProductList from "./createProductList";
createProductList(products,products_section);


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
    parent.querySelector(".unit--infoInn").innerHTML = input.value 
    + " " + products[index]["unit"] + " = " + (input.value/products[index]["unitRatioAlt"]).toFixed(2) 
    + " " + products[index]["unitAlt"];
});
//смена цены
products_section.addEventListener("click", function(e){
    //если у элемента ли родителя нет класса .unit--select или уже есть класс .unit--active выход
    if (!e.target.closest(".unit--select") || e.target.closest(".unit--active")) return;
    //2й класс карточки товара вида pg_№ 
    let parent = e.target.closest(".products_page");
    let index = +parent.classList[1].slice(3);
    //родитель блоков .unit--select
    let wrap = e.target.closest(".unit--wrapper");

    //меняем наличие .unit--active
    wrap.children[0].classList.toggle("unit--active");
    wrap.children[1].classList.toggle("unit--active");

        
     if (wrap.children[0].classList.contains("unit--active")){

        parent.querySelector(".goldPrice").innerHTML = products[index]["priceGoldAlt"].toFixed(2);
        parent.querySelector(".retailPrice").innerHTML = products[index]["priceRetailAlt"].toFixed(2);
         
     }
     else{

        parent.querySelector(".goldPrice").innerHTML = products[index]["priceGold"].toFixed(2);
         parent.querySelector(".retailPrice").innerHTML = products[index]["priceRetail"].toFixed(2);

     }

   
});
//клик корзины
products_section.addEventListener("click", function(e){
    
    if (!e.target.closest(".btn_cart")) return;
    
    if (document.querySelectorAll(".cart_update")){
        
        let collection = document.querySelectorAll(".cart_update");
        for (let i = 0; i < collection.length; i++) collection[i].hidden = true;
    };

    let div = document.createElement("div");
    div.innerHTML = "Корзина обновлена";
    div.classList.add("cart_update");
    div.style.width = "12em"; 
    div.style.backgroundColor = "rgba(0,0,0,0.7)"; 
    div.style.color = "#fff"; 
    div.style.fontSize = "20px"; 
    div.style.padding = "0.5em"; 
    div.style.position = "fixed"; 
    div.style.top = "1.5em"; 
    div.style.right = "1.5em"; 
    div.style.cursor = "default";
    
    div.innerHTML += `<p style = "font-size:10px;">Добавлен товар: id = ${e.target.closest(".btn_cart").dataset.productId}<br>Количество: ${e.target.closest(".product__wrapper").querySelector("input").value}</p>`;
    
    let x = document.createElement("div");
    x.innerHTML = "&#10006;";
    x.style.width = "1em"; 
    x.style.backgroundColor = "rgba(0,0,0,0)"; 
    x.style.color = "#fff"; 
    x.style.fontSize = "20px"; 
    x.style.padding = "0"; 
    x.style.position = "absolute"; 
    x.style.top = "0.55em"; 
    x.style.right = "0.4em"; 
    x.style.cursor = "pointer";
    x.onclick = (e) => e.target.parentElement.hidden = true;;
    div.appendChild(x);


    document.body.appendChild(div);
    setTimeout(() => div.parentNode.removeChild(div), 3000);
    

});

