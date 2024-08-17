// const API_KEY = 
const imagesList = document.querySelector('.images-list');
const errorMessage = document.querySelector('.error-msg');
const API_KEY = "7qlWr5GDVDh5aU6d7gg_Wvx0wJkcO9tQJyxziMzC2qI";
let searchQuery = "random";
let pageIndex = 1;

async function fetchImages() {
	fetch(`https://api.unsplash.com/search/photos?page=${pageIndex}&per_page=30&query=${searchQuery}&client_id=${API_KEY}`)
		.then(response => {
			if (!response.ok) throw new Error('HTTP error! status: ${response.status}');
			return response.json();
		})
		.then(data => {
			if (!data.total) {
				imagesList.innerHTML = '';
				throw new Error("No results found for your search. Please try again with an other search.");
			}
			createImagesList(data.results);
		})
		.catch(error => {
			errorMessage.textContent = `${error}`;
		});
}

fetchImages();

function createImagesList(images) {
	images.forEach(image => {
		const newImage = document.createElement('img');
		newImage.src = image.urls.regular;
		imagesList.appendChild(newImage);
	});
}

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const newSearchQuery = form.querySelector('input[type="search"]');
	searchImages(newSearchQuery.value);
});

function searchImages(query) {
	searchQuery = query;
	pageIndex = 1;
	imagesList.innerHTML = '';
	fetchImages();
}

const observer = new IntersectionObserver(handleIntersection, { rootMargin: "50%"});
const infiniteMarker = document.querySelector('.infinite-marker');

observer.observe(infiniteMarker);

function handleIntersection(entries) {
	if (window.scrollY > window.innerHeight && entries[0].isIntersecting) {
		pageIndex++;
		fetchImages();
	}
}