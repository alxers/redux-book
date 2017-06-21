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

const reducer = (state, action) => state;
const store = createStore(reducer, initialState);

window.store = store;