function find_the_big_guy() {
    // using windows.prompt() to get user input
    var n1 = parseInt(
        prompt("Enter a number 1: ")
    );
    var n2 = parseInt(
        prompt("Enter a number 2: ")
    );
    var n3 = parseInt(
        prompt("Enter a number 3: ")
    );

    // null check
    if (n1 == null || n2 == null || n3 == null) {
        console.log("Nan numbers")
        alert("Something went wrong | Nan values [FU]")
        
    }
    // greatest of three
    if (n1 > n2 &&  n1 > n3) {
        console.log("Greatest number is: " + n1)
        alert("Greatest number is: " + n1)
    }
    else if (n2 > n1 && n2 > n3) {
        console.log("Greatest number is: " + n2)
        alert("Greatest number is: " + n2)
    }
    else {
        alert("Greatest number is: " + n3)
        console.log(n3)
    }
}
