import React from 'react'
import Hero from './../../components/Hero/Hero';
import Features from './../../components/Features/Features';
import Content from './../../components/Content/Content';
import { 
  heroOne, 
  heroTwo, 
  heroThree, 
  heroFour, 
  heroFive,
  heroSix,
  heroSeven,
  heroEight,
  heroNine,
  heroTen,
  heroEleven,
  heroTwelve, 
} from '../../data/HeroData';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      {/* <Clients /> */}
      <Content {...heroOne} />
      <Content {...heroTwelve} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Content {...heroFour} />
      <Content {...heroFive} />
      <Content {...heroSix} />
      <Content {...heroSeven} />
      <Content {...heroEight} />
      <Content {...heroNine} />
      <Content {...heroTen} />
      <Content {...heroEleven} />

    </>
  )
}

export default Home
