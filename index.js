import { getDocsFromCollection } from "./dao.js";

// get list container for reviews
const reviewList = document?.getElementById("reviewList");

/**
 * Generate the HTML string for a movie review
 * @param {string} movieName 
 * @param {string} reviewText 
 * @returns renderable HTML string for a movie review list item
 */
function generateReviewHTML(movieName, reviewText) {
    return (`
        <div class="reviewContainer">
            <p class="movieName">${movieName || ""}</p>
            <p class="reviewText">${reviewText || ""}</p>
        </div class="reviewContainer">
    `);
}

/**
 * Fetch and render reviews from database
 */
function fetchReviews() {
    if (reviewList) {
        // clear content of review list
        reviewList.innerHTML = "";
        getDocsFromCollection("reviews")
            .then((reviews) => {
                reviews.forEach((review) => {
                    const movieName = review?.data()?.movieName;
                    const reviewText = review?.data()?.reviewText;
                    reviewList.innerHTML += generateReviewHTML(movieName, reviewText);
                });
            })
            .catch((err) => {
                console.error("Unable to fetch reviews from database", err);
                alert("Error fetching reviews from database");
            });
    }
}

// when window loads, attempt to update review list
window.addEventListener("load", fetchReviews, false);
