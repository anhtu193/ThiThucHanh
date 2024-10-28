import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import api from "./api";
import ProductCard from "./ProductCard";

const ProductList = () => {
	const [products, setProducts] = useState([]);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		api.get("/products")
			.then((response) => setProducts(response.data))
			.catch((error) => console.error("Error fetching products:", error));
	}, []);

	const openModal = (product) => {
		setSelectedProduct(product);
		setModalIsOpen(true);
	};

	const closeModal = () => {
		setModalIsOpen(false);
		setSelectedProduct(null);
	};

	return (
		<div className="container mx-auto p-4">
			<Link to="/admin">
				<button className="bg-blue-500 text-white px-4 py-2 rounded ">
					Go to Admin Page
				</button>
			</Link>

			<h1 className="text-2xl font-bold mb-4 text-center">Products</h1>
			<p className="text-xl font-semibold ">
				Click each product to see details
			</p>
			<div className="grid grid-cols-4 gap-4">
				{products.map((product) => (
					<div
						key={product.id}
						onClick={() => openModal(product)}
					>
						<ProductCard product={product} />
					</div>
				))}
			</div>
			{selectedProduct && (
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Product Information"
					className="modal"
					overlayClassName="overlay"
				>
					<h2 className="text-xl font-bold">
						{selectedProduct.name}
					</h2>
					<p className="text-gray-700">${selectedProduct.price}</p>
					<p className="text-gray-500">{selectedProduct.category}</p>
					<p>{selectedProduct.description}</p>
					<img
						src={selectedProduct.imageUrl}
						alt={selectedProduct.name}
						className="w-full h-64 object-cover"
					/>
					<button
						onClick={closeModal}
						className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
					>
						Close
					</button>
				</Modal>
			)}
		</div>
	);
};

export default ProductList;
