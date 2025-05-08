document.getElementById('get-weather').addEventListener('click', async function() {
    const city = document.getElementById('city').value.trim();
    const apiKey = 'a8cc87c796adf4a991bdb82d60bfd7df';  // Replace with your OpenWeather API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (response.ok) {  // If the response is OK (status 200)
        const { name, sys, weather, main, wind } = data;
  
        document.getElementById('location').textContent = `${name}, ${sys.country}`;
        document.getElementById('temperature').textContent = `Temperature: ${main.temp}°C`;
        document.getElementById('description').textContent = `Weather: ${weather[0].description}`;
        document.getElementById('humidity').textContent = `Humidity: ${main.humidity}%`;
        document.getElementById('wind').textContent = `Wind Speed: ${wind.speed} m/s`;
      } else {
        // If response is not OK, show the error message from the API
        alert(`Error: ${data.message}. Please try again.`);
      }
    } catch (error) {
      alert('Error fetching data. Please try again.');
    }
  });
  