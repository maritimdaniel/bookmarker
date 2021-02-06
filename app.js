const name = document.querySelector('.name-input');
const url = document.querySelector('.url-input');
const submitBtn = document.querySelector('.submit-btn');
const displayContainer = document.querySelector('.display-container');

submitBtn.addEventListener('click',function(event){
    event.preventDefault();
    const nameValue = name.value;
    const urlValue = url.value;

    //checking the input values
    if(nameValue === '' || urlValue === ''){
        alert('Empty input! Please fill all the input.')
        return
    }
    //check if is a valid url
    let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    let regex = new RegExp(expression);
    if(!urlValue.match(regex)){
        alert ('please use a valid URL')
        return
    }
    //creating div
    const div = document.createElement('div');
    div.className = 'display';

    //creating h2
    const h2 = document.createElement('h2');
    h2.innerText = nameValue;

    //creating a and href attribute
    const a = document.createElement('a');
    a.className = 'btn visit';
    a.innerText = 'Visit';
    const href = document.createAttribute('href');
    href.value = urlValue;
    a.setAttributeNode(href);

    //creating delete button
    const btn = document.createElement('button');
    btn.className = 'btn delete';
    btn.innerText = 'Delete';
    //deleting the submited element
    btn.addEventListener('click',function(event){
        event.target.parentElement.remove();
    })

    //appending created element to the html document
    div.append(h2,a,btn);
    displayContainer.appendChild(div);

    //clearing the input values on submiting values
    name.value = '';
    url.value = '';

})

