export function initSearchBar({ inputId, buttonId, resultId, dataArray }) {
  const searchInput = document.getElementById(inputId);
  const searchButton = document.getElementById(buttonId);
  const resultContainer = document.getElementById(resultId);

  // Check for missing elements or invalid data
  if (
    !searchInput ||
    !searchButton ||
    !resultContainer ||
    !Array.isArray(dataArray)
  ) {
    console.warn(
      "searchComponent: Missing required elements or invalid data array"
    );
    return;
  }

  function displayResults(matches) {
    if (matches.length === 0) {
      resultContainer.innerHTML =
        "<p class='text-red-500'>No matches found for your query</p>";
    } else {
      resultContainer.innerHTML = matches
        .map(
          (item) =>
            `<p class='py-1 border-b border-gray-200 hover:bg-gray-100 cursor-pointer'>${item}</p>`
        )
        .join("");
    }
    resultContainer.classList.remove("hidden");
  }

  function handleSearch() {
    const keyword = searchInput.value.trim().toLowerCase();
    const filtered = dataArray.filter((item) =>
      item.toLowerCase().includes(keyword)
    );
    displayResults(filtered);
  }

  // Event Listeners
  searchButton.addEventListener("click", handleSearch);
  searchInput.addEventListener("input", handleSearch);

  // Hide results when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !resultContainer.contains(e.target) &&
      !searchInput.contains(e.target) &&
      !searchButton.contains(e.target)
    ) {
      resultContainer.classList.add("hidden");
    }
  });
}
