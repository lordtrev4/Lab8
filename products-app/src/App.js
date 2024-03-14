import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import ProductList from "./components/ProductList";
import { ProductsProvider } from "./context/ProductsContext"; // Adjust the import path as necessary

function App() {
	return (
		<div className="App">
			<ProductsProvider>
				<Router>
					<div>
						{/* Navigation Links */}
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/products">Product List</Link>
								</li>
								<li>
									<Link to="/product/add">Add Product</Link>
								</li>
							</ul>
						</nav>

						{/* Routes for different pages */}
						<Routes>
							<Route path="/products" element={<ProductList />} />
							<Route path="/" element={<HomePage />} />
							<Route path="*" element={<NotFoundPage />} />{" "}
							{/* Catch all other route */}
						</Routes>
					</div>
				</Router>
			</ProductsProvider>
		</div>
	);
}

export default App;
