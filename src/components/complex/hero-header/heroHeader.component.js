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


//State Mangement


//State Selector
// import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectMenuOpen } from "../../../redux/vegeloperPage/vegeloperPage.selectors";
//Actions
// import { checkUserSession } from "./redux/user/user.actions";
import { toggleMenuOpen } from "../../../redux/vegeloperPage/vegeloperPage.actions";
// import { toggleMenuOpen } from "../../../redux";

export const HeroHeaderLeftContainer = (props) => {
  const Action_ToggleMenuOpen = props.toggleMenuOpen;
  const open = props.open;



  return (
    <HeroHeaderLeft open={open}>


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
          a web <span style={{ fontWeight: 400 }}>developer</span>
        </p>

      </TEXT>

      <Button open={open} onClick={Action_ToggleMenuOpen}>
        <p>Pleased to meet you</p> <SvgIcon />
        {/* <br /> */}
        <span>tea or coffee ? </span>
        <BackgroundFigure></BackgroundFigure>
      </Button>

    </HeroHeaderLeft>
  );
};



export const HeroHeaderRightContainer = (props) => {
  let robotAnimation = (<Lottie options={AnimationCreateRobot} height={`100%`}/>);

  return (
    <HeroHeaderRight>
      <LottieContainer>{robotAnimation}</LottieContainer>
    </HeroHeaderRight>
  );
};







const mapStateToProps = createStructuredSelector({
  // currentUser: selectCurrentUser,
  menuOpen: selectMenuOpen,
});

const mapDispatchToProps = (dispatch) => ({
  // checkUserSession: () => dispatch(checkUserSession()),
  toggleMenuOpen: () => dispatch(toggleMenuOpen()),
});

// export default connect(mapStateToProps, mapDispatchToProps)(HeroHeaderLeftContainer);

export default {
  LeftContainer: connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeroHeaderLeftContainer),
  RightContainer: connect(
    mapStateToProps,
    mapDispatchToProps
  )(HeroHeaderRightContainer),
};
