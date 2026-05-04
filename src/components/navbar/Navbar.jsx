import Logo from "./navComponent/Logo";
import NavLink from "./navComponent/NavLink";
import NavButton from "./navComponent/NavButton";

const Navbar = () => {
	return (
		<nav className="flex w-full sticky top-0 z-50 justify-between items-center px-10 py-3 text-[#6B3E26] bg-white/70 backdrop-blur-md border-b border-gray-200">
			<Logo />
			<NavLink />
			<NavButton />
		</nav>
	);
};

export default Navbar;
