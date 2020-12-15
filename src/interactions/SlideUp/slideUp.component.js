//Basics
import React, { useState } from "react";
//Styles
import {
  Frame,
  Button,
  ButtonIcon,
  Overlay,
  Dialog,
  DialogContent,
  Header,
  Title,
  Message,
  CodeRow,
  CodeInput,
  CodeDash,
  GradientButton,
} from "./slideUp.styles";


//Code
const SlideUpDialog = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Frame>
      <Button onClick={() => setOpen(true)}>
        <ButtonIcon className="material-icons-outlined">fact_check</ButtonIcon>
        Verify Me
      </Button>
      <Overlay isOpen={isOpen} onClick={() => setOpen(false)} />
      <Dialog isOpen={isOpen}>
        <DialogContent>
          <Header>
            <Title>Verify Account</Title>
            <span className="material-icons" onClick={() => setOpen(false)}>
              close
            </span>
          </Header>
          <Message>Enter the code we just sent you below.</Message>
          <CodeRow>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
            <CodeDash>-</CodeDash>
            <CodeInput placeholder="0" />
          </CodeRow>
          <GradientButton onClick={() => setOpen(false)}>Submit</GradientButton>
        </DialogContent>
      </Dialog>
    </Frame>
  );
};



//Export
export default SlideUpDialog;
