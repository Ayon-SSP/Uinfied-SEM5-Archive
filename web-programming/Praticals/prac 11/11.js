var array;
var de = 2;

function showDate() {
    var d = new Date();
    document.getElementById("date").innerHTML = (d.getHours() + "-"+ d.getDay() +"-"+ d.getMonth());
}

function trigger() {
    document.getElementById("arrayDisp").innerHTML = ("Length: " + array.length+" "+
                                                    "Elements: [" + array+"]")

}
function showArray() {
    array = document.getElementById("array").value.split(",");
    trigger();
    var arrayLen = array.length;
    document.getElementById("arrayd").innerHTML = arrayLen;
}

function M_push() {
    array.push(de);
    trigger();
}

function M_pop() {
    array.pop();
    trigger();
}

function M_shift() {
    array.shift();
    trigger();
}

function M_unshift() {
    array.unshift(de);
    trigger();
}

function M_slice() {
    document.getElementById("arrayd").innerHTML= array.slice(0,1);
    trigger();
}

function M_splice() {
    array.splice(0,1);
    trigger();
}
