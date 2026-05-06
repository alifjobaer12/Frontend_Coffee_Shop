const NavLink = () => {
	return (
		<div className="flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
			<button className="text-sm sm:text-base hover:text-[#432010] transition">
				Home
			</button>
			<button className="text-sm sm:text-base hover:text-[#432010] transition">
				Services
			</button>
			<button className="text-sm sm:text-base hover:text-[#432010] transition">
				Menu
			</button>
			<button className="text-sm sm:text-base hover:text-[#432010] transition">
				Reviews
			</button>
		</div>
	);
};

export default NavLink;
