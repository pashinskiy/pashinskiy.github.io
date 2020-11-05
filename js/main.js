window.addEventListener("load", function(){
    let text = first_message.innerHTML;
    first_message.style.height = getComputedStyle(first_message).height;
    first_message.innerHTML = "";
    first_message.style.opacity = "1";
    let stopId = setInterval(()=>{
        if(text.slice(0,1) == "<"){
            first_message.innerHTML += text.slice(0,text.indexOf(">",1)+1);
            text = text.slice(text.indexOf(">",1)+1);
            return;
        }
        first_message.innerHTML += text.slice(0,1);
        text = text.slice(1);
        if (!text.length) clearInterval(stopId);
    }, 50);
});