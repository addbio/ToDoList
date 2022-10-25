let todoInput; // miejsce, gdzie użytkownik wpisuje treść zadania
let errorInfo; // info brak zadań / konieczność wpisania tekstu
let addBtn; // przycisk ADD = dodaje nowe elementy do listy
let ulList; // lista zadań, tagi ul
let newTodo; // nowo dodany LI, nowe zadanie
let popup; // popup
let popupInfo; // tekst w popupie, jak się doda pusty tekst
let todoToEdit; // edytowany Todo
let popupInput; // input w  popapie
let popupAddBtn; // przycisk "zatwierdź" w popupie
let popupCloseBtn; // przycisk "anuluj" w popapie

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTodo);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeTodoText);
  todoInput.addEventListener("keyup", enterKeyCheck);
};

const addNewTodo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    createToolsArea();
    ulList.append(newTodo);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treść zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
  }
};

const editTodo = (e) => {
  todoToEdit = e.target.closest("li");

  popupInput.value = todoToEdit.firstChild.textContent;
  console.log(todoToEdit.firstChild);
  popup.style.display = "flex";
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.style.textContent = "";
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść!";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();

  const allTodos = ulList.querySelectorAll("li");

  if (allTodos.length === 0) {
    errorInfo.textContent = "brak zadań na liście";
  }
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter") {
    addNewTodo();
  }
};

document.addEventListener("DOMContentLoaded", main);

// let score

// const add = (x, y) => {
//   score = x + y
//   showScore()
// }

// const showScore = () => {
//   console.log(score);
// }

// add(5, 5)

// const add2 = (x, y) => {
//   const score2 = x + y;
//   showScore2(score)
//   showScore2(score2)
// }

// const showScore2 = score2 => {
//   console.log(`'wynik to ${score2}'`);
// }

// add2(19, 3)

// function odliczanie() {
//   let dzisiaj = new Date();

//   let dzien = dzisiaj.getDate();
//   let miesiac = dzisiaj.getMonth();
//   let rok = dzisiaj.getFullYear();

//   let sekunda = dzisiaj.getSeconds();

//   setTimeout("odliczanie()", 1000);
//   document.getElementById("zegar").innerHTML = dzien + "/" + miesiac + "/" + rok+"/"+sekunda;
// }
