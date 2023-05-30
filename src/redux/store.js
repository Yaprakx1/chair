import { createStore,combineReducers} from "redux";
import todoReducer from "./todoReducer";


 const rootReducer = combineReducers({
    todoState: todoReducer,
});

  const store = createStore(rootReducer)

  export default store;