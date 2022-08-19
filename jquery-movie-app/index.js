const movieTitle = document.getElementById('title');
const rating = document.getElementById('rating');
const ratingContainer = document.getElementsByClassName("ratingContainer")[0];

function submitHandler(e){
    e.preventDefault();
    createNewMovieRating(ratingContainer);
}

function createNewMovieRating(parent){
    let movieRatingWrapper = document.createElement('div');
    let createResult = document.createElement ('p1');

    createResult.innerText = `${movieTitle.value} has a rating of ${rating.value}!`;

    parent.appendChild(movieRatingWrapper);
    movieRatingWrapper.appendChild(createResult);
}

ratingContainer.addEventListener('click', (e) => removeButton(e))

function removeButton(e){
    e.target.parentNode.remove();
}
