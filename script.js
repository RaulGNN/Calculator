// Import Math.js


//Define the buttons

let keys = document.querySelectorAll(".input-button");
let equal = document.getElementById("equal");
let negativeNumber = document.getElementById("negative");
let fullClear = document.getElementById("full-clear");
let deleteKey = document.getElementById("delete");
let valueWindow = document.getElementById("input");
let equalOn = false;

//Delete all numbers
fullClear.addEventListener("click", clearWindows());

//Erase Single Digit
deleteKey.addEventListener("click", () => {
    valueWindow.value = valueWindow.value.substr(0, input.value.length - 1);
});

//Add keys
keys.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equalOn){
            clearWindows();
            equalOn = false;
        } else if(button_class.value == "."){
            var aux = valueWindow + "."
        }
        valueWindow.value += button_class.value;
    })
});

equal.addEventListener("click", () => {
    equalOn = true;

    var res = valueWindow.value;
    
    try {
        var solution = eval(res);

        if(Number.isInteger(solution)){
            valueWindow.value = solution;
        } else {
            valueWindow.value = solution.toFixed(2);
        }
    } catch (err) {
        alert("Error. Invalid Input");
        clearWindows();
    }
});

function clearWindows(){
    valueWindow.value = "";
}
