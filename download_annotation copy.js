	
// document.body.style.border = "5px solid red";

function download_asjson() {
    console.log(document.URL.concat(" result of url_akycs"))

    // r = document.getElementById('browse-grid')
    // let full_text = ""
    // for (let i = 0; i < r.childNodes.length; i++) {
    //     shoe = r.childNodes[i]
    //     x = shoe.textContent
    //     full_text += "NEWSHOE_"
    //     full_text += x
    //     full_text += "\n"
    // }
    // b = full_text
    // var a = document.createElement('a');
    // const button = document.createElement('button')
    //   // Set the button text to 'Can you click me?'
    //   button.innerText = 'Can you click me?'
    //   button.id = 'mainButton'
    //   // Attach the "click" event to your button
    //   button.addEventListener('click', () => {
    //     // When there is a "click"
    //     // it shows an alert in the browser
    //     alert('Oh, you clicked me!')
    //   })
    // document.body.appendChild(x)
    // document.getElementsByClassName("css-qt7qal")[0].appendChild(x);
    // document.getElementsByClassName("css-qt7qal")[0].innerHTML="<button>Click Me</button>";
    // document.getElementsByClassName("css-qt7qal")[0].onclick = function() {
    //     // alert("aller");
        
        alert( document.getElementsByClassName("chakra-heading css-1vj6v5q")[0].textContent );
        // r = document.getElementById('browse-grid')

        let full_text = "Standard"
        // for (let i = 0; i < r.childNodes.length; i++) {
        //     shoe = r.childNodes[i]
        //     x = shoe.textContent
        //     full_text += "NEWSHOE_"
        //     full_text += x
        //     full_text += "\n"
        // }
        var a = document.createElement('a');
        // document.body.appendChild(b)
        document.body.appendChild(a);
        a.setAttribute('download', document.URL.concat(".txt"));
        a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(full_text));
        a.click();
    //   };
    console.log("appended akycs")
    document.body.style.border = "5px solid green";

    // document.body.appendChild(a);
    // a.setAttribute('download', document.URL.concat(".txt"));
    // a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(b));
    // document.getElementsByClassName('chakra-button css-6vsvem')
    // .setAttribute( "onClick", "test_fn('111,222')" );
    // a.click();
    // document.getElementsByClassName("chakra-icon css-guhk8i")[index].parentElement.click()
}
	
// document.body.style.border = "5px solid red";

function download_asjson2() {
    console.log(document.URL.concat(" result of url_akycs"))
        alert( document.getElementsByClassName("chakra-heading css-1vj6v5q")[0].textContent );
        // r = document.getElementById('browse-grid')

        let full_text = "NonStandard"
        var a = document.createElement('a');
        // document.body.appendChild(b)
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
button.innerText = 'Save Stadard?'
// button.setAttribute('download', document.URL.concat(".txt"));
// button.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent("standard"));
button.addEventListener('click',download_asjson) 
document.getElementsByClassName("css-qt7qal")[0].appendChild(button)


var button2 = document.createElement('Button')
button2.innerText = 'Save Non-Standard?'
// button2.setAttribute('download', document.URL.concat(".txt"));
// button2.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent("NonStand"));
button2.addEventListener('click',download_asjson2) 
document.getElementsByClassName("css-qt7qal")[0].appendChild(button2)
document.body.style.border = "5px solid blue";

