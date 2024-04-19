import React from "react";

export const OrderCard = (props) => {
	const { id, title, imageUrl, price, handleDelete } = props;
	let renderXMarkIcon;
	if (handleDelete) {
		renderXMarkIcon = (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				className="w-6 h-6 cursor-pointer"
				onClick={() => handleDelete(id)}
			>
				<path d="M6 18 18 6M6 6l12 12" />
			</svg>
		);
	}
	return (
		<div className="flex justify-between items-center mb-3">
			<div className="flex items-center gap-2">
				<figure className="w-20 h-20">
					<img
						className="w-full h-full rounded-lg object-cover"
						src={imageUrl}
						alt={title}
					/>
				</figure>
				<p className="text-sm font-light">{title}</p>
			</div>
			<div className="flex items-center gap-2">
				<p className="text-lg font-medium">{price}</p>
				{renderXMarkIcon}
			</div>
		</div>
	);
};

export default OrderCard;
