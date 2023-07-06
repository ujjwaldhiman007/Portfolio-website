import React, { useEffect } from 'react';
import { useState } from 'react';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders';

const Index = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const nameArray = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
	}, []);
	return (
		<>
			<div className=' contact-page  h-full w-3/4 mx-auto flex justify-center flex-col gap-20 lg:flex-row lg:items-center lg:justify-between'>
				<div className='contact flex flex-col gap-10'>
					<span>
						<AnimatedLetters
							strArray={nameArray}
							idx={10}
							letterClass={letterClass}
						/>
					</span>
					<p>
						I am interested in freelance opportunities- especially ambitious or{' '}
						<br />
						large projects. However, if you have other request o r question,{' '}
						<br />
						don't hesitate to contactt me using below form either.
					</p>
					<form action='' className='form'>
						<div className='form-inputs'>
							<input type='text' placeholder='Name' />
							<input type='text' placeholder='Email' />
						</div>
						<div className='form-inputs'>
							<input type='text' placeholder='Subject' />
						</div>
						<div className='form-inputs'>
							<input type='text' placeholder='Message' />
						</div>
						<div className='form-btn'>
							<button>Send</button>
						</div>
					</form>
				</div>
				{/* this is map section  */}
				<div className='map-section '>
					<iframe
						className='our-map'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27787.299929205183!2d77.68825823863766!3d29.47516147487577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1ba00983523d%3A0xc6a75ba008574871!2sMuzaffarnagar%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681986252187!5m2!1sen!2sin'
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Index;
