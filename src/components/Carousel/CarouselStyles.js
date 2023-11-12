import styled from 'styled-components';
import { Row } from '../../globalStyles';
import Slider from 'react-slick';

export const WhoWeAreTitle = styled.h2`
	text-align: center;
	font-size: clamp(1.3rem, 13vw, 3.1rem);
	line-height: 1.06;
	letter-spacing: 0.4rem;
	margin: auto;
	margin-top : 2rem;
	color: #01639a;
	width: 50%;
`;

export const WhoWeAreTextWrapper = styled.div`
	position: relative;
	padding: 0 0 20px;
	margin-bottom: 4rem;
`;

export const CarouselImage = styled.img`
	width: 100%;
	height: 300px;
	border-radius: 10px 10px 0 0;
	object-fit: cover;
	vertical-align: middle;
`;


export const ImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
	padding: 1rem;
	border-radius: 10px;
	background-color: #fff;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
	}

	@media screen and (min-width: 440px) {
		border: 1px solid #bebebe;
	}
`;

export const ButtonContainer = styled(Row)`
	width: 100%;
	justify-content: space-between;
	margin: 0 auto;
	padding: 0 1rem;
	@media screen and (max-width: 960px) {
		margin: 0 auto;
	}
`;

export const ReviewSlider = styled(Slider)`
	width: 100%;
	height: 100%;
	overflow: hidden;
	.slick-slide div {
		outline: none;
	}
	.slick-slide img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.slick-track {
		display: flex;
		padding: 30px;
		gap: 3rem;
	}
	.slick-slide {
		display: flex;
		justify-content: center;
		margin-bottom: 1;
		outline: none;
	}

	.slick-list {
		overflow: hidden;
	}
`;

export const CardButton = styled.button`
	background-color: #0354CC;
	font-size: 1.3rem;
	padding: 5px 10px;
	color: #fff;
	cursor: pointer;
	width: 100%;
	font-weight: 600;
	margin: auto 0 0 0;
	border: none;
	border-radius: 0 0 10px 10px;

	&:hover {
		background-color: #FFFFFF;
		color: #0354CC;
		transition: background-color 0.2s ease-in;
	}
`;
