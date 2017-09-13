// TODO: Put reducers in a separate files
import { createStore } from 'redux';

const initialState = {
    recipes: [
        {
            name: 'first'
        }
    ],
    ingredients: [
        {
            recipe: 'first',
            name: 'test1',
            quantity: 2
        }
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            return Object.assign({}, state {
                recipes: state.recipes.concat({ name: action.name })
            });
        case 'ADD_INGREDIENT':
            const newIngredient = {
                name: action.name,
                recipe: action.recipe,
                quantity: action.quantity
            };
            return Object.assign({}, state, {
                ingredients: state.ingredients.concat(newIngredient)
            });
    }

    return state;
};

const addIngredient = (recipe, name, quantity) => ({
    type: 'ADD_INGREDIENT', recipe, name, quantity
});

const store = createStore(reducer, initialState);
store.dispatch(addIngredient('Omlette', 'Eggs', 3));
window.store = store;
