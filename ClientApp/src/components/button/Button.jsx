import { Button } from '@mui/material';
import { styled as styledMui } from '@mui/material';
import { accent1, accent3 } from '../../style/colorConstants';

const StyledButton = styledMui(Button)({
	display: 'inline-flex',
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '10px',
	borderRadius: 0,
	height: 75,
	width: 251,
	backgroundColor: '#FFF',
	color: '#000',
	fontFamily: 'Lemon Milk Light',
	fontSize: 20,
	lineHeight: 27,
	fontWeight: 300,
	boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

	'&:hover, &:focus': {
		backgroundColor: { accent3 },
		border: `1px solid ${accent1}`,
	},
	'&:active': {
		border: `1px solid ${accent1}`,
	},
	'&.Mui-disabled': {
		backgroundColor: 'rgba(0,0,0,0)',
		color: '#C1C1C1',
		border: '1px solid #C1C1C1',
		cursor: 'not-allowed',
		pointerEvents: 'visible',
	},
});
export default StyledButton;
