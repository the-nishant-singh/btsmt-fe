import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/rootReducer";

let Store = createStore(RootReducer, applyMiddleware(thunk));
export default Store;