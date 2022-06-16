import { useState, useEffect, useRef, useContext } from 'react';
import { GlobalContext } from '../../../../context/GlobalContext';
import './whoAreWe.style.css';
// import logo from '../../../../assets/svg/top.svg';

const WhoAreWe = () => {
	const [formOpen] = useContext(GlobalContext);
	const lineDisplay = formOpen ? 'hidden' : 'visible';

	return (
		<>
			<div className='whoAreWeContainer'>
				<div className='whoAreWeLine' style={{ visibility: { lineDisplay } }} />
				<p className='whoAreWeParagraph' id='aboutUsSection'>
					Journey Equip is a new ministry school run by Journey Community Church
					located in Antrim, Northern Ireland.
					<br />
					<br />
					Our goal is to equip, train and empower leaders to bring revival to
					Ireland, Europe and The Nations.
				</p>
			</div>
		</>
	);
};

export default WhoAreWe;
