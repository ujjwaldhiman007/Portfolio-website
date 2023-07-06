import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngular,
	faCss3,
	faGitAlt,
	faHtml5,
	faJsSquare,
	faReact,
} from '@fortawesome/free-brands-svg-icons';

const index = () => {
	return (
		<div className='border-2 border-blue-700 h-full w-3/4 mx-auto flex justify-center flex-col gap-20 sm:flex-row sm:items-center sm:justify-between'>
			<div className='border-2 border-pink-300'>
				<h2 className='text-7xl text-white'>About me</h2>
				<p className='text-white text-4xl'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
					iusto cumque in.
				</p>
			</div>
			<div>
				<div className='cubespinner border-2 border-orange-400 '>
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
	);
};

export default index;
