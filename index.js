/**
 * Created by Nishant on 09-10-2017.
 */
let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');

let numberInput = document.querySelector('#numberInput');
numberInput.addEventListener('keypress', getFactFetch);
//XHR
/*function getFactAjax() {
    let number = numberInput.value;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://numbersapi.com/'+number);
    //In HTTP status 200 means everything is OK
    xhr.onload = function () {
        if (this.status == 200 && number != '') {
            fact.sytle.display = 'block';
            factText.innerText = this.responseText;
        }
    }
    xhr.send();
}*/
//FETCH API
function getFactFetch() {
    let number = numberInput.value;
    fetch('http://numbersapi.com/'+number)
        .then(response => response.text())
        .then(data => {
            if(number != ''){
                fact.style.display = 'block';
                factText.innerText = data;
            }
        })
        .catch(err => console.log(err));
}