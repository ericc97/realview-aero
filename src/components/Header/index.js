import React from "react";
import Navigation from "../Navigation";

const Header = () => {
	return (
		<header>
			<section className="sm:flex sm:flex-wrap px-12 py-3 bg-gray-header text-white">
				<Navigation/>
				<h1 className="text-2xl font-bold text-center sm:grow sm:text-right">RealView Aero</h1>
			</section>
		</header>
	)
}
export default Header