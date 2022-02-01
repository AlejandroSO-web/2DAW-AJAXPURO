window.onload = function(){
    if (window.XMLHttpRequest) {
         XMLHttpRequestObject = new XMLHttpRequest();
      } else if (window.ActiveXObject) {
                 XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
  }
    document.getElementById("boton").onclick = sacardatos;

}

function sacardatos(){
    if(XMLHttpRequestObject) {
    var lugar = document.getElementById("contenido");
    XMLHttpRequestObject.open("GET","nombres.json");
    XMLHttpRequestObject.onreadystatechange = function(){ 
        if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
            let txt = JSON.parse(XMLHttpRequestObject.responseText);
            lugar.innerHTML = txt.nombre + ", " + txt.edad + ", " + txt.ciudad;
        }      
            }
    XMLHttpRequestObject.send(null);
    }
}