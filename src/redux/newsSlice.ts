import { createSlice } from "@reduxjs/toolkit"
import { News } from "../types"

const initialState = {
	news: [] as News[],
}

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		loadNews: (state, action) => {
			state.news = action.payload
		},
		addNews: (state, action) => {
			state.news = [...state.news, action.payload]
		},
		deleteNews: (state, action) => {
			state.news = state.news.filter(
				(n) => n.id !== action.payload
			)
		},
	},
})

// Action creators are generated for each case reducer function
export const { addNews, loadNews, deleteNews } =
	newsSlice.actions

export const newSliceReducer = newsSlice.reducer
