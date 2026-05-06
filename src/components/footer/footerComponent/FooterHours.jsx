const FooterHours = () => {
	return (
		<div className="flex flex-col items-start">
			<h3 className="text-2xl font-semibold text-white">Opening Hours</h3>
			<p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
				Freshly brewed coffee and cozy service throughout the week.
			</p>
			<div className="mt-6 space-y-3 text-sm text-white/85">
				<p>
					<span className="font-semibold">Monday - Friday:</span>{" "}
					09:00 AM - 08:00 PM
				</p>
				<p>
					<span className="font-semibold">Saturday - Sunday:</span>{" "}
					12:00 PM - 02:00 PM
				</p>
			</div>
		</div>
	);
};

export default FooterHours;
