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
            return;
    }

    return state;
};
const store = createStore(reducer, initialState);

window.store = store;