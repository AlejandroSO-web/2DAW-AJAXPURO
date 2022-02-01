window.onload = function(){
    if (window.XMLHttpRequest) {
         XMLHttpRequestObject = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
                XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
 }
    document.getElementById("2").onclick = sacardatos;

}

function sacardatos(){
    if(XMLHttpRequestObject) {
    var lugar = document.getElementById("contenido");
    XMLHttpRequestObject.open("GET", "secundaria.html");
    XMLHttpRequestObject.onreadystatechange = function(){
    if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
    lugar.innerHTML = XMLHttpRequestObject.responseText;
        }      
            }
    XMLHttpRequestObject.send(null);
    }
}
