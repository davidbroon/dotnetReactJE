import styled from 'styled-components';

export const HeaderStyle = styled.header`
	height: 196px;
	background-color: hsla(0, 0%, 0%, 0);
	position: absolute;
	z-index: 75;
	top: 0;
	left: 0;
	text-align: center;
	width: 100%;

	.container {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	img {
		height: 196px;
		opacity: 0.75;
	}

	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		height: 80px;
		margin-bottom: 0;
		// margin-right: 40px;
		color: #fff;

		li {
			font-family: 'Lemon Milk Light';
			font-style: normal;
			font-weight: 300;
			font-size: 18px;
			line-height: 24px;
			margin-right: 16px;

			&:last-child {
				margin-right: 0;
			}
		}

		a {
			text-decoration: none;
			position: relative;
			color: #fff;
			padding: 0 4px;
			font-size: 16px;
			font-weight: 600;
		}
	}
`;
