import { useState, useEffect, useRef } from 'react';
import './ResultsText.style.css';
// import logo from '../../../../assets/svg/top.svg';

const ResultsText = () => {
	let size = window.matchMedia('(min-width: 580px)');

	let display = size.matches ? 'none' : 'block';
	// const [bgColor, setBgColor] = useState(false);
	// const navRef = useRef();
	// navRef.current = bgColor;
	// //const gradBackground = `'linear-gradient(#000, #e5e5e400) 85.95%)'`;
	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const show = window.scrollY > 600;
	// 		if (navRef.current !== show) {
	// 			setBgColor(show);
	// 		}
	// 	};
	// 	document.addEventListener('scroll', handleScroll);
	// 	return () => {
	// 		document.removeEventListener('scroll', handleScroll);
	// 	};
	// }, []);

	//`${bgColor ? '#E5E5E4' : 'white'}`,
	return (
		<>
			<div className='ResultsTextContainer'>
				{/* <div className='ResultsTextLine' style={{ display: { display } }} /> */}
				<p className='ResultsTextParagraph' id='ResultsTextSection'>
					Grow in your identity, worship in freedom, stretch your faith and
					become who God made you to be. Leave your time at Journey Equip whole,
					healthy, and empowered in your calling.
				</p>
			</div>
		</>
	);
};

export default ResultsText;
