import './courseOutline.style.css';
import courseOutline from '../../../dummyData/courseOutline.json';

const CourseOutline = () => {
	const formattedNumbers = (unformattedNumber) => {
		let formattedNumber = unformattedNumber.toString();
		if (formattedNumber.length === 1) {
			return '0' + formattedNumber;
		} else {
			return formattedNumber;
		}
	};

	const courseClassNames = (id) => {
		if (id === 1) {
			return 'courseOutlineItem coTopRow coTopRowSmallScreen';
		} else if (id < 5) {
			return 'courseOutlineItem coTopRow topReveal ';
		} else if (id < 9 && id > 5) {
			return 'courseOutlineItem middleReveal';
		} else {
			return 'courseOutlineItem bottomReveal';
		}
	};

	const courseMap = () => {
		return courseOutline.map(
			({ id, courseTitle, courseDescription }, index) => (
				<div key={index} className={courseClassNames(id)}>
					<p className='courseOutlineBackNumber'>{formattedNumbers(id)}</p>
					<p className='courseOutlineContent'>{courseTitle}</p>
				</div>
			),
		);
	};

	function topReveal() {
		var topReveals = document.querySelectorAll('.topReveal');
		for (var i = 0; i < topReveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = topReveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				topReveals[i].classList.add('active');
			} else {
				topReveals[i].classList.remove('active');
			}
		}
	}

	function middleReveal() {
		var middleReveals = document.querySelectorAll('.middleReveal');
		for (var i = 0; i < middleReveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = middleReveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				middleReveals[i].classList.add('active');
			} else {
				middleReveals[i].classList.remove('active');
			}
		}
	}

	function bottomReveal() {
		var bottomReveals = document.querySelectorAll('.bottomReveal');
		for (var i = 0; i < bottomReveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = bottomReveals[i].getBoundingClientRect().top;
			var elementVisible = 150;

			if (elementTop < windowHeight - elementVisible) {
				bottomReveals[i].classList.add('active');
			} else {
				bottomReveals[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', topReveal);
	window.addEventListener('scroll', middleReveal);
	window.addEventListener('scroll', bottomReveal);

	return (
		<>
			<h1 className='coTitle'>What You Will Learn</h1>

			<div id='courseOutlineContainer'>{courseMap()}</div>
		</>
	);
};
export default CourseOutline;
