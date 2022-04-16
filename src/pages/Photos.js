import { render } from '@testing-library/react';
import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';


const Photos = () => {

	const [ photoArr ] = useState({
		photos: [
			{
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover1.png'
			},
			{
				name: 'Batman Building',
				title: 'Batman Building',
				image: 'batman1.png'
			},
			{
				name: 'Batman Building',
				title: 'Batman Building',
				image: 'batman2.png'
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
				image: 'titans.png'
			}
			
		]
	});

	// const photos = [];
	// for(let i = 0; i< photoArr.length; i++){
	// 	photos.push(<Photos key={`photo-${i}`}
	// 	photo={photoArr[i]} />)
	// }
	
	return (
		<main className='mt-6 ml-80 text-center mr-80  '>
			<Carousel>
				{photoArr.photos.map((photo, index) => {
					return(
						<div key={`photo-${index}`}
						className=' '>
							<div>
								<h1 className=' mb-6'>{photo.title}</h1>
								<img src={photo.image} alt={photo.name} className='h-96  '>
								</img>
							</div>

					</div>
					)
				})}
			</Carousel>
		</main>
		
		
	)
};

export default Photos;
