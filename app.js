btn_translate = document.getElementById("btn_translate");
input_text = document.querySelector("#txt-input");
output_div = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/minion.json";

function makeUrl(text){
    return url + "?" + "text="+ text;
}


function clickEventHandler(){
    inputtxt = input_text.value;

    fetch(makeUrl(inputtxt))
    .then(response => response.json())
    .then(json =>{
     var output_txt = json.contents.translated;
     output_div.innerText = output_txt;
    })
};


btn_translate.addEventListener("click", clickEventHandler);