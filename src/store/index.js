import { createStore, combineReducers } from "redux";

// importando o reducer
import productsReducer from "./modules/products/reducer";
import cartProductsReducer from "./modules/cart/reducer";

// combinando os reducers da aplicação, nesse exemplo temos apenas um
const reducers = combineReducers({ products: productsReducer , cart:cartProductsReducer});

// passando os reducers combinados para a store
const store = createStore(reducers);

export default store;