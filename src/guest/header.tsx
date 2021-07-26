import React from "react"
import {
	Container,
	Nav,
	NavDropdown,
} from "react-bootstrap"
import Navbar from "react-bootstrap/esm/Navbar"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div>
			<Navbar
				bg="light"
				expand="lg"
				className="d-flex justify-content-between"
			>
				<Link to="/">
					<Navbar.Brand
						style={{
							marginLeft: "2rem",
						}}
					>
						Autoškola Hlaváček
					</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse
					id="basic-navbar-nav"
					style={{ marginLeft: "2rem" }}
				>
					<Nav
						style={{ textDecoration: "none" }}
						className="me-auto"
					>
						<Nav.Link>
							<Link to="/">Domů</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/cenik">Ceník</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/prihlasky">Přihlášky</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/onas">O nás</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/galerie">Galerie</Link>
						</Nav.Link>
						<Nav.Link>
							<Link to="/informace">Informace</Link>
						</Nav.Link>
					</Nav>
					<Nav>
						<Nav.Link>
							<Link to="/admin">
								Administrator <i className="fas fa-cog"></i>
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default Header
