import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	loaded: false,
	loadedItems: {
		news: false,
		priceList: false,
		reservations: false,
	},
}

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		init: (state, action) => {
			state.loaded = false
			state.loadedItems = {
				news: false,
				priceList: false,
				reservations: false,
			}
		},
		loadItem: (state, action) => {
			state.loadedItems = {
				...state.loadedItems,
				[action.payload.key]: action.payload.state,
			}
		},
		load: (state, action) => {
			state.loaded = true
		},
	},
})

export const { init, loadItem, load } = appSlice.actions

export const appSliceReducer = appSlice.reducer
