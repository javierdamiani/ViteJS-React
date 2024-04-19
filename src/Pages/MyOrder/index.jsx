import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
	const { order } = useContext(ShoppingCartContext);
	const currentPath = window.location.pathname;
	let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
	if (index === "last") index = order?.length - 1;

	return (
		<div>
			<div className="flex items-center relative justify-center w-80 mb-6 ">
				<Link
					to="/my-orders"
					className="absolute left-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						className="w-6 h-6 "
					>
						<path d="M15.75 19.5 8.25 12l7.5-7.5" />
					</svg>
				</Link>
				<h1>MyOrders</h1>
			</div>
			<div className="flex flex-col w-80">
				{order?.[index]?.products.map((product) => (
					<OrderCard
						key={product.id}
						id={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
}

export default MyOrder;
