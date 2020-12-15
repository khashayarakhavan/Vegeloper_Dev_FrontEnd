import React, { useState } from "react";

import styled, { css } from "styled-components";


// import { FrameWrapper, Frame } from "../../testUI/shared";
import {Content, Nav, Phone, Burger, NavButton, NavIcon, NavText} from './basePage.styles';
import { rgba } from "polished";

//Design
import colors from '../../design/colors';


const BasePage = () => {
  const [open, setOpen] = useState(false);
  return (

    <Phone>
      <Nav>
        <NavButton>
          <NavIcon className="uil uil-home" />
        </NavButton>
        <NavText>Home</NavText>
      </Nav>
      <Content open={open}>
        <Burger onClick={() => setOpen(!open)} className="uil uil-bars" />
      </Content>
    </Phone>

  );
};

export default BasePage;
