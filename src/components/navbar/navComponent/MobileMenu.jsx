import { X } from "lucide-react";

const MobileMenu = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-40 md:hidden">
			{/* Overlay */}
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />

			{/* Menu Panel */}
			<div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg z-50 animate-in slide-in-from-left">
				<div className="p-6">
					<button
						onClick={onClose}
						className="mb-8 p-2 hover:bg-gray-100 rounded"
					>
						<X size={24} />
					</button>

					<nav className="flex flex-col gap-6">
						<button className="text-lg text-[#6B3E26] hover:text-[#432010] font-medium">
							Home
						</button>
						<button className="text-lg text-[#6B3E26] hover:text-[#432010] font-medium">
							Services
						</button>
						<button className="text-lg text-[#6B3E26] hover:text-[#432010] font-medium">
							Menu
						</button>
						<button className="text-lg text-[#6B3E26] hover:text-[#432010] font-medium">
							Reviews
						</button>
						<hr className="my-2 border-gray-200" />
						<button className="w-full bg-[#432010] text-white text-sm px-6 py-2 rounded-full hover:bg-[#6B3E26]">
							Signup
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileMenu;
