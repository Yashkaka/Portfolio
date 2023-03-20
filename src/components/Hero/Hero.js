import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from 'typewriter-effect';
import { Div1 } from '../Header/HeaderStyles';


const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br />
           I am Yash Kaka <br/>


          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Full Stack Developer')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Technology Enthusiast')
                .pauseFor(2000)
                .deleteAll()
                .typeString('Fast Learner')
                .pauseFor(2000)
                .start();
            }}
            options={{
              // strings: ['Hello', 'World'],
              autoStart: true,
              loop: true,
            }}

          />
        </SectionTitle>
      
        <Button onClick={() => window.location = 'https://drive.google.com/file/d/1w9BexREHDM0S6orFytYZXcDIjG16ufCQ/view?usp=sharing'}>Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;


