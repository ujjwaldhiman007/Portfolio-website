import Sidebar from '../Sidebar';
import './index.scss';
import './index.scss';
import { Outlet } from 'react-router-dom';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useSpring } from '@react-spring/web';

const Layout = () => {
	const [nav, showNav] = useState(false);
	const [navAnimation, setnavAnimation] = useSpring(() => ({
		opacity: 0,
	}));

	const showNavHandler = () => {
		showNav(!nav);
		setnavAnimation.start({
			opacity: nav ? 0 : 1,
		});
	};
	return (
		<>
			<div className='App'>
				<span className='home-icon' onClick={showNavHandler}>
					{nav ? (
						<FontAwesomeIcon icon={faClose} />
					) : (
						<FontAwesomeIcon icon={faBars} />
					)}
				</span>
				<Sidebar showNav={showNav} nav={nav} navAnimation={navAnimation} />

				<div className='page'>
					<span className='tags top-tags'>&lt;body&gt;</span>
					<Outlet />
					<span className='tags bottom-tags'>
						&lt;/body&gt;
						<br />
						<span className='bottom-tag-html'>&lt;/html&gt;</span>
					</span>
				</div>
			</div>
		</>
	);
};

export default Layout;
