document.getElementById("myButton").addEventListener("click", function () {
    var real = parseFloat(document.getElementById("realcoin").value);
    var dolar = parseFloat(document.getElementById("dolarcoin").value);
    var result = (real * dolar);
    result = result.toFixed(2);
    alert("R$ " + result);
});
