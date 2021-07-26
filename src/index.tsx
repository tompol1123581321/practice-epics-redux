import * as React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from "react-redux"
import { store } from "./store"
import { init } from "./redux/appSlice"
import { BrowserRouter as Router } from "react-router-dom"

store.dispatch(init(""))

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>,
	document.getElementById("root")
)

reportWebVitals()
