import { useState, useEffect, useRef } from 'react';
import './ResultsText.style.css';
// import logo from '../../../../assets/svg/top.svg';

const ResultsText = () => {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 50;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', reveal);
	return (
		<>
			<div className='ResultsTextContainer reveal'>
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
