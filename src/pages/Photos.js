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
				image: 'dover1.png'
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
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover4.png'
			},
			{
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover5.png'
			},
			{
				name: 'The Dover',
				title: 'The Dover',
				image: 'dover6.png'
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
		<main className='text-center mx-3 mt-12  sm:mx-8 sm:object-contain lg: p-5 '>
			<Carousel>
				{photoArr.photos.map((photo, index) => {
					return(
						<div key={`photo-${index}`}
						className=' '>
							<div>
								<h1 className=' mb-6'>{photo.title}</h1>
								<img src={photo.image} alt={photo.name} className='h-96 w-full object-cover hover:object-scale-down'>
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
