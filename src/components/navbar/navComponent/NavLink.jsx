const NavLink = ({ isMobile = false }) => {
	const containerClass = isMobile
		? "flex flex-col gap-4"
		: "flex items-center justify-center gap-4 sm:gap-6 lg:gap-8";

	return (
		<div className={containerClass}>
			<button className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left">
				Home
			</button>
			<button className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left">
				Services
			</button>
			<button className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left">
				Menu
			</button>
			<button className="text-sm sm:text-base text-[#6B3E26] hover:text-[#C89B6D] transition text-left">
				Reviews
			</button>
		</div>
	);
};

export default NavLink;
