import { createSlice } from "@reduxjs/toolkit"
import { Price } from "../types"

const initialState = {
	priceList: [] as Price[],
}

export const priceListSlice = createSlice({
	name: "priceList",
	initialState,
	reducers: {
		loadPriceList: (state, action) => {
			state.priceList = action.payload
		},
		addPrice: (state, action) => {
			state.priceList = [...state.priceList, action.payload]
		},
		deletePrice: (state, action) => {
			state.priceList = state.priceList.filter(
				(n) => n.id !== action.payload
			)
		},
	},
})

// Action creators are generated for each case reducer function
export const { loadPriceList, addPrice, deletePrice } =
	priceListSlice.actions

export const priceListSliceReducer = priceListSlice.reducer
