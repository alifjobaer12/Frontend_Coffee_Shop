import { Search, ShoppingCart } from "lucide-react";

const NavButton = () => {
	return (
		<div className="hidden md:flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
			<button className="p-1 hover:bg-gray-100 rounded transition">
				<ShoppingCart size={18} />
			</button>
			<button className="p-1 hover:bg-gray-100 rounded transition">
				<Search size={18} />
			</button>
			<button className="bg-[#432010] text-white text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full hover:bg-[#6B3E26] transition">
				Signup
			</button>
		</div>
	);
};

export default NavButton;
