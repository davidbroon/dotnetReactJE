import './whatToExpect.style.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const WhatToExpect = () => {
	let size = window.matchMedia('(min-width: 580px)');
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	if (size.matches) {
		return (
			<div className='wteContainer'>
				<h1 className='wteHeader'>What to Expect?</h1>
				<div className='wteContentOne'>
					{/* flex justify spread even, row*/}
					<div className='wteContentOneContainers'>
						<p className='wteContentOneTitle'>Grow in Identity</p>
						<p className='wteContentOneTitle'>Grow in Faith</p>
						<p className='wteContentOneTitle'>Worship in Freedom</p>
					</div>
					{/*  //flex column */}
					<div className='wteContentOneContainers'>
						<div className='wteContentOneLine'></div>
						<div className='wteContentOneLine wteContentOneLineCenter'></div>
						<div className='wteContentOneLine'></div>
					</div>
					<div className='wteContentOneContainers'>
						<p className='wteContentOneContent'>
							Live a life of supernatural forgiveness, acceptance, & surrender.
						</p>
						<p className='wteContentOneContent'>
							Get both hands-on training and Biblical understanding of the
							kingdom of God in a “teach and do” culture. Learn to walk in the
							power of God.
						</p>
						<p className='wteContentOneContent'>
							Learn to walk and wait in the presence of the Lord
						</p>
					</div>
				</div>
				<div className='wteLineContainer'>
					<div className='wteLine'></div>
				</div>
			</div>
		);
	} else {
		return (
			<div className='wteContainer'>
				<h1 className='wteHeader'>What to Expect?</h1>
				<Slider {...settings}>
					<div className='wteContentOneContainers'>
						<p className='wteContentOneTitle'>Grow in Identity</p>
						<div className='wteContentOneLineContainer'>
							<div className='wteContentOneLine'></div>
						</div>
						<p className='wteContentOneContent'>
							Live a life of supernatural forgiveness, acceptance, & surrender.
						</p>
					</div>
					{/*  //flex column */}
					<div className='wteContentOneContainers'>
						<p className='wteContentOneTitle'>Grow in Faith</p>
						<div className='wteContentOneLineContainer'>
							<div className='wteContentOneLine'></div>
						</div>
						<p className='wteContentOneContent'>
							Get both hands-on training and Biblical understanding of the
							kingdom of God in a “teach and do” culture. Learn to walk in the
							power of God.
						</p>
					</div>
					<div className='wteContentOneContainers'>
						<p className='wteContentOneTitle'>Worship in Freedom</p>
						<div className='wteContentOneLineContainer'>
							<div className='wteContentOneLine'></div>
						</div>
						<p className='wteContentOneContent'>
							Learn to walk and wait in the presence of the Lord
						</p>
					</div>
				</Slider>
			</div>
		);
	}
};

export default WhatToExpect;
