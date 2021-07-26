import React from "react"

import { Spinner } from "react-bootstrap"

export default function CircularIndeterminate() {
	return (
		<div>
			<Spinner
				animation="border"
				role="status"
				variant="info"
				style={{ width: "3rem", height: "3rem" }}
			/>
		</div>
	)
}
