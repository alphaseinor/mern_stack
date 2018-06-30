import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';



const initialState = {
    items: [
        {id: uuid(), name: 'eggs'},
        {id: uuid(), name: 'steak'},
        {id: uuid(), name: 'milk'},
        {id: uuid(), name: 'bananas'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state
            }
        case ADD_ITEM:
        case DELETE_ITEM:
        default:
        return state;
    }
}

