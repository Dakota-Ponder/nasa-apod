

document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){

  // check if data for the date exists 
  let cachedData = localStorage.getItem(document.querySelector('input').value)
 
  // if data does not exist, fetch it from the API
  if (cachedData) {
    let data = JSON.parse(cachedData)
    displayData(data)
  }



  const choice = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=74xyntFXrm1TO9twr9n0U8nY7NIxxuCedo363Lmt&date=${choice}`
  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        displayData(data)
        
        // show the explanation
        document.querySelector('h3').innerText = data.explanation

        // show the title and date
        document.querySelector('h2').innerText = data.title + "\n\n" + data.date
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

// function to display the data 
function displayData(data) {
   if (data.media_type === "image") {
          document.querySelector('#apod-img').src = data.hdurl
        } else if (data.media_type === "video") {
          document.querySelector('iframe').src = data.url
        }
}

// particles.js function for the background
window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#ECEFF1',
    shape: 'circle',
    //connectParticles: true,
    maxParticles: 150,
    sizeVariations: 3,
    
    


    
  });
}; 