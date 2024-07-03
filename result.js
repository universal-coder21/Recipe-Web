

async function searchRecipes() {
    const query = document.getElementById('query').value;
    const appId = '4f1a8b20';
    const appKey = 'c6af38f735eb9e72211fccc391e0b23d';
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;
  
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayRecipes(data.hits);
    } catch (error) {
        console.error('Error:', error);
        showError();
    }
  }
  
  function displayRecipes(recipes) {
    const resultsDiv = document.getElementById('results');
    const errorImageDiv = document.getElementById('error-image');
  
    resultsDiv.innerHTML = '';
    if (recipes.length === 0) {
        errorImageDiv.style.display = 'block';
        return;
    } else {
        errorImageDiv.style.display = 'none';
    }
  
    recipes.forEach(recipeData => {
        const recipe = recipeData.recipe;
        const colDiv = document.createElement('div');
        colDiv.classList.add('col-md-4', 'mb-4');
        colDiv.innerHTML = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.label}</h5>
                    <p class="card-text">Source: <a href="${recipe.url}" target="_blank">${recipe.source}</a></p>
                </div>
            </div>
        `;
        resultsDiv.appendChild(colDiv);
    });
  }
  
  function showError() {
    const resultsDiv = document.getElementById('results');
    const errorImageDiv = document.getElementById('error-image');
  
    resultsDiv.innerHTML = '';
    errorImageDiv.style.display = 'block';
  }
  
  function reloadPage() {
    window.location.reload();
  }
  