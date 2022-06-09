import { useState, useEffect, useRef } from 'react';
import './whoAreWe.style.css';
// import logo from '../../../../assets/svg/top.svg';

const WhoAreWe = () => {
	const [bgColor, setBgColor] = useState(false);
	const navRef = useRef();
	navRef.current = bgColor;
	//const gradBackground = `'linear-gradient(#000, #e5e5e400) 85.95%)'`;
	useEffect(() => {
		const handleScroll = () => {
			const show = window.scrollY > 600;
			if (navRef.current !== show) {
				setBgColor(show);
			}
		};
		document.addEventListener('scroll', handleScroll);
		return () => {
			document.removeEventListener('scroll', handleScroll);
		};
	}, []);

	//`${bgColor ? '#E5E5E4' : 'white'}`,
	return (
		<>
			<div className='whoAreWeContainer'>
				<div className='whoAreWeLine' />
				<p className='whoAreWeParagraph' id='aboutUsSection'>
					Journey Equip is a new ministry school run by Journey Community Church
					located in Antrim, Northern Ireland.
					<br />
					<br />
					Our goal is to equip, train and empower leaders to bring revival to
					Ireland, Europe and The Nations.
				</p>
			</div>
		</>
	);
};

export default WhoAreWe;
