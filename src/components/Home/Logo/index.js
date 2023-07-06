import React from 'react';
import './index.scss';
import LogoS from '../../../assets/images/ujjwal-logo.png';

const Logo = () => {
	return (
		<div className='logo-container'>
			<img src={LogoS} className='solid-logo' alt='S' />
		</div>
	);
};

export default Logo;
