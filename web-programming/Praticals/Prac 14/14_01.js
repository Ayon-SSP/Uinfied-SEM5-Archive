function sum_1_to_n() {
    var n = Number.parseInt(prompt("Enter a number(value of n): "));
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum = sum + i;
    }
    document.write("Sum of 1 to " + n + " is " + sum);
}
