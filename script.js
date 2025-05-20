const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// custom notification for alart 
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.className = "show";
    setTimeout(() => {
        toast.className = toast.className.replace("show", "");
    }, 3000);
}

function AddTask() {
    if (inputBox.value.trim() === '') {
        showToast("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // adding cancel icon
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Cross symbol
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}

inputBox.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        AddTask();
    }
});


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


// to store data in the browser , saving data 
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

//display that data when we open this page on browser
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();