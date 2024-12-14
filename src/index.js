console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    // challenge 1
   fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(response => response.json())
    .then(data => {
        const imagesContainer = document.getElementById("dog-image-container");
        
        data.message.forEach(imgUrl => {
            const imgElement = document.createElement("img");
            imgElement.src = imgUrl;
            imgElement.alt = "Random Dog";
            imagesContainer.appendChild(imgElement);
        });
        console.log(data);
    })
    .catch(error => {
        console.error("Error fetching Dog images:", error)
    })
    
    // challenge 2
    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (response => response.json())
    .then (data => {
        const dogContainer = document.getElementById("dog-breeds");

        for (const breed in data.message) {
            const li = document.createElement("li");
            li.textContent = breed;
            dogContainer.appendChild(li); 
            // challenge 3
            li.addEventListener("click", function() {
                li.style.color = "Red"
            });
        };
    })
    .catch(error => {
        console.error("Error fetching dog breeds:", error);
    });

    // challenge 4
    const breedFilter = document.getElementById("breed-dropdown");
    const dogContainer = document.getElementById("dog-breeds");

    breedFilter.addEventListener("change", function(e) {
        const selectedLetter = e.target.value
        
        fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        
        .then(data => {
            const allBreeds = Object.keys(data.message)
            let filteredBreeds = allBreeds;

            if (selectedLetter !== "all") {
                filteredBreeds = allBreeds.filter(breeds => breeds.startsWith(selectedLetter));
            }; 
            dogContainer.innerHTML = "";
            filteredBreeds.forEach(breed => {
                const li = document.createElement("li");
                li.textContent = breed;
                dogContainer.appendChild(li);  
            });
            

        })
        .catch(error => {
            console.error("Error fetching dog breeds:", error);
        });
    });
});