import { useState } from "react";
import { Search, ShoppingCart, X } from "lucide-react";

const NavButton = ({ isMobile = false }) => {
	const [isSearchOpen, setIsSearchOpen] = useState(false);

	return (
		<div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6">
			<div
				className={
					isMobile
						? "w-full relative gap-3 flex items-center"
						: "relative flex items-center gap-6"
				}
			>
				{/* Search box - appears left of button on desktop, above on mobile */}
				{isSearchOpen && (
					<input
						type="text"
						placeholder="Search..."
						className={`absolute px-3 py-1 border border-gray-300 rounded outline-none focus:border-[#432010] transition ${
							isMobile
								? "w-full top-full left-0 mt-2"
								: "right-full top-1/2 -translate-y-1/2 mr-2 w-40"
						}`}
						autoFocus
					/>
				)}

				{/* Search/Close button */}
				<button
					onClick={() => setIsSearchOpen(!isSearchOpen)}
					className="p-1 hover:bg-gray-100 rounded transition"
				>
					{isSearchOpen ? <X size={18} /> : <Search size={18} />}
				</button>
				<button className="p-1 hover:bg-gray-100 rounded transition">
					<ShoppingCart size={18} />
				</button>
			</div>

			<button className="bg-[#432010] text-white text-xs sm:text-sm px-4 sm:px-6 py-2 rounded-full hover:bg-[#6B3E26] transition">
				Signup
			</button>
		</div>
	);
};

export default NavButton;
