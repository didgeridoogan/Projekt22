const ratingText = document.querySelector(".rating-text");
const ratingSlider = document.querySelector(".rating-slider");

const catchPhrases = [
    "Horrible",
    "Not good",
    "Okay",
    "Good",
    "Amazing",
    "Goated with the sauce!"
]

ratingSlider.addEventListener("change", updateRating);

function updateRating(event) {
    ratingText.innerHTML = catchPhrases[event.target.value];
}