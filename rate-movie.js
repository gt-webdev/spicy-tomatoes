import { addDocToCollection } from "./dao.js";

// get submit review button
const submitReviewBtn = document?.getElementById("submitReviewBtn");

// get movie name input field
const movieNameInput = document?.getElementById("movieNameInput");

// get review input field
const reviewInput = document?.getElementById("reviewInput");

/**
 * Add review to database
 */
function submitReview() {
    if (movieNameInput && reviewInput) {
        const movieName = movieNameInput?.value;
        const reviewText = reviewInput?.value;
        if (movieName && reviewText) {
            addDocToCollection({ movieName, reviewText }, "reviews")
                .then(() => {
                    window.location.href = 'index.html';
                }).catch((err) => {
                    console.error("Unable to create new review in database", err);
                    alert("Error creating review in database");
                });
        } else {
            alert("Please fill all input fields.");
        }
    }
}

// add on click listener to submit review button
if (submitReviewBtn) {
    submitReviewBtn.onclick = function() {
        submitReview();
    };
}
