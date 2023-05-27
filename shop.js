
const products = document.querySelector(".products");

async function fetchData() {
  try {
    const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
    const jsonData = await response.json();
    
    products.innerHTML = `
    ${jsonData.drinks
      .map((element) => {
        const description = element.strInstructions.slice(0, 80) + "...";
        const title = element.strDrink.slice(0, 20) + "...";
        return `
      <div class="card col-3 p-3 m-3" style="height: 500px;">
              <img src="${element.strDrinkThumb}" class="card-img-top" style="height: 60%; object-fit: contain;" alt="...">
              <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <p class="card-text">${description}</p>
                <a href="#" class="btn btn-primary">View Product</a>
              </div>
            </div>`;
      }).join("")
    }
    `;
  } catch (err) {
    console.log(err);
  }
}

fetchData();
