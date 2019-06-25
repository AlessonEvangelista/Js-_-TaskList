var listElement = document.querySelector('.app ul');
var inputElement = document.querySelector('.app input');
var buttonElement = document.querySelector('.app button');

var todos = JSON.parse(localStorage.getItem('list_Elements')) || [
    {id: 1, text: 'Acordar cedo '},
    {id: 2, text: 'Fazer café '}
];

function renderUl(){
    listElement.innerHTML = '';

    for(todo of todos) {
        var todoElemnt = document.createElement('li');
        todoElemnt.setAttribute('class', 'list-group-item');
        var todoText = document.createTextNode(todo.id + '. '+ todo.text);
        
        /*
        var linkEdit = document.createElement('a');
        linkEdit.setAttribute('href', '#');
        var linkEditText = document.createTextNode('Editar');

        linkEdit.appendChild(linkEditText);*/

        var linkExcluir = document.createElement('a');
        linkExcluir.setAttribute('href', '#');
        var linkExcluirText = document.createTextNode('Excluir');

        linkExcluir.appendChild(linkExcluirText);

        var getPosition = todos.indexOf(todo);
        linkExcluir.setAttribute('onclick', 'deleteElement(' + getPosition + ')')

        todoElemnt.appendChild(todoText);
        //todoElemnt.appendChild(linkEdit);
        todoElemnt.appendChild(linkExcluir);

        listElement.appendChild(todoElemnt);
    }
}

function addElement(){
    var id = todos.length > 0 ? todos[todos.length - 1].id : 0;
    var elementText = {
        id: id+1, 
        text: inputElement.value+' ' 
    }
    todos.push(elementText);
    inputElement.value = '';
    saveStorageElements();
    renderUl();
    
}

function deleteElement(pos) {
    todos.splice(pos,1);
    saveStorageElements();
    renderUl();
}

function saveStorageElements() {
    localStorage.setItem('list_Elements', JSON.stringify(todos));
}

buttonElement.onclick = addElement;
renderUl();