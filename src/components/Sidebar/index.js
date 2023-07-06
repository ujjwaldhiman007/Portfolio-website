import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/ujjwal-logo.png';
import LogoSubtitle from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEnvelope,
	faHome,
	faLightbulb,
	faUser,
} from '@fortawesome/free-solid-svg-icons';
import {
	faGithub,
	faLinkedin,
	faSkype,
	faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { animated } from '@react-spring/web';

const Sidebar = ({ showNav, navAnimation, nav }) => (
	<animated.div className={`nav-bar ${nav ? 'block' : 'hidden'} sm:block`}>
		<Link className='logo' to='/'>
			<img src={LogoS} alt='logo' />
			{/* <img className='sub-logo' src={LogoSubtitle} alt='slobodan' /> */}
		</Link>
		<nav>
			<NavLink
				exact='true'
				activeclassname='active'
				to='/'
				onClick={() => showNav(false)}
			>
				<FontAwesomeIcon icon={faHome} color='#4d4d4e' />
			</NavLink>

			<NavLink
				exact='true'
				activeclassname='active'
				className='about-link'
				to='/about'
				onClick={() => showNav(false)}
			>
				<FontAwesomeIcon icon={faUser} color='#4d4d4e' />
			</NavLink>

			<NavLink
				exact='true'
				activeclassname='active'
				className='contact-link'
				to='/contact'
				onClick={() => showNav(false)}
			>
				<FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
			</NavLink>

			<NavLink
				exact='true'
				activeclassname='active'
				className='tips-link'
				to='/tips'
				onClick={() => showNav(false)}
			>
				<FontAwesomeIcon icon={faLightbulb} color='#4d4d4e' />
			</NavLink>
		</nav>

		<ul>
			<li>
				<a href='' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
				</a>
			</li>
			{/* github */}
			<li>
				<a href='' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
				</a>
			</li>
			{/* youtube */}
			<li>
				<a href='' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faYoutube} color='#4d4d4e' />
				</a>
			</li>
			{/* skype */}
			<li>
				<a href='' target='_blank' rel='noreferrer'>
					<FontAwesomeIcon icon={faSkype} color='#4d4d4e' />
				</a>
			</li>
		</ul>
	</animated.div>
);

export default Sidebar;
