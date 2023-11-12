import React, { useEffect, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import {
    HeroSection,
    Heading,
    HeroText,
    ButtonContainer,
    HeroButton,
    ImageCharacter,
    HeroImage,
    HeroContent,
    ButtonWrapper,
    CharacterContainer,
} from './HeroStyles';
import { useInView } from 'react-intersection-observer';
import pattern1 from '../../assets/pattern1.png';
import image3 from '../../assets/image3.png';
import image1 from '../../assets/image1.png';
import image4 from '../../assets/image4.png';
import Modal from './../Modal/Modal';


const Hero = () => {

    const [showModal, setShowModal] = useState(false);
    const dragConstraints = { top: 0, bottom: 0, right: 0, left: 0 };

    //send mail to antonr1wk@gmail.com
    function sendMail() {
        window.open('mailto:antonr1wk@gmail.com');    
    }

    const toggleModal = () => {
        if (!showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }

        setShowModal(!showModal);
    };

    const variants = {
        hover: {
            y: 15,
            transition: {
                yoyo: Infinity,
                duration: 0.6,
            },
        },
    };
    const { ref, inView } = useInView({
        rootMargin: '-100px',
    });

    useEffect(() => {
        console.log(inView);
    }, [inView]);

    return (
        <>
            <HeroSection id="hero">
                <HeroImage className="pattern" src={pattern1} />
                <CharacterContainer>
                    <ImageCharacter
                        dragConstraints={dragConstraints}
                        className="one"
                        src={image3}
                    />
                    <ImageCharacter
                        dragConstraints={dragConstraints}
                        className="two"
                        src={image4}
                    />
                    <ImageCharacter
                        variants={variants}
                        whileHover="hover"
                        drag
                        dragConstraints={dragConstraints}
                        className="three"
                        src={image1}
                    />
                </CharacterContainer>
                <HeroContent>
                    <Heading>Hi, i'm Anton</Heading>
                    <HeroText>
                        I'm a full-stack developer<br /> with a passion for building beautiful and functional web apps.
                    </HeroText>
                    <ButtonContainer ref={ref}>
                        <ButtonWrapper>
                            <HeroButton onClick={sendMail} className={inView ? '' : 'corner'}>
                                {inView ? (
                                    <> Chat with me</>
                                ) : (
                                    <FiMail color="white" size="2.3rem" />
                                )}
                            </HeroButton>
                        </ButtonWrapper>
                    </ButtonContainer>
                </HeroContent>
            </HeroSection>
            <Modal showModal={showModal} toggleModal={toggleModal} />

        </>
    );
};

export default Hero




