import CoreValueDisplay from '../../homeComps/CoreValues/CoreValues';
import HeroBlock from '../../homeComps/HeroBlock/HeroBlock';
import WhoAreWe from '../../homeComps/TextSectionsFolder/WhoAreWe/whoAreWe';
import journeyCV from '../../../dummyData/journeyCoreValues.json';
import LeadersBlock from '../../homeComps/TextSectionsFolder/Leaders/LeadersBlock';
import WaitListForm from '../../homeComps/WaitListFormFolder/WaitForm';
import CourseOutline from '../../homeComps/CourseOutlineComps/CourseOutline';
import ResultsText from '../../homeComps/TextSectionsFolder/ResultsText/ResultsText';
import image1 from '../../../assets/images/imageOne.jpeg';
import image2 from '../../../assets/images/imageTwo.jpeg';
import image3 from '../../../assets/images/imageThree.jpeg';
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

	return (
		<div>
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
