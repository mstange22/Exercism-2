export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  } else if (timer === 0) {
    return 'Lasagna is done.';
  }

    return 'Not done, please wait.';
}

export function preparationTime(layers, timePerLayer = 2) {
  return layers.length * timePerLayer;
}

export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;

  for (const layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}

export function addSecretIngredient(friendsList, myList) {
  const secretIngredient = friendsList[friendsList.length - 1];
  myList.push(secretIngredient);
}

export function scaleRecipe(recipe, portions) {
  const scaledRecipe = {};
  const scaleFactor = portions / 2;

  for (const [ingredient, quantity] of Object.entries(recipe)) {
    scaledRecipe[ingredient] = quantity * scaleFactor;
  }

  return scaledRecipe;
}
