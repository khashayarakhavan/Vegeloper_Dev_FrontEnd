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
import {
  HeroHeaderLeftContainer,
  HeroHeaderRightContainer,
} from "../../components/complex/hero-header/heroHeader.component";

//Section
import {YouTube} from '../../components/Sections/YouTube/youTube.component';
import Projects from '../../components/Sections/Projects/projects.component';

//Design
import {
  VegeloperContainer,
} from "./vegeloper.styles";

import ScrollDownCTA from '../../components/Sections/ScrollDown/ScrollDown.component';
import colors from '../../design/colors';
const Phone = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  background: #5a32a0;
  background-color: ${colors.accent.ochreFire};
  background-color: ${colors.accent.ochreOxide};
  background-color: ${colors.accent.ochrePale};
`;

const openStyles = css`
  transform: translateX(100px) scale(0.95);
  border-radius: 10vw;
`;

const Content = styled.div`
  ${"" /* height: 800px; */}
  width: 100%;
  ${'' /* padding: 2rem 1.5rem; */}
  ${'' /* border-radius: 40px; */}
  overflow: hidden;
  background: #210f40;
  transform: translateX(0) scale(1);
  transition: 0.45s ${(p) => p.open && openStyles};
`;

const Burger = styled.button`
position: fixed;
&:focus, &:active {
  border: none;
  outline: none;
}
top: 2rem;
left: 2rem;
z-index: 100;
  background: transparent;
  border: 0;
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const Nav = styled.nav`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${'' /* background: red; */}
  top: 50vh;
  transform: translateY(-50%);
`;

const NavButton = styled.button`
  display: flex;
  border: none;
  align-items: center;
  justify-content: flex-start;
  height: 44px;
  background: transparent;
  color: ${rgba("white", 0.5)};
  &:focus,
  &:hover,
  &:active {
    border: none;
    outline: none;
  }
`;

const NavIcon = styled.span`
  font-size: 3.5rem;
  color: ${colors.accent.new3};
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
  border: none;
  outline: none;
  
  &:focus,
  &:active {
    color: red;
  }
`;

const NavText = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
  color: ${colors.secondary.darkest};
  color: ${colors.neutrals.light};
  color: white;
`;

{/* <link
  rel="stylesheet"
  href="https://unicons.iconscout.com/release/v3.0.3/css/line.css"
/>; */}
const VegeloperPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
      <Content open={open}>
        <VegeloperContainer>
          <Header />
          <HeroHeaderLeftContainer />
          <HeroHeaderRightContainer />
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

export default VegeloperPage;












































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