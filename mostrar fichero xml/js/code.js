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
    XMLHttpRequestObject.open("GET","libros.xml");
    XMLHttpRequestObject.onreadystatechange = function(){ 
        if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
            var xmlDoc = XMLHttpRequestObject.responseXML;
            var x = xmlDoc.getElementsByTagName("Libro");
            var texto = "";

            for(i = 0 ; i<x.length ; i++){
                texto+= x[i].getElementsByTagName("Autor")[0].childNodes[0].nodeValue + "<br>";
            }
            document.getElementById("contenido").innerHTML=texto;
        
        }      
            }
    XMLHttpRequestObject.send(null);
    }
}