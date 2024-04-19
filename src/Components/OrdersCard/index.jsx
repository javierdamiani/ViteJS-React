import React from "react";

export const OrdersCard = (props) => {
	const { totalPrice, totalProducts } = props;

	return (
		<div className="flex justify-between items-center mb-3 border border-black p-4 rounded-lg w-80">
			<div className="flex justify-between w-full">
				<p className="flex flex-col">
					<span className="font-light">01.02.23</span>
					<span className="font-light">{totalProducts} articles</span>
				</p>
				<p className="flex items-center gap-2">
					<span className="font-medium text-xl">${totalPrice}</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6"
					>
						<path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
					</svg>
				</p>
			</div>
		</div>
	);
};

export default OrdersCard;
