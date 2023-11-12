import styled from "styled-components";


export const ImpactSection = styled.section`
`;

export const ImpactRow = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: repeat(2, 1fr);
	margin-top: 5rem;
	grid-auto-columns: 2rem;

	@media screen and (max-width: 1300px) {
		grid-template-columns: repeat(1, 1fr);

	}

	@media screen and (max-width: 940px) {
		grid-template-columns: repeat(1, 1fr);

		> div:first-child {
			display: none;
		}
	}
`;

export const ImpactColumn = styled.div`
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 940px) {
		align-items: center;
	}
`;

export const Image = styled.img`
	height: 600px;
	background-size: cover;
	display: flex;
	align-items: center;
	object-fit: contain;

	@media screen and (max-width: 1300px) {
		height: 400px;
	}
`;

export const ImpactHeading = styled.h2`
	margin: 1rem 0 2rem;
	font-size: clamp(2.1rem, 7vw, 3rem);
	line-height: 1.1;
	font-weight: 600;
	color: black;

	@media screen and (max-width: 1300px) {
		font-size: clamp(1.8rem, 7vw, 3rem);
		margin: 1rem 0 1rem;
		text-align: center;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const ImpactDesc = styled.div`
	margin-bottom: 3rem;
	color: #6a6a6a;
	font-size: 1.1rem;
	font-size: clamp(1rem, 2vw, 1.1rem);

	@media screen and (max-width: 1300px) {
		max-width: 100%;
	}

	@media screen and (max-width: 768px) {
		text-align: center;
	}
`;

export const ImpactWrapper = styled.div`
	padding-left: 4rem;
	padding-right: 2rem;
	padding-top: 2rem;
	max-width: 540px;

	@media screen and (max-width: 1300px) {
		max-width: 100%;
	}

	@media screen and (max-width: 768px) {
		padding: 0;
	}
`;

export const BottomLine = styled.div`
	display: flex;
	gap: 4rem;

	@media screen and (max-width: 1300px) {
		justify-content: center;
	}

	@media screen and (max-width: 768px) {
		justify-content: center;
		flex-wrap: wrap;
	}
`;

export const ImpactNumber = styled.div`
	font-weight: 700;
	font-size: 1.3rem;
	letter-spacing: 0.04rem;
`;

export const ImpactText = styled.div`
	font-weight: 500;
	margin-top: 0.4rem;
	color: #b02929;
`;