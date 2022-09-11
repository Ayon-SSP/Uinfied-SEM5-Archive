function factorial() {
    const num = Number.parseInt(prompt("Enter a number: "));

    if (num == 0) {
        document.write("Factorial of 0 is 1");
    }
    if (num > 0) {
        var fact = 1;
        for (var i = 1; i <= num; i++) {
            fact = fact * i;
        }

        document.write("Factorial of " + num + " is " + fact);
    }
}

