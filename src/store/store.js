import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { blogsReducer} from "../reducers/blogsReducer/blogsReducer";
import thunk from "redux-thunk";


const store = createStore(blogsReducer, applyMiddleware(thunk));

export default store ;