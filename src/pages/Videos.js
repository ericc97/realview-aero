import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ReactPlayer from 'react-player';


const Videos = () => {

	const [ videoArr ] = useState({
		videos: [
			{
				name: 'New Mexico Video 1',
				title: 'New Mexico BLM Land',
				src: 'rado1.mp4'
			},
			{
				name: 'Colorado Video 1',
				title: 'Bella Vista, Colorado',
				src: 'rado2.mp4'
			},
			{
				name: 'Colorado Video 2',
				title: 'Colorado',
				src: 'rado3.mp4'
			},
			{
				name: 'Colorado Video 3',
				title: 'Colorado',
				src: 'rado4.mp4'
			},
			{
				name: 'Austin Video 1',
				title: '360 Bridge, Austin Texas',
				src: 'austin1.mp4'
			},
			{
				name: 'Austin Video 1',
				title: 'Downtown, Austin Texas',
				src: 'austin2.mp4'
			},
			// {
			// 	name: 'Artists Point',
			// 	title: 'Fayetteville Arkansas',
			// 	src: 'Artists point.mp4'
			// }
			
		]
	});

	// const photos = [];
	// for(let i = 0; i< photoArr.length; i++){
	// 	photos.push(<Photos key={`photo-${i}`}
	// 	photo={photoArr[i]} />)
	// }
	
	return (
		<main className='text-center mx-3 mt-12 sm:mx-8  object-none lg: p-5  '>
			<Carousel>
				{videoArr.videos.map((video, index) => {
					return(
						<div key={`video-${index}`}
						className=''>
							
							<div>
								<h1 className='mb-6'>{video.title}</h1>
								<ReactPlayer 
									url={video.src}
									playing={false}
									controls={true}
								/>
								
							</div>

					</div>
					)
				})}
			</Carousel>
		</main>
		
		
	)
};

export default Videos;