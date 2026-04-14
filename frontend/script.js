async function getEarthquakes() {
    const res = await fetch("http://localhost:3000/earthquakes");
    const data = await res.json();

    const output = document.getElementById("output");

    output.innerHTML = data.features.slice(0, 10).map(eq => {
        return `
            <div class="card">
                🌍 Location: ${eq.properties.place} <br>
                📊 Magnitude: ${eq.properties.mag}
            </div>
        `;
    }).join("");
}