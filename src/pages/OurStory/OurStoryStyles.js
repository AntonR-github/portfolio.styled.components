import styled from "styled-components";

export const OurStoryWrapper = styled.div`
  width: 100%;
  height: 100%;
  ${'' /* margin-top: 10rem; */}
  ${'' /* margin-bottom: 5rem; */}
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
  padding-top: 10rem;
  background: white;
  z-index: -1;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;


export const ContentLeft = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #25ce85;
  color: black;
  padding: 20px;
  z-index: -2;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }
`;

export const ImageWrapperLeft = styled.div`
  width: 60%;
  height: 60%;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  height: 60%;
  }
`;

export const ImageLeft = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media only screen and (max-width: 1200px) {
    width: 80%;
  height: 60%;
  }
`;

export const LeftTitle = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    font-size: 50px;
    text-align: center;
  }
`;

export const LeftText = styled.p`
  width: 80%;
  font-size: 20px;
  margin-top: 20px;
  padding: 20px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

// vertical line between left and right content
export const MiddleLine = styled.div`
  width: 5px;
  height: 100%;
  background-color: black;
  margin: 0 20px;
  color: black;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;


export const ContentRight = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: black;
  padding: 20px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    height: 100%;
  }

`;

export const RightTitle = styled.h1`
  width: 60%;
  font-size: 50px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
    font-size: 50px;
    text-align: center;
  }
`;

export const RightText = styled.p`
  width: 80%;
  font-size: 22px;
  margin-top: 20px;
  padding: 20px;
  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ImageWrapperRight = styled.div`
  width: 60%;
  height: 60%;
  @media only screen and (max-width: 1200px) {
    width: 60%;
  height: 60%;
  }
`;

export const ImageRight = styled.img`
  width: 80%;
  height: 60%;
  object-fit: cover;
  @media only screen and (max-width: 1200px) {
    width: 80%;
    height: 60%;
  }
`;

