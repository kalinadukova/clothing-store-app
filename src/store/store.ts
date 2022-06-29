import { compose, createStore, applyMiddleware, Middleware } from "redux";
import { rootReducer } from "./root-reducer";

import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

// import thunk from "redux-thunk";
// import { loggerMiddleware } from "./middleware/logger";

import { rootSaga } from "./root-saga";

import logger from "redux-logger";

export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendetPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[]; //keyof - will get you back only those values inside of rootstate
};

const persistConfig: ExtendetPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  sagaMiddleware,
].filter((middleware): middleware is Middleware => Boolean(middleware));

const composeEnchancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnchancers = composeEnchancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnchancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
