import { useState } from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./navComponent/NavLink";
import NavButton from "./navComponent/NavButton";
import MobileMenu from "./navComponent/MobileMenu";
import Logo from "../common/Logo";

const Navbar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<nav className="flex w-full sticky top-0 z-50 justify-between items-center px-4 sm:px-8 lg:px-10 py-3 text-[#6B3E26] bg-white/70 backdrop-blur-md border-b border-gray-200">
				<Logo />

				{/* Desktop Menu */}
				<div className="hidden md:flex gap-8">
					<NavLink />
				</div>

				{/* Desktop Buttons */}
				<div className="hidden md:flex">
					<NavButton />
				</div>

				{/* Mobile Menu Button */}
				{ !mobileMenuOpen ? <button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden p-2 rounded"
				>
					<Menu size={24} />
				</button> :
				<button
					onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					className="md:hidden p-2 rounded"
				>
					<X size={24} />
				</button>}
			</nav>

			{/* Mobile Menu */}
			<MobileMenu
				isOpen={mobileMenuOpen}
				onClose={() => setMobileMenuOpen(false)}
			/>
		</>
	);
};

export default Navbar;
