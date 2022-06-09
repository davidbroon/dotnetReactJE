import './BackGroundImage.style.css';

const FullWidthBackgroundImage = (image) => {
	return (
		<div className='fullWidthImageContainer'>
			<div className='fullWidthImageTopLine'></div>
			<div
				className='parallaxImage'
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className='fullWidthImageBottomLine'></div>
		</div>
	);
};
export default FullWidthBackgroundImage;
