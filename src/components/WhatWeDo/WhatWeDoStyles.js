import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
    padding: ${({ padding }) => (padding ? padding : '140px 0')};
	margin: ${({ margin }) => (margin ? margin : '')};
	background: 'white';
	position: ${({ position }) => (position ? position : '')};
	width: ${({ width }) => (width ? width : 'auto')};
	min-width: ${({ minWidth }) => (minWidth ? minWidth : 'auto')};
	max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : 'auto')};
	height: ${({ height }) => (height ? height : 'auto')};
	max-height: ${({ maxHeight }) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({ minHeight }) => (minHeight ? minHeight : 'auto')};

	@media screen and (max-width: 768px) {
		padding: ${({ smPadding }) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const MasonrySection = styled.div`
	color: white;
	${'' /* padding: 160px; */}
	${'' /* background: ${({ inverse }) => (inverse ? light : dark)}; */}
`;

// Masonry Grid

export const WhatWeDoImageWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	border-radius: 10px 10px 0 0;
    img {
		width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
	object-position: bottom;
	display: inline-block;
	position: relative;
	opacity: 0.7;
    }
	
`;

export const MasonryGrid = styled.div`
	display: grid;
	grid-gap: 10px;
	grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
	grid-auto-rows: 200px;
	grid-auto-flow: dense;
	margin-top: 4rem;
	@media screen and (max-width: 550px) {
		display: flex;
		flex-direction: column;
		justify-content: center;

		> a > img {
			max-height: 300px;
			object-position: center;
		}
	}
`;

export const EventImageWrapper = styled(motion.div)`
	display: flex;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&.wide {
		grid-column: span 2;
	}
	&.tall {
		grid-row: span 2;
	}
	&.big {
		grid-column: span 2;
		grid-row: span 2;
	}

	&:before {
		background: rgb(0, 0, 0, 0.7);
		content: 'קרא עוד';
		position: absolute;
		width: 100%;
		z-index: 1;
		justify-content: center;
		align-items: center;
		display: flex;
		height: 100%;
		transform: translateX(-100%);
		bottom: 0;
		color: white;
	}

	&:hover:before {
		transform: translateX(0);
		transition: transform 0.3s ease;
	}

	&:hover {
		> img {
			filter: blur(8px);
		}
	}
`;

export const EventHeading = styled(motion.h2)`
	font-size: clamp(3.5rem, 10vw, 10rem);
	margin-bottom: 2rem;
	color: #1a1f3d;
	width: 100%;
	-webkit-letter-spacing: 4px;
	-moz-letter-spacing: 4px;
	-ms-letter-spacing: 4px;
	letter-spacing: 4px;
	text-align: center;
	text-transform: capitalize;
`;

export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 5px;
	object-position: bottom;
	display: inline-block;
	position: relative;
	opacity: 0.7;
`;

export const ContentButton = styled(motion.button)`
	height: 3rem;
	padding: 16px 32px;
	font-weight: 700;
	font-size: 0.8rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	cursor: pointer;
	background: none;
	color: black;
	border-radius: 4px;
	white-space: nowrap;
	padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
	font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
	outline: none;
	border: 2px solid #aa0000;
	cursor: pointer;
	position: relative;
	overflow: hidden;

	&:before {
		background: #aa0000;
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: -1;
		transition: all 0.6s ease;
		width: 0%;
		height: 100%;
	}

	&:hover:before {
		width: 200%;
	}

	&:hover {
		color: ${({ inverse }) => (inverse ? 'white' : 'black')};
	}
`;

export const ContentHeading = styled(motion.h2)`
	margin: 1rem 0 0.5rem;
	font-size: clamp(1.3rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 600;
	color: black;

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const Img = styled(motion.img)`
	padding-right: 0;
	border: 0;
	max-width: 100%;
	vertical-align: middle;
	display: inline-block;
	object-fit: cover;
	/* height: 400px; */
	max-height: 700px;
	z-index: 1;
`;

export const ImgWrapper = styled(motion.div)`
	display: flex;
	justify-content: ${({ imgStart }) => (imgStart ? 'flex-start' : 'flex-end')};
	max-height: 700px;
	justify-content: center;
	position: relative;
	margin-top: 1rem;
	padding: 4px 0;
	max-height: 40%;
`;

export const Subtitle = styled(motion.p)`
	max-width: 440px;
	margin-top: ${({ mt }) => (mt ? '1.3rem' : '0')};
	margin-bottom: 35px;
	line-height: 24px;
	color: black;
	font-size: clamp(0.8rem, 2vw, 1rem);
`;
// bottom card

export const WhatWeDoWrapperTwo = styled.div`
	${'' /* display: grid;
	grid-template-columns: repeat(2, 1fr); */}
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	margin-bottom: 2rem;
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	margin-top: 2rem;
	
	@media screen and (max-width: 1100px) {
		${'' /* grid-template-columns: repeat(1, 1fr); */}
		grid-row-gap: 3rem;
	}

	@media screen and (max-width: 568px) {
		${'' /* grid-template-columns: repeat(1, 1fr); */}
	}
`;

export const WhatWeDoCardTwo = styled(motion.div)`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

export const WhatWeDoImageWrapperTwo = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
	margin: 1rem;
	overflow: hidden;
	border-radius: 10px;
	

    img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.3s ease-in-out;
    }
	
`;

export const WhatWeDoNameTwo = styled.h3`
	font-weight: bold;
	font-size: 1.3rem;
	letter-spacing: 2px;
	margin-bottom: 0.5rem;
	text-align: center;
	
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;

export const WhatWeDoTextTwo = styled.p`
	text-align: center;
	font-size: 1rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	font-weight: bold;
	padding: 1rem;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;


export const CardButtonTwo = styled(motion.button)`
	padding: 0.8rem 2.5rem;
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 1px;
	text-transform: uppercase;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
	outline: none;
	margin: 1rem 1rem 0 1rem;

	
	&:hover {
		transform: scale(1.15);	
	}
`;

// Features

export const CounterCirclesWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
	width: 100%;
`;

export const CounterCircle = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 1rem;
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.15);
	}
