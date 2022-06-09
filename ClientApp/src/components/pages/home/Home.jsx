import CoreValueDisplay from '../../homeComps/CoreValues/CoreValues';
import HeroBlock from '../../homeComps/HeroBlock/HeroBlock';
import WhoAreWe from '../../homeComps/TextSectionsFolder/WhoAreWe/whoAreWe';
import journeyCV from '../../../dummyData/journeyCoreValues.json';
import LeadersBlock from '../../homeComps/TextSectionsFolder/Leaders/LeadersBlock';
import WaitListForm from '../../homeComps/WaitListFormFolder/WaitForm';
import CourseOutline from '../../homeComps/CourseOutlineComps/CourseOutline';
import ResultsText from '../../homeComps/TextSectionsFolder/ResultsText/ResultsText';
import image1 from '../../../assets/images/faye-cornish-Uq3gTiPlqRo-unsplash.jpg';
import image2 from '../../../assets/images/ravi-pinisetti-1zikZJVXSfA-unsplash.jpg';
import image3 from '../../../assets/images/max-van-den-oetelaar-buymYm3RQ3U-unsplash.jpg';
import './home.style.css';
// import { useEffect } from 'react';
import FullWidthBackgroundImage from '../../backgroundImages/BackGroundImage';

const Home = () => {
	const cvMap = () => {
		return journeyCV.map(
			({ id, valueTitle, valueContent, valueNumber }, index) => (
				<div key={index} className='cv'>
					{CoreValueDisplay(valueTitle, valueContent, valueNumber, id)}
				</div>
			),
		);
	};
	// useEffect(() => {
	// 	let path = document.querySelector('#svgLinePath');
	// 	var pathLength = path.getTotalLength();

	// 	// Get length of path... ~577px in this ca
	// 	// Make very long dashes (the length of the path itself)
	// 	path.style.strokeDasharray = pathLength + '  ' + pathLength;

	// 	// Offset the dashes so the it appears hidden entirely
	// 	path.style.strokeDashoffset = pathLength;

	// 	// Jake Archibald says so
	// 	// https://jakearchibald.com/2013/animated-line-drawing-svg/
	// 	path.getBoundingClientRect();

	// 	// When the page scrolls...
	// 	window.addEventListener('scroll', function (e) {
	// 		// What % down is it?
	// 		// https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
	// 		// Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
	// 		var scrollPercentage =
	// 			(document.documentElement.scrollTop + document.body.scrollTop) /
	// 				(document.documentElement.scrollHeight -
	// 					document.documentElement.clientHeight) +
	// 			0.03;

	// 		// Length to offset the dashes
	// 		var drawLength = pathLength * scrollPercentage + 250;

	// 		// Draw in reverse
	// 		path.style.strokeDashoffset = pathLength - drawLength + 270;

	// 		// When complete, remove the dash array, otherwise shape isn't quite sharp
	// 		// Accounts for fuzzy math
	// 		if (scrollPercentage >= 0.99) {
	// 			path.style.strokeDasharray = 'none';
	// 		} else {
	// 			path.style.strokeDasharray = pathLength + ' ' + pathLength;
	// 		}
	// 	});
	// }, []);

	return (
		<div>
			{/* <div className='svgContainerHome'>
				<svg
					viewBox='0 0 1684 9231'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					preserveAspectRatio='xMidYMax meet'
				>
					<path
						id='svgLinePath'
						d='M803.294 0V1495H1516.53V1873.5H803.294V3080H1597.5V4599.5H803.294V5023H3.5V5878.5H803.294V6493.5H1681V8357.5H803.294V9231'
						stroke='#F4A306'
						strokeWidth='6'
					/>
				</svg>
			</div> */}
			<HeroBlock />
			<WhoAreWe />
			<div className='coreValueContainer'>
				<div className='cvLine'></div>
				{cvMap()}
			</div>

			{FullWidthBackgroundImage(image1)}
			<LeadersBlock />
			{FullWidthBackgroundImage(image2)}
			{/* <WhatToExpect /> */}
			<CourseOutline />
			{FullWidthBackgroundImage(image3)}
			<ResultsText />
			{WaitListForm('buttonLineTopLarge')}
		</div>
	);
};
export default Home;
