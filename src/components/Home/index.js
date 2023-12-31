import React, { useEffect } from 'react';
import LogoTitle from '../../assets/images/ujjwal-logo.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';
import Loader from 'react-loaders';

const Home = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const nameArray = ['j', 'j', 'w', 'a', 'l'];
	const jobArray = [
		'w',
		'e',
		'b',
		' ',
		'd',
		'e',
		'v',
		'e',
		'l',
		'o',
		'p',
		'e',
		'r',
	];

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
	}, []);

	return (
		<>
			<div className=' home-page'>
				<div className='text-zone'>
					<h1>
						<span className={letterClass}>H</span>
						<span className={`${letterClass} _12`}>i,</span>
						<br />
						<span className={`${letterClass} _12`}>I</span>
						<span className={`${letterClass} _12`}>'m</span>
						<img className='inline-block' src={LogoTitle} alt='developer' />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={nameArray}
							idx={15}
						/>
						<br />
						<AnimatedLetters
							letterClass={letterClass}
							strArray={jobArray}
							idx={15}
						/>
					</h1>
					<h2>Frontend Developer / JavaScript Expert / Youtuber</h2>
					<Link to='/contact' className='flat-button'>
						CONTACT ME
					</Link>
				</div>
				<Logo />
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Home;
