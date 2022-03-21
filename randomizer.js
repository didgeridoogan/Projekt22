let foodButton = document.querySelector("#food-btn");
foodButton.addEventListener("click", goToRandomFoodPlace);

function goToRandomFoodPlace() {
    let randomRoll = Math.random();
    if (randomRoll >= 0.5) {
        window.location.href = "./subway.html"
    } else {
        window.location.href = "./mcdonalds.html"
    }
}