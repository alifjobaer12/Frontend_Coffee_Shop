import logo from "../../assets/logo.jpg";

const Logo = () => {
	return (
		<div className="flex items-center justify-center overflow-hidden gap-2">
			<img
				className="h-10 w-10 object-cover rounded-full"
				src={logo}
				alt="The Coffee Cup logo"
			/>
			<h1 className="font-['Pacifico']">The Coffee Cup</h1>
		</div>
	);
};

export default Logo;
