import React from 'react';
import { Container } from '../../globalStyles';
import {
	FeatureText,
	FeatureSection,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
    HeroImage,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';
import pattern1 from '../../assets/pattern1.png';

const Features = () => {
	return (
		<FeatureSection id="about">
           <HeroImage className="pattern" src={pattern1} />
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What I Do</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn key={index}>
							<FeatureImageWrapper className={el.imgClass}>
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName>{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
				</FeatureWrapper>
			</Container>
		</FeatureSection>
	);
};

export default Features;