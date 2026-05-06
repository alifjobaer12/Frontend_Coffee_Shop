import NavButton from "./NavButton";
import NavLink from "./NavLink";

const MobileMenu = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<>
			{/* Backdrop overlay */}
			<div
				className="fixed inset-0 z-30 bg-black/50 md:hidden"
				onClick={onClose}
			></div>

			{/* Menu sidebar */}
			<div
				className="fixed left-0 top-0 z-40 md:hidden h-full w-64 bg-white shadow-lg animate-in slide-in-from-left"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="px-6 py-20">
					<nav className="flex flex-col gap-8">
						<NavLink isMobile={true} />
						<NavButton isMobile={true} />
					</nav>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;
