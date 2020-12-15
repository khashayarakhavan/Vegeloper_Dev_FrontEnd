import React, {useState} from 'react';
import styled, { css } from "styled-components";
import {rgba} from 'polished';
import Hero from "../../components/atomic/hero/hero.component";
import SideNav from "../../components/atomic/side-nav/side-nav.component";
import TopRealtors from "../../components/atomic/top-realtors/top-realtors.component";
import Features from "../../components/complex/section/feature/feature.component";
import MiniCards from "../../components/complex/section/MiniCards/MiniCards.component";
import SectionFooter from "../../components/complex/section/landing.footer/landing.footer.component";
import SectionHome from "../../components/complex/section/landing.home/landing.home.component";
import Cards from "../../components/Sections/Cards/Cards.component";
import Skills from "../../components/Sections/skills/skills.component";
import SectionStoriesPicture from "../../components/complex/section/stories-picture/stories-picture.component";
import { LandingPageContainer } from "./vegeloper.styles";
import Header from '../../components/Sections/header/header.component';
import Heading from '../../components/Sections/Heading/heading.component';
import ScrollHorizontal from '../../components/Sections/ScrollHorizontal/scrollHorizontal.component';
import HeroHeader from "../../components/complex/hero-header/heroHeader.component";
// import HeroHeaderLeftContainer ,{
//   HeroHeaderRightContainer,
// } from "../../components/complex/hero-header/heroHeader.component";

//Section
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';

//Styles
import {
  VegeloperContainer,
} from "./vegeloper.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import {Phone, Nav, NavButton, NavIcon, NavText, Burger, Content} from './vegeloper.styles';
//State Mangement
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//State Selector
// import { selectCurrentUser } from "./redux/user/user.selectors";
import { selectMenuOpen } from "../../redux/vegeloperPage/vegeloperPage.selectors";
//Actions
// import { checkUserSession } from "./redux/user/user.actions";
import { toggleMenuOpen } from "../../redux/vegeloperPage/vegeloperPage.actions";

const VegeloperPage = ({ menuOpen, toggleMenuOpen }) => {
  // const [open, setOpen] = useState(false);
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Burger onClick={toggleMenuOpen} className="uil uil-bars" />
      <Content open={menuOpen}>
        <VegeloperContainer open={menuOpen}>
          <Header />
          <HeroHeader.LeftContainer open={menuOpen} />
          <HeroHeader.RightContainer />
          <ScrollDownCTA />
          <Heading />
          <YouTube />
          <ScrollHorizontal />
          <Projects />
          <MiniCards />
        </VegeloperContainer>
      </Content>
    </Phone>
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

export default connect(mapStateToProps, mapDispatchToProps)(VegeloperPage);


// const VegeloperPage = () => (
//   <VegeloperContainer>
//     <Header />
//     <HeroHeaderLeftContainer />
//     <HeroHeaderRightContainer />
//     <ScrollDownCTA />
//     <Heading/>
//     <YouTube />
//     <ScrollHorizontal/>
//     <Projects />
//     <MiniCards />
//   </VegeloperContainer>
// );











































// <ScrollContainer>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
//   <Child>
//     <h1>CSS-only horizontal scroll tentative</h1>
//     <p>
//       The idea is to create an horizontal scroll layout and to allow the user to
//       scroll up/down the mouse to scroll left/right.
//     </p>
//     <p>
//       So… please scroll <strong>down</strong> with your mouse.
//     </p>
//   </Child>
// </ScrollContainer>;