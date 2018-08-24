import { createStore } from 'redux';

//Create Store
export const store = createStore( () => {},
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()) ;