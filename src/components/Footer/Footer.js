import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin ,AiFillTwitterCircle} from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:8454977127">8454977127</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:kakayash02@gmail.com">
            kakayash02@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan> <q>
          while(!(succeed=try() ) );
            </q> 
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
        <SocialIcons href="https://github.com/Yashkaka">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/yash-kaka-33a56a1bb/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/yash_kaka_02/">
          <AiFillInstagram size="3rem"/>
          </SocialIcons>
{/* 
          <SocialIcons href="https://www.instagram.com/yash_kaka_02/">
          <AiFillMail size="3rem"/> */}
        {/* </SocialIcons> */}
        <SocialIcons href="https://twitter.com/Yashkaka02">
          <AiFillTwitterCircle size="3rem"/>
        </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
