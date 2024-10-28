import React from "react";

const ProductCard = ({ product }) => {
	return (
		<div className="bg-white shadow-2xl rounded-lg overflow-hidden m-4 cursor-pointer">
			<div className="p-4">
				<h2 className="text-xl font-bold">{product.name}</h2>
				<p className="text-gray-700">${product.price}</p>
			</div>
			<div className="p-4">
				<img
					src={product.imageUrl}
					alt={product.name}
					className="w-full h-auto"
				/>
			</div>
		</div>
	);
};

export default ProductCard;
