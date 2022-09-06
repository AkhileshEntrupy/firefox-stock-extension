
function download_asjson() {
    console.log(document.URL.concat(" result of url_akycs"))
        
        alert( document.getElementsByClassName("chakra-heading css-1vj6v5q")[0].textContent );
        let full_text = "Standard"
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('download', document.URL.concat(".txt"));
        a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(full_text));
        a.click();
    //   };
    console.log("appended akycs")
    document.body.style.border = "5px solid green";
}
function download_asjson2() {
    console.log(document.URL.concat(" result of url_akycs"))
        alert( document.getElementsByClassName("chakra-heading css-1vj6v5q")[0].textContent );
        // r = document.getElementById('browse-grid')

        let full_text = "NonStandard"
        var a = document.createElement('a');
        document.body.appendChild(a);
        a.setAttribute('download', document.URL.concat(".txt"));
        a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(full_text));
        a.click();
    //   };
    console.log("appended akycs")
    document.body.style.border = "5px solid red";
}
// download_asjson(0)
var button = document.createElement('Button')
button.innerText = 'Save as Stadard?'
button.style.backgroundColor = 'Green';
button.style.color = 'white';
button.style.width = '150px';
button.style.height = '150px';
button.style.margin = "50px 10px 20px 30px"; 
// button.setAttribute('download', document.URL.concat(".txt"));
// button.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent("standard"));
button.addEventListener('click',download_asjson) 
document.getElementsByClassName("css-qt7qal")[0].appendChild(button)


var button2 = document.createElement('Button')
button2.innerText = 'Save as Non-Standard?'
button2.style.backgroundColor = 'Red';
button2.style.color = 'white';
button2.style.width = '150px';
button2.style.height = '150px';
// button2.setAttribute('download', document.URL.concat(".txt"));
// button2.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent("NonStand"));
button2.addEventListener('click',download_asjson2) 
document.getElementsByClassName("css-qt7qal")[0].appendChild(button2)
document.body.style.border = "5px solid blue";

