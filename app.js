var list = document.getElementById("items-list");



function addItem(){
    var todo_item = document.getElementById("todo-input");

    var li = document.createElement("li");
    var liText = document.createTextNode(todo_item.value);
    li.appendChild(liText);

    var delBtn = document.createElement("button");
    var delText = document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn-1 btn btn-outline-danger");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(delText);
    

    
    var editBtn = document.createElement("button");
    var editText = document.createTextNode("EDIT");
    editBtn.setAttribute("class","btn-1 btn btn-outline-primary");
    editBtn.setAttribute("onclick","editItem(this)");
    editBtn.appendChild(editText);
    
    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li);

    todo_item.value = "";

}

function delItem(e){
    e.parentNode.remove();
}

function editItem(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editValue = prompt("Enter Edit Value", val);
  
    e.parentNode.firstChild.nodeValue = editValue;
}


function removeAll(){
    list.innerHTML = ""
}