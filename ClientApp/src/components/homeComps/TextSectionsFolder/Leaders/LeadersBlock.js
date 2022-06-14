import './leadersBlock.style.css';

const LeadersBlock = () => {
	function reveal() {
		var reveals = document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop = reveals[i].getBoundingClientRect().top;
			var elementVisible = 50;

			if (elementTop < windowHeight - elementVisible) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	window.addEventListener('scroll', reveal);
	return (
		<>
			<p className='leadersParagraph reveal'>
				<span className='leadersTitle'>
					Partner with Leaders in Global Revival
				</span>
				<br />
				<br />
				Journey Equip is run in partnership with Bethel Church Redding and the
				Bethel School of Supernatural Ministry (BSSM).
				<br />
				<br />
				As a student you will receive teaching from some of the most influential
				leaders in revival from across the globe. Local teachers from our church
				leadership team and guest speakers from BSSM will regularly feature both
				in person and via live stream.
				<br />
				<br />
				You will receive the opportunity to learn and live out the call that God
				has placed on your life, by serving in one or more of our church
				ministry teams to bless and transform our local community.
			</p>
			{/* <div className='leaderLineContainer'>
				<div className='leaderLine'></div>
			</div> */}
		</>
	);
};

export default LeadersBlock;
