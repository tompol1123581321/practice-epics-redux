import { createSlice } from "@reduxjs/toolkit"
import { Reservations } from "../types"

const initialState = {
	reservations: [] as Reservations[],
	reservationsCount: 0,
}

export const reservationsSlice = createSlice({
	name: "reservations",
	initialState,
	reducers: {
		loadReservations: (state, action) => {
			state.reservations = action.payload
		},
		addReservation: (state, action) => {
			state.reservations = [
				...state.reservations,
				action.payload,
			]
		},
		loadCount: (state, action) => {
			state.reservationsCount = action.payload
		},
	},
})

// Action creators are generated for each case reducer function
export const {
	loadReservations,
	addReservation,
	loadCount,
} = reservationsSlice.actions

export const reservationsSliceReducer =
	reservationsSlice.reducer
