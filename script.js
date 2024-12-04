// Przykład listenera onMessage z Promise
chrome.runtime.onMessage((request, sender) => {
    return new Promise((resolve, reject) => {
        // Tu możesz wykonać jakąś asynchroniczną operację
        someAsyncFunction()
            .then(response => {
                resolve(response); // Jeśli operacja się powiedzie, zwróć odpowiedź
            })
            .catch(error => {
                reject(error); // Jeśli operacja się nie powiedzie, zwróć błąd
            });
    });
});

// Funkcja pomocnicza, która może wykonywać asynchroniczną operację
function someAsyncFunction() {
    return new Promise((resolve, reject) => {
        // Przykład asynchronicznej operacji, np. pobieranie danych z API
        setTimeout(() => {
            const success = true; // Symulacja sukcesu operacji
            if (success) {
                resolve('Dane zostały pobrane'); // Sukces
            } else {
                reject('Błąd pobierania danych'); // Błąd
            }
        }, 1000); // Symulacja opóźnienia 1 sekundy
    });
}

// Przykład bezpiecznej destrukturyzacji z kontrolą istnienia obiektu
const p = {
    rabatio_settings: {
        revealDate: '2024-12-04'
    }
};

// Destrukturyzacja z zabezpieczeniem przed niezdefiniowanym obiektem
const { revealDate } = p.rabatio_settings ?? {}; // Jeśli rabatio_settings jest undefined, użyje pustego obiektu
console.log(revealDate); // Wyświetli '2024-12-04', jeśli rabatio_settings istnieje

// Inna opcja to sprawdzenie przed destrukturyzacją
if (p.rabatio_settings) {
    const { revealDate } = p.rabatio_settings;
    console.log(revealDate); // Wyświetli '2024-12-04'
} else {
    console.error('rabatio_settings jest niezdefiniowane');
}
