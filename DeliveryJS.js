var number = 0;
var textMessage = document.getElementById('message')
var deliveryButton = document.getElementById('deliverbutton')
var pickupButton = document.getElementById('pickupbutton')
var dineinButton = document.getElementById('dineinbutton')
//deliveryButton.addEventListener("click", changeText("soo"));
deliveryButton.addEventListener("click", function(event) {
    changeText("Delivered to your doorstep. Arrives within 30 minutes");
    event.preventDefault();
});
pickupButton.addEventListener("click", function(event) {
    changeText("Will be available for pickup in the nearest store. Ready within 30 minutes");
    event.preventDefault();
});
dineinButton.addEventListener("click", function(event) {
    changeText("Allows you to dine in without the long wait");
    event.preventDefault();
});
function changeText(text){
    textMessage.innerHTML = text;
}
