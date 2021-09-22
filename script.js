const imageContainer = document.getElementById('image-container');

let photosArray = [];

// Unsplash API
const count = 3;
const apiKey = 'N3qccqFwRZn5z4Vmhn4SBT5L8Hy1c5C1fqMy_TOxMuA';
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// Create Elements for Links & Photos, Add to DOM
function displayPhotos() {
  // Run function for each oject in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash
    const item = document.createElement('a');
    item.setAttribute('href', photo.links.html);
    item.setAttribute('target', '_blank');

    // Create <img> for photo
    const img = document.createElement('img');
    img.setAttribute('src', photo.urls.regular);
    img.setAttribute('alt', photo.alt_discription);
    img.setAttribute('title', photo.alt_discription);

    // Put <img> inside <a> then put both inside imageContainer
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiURL);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Catch Error Here
  }
}

// Check to see if scrolling near bottom of page, Load More Photos
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 1000
  ) {
    getPhotos();
    console.log('load more');
  }
});

// On load
getPhotos();
