import React, { useEffect, useState } from "react";

const ProductForm = ({ onAddProduct, onEditProduct, editProduct }) => {
	const [product, setProduct] = useState({
		name: "",
		description: "",
		price: "",
		imageUrl: "",
		category: "",
	});

	useEffect(() => {
		if (editProduct) {
			setProduct(editProduct);
		}
	}, [editProduct]);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setProduct({ ...product, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (editProduct) {
			onEditProduct(product);
			setProduct({
				name: "",
				description: "",
				price: "",
				imageUrl: "",
				category: "",
			});
		} else {
			onAddProduct(product);
			setProduct({
				name: "",
				description: "",
				price: "",
				imageUrl: "",
				category: "",
			});
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="space-y-4"
		>
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium text-gray-700"
				>
					Name
				</label>
				<input
					type="text"
					name="name"
					value={product.name}
					onChange={handleInputChange}
					required
					placeholder="Enter product name"
					className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<div>
				<label
					htmlFor="description"
					className="block text-sm font-medium text-gray-700"
				>
					Description
				</label>
				<textarea
					name="description"
					value={product.description}
					onChange={handleInputChange}
					required
					placeholder="Enter product description"
					className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				></textarea>
			</div>
			<div>
				<label
					htmlFor="price"
					className="block text-sm font-medium text-gray-700"
				>
					Price
				</label>
				<input
					type="number"
					name="price"
					value={product.price}
					onChange={handleInputChange}
					required
					placeholder="Enter product price"
					className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<div>
				<label
					htmlFor="imageUrl"
					className="block text-sm font-medium text-gray-700"
				>
					Image URL
				</label>
				<input
					type="text"
					name="imageUrl"
					value={product.imageUrl}
					onChange={handleInputChange}
					required
					placeholder="Enter image URL"
					className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<div>
				<label
					htmlFor="category"
					className="block text-sm font-medium text-gray-700"
				>
					Category
				</label>
				<input
					type="text"
					name="category"
					value={product.category}
					onChange={handleInputChange}
					required
					placeholder="Enter product category"
					className="px-4 py-2 mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
				/>
			</div>
			<button
				type="submit"
				className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
			>
				{editProduct ? "Update Product" : "Add Product"}
			</button>
		</form>
	);
};

export default ProductForm;
