import { News, State } from "../types"

export const getNews = (state: State) => state.news.news
export const getReservations = (state: State) =>
	state.reservations.reservations

export const getReservationsCount = (state: State) =>
	state.reservations.reservationsCount

export const getPriceList = (state: State) =>
	state.priceList.priceList

export const getAppState = (state: State) => state.app
