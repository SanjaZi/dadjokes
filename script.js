

const button = document.getElementById("button");
const jokesid = document.getElementById("jokesid");

async function getDadJoke() {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        jokesid.innerHTML = data.joke;
      }

  getDadJoke();
    
  button.addEventListener('click', getDadJoke);



