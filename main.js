const listsArr = [];

document.querySelector('button').addEventListener("click", function(){
    const listInput = document.querySelector('.listInput').value;
    if (listInput){
        listsArr.push(listInput);
        document.querySelector('#listsContainer').innerHTML += `<li class="listName"> ${listInput} <button class="deleteList">Delete</button></li>`;
        document.querySelector('.listInput').value = '';
        console.log(listsArr);
    }
});

function listDeleteButton(event) {
    const clickedElement = event.target;
    clickedElement.parentNode.remove();
}

document.addEventListener("click", function(event) {
    if (event.target.classList.contains("deleteList")) {
        listDeleteButton(event);
    }
});
