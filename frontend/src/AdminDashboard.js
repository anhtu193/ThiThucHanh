import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "./api";
import ProductForm from "./ProductForm";

const AdminDashboard = () => {
	const [products, setProducts] = useState([]);
	const [editProduct, setEditProduct] = useState(null);

	useEffect(() => {
		fetchProducts();
	}, []);

	const fetchProducts = () => {
		api.get("/products")
			.then((response) => setProducts(response.data))
			.catch((error) => console.error("Error fetching products:", error));
	};

	const handleAddProduct = (newProduct) => {
		api.post("/products", newProduct)
			.then((response) => {
				setProducts([...products, response.data]);
				fetchProducts();
			})
			.catch((error) => console.error("Error adding product:", error));
	};

	const handleEditProduct = (updatedProduct) => {
		api.put(`/products/${updatedProduct.id}`, updatedProduct)
			.then(() => {
				fetchProducts();
				setEditProduct(null);
			})
			.catch((error) => console.error("Error updating product:", error));
	};

	const handleDeleteProduct = (id) => {
		api.delete(`/products/${id}`)
			.then(() => fetchProducts())
			.catch((error) => console.error("Error deleting product:", error));
	};

	const handleEditButtonClick = (product) => {
		setEditProduct(product);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div className="container mx-auto p-4">
			<div className="flex justify-between items-center mb-4">
				<h1 className="text-2xl font-bold">Admin Dashboard</h1>
				<Link to="/">
					<button className="bg-blue-500 text-white px-4 py-2 rounded">
						Go to Product List
					</button>
				</Link>
			</div>
			<div className="bg-white shadow-md rounded-lg p-4 mb-4">
				<h2 className="text-xl font-bold mb-4">
					{editProduct ? "Edit Product" : "Add New Product"}
				</h2>
				<ProductForm
					onAddProduct={handleAddProduct}
					onEditProduct={handleEditProduct}
					editProduct={editProduct}
				/>
			</div>
			<div className="grid grid-cols-4 gap-4">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white shadow-md rounded-lg overflow-hidden m-4 relative"
					>
						<div className="absolute top-2 right-2 flex space-x-2">
							<button
								onClick={() => handleEditButtonClick(product)}
								className="bg-yellow-500 text-white px-4 py-2 rounded"
							>
								Edit
							</button>
							<button
								onClick={() => handleDeleteProduct(product.id)}
								className="bg-red-500 text-white px-4 py-2 rounded"
							>
								Delete
							</button>
						</div>
						<div className="p-4">
							<h2 className="text-xl font-bold">
								{product.name}
							</h2>
							<p className="text-gray-700">${product.price}</p>
							<p className="text-gray-500">
								{product.category}
							</p>{" "}
							{/* Display category */}
						</div>
						<div className="p-4">
							<p>{product.description}</p>
							<img
								src={product.imageUrl}
								alt={product.name}
								className="w-full h-auto"
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminDashboard;
