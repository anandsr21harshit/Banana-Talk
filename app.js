const textInput = document.getElementById("textInput");
const btnTranslate = document.getElementById("btn-translate");
const output = document.getElementById("output");

let url = "https://api.funtranslations.com/translate/minion.json";

btnTranslate.addEventListener("click",()=>{
    let input = textInput.value;
    let finalURL = constructURL(input);
    fetch(finalURL) // returns a promise
        .then(response =>response.json())    // parse response object to JSON using .json() method. It returns a promise which is resolved to give us the data
        .then(data=> output.innerText=data.contents.translated)
        .catch(()=>alert("Some error occured"));
});

function constructURL(input){
    return `${url}?text=${input}`;
}


