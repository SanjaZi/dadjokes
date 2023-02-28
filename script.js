
const button = document.getElementById("button");
const jokesid = document.getElementById("jokesid");

async function getDadJoke() {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        return data.joke;
      }
    
getDadJoke()
 .then(joke => {
  console.log(joke); // Or do something else with the joke data
  jokesid.innerHTML = joke;
              })
  .catch(error => {
  console.error(error); // Handle any errors that may occur
                 });



  button.addEventListener('click', (e) => {
    async function getDadJoke() {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            'Accept': 'application/json'
          }
        });
        const data = await response.json();
        return data.joke;
      }
    
      getDadJoke()
      .then(joke => {
        console.log(joke); // Or do something else with the joke data
        jokesid.innerHTML = joke;
      })
      .catch(error => {
        console.error(error); // Handle any errors that may occur
      });
  })




