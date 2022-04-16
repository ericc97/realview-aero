import React from 'react';

const Footer = () => {
	return (
		<footer>
			<ul className='flex flex-wrap w-auto justify-center py-2'>
			<li className='mx-3'>
					<a href="https://www.instagram.com/realview_aero/">
						<img
							src={require('../../assets/instagram-logo.png')}
							alt="GitHub Logo"
							className="h-10 opacity-100 hover:opacity-60"
						/>
					</a>
				
				</li>
			</ul>
		</footer>
	);
}

export default Footer;