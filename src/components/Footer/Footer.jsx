import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from './FooterStyles';
import logo from '../../assets/logo.png';


const Footer = () => {
	return (
		<FooterContainer>
			<FooterSubscription>
				<SocialLogo to="/">
					<SocialIcon src={logo} />
				</SocialLogo>
				<FooterSubHeading>Interested hiring me? antonr1wk@gmail.com</FooterSubHeading>
			</FooterSubscription>

			<SocialMedia>
				<SocialMediaWrap>
					<WebsiteRights>
					Created by Anton © 2023
					</WebsiteRights>
					<SocialIcons>
						<SocialIconLink href="https://www.linkedin.com/in/antonrv/" target="blank" aria-label="LinkedinIn">
							<FaLinkedinIn /> 
						</SocialIconLink>
					</SocialIcons>
				</SocialMediaWrap>
			</SocialMedia>
		</FooterContainer>
	);
};

export default Footer;