//Baiscs
import React from 'react';
//Libraries
import Lottie from "react-lottie";
import  {useViewport} from "../../../design/viewPort";
//State
import { connect } from 'react-redux';
//Selectors
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../../redux/cart/cart.selectors';
import { selectDarkMode } from "../../../redux/themes/themes.selectors";
import { selectCurrentUser } from '../../../redux/user/user.selectors';
//Actions
import { toggleCartHidden } from "../../../redux/cart/cart.actions";
import { toggleDarkMode } from "../../../redux/themes/themes.actions";
import { signOutStart } from "../../../redux/user/user.actions";
//Components
// import SectionFeatures from '../../../components/Sections/Features/feature.component';
import SectionFeatures from '../../../components/Sections/Features/sectionFeatures';
//Assets
import {AnimationCreateRobot} from '../../../design/animations.styles';
import heartSVG from '../../../assets/SVG/heart.svg';
import SvgHeart from '../../../assets/svgReact/Heart.js';
// import CustomSVG from '../../../assets/svgReact/CustomSVG.js';
import {CustomSVG, NewSVG} from './heroHeader.styles';
import sprite from '../../../assets/SVG/heart.svg';
import { ReactComponent as MyIcon } from "../../../assets/SVG/heart.svg";
import {SvgIcon} from './heroHeader.styles';

//Design
import { Accent_fireOrange , Accent_mateBlue } from '../../../design/effects.styles';
import {
  Arrow,
  ArrowContainer,
  ScrollDownCTA,
  Button,
  SkillTotal,
  LottieContainer,
  Front,
  Heart,
  BackgroundFigure,
  Behind,
  TEXT,
  Heading,
  HeroHeaderContainer,
  HeroHeaderLeft,
  HeroHeaderRight,
  HeroHeaderLottie,
  Skill_1,
  Skill_2,
  Skill_3,
} from "./heroHeader.styles";


export const HeroHeaderLeftContainer = (props) => {
  const { width, height } = useViewport();
  const mobileBreak = 500;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log("this is width: ", width);
  console.log("this is height: ", height);

  return (
    <HeroHeaderLeft>
      {/* <SvgHeart
        fill="inherit"
        stroke="none"
        strokeWidth="2px"
        width="28px"
        height="28px"
        name="icon-home"
      /> */}

      <Heading>
        <p className="hi">
          Hi<Accent_fireOrange>.</Accent_fireOrange>
        </p>
        <p className="verb">
          I<Accent_mateBlue>’</Accent_mateBlue>m
        </p>
        <p className="name">
          <Accent_fireOrange>K</Accent_fireOrange>hashi
        </p>
      </Heading>

      <TEXT>
        <p style={{ display: "inline" }}>
          a web <span style={{fontWeight: 400}}>developer</span>
        </p>
        {/* <p className="love" style={{ display: "inline-block" }}>and I love</p>
        <SkillTotal>
          <Skill_1>coding</Skill_1>,<Skill_2>science</Skill_2>&
          <Skill_3>nature</Skill_3>
        </SkillTotal> */}
      </TEXT>

      <Button>
        <p>Pleased to meet you</p> <SvgIcon />
        {/* <br /> */}
        <span>tea or coffee ? </span>
        <BackgroundFigure></BackgroundFigure>
      </Button>
      {/* <ScrollDownCTA>
        <ArrowContainer>
        <Arrow>
          <path stroke-linecap="round" class="a1" d="M0 0 L20 22 L40 0"></path>
        </Arrow>
        </ArrowContainer>
      </ScrollDownCTA> */}
    </HeroHeaderLeft>
  );
};


export const HeroHeaderRightContainer = (props) => {
  const { width, height } = useViewport();
  const mobileBreak = 600;
  const tabletBreak = 1000;
  const desktopBreak = 1300;
  console.log("this is width: ", width);
  console.log("this is height: ", height);
  let robotAnimation = (<Lottie options={AnimationCreateRobot} height={`100%`}/>);

  // if (width >= 1024) {
  //     robotAnimation = <HeroHeaderLottie
  //       options={AnimationCreateRobot}
  //       resizeMode="cover"
  //       height={`min-content`}        
  //     />;
  // }
  

  // if ( width <= 450 && width > 400) {
  //   robotAnimation = (
  //     <HeroHeaderLottie
  //       options={AnimationCreateRobot}
  //       resizeMode="cover"
  //       height={340}
        
  //     />
  //   );
  // } else if ( width <= 400 && width > 350) {
  //     robotAnimation = (
  //       <HeroHeaderLottie
  //         options={AnimationCreateRobot}
  //         resizeMode="cover"
  //         height={300}
          
  //       />
  //     );
  //   } 
  //    else if ( width <= 350 && width > 300) {
  //     robotAnimation = (
  //       <HeroHeaderLottie
  //         options={AnimationCreateRobot}
  //         resizeMode="cover"
  //         height={270}
          
  //       />
  //     );
  //   } else if ( width <= 300) {
  //     robotAnimation = (
  //       <HeroHeaderLottie
  //         options={AnimationCreateRobot}
  //         resizeMode="cover"
  //         height={220}
          
  //       />
  //     );
  //   } else if (width >= 1024) {
  //     robotAnimation = <HeroHeaderLottie
  //       options={AnimationCreateRobot}
  //       resizeMode="cover"
  //       height={`32.5vw`}
        
        
  //     />;
  //   }

  return (
    <HeroHeaderRight>
      <LottieContainer>{robotAnimation}</LottieContainer>
    </HeroHeaderRight>
  );
};

