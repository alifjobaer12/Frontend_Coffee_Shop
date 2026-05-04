import { Search, ShoppingCart } from "lucide-react";

const NavButton = () => {
	return (
		<div className="flex items-center justify-center gap-4">
			<button>
				<ShoppingCart size={17} />{" "}
			</button>
			<button>
				{" "}
				<Search size={17}/>{" "}
			</button>
			<button className="bg-[#432010] text-white text-sm px-6 py-2 rounded-full">Signup</button>
		</div>
	);
};

export default NavButton;
