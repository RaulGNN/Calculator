// Import Math.js


//Define the buttons

let keys = document.querySelectorAll(".input-button");
let equal = document.getElementById("equal");
let negativeNumber = document.getElementById("negative");
let fullClear = document.getElementById("full-clear");
let deleteKey = document.getElementById("delete");
let valueWindow = document.getElementById("input");
let equalOn = false;

fullClear.addEventListener("click", () => {
    valueWindow.value = "";
    equalOn = true;
})


keys.forEach((button_class) => {
    button_class.addEventListener("click", () => {
        if(equalOn){
            valueWindow.value = "";
            equalOn = false;
        } else if(button_class.value = "."){
            var aux = valueWindow + "."
        }
        valueWindow.value += button_class.value;
    })
})

equal.addEventListener("click", () => {
    valueWindow.value = math.evaluation(valueWindow);
})
