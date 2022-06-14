import './HeroBlock.Style.css';
import { accent3, accent2 } from '../../../style/colorConstants';
import WaitListForm from '../WaitListFormFolder/WaitForm';

const HeroBlock = () => {
	return (
		<div className='heroImage'>
			<div className='heroContainer'>
				<div className='heroTextContainer'>
					<p className='heroTitleText'>Equipping Leaders for revival</p>
				</div>

				<div className='heroButtonAndLine'>
					{/* <button className='styleButton'>Chat With the team</button> */}
					{/* <div className='heroLine' style={{ background: accent3 }} /> */}

					<WaitListForm />
					{/* <button
						className='styleButton heroButton'
						style={{
							color: '#000',
							backgroundColor: 'transparent',
							fontWeight: 700,
						}}
					>
						Register Your Interest
					</button> */}
					<div className='heroLine' style={{ background: accent3 }} />
				</div>
			</div>
		</div>
	);
};
export default HeroBlock;
