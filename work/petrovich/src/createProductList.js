
//шаблон карточки товара
import html from "./frame.html";

function createFrame(index){

    let div = document.createElement("div");
    div.className = `products_page pg_${index}`;
    div.innerHTML = html;

    return div;
}

export default function(products,products_section){
  

    products.forEach(function(product, index){
        //создаем карточку товара, добавляем в поле вывода
        let div = createFrame(index);
        products_section.appendChild(div);

        //заполняем карточку товара
        div.querySelector("span[data-product-id]").dataset.productId = product["productId"];

        div.querySelector(".product_code").innerHTML = "Код: " + +product["code"];

        div.querySelector(".product_description>.product__link").innerHTML = product["title"];

        div.querySelector(".product__link>img").src = "https:" + product["primaryImageUrl"].slice(0,-4) 
        + "_220x220_1" + product["primaryImageUrl"].slice(-4);
        
        div.querySelector(".product_tags").innerHTML += product["assocProducts"].split("\n")
        .map(elem => "<a>" + elem.slice(0,-1))
        .join(", </a>") + ".</a>";

        div.querySelector(".goldPrice").innerHTML = product["priceGoldAlt"].toFixed(2);

        div.querySelector(".retailPrice").innerHTML = product["priceRetailAlt"].toFixed(2);
        
        let binding = div.querySelectorAll(".ng-binding");
        binding[0].innerHTML = `за ${product["unitAlt"]}`;
        binding[1].innerHTML = `за ${product["unitFull"].slice(0,-1)}у`;
        binding[2].innerHTML = `можно купить за ${product["bonusAmount"]} балл`;
        binding[3].innerHTML = `Продается ${product["unitFull"]}ми:`;
        
        div.querySelector(".unit--infoInn").innerHTML = product["unitRatio"] 
        + " " + product["unit"] + " = " + (product["unitRatio"]/product["unitRatioAlt"]).toFixed(2) 
        + " " + product["unitAlt"];

        //блокируем input на ввод
        div.querySelector("input").setAttribute("readonly", "readonly");
    });
}