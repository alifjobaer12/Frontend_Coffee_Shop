const FooterLinks = ({ links }) => {
	return (
		<div className="">
			<h3 className="text-2xl font-semibold text-white">Useful Links</h3>
			<ul className="mt-6 space-y-4 text-sm text-white/75 px-10">
				{links.map((link, index) => (
					<li key={index}>{link}</li>
				))}
			</ul>
		</div>
	);
};

export default FooterLinks;
