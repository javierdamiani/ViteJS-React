import React, { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const ProductDetail = () => {
	const { isProductDetailOpen, closeProductDetail, productToShow } =
		useContext(ShoppingCartContext);

	return (
		<aside
			className={`${
				isProductDetailOpen ? "flex" : "hidden"
			} flex-col fixed right-0 border bg-white border-black rounded-lg w-[360px] h-[calc(100vh-100px)]`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">Detail</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6 cursor-pointer"
					onClick={closeProductDetail}
				>
					<path d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>
			<figure className="px-6">
				<img
					className="w-full rounded-lg"
					src={productToShow.images ? productToShow.images[0] : ""}
					alt={productToShow.title}
				/>
				<p className="flex flex-col p-6">
					<span className="font-medium text-2xl mb-2">
						${productToShow.price}
					</span>
					<span className="font-medium text-md">{productToShow.title}</span>
					<span className="font-light text-sm">
						{productToShow.description}
					</span>
				</p>
			</figure>
		</aside>
	);
};

export default ProductDetail;
