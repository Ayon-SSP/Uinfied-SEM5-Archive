function calculate() {
    var num1 = parseInt(document.getElementById("mass").value)
    var num2 = parseInt(document.getElementById("height").value)
    var result = ("BMI="+(num1 / (num2 * num2)))
    document.getElementById("Disp").innerHTML = result
}
