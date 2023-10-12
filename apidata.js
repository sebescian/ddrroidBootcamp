
let countrySelect = document.getElementById("country");
let citiesSelect = document.getElementById("city");

fetch('https://countriesnow.space/api/v0.1/countries/')
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            console.log("Error");
            throw new Error("Failed to fetch countries");
        }
    })
    .then(data => fetchCountry(data.data))
    .catch(error => console.error(error));

function fetchCountry(data) {
    data.forEach(item => {
        let option = document.createElement("option");
        option.text = item.country;
        option.value = item.country;
        countrySelect.appendChild(option);
    });

    countrySelect.addEventListener('change', function () {
        citiesSelect.innerHTML = '';

        let selectedCountry = data.find(item => item.country === countrySelect.value);
        if (selectedCountry && selectedCountry.cities) {
            selectedCountry.cities.forEach(city => {
                let cityOption = document.createElement("option");
                cityOption.text = city;
                cityOption.value = city;
                citiesSelect.appendChild(cityOption);
            });
        }
    });
}
