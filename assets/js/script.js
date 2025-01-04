// API Key e URL
const API_KEY = "live_Dss6Lvo0NogEpObNU3vhSxiYuG844eQ0xH9metb81GgQU6SFQXfuABUGWvim2kzn";
const API_URL = "https://api.thecatapi.com/v1/images/search?limit=10";

// Seletores
const catGrid = document.getElementById('cat-grid');
const favoritesGrid = document.getElementById('favorites-grid');
const favoritesPagination = document.getElementById('favorites-pagination');

// Função para buscar dados da API
async function fetchCats() {
    try {
        const response = await fetch(`${API_URL}&api_key=${API_KEY}`);
        const data = await response.json();
        displayCats(data);
    } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
    }
}

// Função para exibir os gatos no grid
function displayCats(cats) {
    if (!catGrid) return;
    catGrid.innerHTML = ""; // Limpar o grid
    cats.forEach(cat => {
        const catCard = document.createElement("div");
        catCard.classList.add("cat-card");

        catCard.innerHTML = `
            <img src="${cat.url}" alt="Cat">
            <h2>${cat.breeds && cat.breeds[0] ? cat.breeds[0].name : "Unknown Breed"}</h2>
            <p>${cat.breeds && cat.breeds[0] ? cat.breeds[0].temperament : "Temperament unknown"}</p>
            <button onclick="addToFavorites('${cat.id}')">Add to Favorites</button>
        `;

        catGrid.appendChild(catCard);
    });
}

// Função para adicionar aos favoritos
function addToFavorites(catId) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (!favorites.includes(catId)) {
        favorites.push(catId);
        localStorage.setItem("favorites", JSON.stringify(favorites));
        alert("Added to Favorites!");
    } else {
        alert("Already in Favorites!");
    }
}

// Função para carregar gatos favoritos
function loadFavorites() {
    const favoriteIds = JSON.parse(localStorage.getItem('favorites')) || [];
    if (favoriteIds.length === 0) {
        favoritesGrid.innerHTML = '<p>No favorites added yet.</p>';
        return;
    }

    // Fetch para cada ID favorito
    Promise.all(favoriteIds.map(id => fetch(`https://api.thecatapi.com/v1/images/${id}`, {
        headers: {
            'x-api-key': API_KEY
        }
    }).then(response => response.json()))).then(cats => {
        renderFavorites(cats);
    }).catch(error => {
        console.error('Error loading favorites:', error);
    });
}

// Função para renderizar os favoritos
function renderFavorites(cats) {
    favoritesGrid.innerHTML = cats.map(cat => `
        <div class="cat-card">
            <img src="${cat.url}" alt="Cat Image">
            <h3>${cat.breeds?.[0]?.name || 'Unknown Breed'}</h3>
            <button onclick="removeFromFavorites('${cat.id}')">Remove</button>
        </div>
    `).join('');
}

// Função para remover dos favoritos
function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites = favorites.filter(favId => favId !== id);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    loadFavorites(); // Recarrega os favoritos
}

// Inicializa favoritos ao carregar a página de favoritos
if (favoritesGrid) {
    loadFavorites();
}

// Inicializa a busca de dados ao carregar a página inicial
if (catGrid) {
    fetchCats();
}
