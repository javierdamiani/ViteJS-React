import React, { useContext } from "react";
import OrdersCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

function MyOrders() {
	const { order } = useContext(ShoppingCartContext);
	return (
		<div>
			<div className="flex items-center relative justify-center w-80 mb-4">
				<h1 className="font-medium text-xl">MyOrders</h1>
			</div>
			{order.map((order, index) => (
				<Link
					key={index}
					to={`/my-orders/${index}`}
				>
					<OrdersCard
						totalPrice={order.totalPrice}
						totalProducts={order.totalProducts}
					/>
				</Link>
			))}
		</div>
	);
}

export default MyOrders;
