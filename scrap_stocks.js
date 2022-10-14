
function download_asjson(index) {
    r = document.getElementById('browse-grid')
    let full_text = ""
    for (let i = 0; i < r.childNodes.length; i++) {
        shoe = r.childNodes[i]
        x = shoe.textContent
        full_text += "NEWSHOE_"
        full_text += x
        full_text += "\n"
    }
    b = full_text
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('download', document.URL.concat(".txt"));
    a.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(b));
    a.click();
    document.getElementsByClassName("chakra-icon css-guhk8i")[index].parentElement.click()
}
// for first time 
download_asjson(0)
// then after it will do the next auto, throw error when no next page available
download_asjson(1)

// for (let i = 0; i < 10; i++) {
//     while (document.readyState != "complete") { }
//     if (document.readyState == "complete") {
//         download_asjson(1);
//     }
// }
