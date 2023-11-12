import React from 'react'
import AnimatedShapes from "../../components/AnimatedShapes/AnimatedShapes";
import { 
  OurStoryWrapper, 
  ContentLeft, 
  LeftTitle,
  LeftText, 
  ImageWrapperLeft, 
  ImageLeft,
  MiddleLine,
  ContentRight,
  RightTitle,
  RightText,
  ImageWrapperRight,
  ImageRight,
 } from "./OurStoryStyles";
import { picture1 } from '../../assets/';

const OurStory = () => {
  return (
    <OurStoryWrapper>
    <AnimatedShapes />
        <ContentLeft>
          <LeftTitle>
            ?למה אנחנו כאן
          </LeftTitle>
          <LeftText>
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
          </LeftText>
        <ImageWrapperLeft>
         <ImageLeft src={picture1} />
        </ImageWrapperLeft>
        <LeftText>
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
           למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן למה אנחנו כאן
          </LeftText>
        </ContentLeft>
        <MiddleLine />
        <ContentRight>
          <RightTitle>
          הסיפור שלנו
          </RightTitle>
          <RightText>
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן הסיפור שלנו כאן
          </RightText>
         <ImageWrapperRight>
          <ImageRight src={picture1} />
        </ImageWrapperRight>
        </ContentRight>

    </OurStoryWrapper>
  )
}

export default OurStory
