import $ from 'jquery';
import store from 'store/store';

function updateUI() {
  const { recipes } = store.getState();
  const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`;

  $('.recipes > ul').html(recipes.map(renderRecipe));
}
