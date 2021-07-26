import * as React from "react"
import { useSelector } from "react-redux"
import Loader from "./components/Loader"
import { ApplicationPages } from "./guest/AplicationPages"
import { getAppState } from "./redux/selectors"

const App = () => {
	const loaded = useSelector(getAppState).loaded

	return (
		<>
			{loaded ? (
				<div>
					<ApplicationPages />
				</div>
			) : (
				<div
					style={{
						width: "100vw",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Loader />
				</div>
			)}
		</>
	)
}

export default App
