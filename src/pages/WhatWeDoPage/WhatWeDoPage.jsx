import React from "react";
import { picture1 } from '../../assets/';
import AnimatedShapes from "../../components/AnimatedShapes/AnimatedShapes";
import { Container, Left, Title, Desc, Info, Contact, Phone, ContactText, Right, Image } from "./WhatWeDoPageStyles";

const Intro = () => {
  return (
    <Container>
      <Left>
        <Title>כותרת על מה אנחנו עושים כאן</Title>
        <Desc>
        תיאור על מה אנחנו עושים כאן תיאור על מה אנחנו עושים כאן
        תיאור על מה אנחנו עושים כאן תיאור על מה אנחנו עושים כאן
        תיאור על מה אנחנו עושים כאן
        </Desc>
        <Info>
          <Contact>
            <ContactText>לשאלות ניתן להתקשר</ContactText>
            <Phone>טלפון 03-5555555</Phone>
          </Contact>
        </Info>
      </Left>
      <Right><Image src={picture1}/></Right>
      <AnimatedShapes/>
    </Container>
  );
};

export default Intro;
