function calcularDesconto() {
    const auxMedication = document.getElementById("medicamento");
    
    const medicationName = auxMedication.value;

    const auxPrice = document.getElementById("preco");

    const medicationPrice = auxPrice.value;

    document.getElementById("medNameExtra").innerHTML = "Promoção de " + medicationName;

    document.getElementById("price").innerHTML = "Leve 2 por apenas R$: " + parseInt(medicationPrice) * 2;
}