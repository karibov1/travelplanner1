document.getElementById("route-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const start = document.getElementById("start-location").value;
    const end = document.getElementById("end-location").value;
    
    // Вставьте логику отображения маршрута через API карт, например, Google Maps API.
    console.log(`Маршрут: ${start} -> ${end}`);
});

document.getElementById("budget-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const budget = parseFloat(document.getElementById("budget").value);
    
    // Логика для расчета возможных вариантов путешествий
    if (budget >= 5000) {
        alert("Ваш бюджет позволяет вам поехать в Европу!");
    } else {
        alert("Попробуйте более экономные варианты.");
    }
});

const recommendations = [
    { type: "пляжный", places: ["Бали", "Мальдивы", "Гавайи"] },
    { type: "культурный", places: ["Париж", "Рим", "Токио"] },
    { type: "активный", places: ["Альпы", "Новая Зеландия", "Канада"] }
];

function getRecommendations(type) {
    const recommendedPlaces = recommendations.find(r => r.type === type);
    const placesDiv = document.getElementById("recommendations-list");
    placesDiv.innerHTML = recommendedPlaces ? recommendedPlaces.places.join(", ") : "Нет рекомендаций.";
}

// Пример использования
getRecommendations("культурный");
