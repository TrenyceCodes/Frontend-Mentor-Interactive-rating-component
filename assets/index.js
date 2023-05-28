let ratingComponent = document.querySelector(".ratingComponent");
let thankYouComponent = document.querySelector("#secondComponent");
let submitButton = document.querySelector('button[type="submit"]');
let ratingButtons = document.querySelectorAll('button[type="button"]');
let ratingText = document.querySelector(".rating");
let selectedText = null;
let selectedButton = null;

submitButton.addEventListener("click", function() {
    if (selectedText == null) {
        return alert("Please select a rating");
    }

    ratingComponent.style.display = "none";
    thankYouComponent.style.display = "block";
});

ratingButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        removeSelectedButtonClass();
        e.target.classList.add("selected");
        selectedText = button.textContent;
        console.log(selectedText);  
        ratingText.textContent = `You selected ${selectedText} out of 5`;
    })
})

function removeSelectedButtonClass() {
    ratingButtons.forEach(button => {
        button.classList.remove("selected");
    });
}