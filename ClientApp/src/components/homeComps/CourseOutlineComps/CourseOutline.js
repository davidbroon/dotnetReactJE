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
			return 'courseOutlineItem coTopRow';
		} else {
			return 'courseOutlineItem';
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
	return (
		<>
			<h1 className='coTitle'>What You Will Learn</h1>

			<div id='courseOutlineContainer'>{courseMap()}</div>
		</>
	);
};
export default CourseOutline;
