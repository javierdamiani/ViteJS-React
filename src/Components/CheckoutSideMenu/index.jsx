import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import OrderCard from "../OrderCard";
import { totalPrice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
	const {
		isCheckOutSideMenuOpen,
		closeCheckOutSideMenu,
		cartProducts,
		setCartProducts,
		order,
		setOrder,
		setSearchByTitle,
	} = useContext(ShoppingCartContext);

	const handleDelete = (id) => {
		const filteredProducts = cartProducts.filter((product) => product.id != id);
		setCartProducts(filteredProducts);
	};

	const handleCheckout = () => {
		const orderToAdd = {
			date: "01.02.23",
			products: cartProducts,
			totalProducts: cartProducts.length,
			totalPrice: totalPrice(cartProducts),
		};

		setOrder([...order, orderToAdd]);
		setCartProducts([]);
		setSearchByTitle(null);
	};

	return (
		<aside
			className={`${
				isCheckOutSideMenuOpen ? "flex" : "hidden"
			} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}
		>
			<div className="flex justify-between items-center p-6">
				<h2 className="font-medium text-xl">My Order</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					className="w-6 h-6 cursor-pointer"
					onClick={closeCheckOutSideMenu}
				>
					<path d="M6 18 18 6M6 6l12 12" />
				</svg>
			</div>
			<div className="px-6 overflow-y-scroll flex-1">
				{cartProducts.map((product) => (
					<OrderCard
						key={product.title}
						id={product.id}
						title={product.title}
						imageUrl={product.images}
						price={product.price}
						handleDelete={handleDelete}
					/>
				))}
			</div>
			<div className="px-6 mb-6">
				<p className="flex justify-between items-center mb-2">
					<span className="font-light">Total:</span>
					<span className="font-medium text-xl">
						${totalPrice(cartProducts)}
					</span>
				</p>
				<Link to="/my-orders/last">
					<button
						className="w-full bg-black py-3 text-white rounded-lg "
						onClick={() => handleCheckout()}
					>
						Checkout
					</button>
				</Link>
			</div>
		</aside>
	);
};

export default CheckoutSideMenu;
