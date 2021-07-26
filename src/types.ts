export type Reservations = {
	id?: number
	season?: number
	firstName?: string
	tel?: string
	message?: string
}

export type News = {
	index?: number
	id?: number
	header?: string
	body?: string
}

export type Price = {
	index?: number
	id: number
	key: string
	price: number
}

export type reservationProps = {
	reservations: Reservations[]
}

export type State = {
	app: {
		loaded: boolean
		loadedItems: {
			news: boolean
			priceList: boolean
			reservations: boolean
		}
	}
	news: {
		news: News[]
	}
	reservations: {
		reservations: Reservations[]
		reservationsCount: number
	}
	priceList: {
		priceList: Price[]
	}
}
