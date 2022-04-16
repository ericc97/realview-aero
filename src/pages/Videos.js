import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ReactPlayer from 'react-player';


const Videos = () => {

	const [ videoArr ] = useState({
		videos: [
			{
				name: 'Colorado Video 1',
				title: 'New Mexico BLM Land',
				src: 'rado1.mp4'
			},
			{
				name: 'Batman Building',
				title: 'Batman Building',
				image: 'batman1.png'
			},
			{
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover2.png'
			},
			{
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover3.png'
			},
			{
				name: 'titans',
				title: 'Titans',
				src: 'titans.png'
			}
			
		]
	});

	// const photos = [];
	// for(let i = 0; i< photoArr.length; i++){
	// 	photos.push(<Photos key={`photo-${i}`}
	// 	photo={photoArr[i]} />)
	// }
	
	return (
		<main className='mt-6 ml-80 text-center mr-80'>
			<Carousel>
				{videoArr.videos.map((video, index) => {
					return(
						<div key={`video-${index}`}
						className=''>
							
							<div>
								<h1 className='mb-6'>{video.title}</h1>
								<ReactPlayer 
									url={video.src}
									playing={true}
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