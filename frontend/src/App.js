import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import ProductList from "./ProductList";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={<ProductList />}
				/>
				<Route
					path="/admin"
					element={<AdminDashboard />}
				/>
			</Routes>
		</Router>
	);
};

export default App;
