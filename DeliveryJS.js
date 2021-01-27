var number = 0;
var deliveryMethods = document.getElementsByClassName('method')
var textMessage = document.getElementById('message')
var deliveryButton = document.getElementById('deliverbutton')
var pickupButton = document.getElementById('pickupbutton')
var dineinButton = document.getElementById('dineinbutton')
//deliveryButton.addEventListener("click", changeText("soo"));
deliveryButton.addEventListener("click", function (event) {
    changeText("Delivered to your doorstep. Arrives within 30 minutes");
    event.preventDefault();
});
pickupButton.addEventListener("click", function (event) {
    changeText("Will be available for pickup in the nearest store. Ready within 30 minutes");
    event.preventDefault();
});
dineinButton.addEventListener("click", function (event) {
    changeText("Allows you to dine in without the long wait");
    event.preventDefault();
});
for (var i = 0; i < deliveryMethods.length; i++) {
    var tempButton = deliveryMethods[i];
    tempButton.style.borderWidth = "medium"
    tempButton.addEventListener("click", function (event) {
        buttonSelected(this);
        event.preventDefault();
    });
}

function buttonSelected(button) {
    for(var i=0; i < deliveryMethods.length; i++){
        var tempButton = deliveryMethods[i];
        tempButton.style.borderColor = "#994a00"
        tempButton.style.borderWidth = "medium"
    }
    button.style.borderColor = "#ff7b00"
    button.style.borderWidth = "thick"
}

function changeText(text) {
    textMessage.innerHTML = text;
}
function componentToHex(c) {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
