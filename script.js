let todoInput, errorInfo, addBtn, ulList, newTodo;

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input');
    errorInfo = document.querySelector('.error-info');
    addBtn = document.querySelector('.btn-add');
    ulList = document.querySelector('.todolist ul');

}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}



const addNewTodo = () => {
    if(todoInput.value !==''){
        newTodo = document.createElement('li');
        newTodo.textContent = todoInput.value;
        ulList.append(newTodo);
        todoInput.value = '';
        errorInfo.textContent = '';
    }else {
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

const createToolsArea = () => {
     const toolsPanel = document.createElement('div')
     toolsPanel.classList.add('tools')
}

document.addEventListener('DOMContentLoaded', main)

