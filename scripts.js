// Данные о путешествиях (хранение в памяти браузера)
let travels = [];

// Функция отображения записей о путешествиях
function showTravels(travelsData) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = '';

    travelsData.forEach(travel => {
        const travelDiv = document.createElement('div');
        travelDiv.classList.add('travel-item');
        travelDiv.innerHTML = `
            <h3>${travel.location}</h3>
            <p><strong>Cost:</strong> $${travel.cost}</p>
            <p><strong>Places Visited:</strong> ${travel.placesVisited.join(', ')}</p>
            <button onclick="viewTravel(${travel.id})">View Details</button>
        `;
        contentDiv.appendChild(travelDiv);
    });
}

// Функция отображения моих путешествий
function showMyTravel() {
    // Пример данных путешествий
    travels = [
        { id: 1, location: 'Paris', cost: 1000, placesVisited: ['Eiffel Tower', 'Louvre Museum'] },
        { id: 2, location: 'Tokyo', cost: 1500, placesVisited: ['Shibuya Crossing', 'Tokyo Tower'] }
    ];
    showTravels(travels);
}

// Функция добавления нового путешествия
function addTravel() {
    const location = prompt('Enter location:');
    const cost = parseFloat(prompt('Enter cost:'));
    const placesVisited = prompt('Enter places visited (separated by commas):').split(',');

    const newTravel = {
        id: travels.length + 1,
        location: location,
        cost: cost,
        placesVisited: placesVisited.map(place => place.trim())
    };

    travels.push(newTravel);
    showTravels(travels);
}

// Функция отображения всех путешествий
function showAllTravels() {
    // Пример данных всех путешествий (можно добавить фильтрацию и сортировку)
    const allTravels = travels;
    showTravels(allTravels);
}

// Функция просмотра деталей путешествия
function viewTravel(travelId) {
    const travel = travels.find(travel => travel.id === travelId);
    if (travel) {
        alert(`Location: ${travel.location}\nCost: $${travel.cost}\nPlaces Visited: ${travel.placesVisited.join(', ')}`);
    } else {
        alert('Travel not found');
    }
}

// Показать форму добавления путешествия
function showAddTravelForm() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <form onsubmit="addTravel(); return false;">
            <label for="location">Location:</label><br>
            <input type="text" id="location" name="location" required><br><br>

            <label for="cost">Cost ($):</label><br>
            <input type="number" id="cost" name="cost" min="0" step="0.01" required><br><br>

            <label for="placesVisited">Places Visited (comma-separated):</label><br>
            <input type="text" id="placesVisited" name="placesVisited" required><br><br>

            <button type="submit">Add Travel</button>
        </form>
    `;
}
