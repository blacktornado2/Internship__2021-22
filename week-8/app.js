const todos = document.querySelectorAll(".todo");
const saveBtn = document.querySelector(".save-btn");
const addForm = document.querySelector(".add");
const searchInput = document.querySelector(".search input");
const list = document.querySelector("ul");

let appData = [];
let searchFlag = false;
let searchString = "";

const generateTemplate = todo => {
    const html = `<li class="todo">${todo}</li>`;
    list.innerHTML += html;
};

const renderSearchData = arr => {
    list.innerHTML = "";
    arr.forEach(generateTemplate);
};

// If there is anything in localStorage, render that list
if (
    localStorage.getItem("todo-app") &&
    JSON.parse(localStorage.getItem("todo-app")).todos.length
) {
    appData = JSON.parse(localStorage.getItem("todo-app")).todos;
    appData.forEach(generateTemplate);
}

if (
    localStorage.getItem("todo-app") &&
    JSON.parse(localStorage.getItem("todo-app")).searchFlag
) {
    searchFlag = true;
    let searchData = appData.filter(ele => ele.includes(searchString));
    renderSearchData(searchData);
}

addForm.addEventListener("submit", e => {
    e.preventDefault();
    const newTodo = addForm.add.value.trim(); // name in input

    if (newTodo.length) {
        appData.push(newTodo);
        generateTemplate(newTodo);
        localStorage.setItem(
            "todo-app",
            JSON.stringify({
                todos: [...appData],
                searchFlag: searchFlag,
                searchString: searchString,
            })
        );
        addForm.reset();
    }
});

saveBtn.addEventListener("click", e => {
    e.preventDefault();
    const newTodo = addForm.add.value.trim(); // name in input

    if (newTodo.length) {
        appData.push(newTodo);
        generateTemplate(newTodo);
        localStorage.setItem(
            "todo-app",
            JSON.stringify({
                todos: [...appData],
                searchFlag: searchFlag,
                searchString: searchString,
            })
        );
        addForm.reset();
    }
});

// Searching
searchInput.addEventListener("keyup", e => {
    e.preventDefault();
    searchFlag = true;
    searchString = e.target.value;
    localStorage.setItem(
        "todo-app",
        JSON.stringify({
            todos: [...appData],
            searchFlag: searchFlag,
            searchString: searchString,
        })
    );
    let searchData = appData.filter(ele => ele.includes(searchString));
    renderSearchData(searchData);
});
