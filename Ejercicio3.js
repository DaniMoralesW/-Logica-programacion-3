document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcular").addEventListener("click", function () {
        const numInput = document.getElementById("num");
        const factorialResult = document.getElementById("factorial");

        const num = parseFloat(numInput.value);

        if (isNaN(num) || num < 0) {
            alert("Por favor, introduce un valor válido y positivo");
        } else {
            const factorial = calcularFactorial(num);
            factorialResult.innerHTML = factorial;
        }
    });
});

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFactorial(numero - 1);
    }
}
