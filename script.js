const btnEl = document.getElementById('btn');
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl =  document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function(){
    try {
        animeImgEl.src = "spinner.svg";
        btnEl.disabled = true;
        btnEl.innerHTML = "Loading...";
        animeNameEl.innerHTML = "Updating...";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        console.log(data);
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.url;
        animeNameEl.innerHTML = data.artist; 
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime"; 
    } catch (error) {
        console.log(error);
        btnEl.disabled = false;
        btnEl.innerHTML = "Get Anime"; 
        animeNameEl.innerHTML = "An error happened!!!"; 
    }
})
