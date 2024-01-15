import { createStore } from "redux";
import rootReducer from "./reducer/root_reducer";

const store = createStore(rootReducer);

export default store;
