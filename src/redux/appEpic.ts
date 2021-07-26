import axios from "axios"
import { Epic, StateObservable } from "redux-observable"
import { from, of } from "rxjs"
import {
	concatMap,
	delay,
	filter,
	map,
	mergeMap,
} from "rxjs/operators"
import { State } from "../types"
import { init, load, loadItem } from "./appSlice"
import { loadNews } from "./newsSlice"
import { loadPriceList } from "./priceListSlice"
import { loadCount } from "./reservationsSlice"

const loadNewsServer = async () => {
	try {
		return await axios.get(
			"https://hlavacekautoskolarestapi.herokuapp.com/getNews"
		)
	} catch (e) {
		console.error(e.message)
	}
}

const loadReservationsCount = async () => {
	try {
		return await axios.get(
			"https://hlavacekautoskolarestapi.herokuapp.com/getReservationsCount"
		)
	} catch (e) {
		console.error(e.message)
	}
}

const loadPriceListServer = async () => {
	try {
		return await axios.get(
			"https://hlavacekautoskolarestapi.herokuapp.com/getPriceList"
		)
	} catch (e) {
		console.error(e.message)
	}
}

export const initEpicResCount: Epic = (action$, state$) =>
	action$.pipe(
		filter(init.match),
		mergeMap((action) =>
			from(loadReservationsCount()).pipe(
				concatMap((response) =>
					of(
						loadItem({ state: false, key: "reservations" }),
						response
							? loadCount(response.data)
							: loadCount(0),
						loadItem({ state: true, key: "reservations" })
					)
				),
				filter(
					<T>(action: T): action is NonNullable<T> =>
						!!action
				)
			)
		)
	)

export const initEpicNews: Epic = (action$, state$) =>
	action$.pipe(
		filter(init.match),
		mergeMap((action) =>
			from(loadNewsServer()).pipe(
				concatMap((response) =>
					of(
						loadItem({ state: false, key: "news" }),
						response ? loadNews(response.data) : null,
						loadItem({ state: true, key: "news" })
					)
				),

				filter(
					<T>(action: T): action is NonNullable<T> =>
						!!action
				)
			)
		)
	)

export const initEpicPriceList: Epic = (action$, state$) =>
	action$.pipe(
		filter(init.match || load.match),
		mergeMap(() =>
			from(loadPriceListServer()).pipe(
				concatMap((response) =>
					of(
						loadItem({ state: false, key: "priceList" }),
						response ? loadPriceList(response.data) : null,
						loadItem({ state: true, key: "priceList" })
					)
				),
				filter(
					<T>(action: T): action is NonNullable<T> =>
						!!action
				)
			)
		)
	)

export const initLoadEpic: Epic = (
	action$,
	state$: StateObservable<State>
) =>
	action$.pipe(
		filter(loadItem.match),
		filter(() => {
			if (
				Object.values(state$.value.app.loadedItems).every(
					(k) => k === true
				)
			) {
				return true
			} else {
				return false
			}
		}),
		delay(1000),
		map(() => {
			if (state$.value.news.news.length !== 0) {
				return load("")
			} else return init("")
		})
	)
