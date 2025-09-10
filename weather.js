const weather = async () => {
  const city = document.getElementById('inputValue').value;
  const nameVal = document.getElementById('name');
  const temp = document.getElementById('temp');
  const desc = document.getElementById('desc');

  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c41e17e6d8e4ee1ffcb898fe00eddc1e`);
    const data = await response.json();

    nameVal.innerText = data.name;
    temp.innerText = data.main.temp + "℃";
    desc.innerText = data.weather[0].main;

    // Get temperature
    const temperature = data.main.temp;

    // Remove existing background classes
    document.body.classList.remove("sunny", "rainy", "cold");

    // Add based on temperature
    if (temperature > 25) {
      document.body.classList.add("sunny");
    } else if (temperature <= 25 && temperature > 15) {
      document.body.classList.add("rainy");
    } else {
      document.body.classList.add("cold");
    }

  } catch (error) {
    alert("City not found");
  }
};

document.getElementById('button').addEventListener('click', weather);
