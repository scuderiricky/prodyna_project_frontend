

async function loadImage(cityName) {
    return await fetch("http://localhost:8080/location/?city_name=" + cityName)
        .then(response => {
            return response.json()
        })
        .catch((error) => {
            console.log(error);
        });

}

export { loadImage };