`;

export const CounterCircleText = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
`;

export const CounterCircleIcon = styled.img`
	width: 50px;
	height: 50px;
`;

export const CounterText = styled.p`
	font-size: 1.5rem;
	font-weight: bold;
	margin: 0 1rem;
`;

export const FeatureWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	flex-wrap: wrap; 
	margin-top: 4rem;
	grid-gap: 4rem;
	padding-top: 4rem;
	padding-bottom: 2rem;
	border-radius: 20px;
	box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.2);

	@media screen and (max-width: 960px) {
		grid-template-columns: repeat(2, 1fr);
		grid-column-gap: 0.4rem;
		grid-row-gap: 3rem;
		grid-gap: 3rem; 
	}

	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const FeatureColumn = styled.div`
	${'' /* max-width: 33%;  */}
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 960px) {
	  ${'' /* max-width: 50%;  */}
	}
`;

export const FeatureImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 10px solid ivory;
	
	&.one {
		background: radial-gradient(circle, rgba(13,162,97,1) 0%, rgba(37,206,133,1) 55%, rgba(13,162,97,1) 100%);
	}
	&.two {
		background: radial-gradient(circle, rgba(13,162,97,1) 0%, rgba(37,206,133,1) 55%, rgba(13,162,97,1) 100%);
	}
	&.three {
		background: radial-gradient(circle, rgba(13,162,97,1) 0%, rgba(37,206,133,1) 55%, rgba(13,162,97,1) 100%);
	}

	padding: 50px;
`;

export const FeatureCounter = styled.h3`
	font-weight: 600;
	font-size: 1.5rem;
	letter-spacing: 2px;
	color: ivory;
	margin-bottom: 0.5rem;
	text-align: center;
	justify-content: center;
	align-items: center;
	display: flex;

	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;

export const FeatureText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	line-height: 1.73;
	font-weight: bold;
    color: ivory;
	
	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const FeatureIcon = styled.div`
	margin: 0 auto;
	padding: 1rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const HeroImage = styled.img`
	z-index: 10;
	width: 100%;
	position: absolute;
	left: 0;
	object-fit: cover;

	&.pattern {
		height: 100%;
		max-height: 100%;
		top: 0;
	}

	&.guy {
		bottom: 0;
	}
`;





