fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    const ip = data.ip;
    fetch(`https://ipapi.co/${ip}/json/`)
      .then(response => response.json())
      .then(data => {
      	const country = data.country;
        const location = `${data.city}, ${data.region}, ${data.country}`;
        document.getElementById('ip-address').innerHTML = `IP Address: ${ip}`;
        document.getElementById('location').innerHTML = `Location: ${location}`;
        chrome.browserAction.setBadgeText({text: country});
      })
      .catch(error => console.error(error));
  })
  .catch(error => console.error(error));
