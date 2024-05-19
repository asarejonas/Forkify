const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

console.log('Hello Word!');

const countries = async function () {
  try {
    const res = await fetch(
      // `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=52.508&longitude=13.381`

      // `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza`
      `https://forkify-api.herokuapp.com/api/v2/recipes/664c8f193e7aa067e94e8706`
    );
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceURL: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients,
    };
    console.log(recipe);

    // console.log(res, data);
  } catch (err) {
    alert(err);
  }
};
countries();
