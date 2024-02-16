const listsArr = [];

document.querySelector('button').addEventListener("click", function(){
    const listInput = document.querySelector('.listInput').value;
    if (listInput){
        listsArr.push(listInput);
        document.querySelector('#listsContainer').innerHTML += `<li class="listName"> ${listInput} </li>`;
        document.querySelector('.listInput').value = '';
        console.log(listsArr);
    }
})

// document.querySelector('.listName').addEventListener("dblclick", function(){

// })