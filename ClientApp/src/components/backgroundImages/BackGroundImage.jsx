import './BackGroundImage.style.css';

const FullWidthBackgroundImage = (image, id) => {
	// if (id === 'parallax') {
	// 	const parallax = document.getElementById('parallax');
	// 	if (parallax !== null) {
	// 		window.addEventListener('scroll', function () {
	// 			let offset = window.screenY;
	// 			parallax.style.backgroundPositionY = offset * 0.9 + 'px';
	// 		});
	// 	}
	// }
	return (
		<div className='fullWidthImageContainer'>
			<div className='fullWidthImageTopLine'></div>
			<div
				className='homeFullWidthImage'
				// id={id}
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className='fullWidthImageBottomLine'></div>
		</div>
	);
};
export default FullWidthBackgroundImage;
