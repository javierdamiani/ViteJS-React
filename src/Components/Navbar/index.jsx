import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";

let menuLeft = [
	{
		to: "/",
		text: "Shopi",
		className: "font-semibold text-lg",
	},
	{
		to: "/",
		text: "All",
		className: "",
	},
	{
		to: "/clothes",
		text: "clothes",
		className: "",
	},
	{
		to: "/electronics",
		text: "electronics",
		className: "",
	},
	{
		to: "/furnitures",
		text: "furnitures",
		className: "",
	},
	{
		to: "/toys",
		text: "toys",
		className: "",
	},
	{
		to: "/others",
		text: "others",
		className: "",
	},
];

let menuRight = [
	{
		to: "/email",
		text: "javier@gmail.com",
		className: "text-black/60",
	},
	{
		to: "/my-orders",
		text: "My orders",
		className: "",
	},
	{
		to: "/my-account",
		text: "My account",
		className: "",
	},
	{
		to: "/sign-in",
		text: "Sign in",
		className: "",
	},
];

const NavBar = () => {
	const { cartProducts, setSearchByCategory } = useContext(ShoppingCartContext);
	const textDecoration = "underline underline-offset-4";

	return (
		<nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
			<ul className="flex gap-3 items-center">
				{menuLeft.map((link) => (
					<li
						key={link.text}
						className={link.className}
					>
						<NavLink
							onClick={() => setSearchByCategory(link.text)}
							to={link.to}
							className={({ isActive }) =>
								isActive ? textDecoration : undefined
							}
						>
							{link.text}
						</NavLink>
					</li>
				))}
			</ul>
			<ul className="flex gap-3 items-center">
				{menuRight.map((link) => (
					<li
						key={link.text}
						className={link.className}
					>
						<NavLink
							to={link.to}
							className={({ isActive }) =>
								isActive ? textDecoration : undefined
							}
						>
							{link.text}
						</NavLink>
					</li>
				))}
				<li>
					<NavLink
						to="/shoppcar"
						className={({ isActive }) =>
							isActive ? textDecoration : undefined
						}
					>
						🛒 {cartProducts.length}
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
