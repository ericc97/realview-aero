import React from 'react';

const Footer = () => {
	return (
		<footer>
			<ul className='flex flex-wrap w-auto justify-center py-2 mt-24'>
			<li className='mx-3'>
					<div>
						<h3>
							Follow us on Instagram!
						</h3>
					</div>
					<a href="https://www.instagram.com/realview_aero/" className='flex justify-center'>
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