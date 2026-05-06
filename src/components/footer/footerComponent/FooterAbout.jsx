const FooterAbout = ({ MapPin, Phone, Mail }) => {
	return (
		<div className="flex flex-col items-start">
			<h3 className="text-2xl font-semibold text-white">About Company</h3>
			<p className="mt-5 max-w-xs text-sm leading-6 text-white/70">
				Sipping quality coffee with a warm atmosphere, crafted for every
				moment of your day.
			</p>

			<div className="mt-6 space-y-4 text-sm text-white/85">
				<div className="flex items-center gap-3">
					<MapPin size={18} />
					<span>3rd Street, LA</span>
				</div>
				<div className="flex items-center gap-3">
					<Phone size={18} />
					<span>363576586798009</span>
				</div>
				<div className="flex items-center gap-3">
					<Mail size={18} />
					<span>info@javajolt.com</span>
				</div>
			</div>
		</div>
	);
};

export default FooterAbout;
