import {
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit"
import {
	combineEpics,
	createEpicMiddleware,
} from "redux-observable"

import {
	initLoadEpic,
	initEpicNews,
	initEpicPriceList,
	initEpicResCount,
} from "./redux/appEpic"
import { appSliceReducer, init } from "./redux/appSlice"
import { newSliceReducer } from "./redux/newsSlice"
import { priceListSliceReducer } from "./redux/priceListSlice"
import { reservationsSliceReducer } from "./redux/reservationsSlice"

const rootReducer = combineReducers({
	app: appSliceReducer,
	news: newSliceReducer,
	reservations: reservationsSliceReducer,
	priceList: priceListSliceReducer,
})
const epicMiddleware = createEpicMiddleware()
const rootEpic = combineEpics(
	initEpicResCount,
	initEpicPriceList,
	initEpicNews,
	initLoadEpic
)

export const store = configureStore({
	reducer: rootReducer,
	devTools: true,
	middleware: [epicMiddleware],
})

epicMiddleware.run(rootEpic)
