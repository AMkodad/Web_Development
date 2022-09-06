alert("WELCOME TO CASIO CALCULATOR PAGE");
function discard(){
    document.getElementById("display").value = "";
}
function operation(a){
    document.getElementById("display").value += a;
}
function calculation(){
    var q = document.getElementById("display").value;
    document.getElementById("display").value = eval(q);
}