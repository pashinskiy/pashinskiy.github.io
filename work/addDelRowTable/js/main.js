document.addEventListener("DOMContentLoaded", ready);

function ready(){

    let localData;
    let idUser; 
    let changeUser;
    let table = document.querySelector("#list");
    let form = document.querySelector("#add_client");


    fetch("data/data.json")
        .then(res => res.json())
        .then(obj => {
            localData = obj;
            idUser =  localData.length;
            obj.forEach(function(el){
                document.querySelector("#list>tbody").append(createTr(el));
            });
        });

    

    table.addEventListener("click", function(e){
        if (!e.target.classList.contains("fas")) return;
        let row = e.target.closest("tr");
        if (e.target.classList.contains("fa-trash")){
            row.remove();
            return;
        }
        for (let i=0; i<form.length-1; i++){
            if (i==3){
                form[i].value = "00" + row.cells[i+1].textContent.split(".").reverse().join("-");
                continue;
            }
            form[i].value = row.cells[i+1].textContent;
        }
        form[form.length-1].textContent = "Сохранить";
        changeUser = row;
    });

    
    form.addEventListener("submit", function(e){
        e.preventDefault();
        for (let i=0; i<form.length-1; i++){
            if (!form[i].value) return warning();
        }
        if (!form[2].value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/)) return warning();
        if (!form[0].value.match(/^[a-zA-Zа-яА-Я/]*$/) || 
            !form[1].value.match(/^[a-zA-Zа-яА-Я/]*$/) || 
            !form[4].value.match(/^[a-zA-Zа-яА-Я/]*$/)) return warning();
        if (!form[3].value.match(/^\d{4}\-\d{2}\-\d{2}$/)) return warning();


        let obj = {
            id: changeUser ? +changeUser.cells[0].textContent : ++idUser,
            name: form[0].value,
            lastName: form[1].value,
            phone: form[2].value,
            date: form[3].value.slice(2).split("-").reverse().join("."),
            service: form[4].value,
            square: form[5].value
        }
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
          );
        window.scrollTo(0,scrollHeight);
        if (!changeUser) {
            document.querySelector("#list>tbody").append(createTr(obj));
            return;
        }
        changeUser.before(createTr(obj));
        changeUser.remove();  
        changeUser = null;  
        form[form.length-1].textContent = "Добавить"; 
    });
}

function warning(){
    let div = document.createElement("div");
    div.className = "warning";
    div.innerHTML = "Ошибка<br> попробуйте снова!";
    document.querySelector("#add_client").append(div);
    setTimeout(() => div.remove(), 2000);
    return 0;
}

function createTr(el){
    let tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${el.id}</td>
    <td>${el.name}</td>
    <td>${el.lastName}</td>
    <td>${el.phone}</td>
    <td>${el.date}</td>
    <td>${el.service}</td>
    <td>${el.square}</td>
    <td>
        <button class="btn" style="color:red;">
            <i class="fas fa-trash"></i>
        </button>
        <button class="btn">
            <i class="fas fa-pencil-alt"></i>
        </button>
    </td>`
    return tr;
}
