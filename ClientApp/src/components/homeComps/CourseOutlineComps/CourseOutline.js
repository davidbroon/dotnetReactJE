import './courseOutline.style.css';

const CourseOutline = () => {
	let size = window.matchMedia('(min-width: 580px)');

	let display = size.matches ? 'none' : 'block';
	return (
		<>
			<h1 className='coTitle'>What You Will Learn</h1>

			<div id='courseOutlineContainer'>
				<div className='courseOutlineItem coTopRow coTopRowSmallScreen'>
					<p className='courseOutlineBackNumber'>01</p>
					<p className='courseOutlineContent'>Culture of Honour</p>
				</div>
				<div className='courseOutlineItem coTopRow'>
					<p className='courseOutlineBackNumber'>02</p>
					<p className='courseOutlineContent'>Prophecy</p>
				</div>
				<div className='courseOutlineItem coTopRow'>
					<p className='courseOutlineBackNumber'>03</p>
					<p className='courseOutlineContent'>Focused on His Presence</p>
				</div>
				<div className='courseOutlineItem coTopRow'>
					<p className='courseOutlineBackNumber'>04</p>
					<p className='courseOutlineContent'>God is Good</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>05</p>
					<p className='courseOutlineContent'>His Kingdom is Advancing</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>06</p>
					<p className='courseOutlineContent'>Creating Healthy Families</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>07</p>
					<p className='courseOutlineContent'>Impacting Our Community</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>08</p>
					<p className='courseOutlineContent'>Healing</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>09</p>
					<p className='courseOutlineContent'>Worship in Spirit & in Truth</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>10</p>
					<p className='courseOutlineContent'>Relational Evangelism</p>
				</div>
				<div className='courseOutlineItem'>
					<p className='courseOutlineBackNumber'>11</p>
					<p className='courseOutlineContent'>Understanding the Bible</p>
				</div>
			</div>
			<div className='coLineContainer' style={{ display: display }}>
				<div className='coLine'></div>
			</div>
			<p className='coContentTwo'>
				Grow in your identity, develop your noble character, and become who God
				made you to be.
				<br />
				<br /> Leave your time at Journey Equip healthy, whole, healed, free,
				and empowered in your calling.
			</p>
		</>
	);
};
export default CourseOutline;
