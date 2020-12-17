//Basics
import React, { useState } from "react";
import { Tooltip } from "react-tippy";
import Tippy from "@tippyjs/react";
import "tippy.js/themes/light.css";
import "tippy.js/themes/translucent.css";
import "tippy.js/themes/material.css";
import "tippy.js/themes/light-border.css";
// import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "react-tippy/dist/tippy.css";

import { CustomTooltip, CustomButton, GlobalStyle, Wrapper} from "./toolTip.styles";


export const InteractiveTooltip = () => {
  const TooltipContent = (
    <CustomTooltip>
      Simple Tooltip !
      {/* <CustomButton></CustomButton> */}
    </CustomTooltip>
  );

  return (
    <>
      {/* <GlobalStyle />
      <Tooltip position="bottom" title="Welcome to React">
        <Wrapper>Hover me</Wrapper>
      </Tooltip> */}
      <Tippy placement="top" content={TooltipContent}>
        {/* <button variant="outline-success">Submit</button> */}
        <Wrapper>Hover me</Wrapper>
      </Tippy>
     
    </>
  );
};


export default InteractiveTooltip;