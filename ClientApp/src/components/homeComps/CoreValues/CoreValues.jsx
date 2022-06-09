import './CoreValues.style.css';
import journeyCV from '../../../dummyData/journeyCoreValues.json';

const CoreValueDisplay = (title, content, backNumber, id) => {
	let sideSelector;
	let titleContainerSide;
	let contentContainerSide;
	let backNumberSide;

	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', reveal);

	if (id % 2) {
		sideSelector = 'cvContainerLeft reveal';
		titleContainerSide = 'cvTitleContainerLeft';
		contentContainerSide = 'cvContentContainerLeft';
		backNumberSide = 'cvBackNumberContainerLeft';
	} else {
		sideSelector = 'cvContainerRight reveal';
		titleContainerSide = 'cvTitleContainerRight';
		contentContainerSide = 'cvContentContainerRight';
		backNumberSide = 'cvBackNumberContainerRight';
	}

	return (
		<div className={sideSelector}>
			<div className={backNumberSide}>
				<p className='cvBackNumber'>{backNumber}</p>
			</div>
			<div className={titleContainerSide}>
				<p className='cvTitle'>{title}</p>
			</div>
			<div className={contentContainerSide}>
				<p className='cvContent'>{content}</p>
			</div>
		</div>
	);
};
export default CoreValueDisplay;
