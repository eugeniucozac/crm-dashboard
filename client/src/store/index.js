import { createStore, applyMiddleware } from "redux"
import thunkMiddleware from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import rootReducer from "@reducers"

const middlewares = [thunkMiddleware]
const composedEnhancers = composeWithDevTools(applyMiddleware(...middlewares))
export const store = createStore(rootReducer, composedEnhancers)
if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("@reducers", () => store.replaceReducer(rootReducer))
}
