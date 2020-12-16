// const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const blackButton = document.getElementById('blackButton');
const listColorBtn = document.getElementById('listColorBtn');

const myHeadingTag = document.getElementsByTagName('h1')[0];
const myList = document.getElementsByTagName('li');

const errNotPurple = document.getElementsByClassName('errNotPurple');

const myListSelectAll = document.querySelectorAll('li');
const myListByUl = document.querySelectorAll('#purpleList li');

const evenLi = document.querySelectorAll('li:nth-child(even)');

myButton.addEventListener('click', () => {
    myHeadingTag.style.color = myTextInput.value;
});

blackButton.addEventListener('click', () => {
    myHeadingTag.style.color = 'black';
});

// Change color when user is in text box and either presses enter (13) or tab (9)
function checkEnterClick(e) {
    if(e.keyCode == 13 || e.keyCode == 9){
        myHeadingTag.style.color = myTextInput.value;
        myTextInput.value = '';
    }
}

listColorBtn.addEventListener('click', () => {
    for (let index = 0; index < myList.length; index++) {
        const element = myList[index];
        if(element.className != 'err-not-purple'){
            element.style.color = myTextInput.value;   
        }
             
    }

    
    const evenLi = document.querySelectorAll('li:nth-child(even)');
    evenLi.forEach(element => {
        element.style.backgroundColor = 'gray';
    });

    myTextInput.value = '';
});

