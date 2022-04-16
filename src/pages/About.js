import React from 'react';

const About = () => {

	return (
		<main className="flex flex-wrap pl-4">
			<div className=''>
				<img
				className=' mt-2 mt-40 mb-0 lg:mr-5 h-64  '
				src={require('../assets/Eric.png')}
				alt="Eric's Cover Pic"
				/>
			</div>
			<div>
			<p className='content-center p-2 border-4 border-sand mt-12 text-6xl ml-48 ml-20 mr-40'>
				Welcome to RealView Aero
			</p>
			</div>
			
			<div className=' w-96 items-center p-2 pb-12 lg:mr-96 ml-auto pt-6 sm:w-10/12'>
				<h3>
				Here at RealView Aero we provide top of the line on-demand drone services. Communication and quality are the keys to our success. We provide cutting edge story telling connecting people to our images and videos.
				</h3>
				<br></br>
				<h3>Gear:</h3>
				<p>DJI Mavic Air</p>
				<p>Lumix GH5 Mirrorless Camera</p>
				<br></br>
				<h3>Services:</h3>
				<p>
					Aerial: Photography and videography(4k)
					Standard: Photography and videography(4k) 
					Additional Services: Photo editing via Adobe Lightroom and Video editing with Adobe Premier
				</p>

			</div>
			
			
		</main>
		
	);
}

export default About;