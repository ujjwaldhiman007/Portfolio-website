import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
	const [letterClass, setLetterClass] = useState('text-animate');
	useEffect(() => {
		setTimeout(() => {
			setLetterClass('text-animate-hover');
		}, 3000);
	}, []);

	return (
		<>
			<div className=' about-main  h-full w-3/4 mx-auto flex justify-center flex-col gap-20 lg:flex-row lg:items-center lg:justify-between '>
				<div className=' about-text  '>
					<h1>
						<AnimatedLetters
							letterClass={letterClass}
							strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
							idx={15}
						/>
					</h1>
					<p>
						I'm very ambitious front-end developer looking for a role in
						established IT <br /> company with the opportunity to work with
						latest technologies on challenging and diverse projects <br />
					</p>
					<p>
						I'm quietly confident, naturally curious, and perpetually working on
						improving my chops one design problen at a time. <br />
					</p>
					<p>
						if I aneed to define myself in one sentence that would be a lone
						wolf, teacher, a sports fantic, photography enthusiast, and
						tech-obsessed!!!
					</p>
				</div>
				<div>
					<div className='cubespinner border-2'>
						<div className='face1'>
							<FontAwesomeIcon icon={faAngular} color='#DD0031' />
						</div>
						<div className='face2'>
							<FontAwesomeIcon icon={faHtml5} color='#F06529' />
						</div>
						<div className='face3'>
							<FontAwesomeIcon icon={faCss3} color='#28A4D9' />
						</div>
						<div className='face4'>
							<FontAwesomeIcon icon={faReact} color='#5ED4f4' />
						</div>
						<div className='face5'>
							<FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
						</div>
						<div className='face6'>
							<FontAwesomeIcon icon={faGitAlt} color='#EC4d28' />
						</div>
					</div>
				</div>
			</div>
			<Loader type='pacman' />
		</>
	);
};
export default About;
