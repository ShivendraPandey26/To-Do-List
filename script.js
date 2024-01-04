const searchBar = document.getElementById('search-bar');
const inputContainer = document.getElementById('input-container');

function addTask() {

    if (searchBar.value === '') {
        alert("You must write something!!!")
    }
    else{

        let li = document.createElement("li");
        li.innerHTML = searchBar.value;
        inputContainer.appendChild(li);
        // console.log(searchBar);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    searchBar = "";
    saveData();
}

inputContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
},false);


function saveData() {
    localStoragest.setItem("data", inputContainer.innerHTML);
}

function showTask() {
    inputContainer.innerHTML = localStorage.getItem("data");
}
showTask();