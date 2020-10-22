import html from "./frame.html";
export default function(product, index){
    let div = document.createElement("div");
    div.className = `products_page pg_${index}`;
    div.innerHTML = html;
    return div;
}