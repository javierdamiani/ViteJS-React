import { useContext } from "react";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

function Home() {
	const { setSearchByTitle, filteredItems } = useContext(ShoppingCartContext);

	const renderView = () => {
		if (filteredItems?.length > 0) {
			return filteredItems?.map((item) => {
				return (
					<Card
						key={item.id}
						data={item}
					/>
				);
			});
		} else {
			return <div>We don't have anything</div>;
		}
	};

	return (
		<>
			<div className="flex items-center relative justify-center w-80 mb-4">
				<h1 className="font-medium text-xl">Exclusive products</h1>
			</div>
			<input
				className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
				type="text"
				placeholder="Search a product"
				onChange={(event) => setSearchByTitle(event.target.value)}
			/>
			<div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
				{renderView()}
			</div>
			<ProductDetail />
		</>
	);
}

export default Home;
