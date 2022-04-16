import React, {useState} from "react";
import {Link} from 'react-router-dom'

const Navigation = () => {
	const [selectionBorder, setSelection] = useState({ selection: 'about', style: 'border-2 border-orange-h1 rounded-sm'})

	const changeSelection = (selection) => {
		setSelection({
			...selectionBorder,
			selection
		});
	}

	return (
		<nav className=" grow pt-1">
			<ul className="text-center sm:flex sm:flex-nowrap text-lg sm:justify-beginning justify-beginning  ">
				<li className={`px-1 hover:bg-sand sm:px-2 ${(selectionBorder.selection === 'about') ? selectionBorder.style : 'border-2 border transparent'}`}>
					<Link onClick={() => changeSelection('about')} to="/About/">About</Link>
				</li>
				<li className={`px-1 hover:bg-sand sm:px-2 ${(selectionBorder.selection === 'photos') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('photos')} to="/Photos">Photos</Link>
				</li>
				<li className={`px-1 hover:bg-sand sm:px-2 ${(selectionBorder.selection === 'videos') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('videos')} to="/Videos">Videos</Link>
				</li>
				<li className={`px-1 hover:bg-sand sm:px-2 ${(selectionBorder.selection === 'contact') ? selectionBorder.style : 'border-2 border-transparent'}`}>
					<Link onClick={() => changeSelection('contact')} to="/Contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
}



export default Navigation;