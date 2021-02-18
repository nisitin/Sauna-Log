import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./models/rootreducer";

const store = createStore(rootReducer, composeWithDevTools);

export default store;
