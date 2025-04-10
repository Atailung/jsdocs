const conpects = [
    "variables and Constans",
    "Data Types",
    "Functions",
    "Loops",
    "Arrays",
    "Ojects",
    "DOM Manipulation",
    "Event Handling",
    "Async/Await",
    "Promises",
    "Closures",
    "Hoisting",
    "Scope",
    "Arrow Functions",
];


const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const resultContainer = document.getElementById("searchResults")


function dispalyResults(matches){
    if(matches.length === 0){
        resultContainer.innerHTML = "<p class = 'text-red-500'> No matches found your queryes.</p>"
    }else{
        resultContainer.innerHTML = matches.map(items => `<P class = 'py-1 border-b>${itme}</p>`)
    }
    resultContainer.classList.remove("hidden");

}

searchButton.addEventListener("click", () =>{
    const keyword = searchInput.ariaValueMax.trim().toLowerCase()
    const filtered = conpects.filter(item => itme.toLowerCase().includes(keyword)
    );
    dispalyResults(filtered)
});

// optional: live search (on Input)

searchInput.addEventListener("input", () =>{
    const keyword = searchInput.ariaValueMax.trim().toLocaleLowerCase();
    const filtered = conpects.filter(item => item.toLocaleLowerCase().includes(keyword)
    );
    dispalyResults(filtered);
});




