import './CoreValues.style.css';
import journeyCV from '../../../dummyData/journeyCoreValues.json';

const CoreValueDisplay = (title, content, backNumber, id) => {
	let sideSelector;
	let titleContainerSide;
	let contentContainerSide;
	let backNumberSide;

	if (id % 2) {
		sideSelector = 'cvContainerLeft';
		titleContainerSide = 'cvTitleContainerLeft';
		contentContainerSide = 'cvContentContainerLeft';
		backNumberSide = 'cvBackNumberContainerLeft';
	} else {
		sideSelector = 'cvContainerRight';
		titleContainerSide = 'cvTitleContainerRight';
		contentContainerSide = 'cvContentContainerRight';
		backNumberSide = 'cvBackNumberContainerRight';
	}

	return (
		<div className={sideSelector}>
			<div className={titleContainerSide}>
				<p className='cvTitle'>{title}</p>
			</div>
			<div className={contentContainerSide}>
				<p className='cvContent'>{content}</p>
			</div>
			<div className={backNumberSide}>
				<p className='cvBackNumber'>{backNumber}</p>
			</div>
		</div>
	);
};
export default CoreValueDisplay;
