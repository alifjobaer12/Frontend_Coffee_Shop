import Heading from "../../common/Heading";
import ProductCard from "./productComponent/ProductCard";
import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";
import product4 from "../../../assets/product4.jpg";
import product5 from "../../../assets/product5.jpg";
import product6 from "../../../assets/product6.jpg";

const ProductSection = () => {
	const productData = [
		{
			img: product1,
			title: "Capaccino",
			price: "$3.99",
		},
		{
			img: product2,
			title: "Chai Latte",
			price: "$1.99",
		},
		{
			img: product3,
			title: "Macchiato",
			price: "$4.99",
		},
		{
			img: product4,
			title: "Americano",
			price: "$2.99",
		},
		{
			img: product5,
			title: "Espresso",
			price: "$5.99",
		},
		{
			img: product6,
			title: "Capaccino",
			price: "$3.99",
		},
	];

	return (
		<div className="flex flex-col items-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-20 pb-8 sm:pb-16 lg:pb-20 w-full">
			<Heading
				title="Enjoy a new brand coffee style"
				desc="Explore all flavours of coffee with us. There is always a new cup worth experiencing"
			/>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-15 items-center justify-center w-full">
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
