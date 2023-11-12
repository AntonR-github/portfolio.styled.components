import React, { useEffect, useState } from 'react';
import { Container } from '../../globalStyles'
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import Modal from '../Modal/Modal';
import {
	Section,
	MasonrySection,
	MasonryGrid,
	EventImageWrapper,
	// EventHeading,
	WhatWeDoImageWrapper,
	// Image,
	// ContentButton,
	// ContentHeading,
	// Img,
	ImgWrapper,
	Subtitle,
	WhatWeDoTextTwo,
	WhatWeDoWrapperTwo,
	WhatWeDoCardTwo,
	WhatWeDoImageWrapperTwo,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureCounter,
	FeatureText,
	FeatureIcon,
} from './WhatWeDoStyles';
import { whatData, whatData2 } from '../../data/WhatWeDoData';
import { featuresData } from '../../data/FeaturesData';
import { featuresBG } from '../../assets';


const WhatWeDo = () => {

	const animation = useAnimation();
	const [showModal, setShowModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState(0);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				scale: 1,
			});
		}
	}, [inView, animation]);

	const handleClick = (index) => {
		setShowModal(true);
		setSelectedImage(index);
	};

	// const navigator = useNavigate()

	// function navigateTo(path) {
	// 	navigator(path)
	// }

	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (



		<>
			<MasonrySection>
				<Container>
					<MasonryGrid ref={ref}>
						{whatData.map((el, index) => (
							<EventImageWrapper
								initial={initial}
								animate={animate}
								transition={{ duration: 0.5 + index * 0.1 }}
								key={index}
								onClick={() => handleClick(index)}
								className={el.class}
							>
								<WhatWeDoImageWrapper>
									{el.image}
								</WhatWeDoImageWrapper>

							</EventImageWrapper>

						))}
					</MasonryGrid>
				</Container>
				<Modal show={showModal} onHide={() => setShowModal(false)}>
					{/* <ContentHeading inverse>Title</ContentHeading> */}
					<ImgWrapper>
						<WhatWeDoImageWrapper>
							{whatData[selectedImage].image}
						</WhatWeDoImageWrapper>
					</ImgWrapper>
					<Subtitle mt inverse>
						{whatData[selectedImage].description}
					</Subtitle>
					{/* <ContentButton inverse>Buy Tickets</ContentButton> */}
				</Modal>
			</MasonrySection>

			<Section smpadding="50px 10px" position="relative" inverse id="about">
				<Container>
					<WhatWeDoWrapperTwo>
						{/* What We Do Card Two */}
						{whatData2.map((el, index) => (
							<WhatWeDoCardTwo
								initial={initial}
								animate={animate}
								transition={{ duration: 0.5 + index * 0.1 }}
								key={index}
								href={el.href}
								background={el.background}
								style={{
									background: el.background,
									color: `${el.color}`,
								}}
							>
								<WhatWeDoImageWrapperTwo className={el.imgClass}>
									{el.image}
								</WhatWeDoImageWrapperTwo>
								{/* <WhatWeDoNameTwo>
								{el.name}
							</WhatWeDoNameTwo> */}
								<WhatWeDoTextTwo>
									{el.description}
								</WhatWeDoTextTwo>
								{/* <CardButtonTwo
								style={{
									color: 'white',
									background: 'transparent',
									border: `5px solid white`,
								}}
								onClick={() => navigateTo(el.navigateTo)}>
								{el.buttonLabel}
							</CardButtonTwo> */}
							</WhatWeDoCardTwo>
						))}
					</WhatWeDoWrapperTwo>
					<FeatureWrapper
						style={{
							backgroundImage: `url(${featuresBG})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							backgroundRepeat: 'no-repeat',
							backgroundAttachment: 'fixed',
						}}
					>
						{featuresData.map((el, index) => (
							<FeatureColumn key={index}>
								<FeatureImageWrapper className={el.imgClass}>
									<FeatureIcon>
										{el.icon}
									</FeatureIcon>
									<FeatureCounter>
										{el.counter}
									</FeatureCounter>
									<FeatureText>
										{el.description}
									</FeatureText>
								</FeatureImageWrapper>
							</FeatureColumn>
						))}
					</FeatureWrapper>
				</Container>
			</Section>
		</>
	)
}

export default WhatWeDo
