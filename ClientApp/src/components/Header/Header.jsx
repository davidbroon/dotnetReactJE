import { Fragment } from 'react';
import { HeaderStyle } from './Header-Style';
import logo from '../../assets/logos/EquipLogo-01.svg';
import { NavLink, Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import './Header.style.css';

const Header = () => {
	if (window.matchMedia('(min-width:600px)').matches) {
		return (
			<HeaderStyle className='navbar sticky-top flex-md-nowrap p-0'>
				<div className='container'>
					{/* <ul>
						<li>
							<LinkScroll
								to='aboutUsSection'
								activeClass='active'
								spy={true}
								smooth={true}
							>
								About Us
							</LinkScroll>
						</li>
					</ul> */}
					<Link to='/'>
						<img src={logo} alt='Journey Equip' />
					</Link>
					{/* <ul>
						<li>
							<LinkScroll
								to='courseOutlineSection'
								activeClass='active'
								spy={true}
								smooth={true}
							>
								Course
							</LinkScroll>
						</li>
					</ul> */}
				</div>
			</HeaderStyle>
		);
	} else {
		return (
			<HeaderStyle className='navbar sticky-top flex-md-nowrap p-0'>
				<div className='container'>
					<Link to='/'>
						<img style={{ height: '100px' }} src={logo} alt='Journey Equip' />
					</Link>
				</div>
			</HeaderStyle>
		);
	}
};

export default Header;
