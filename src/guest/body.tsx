import React from "react"
import { Route, Switch } from "react-router-dom"
import AdminPage from "../adminPage/main"
import About from "./views/About"
import Galerie from "./views/Galerie"
import HomePage from "./views/HomePage"
import Informations from "./views/Informations"
import PriceList from "./views/PriceList"
import Reservations from "./views/Reservations"

const Body: React.FC = () => {
	return (
		<Switch>
			<Route path="/" exact>
				<HomePage />
			</Route>
			<Route path="/cenik">
				<PriceList />
			</Route>
			<Route path="/prihlasky">
				<Reservations />
			</Route>
			<Route path="/onas">
				<About />
			</Route>
			<Route path="/galerie">
				<Galerie />
			</Route>
			<Route path="/informace">
				<Informations />
			</Route>
			<Route path="/admin">
				<AdminPage />
			</Route>
		</Switch>
	)
}

export default Body
