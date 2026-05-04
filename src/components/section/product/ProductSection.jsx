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
