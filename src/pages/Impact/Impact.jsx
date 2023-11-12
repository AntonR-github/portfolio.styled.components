import React from 'react'
import { Section, Container } from '../../globalStyles'
import { 
  BottomLine,
  Image,
  ImpactWrapper,
  ImpactNumber,
  ImpactText,
  ImpactDesc,
  ImpactRow,
  ImpactColumn,
  ImpactHeading
} from './ImpactStyles'
import AnimatedShapes from "../../components/AnimatedShapes/AnimatedShapes";
import { impactData } from '../../data/ImpactData';
import { carousel } from '../../assets';


const Impact = () => {

  const { headline, description, bottomLine } = impactData;

  return (
    <Section inverse
      style={{
        zIndex: -2,
      }}
    >
      <AnimatedShapes/>
    <Container>
      <ImpactRow>
        <ImpactColumn>
          <Image
            src={carousel}
          />
        </ImpactColumn>
        <ImpactColumn>
          <ImpactWrapper>
            <ImpactHeading>
              {headline}
            </ImpactHeading>
            <ImpactDesc>
              {description}
            </ImpactDesc>
            <BottomLine>
              {bottomLine.map((el, index) => (
                <ImpactColumn key={index}>
                  <ImpactNumber>
                    {el.number}
                  </ImpactNumber>
                  <ImpactText>
                    {el.numberText}
                  </ImpactText>
                </ImpactColumn>
              ))}
            </BottomLine>
          </ImpactWrapper>
        </ImpactColumn>
      </ImpactRow>
      </Container>
    </Section>
  )
}

export default Impact
