import React, { useState } from 'react';
import './style.scss';
import AnimatedLetter from '../AnimatedLetters';
import { useEffect } from 'react';
import Loader from 'react-loaders';

const Index = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	const tipsArray = [
		'F',
		'r',
		'o',
		'n',
		't',
		'e',
		'n',
		'd',
		' ',
		'T',
		'i',
		'p',
		's',
	];

	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 4000);
	}, []);
	return (
		<>
			<div className='tips-section  h-full w-3/4 mx-auto flex justify-center  flex-col  '>
				<span>
					<AnimatedLetter
						letterClass={letterClass}
						strArray={tipsArray}
						idx={10}
					/>
				</span>
				<div className='tips-tabs'>
					<a href=''>
						<img
							src='https://cdn.icon-icons.com/icons2/2415/PNG/96/javascript_original_logo_icon_146455.png'
							alt=''
						/>
					</a>
					<a href=''>
						<img
							src='https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png'
							alt=''
						/>
					</a>
					<a href=''>
						<img
							src='https://cdn.icon-icons.com/icons2/2699/PNG/512/angular_logo_icon_169595.png'
							alt=''
						/>
					</a>
					<a href=''>
						<img
							src='https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png'
							alt=''
						/>
					</a>
					<a href=''>
						<img
							src='https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png'
							alt=''
						/>
					</a>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};

export default Index;
