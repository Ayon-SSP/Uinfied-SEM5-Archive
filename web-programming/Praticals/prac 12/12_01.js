
function trigger() {
    // get week day
    var d = new Date();
    var day = d.getDay();

    var inp = prompt(parseInt("Enter Day Number"))
    if (inp == day) {
        alert("Hit");
    }
    else {
        alert("Missed")
    }
}
