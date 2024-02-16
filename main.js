const listsArr = [];

document.querySelector('button').addEventListener("click", function(){
    const listInput = document.querySelector('.listInput').value;
    listsArr.push(listInput);
    document.querySelector('#lists').innerHTML += `<li> ${listInput} </li>`
    
    console.log(listsArr);
})