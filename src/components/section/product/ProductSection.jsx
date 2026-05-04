import Heading from "../../common/Heading";
import ProductCard from "./productComponent/ProductCard";

const ProductSection = () => {
	const productData = [
		{
			img: "/src/assets/product1.jpg",
			title: "Capaccino",
			price: "$3.99",
		},
		{
			img: "/src/assets/product2.jpg",
			title: "Chai Latte",
			price: "$1.99",
		},
		{
			img: "/src/assets/product3.jpg",
			title: "Macchiato",
			price: "$4.99",
		},
		{
			img: "/src/assets/product4.jpg",
			title: "Americano",
			price: "$2.99",
		},
		{
			img: "/src/assets/product5.jpg",
			title: "Espresso",
			price: "$5.99",
		},
		{
			img: "/src/assets/product6.jpg",
			title: "Capaccino",
			price: "$3.99",
		},
	];

	return (
		<div className="flex flex-col items-center gap-10 px-20  pb-20">
			<Heading
				title="Enjoy a new brand coffee style"
				desc="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
			/>

			<div className="grid grid-cols-3 gap-15 items-center justify-center">
				{productData.map((product, index) => (
					<ProductCard
						key={index}
						img={product.img}
						title={product.title}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
};

export default ProductSection;
