import './HeroBlock.Style.css';
import { accent3, accent2 } from '../../../style/colorConstants';
import { GlobalContext } from '../../../context/GlobalContext';
import { useContext } from 'react';
import WaitListForm from '../WaitListFormFolder/WaitForm';

const HeroBlock = () => {
	const [formOpen] = useContext(GlobalContext);

	const lineDisplay = formOpen ? 'hidden' : 'visible';
	const pStyles = formOpen ? { height: '14vh', fontSize: '80%' } : {};
	console.log(lineDisplay);
	return (
		<div className='heroImage'>
			<div className='heroContainer'>
				<div className='heroTextContainer'>
					<p style={pStyles} className='heroTitleText'>
						Equipping Leaders for revival
					</p>
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
					<div
						className='heroLine'
						style={{ background: accent3, visibility: { lineDisplay } }}
					/>
				</div>
			</div>
		</div>
	);
};
export default HeroBlock;
