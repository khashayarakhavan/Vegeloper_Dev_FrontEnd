//Libraries
import styled, {css} from "styled-components";
import { rgba } from "polished";
//Design
import colors from '../../design/colors';

//Code
export const Frame = styled.div`
  position: relative;
  background: red;
  width: 50%;
  height: 100%;
  font-size: 12px !important;
`;

export const Button = styled.button`
  position: absolute;
  bottom: 189px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  border: 0;
  background: #18023c;
  outline: none;
  cursor: pointer;
  color: ${rgba("white", 0.85)};
  ${"" /* top: 50%; */};
  ${"" /* left: 50%; */};
  ${"" /* transform: translate(-50%, -50%); */};
`;

export const ButtonIcon = styled.div`
  ${"" /* font-size: 19px; */}
  margin-right: 0.625rem;
`;

export const duration = "0.5s";

export const Overlay = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${rgba("black", 0.5)};
  visibility: ${(p) => (p.isOpen ? "visible" : "hidden")};
  opacity: ${(p) => (p.isOpen ? 1 : 0)};
  transition-property: visibility opacity;
  transition-duration: ${duration};
`;

export const DialogOpenStyles = css`
  transform: translateX(-50%) translateY(-100px);
  display: block;
  opacity: 1;
`;

export const Dialog = styled.div`
  display: hidden;
  opacity: 0;
  position: absolute;
  z-index: 101;
  ${"" /* bottom: 0;
  left: 0; */}
  left: 50%;
  top: 300px;
  font-size: 12px !important;
  width: min-content;
  height: 300px;
  background: ${colors.neutrals.light};
  ${"" /* transform: translateY(${(p) => (p.isOpen ? 0 : "100%")}); */}

  transform: translateX(-50%)  translateY(0px);
  ${(p) => p.isOpen && DialogOpenStyles};
  transition: all ${duration};
`;

export const DialogContent = styled.div`
  padding: 2rem;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.75rem;

  & > .material-icons {
    color: ${rgba("#10132F", 0.38)};
  }
`;

export const Title = styled.div`
  font-weight: 600;
  color: ${rgba("#10132F", 0.8)};
`;

export const Message = styled.div`
  font-size: 0.875rem;
  color: ${rgba("#10132F", 0.38)};
  margin-bottom: 1.75rem;
`;

export const CodeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const CodeInput = styled.input`
  flex: 1 0 auto;
  width: 50px;
  height: 50px;
  text-align: center;
  border: 3px solid ${rgba("black", 0.05)};
  border-radius: 0.325rem;
  outline: none;

  &:focus {
    border-color: #6330b4;
  }
`;

export const CodeDash = styled.div`
  margin: 0 1rem;
`;

export const GradientButton = styled.button`
  color: white;
  width: 100%;
  border: 0;
  border-radius: 0.5rem;
  padding: 1rem;
  outline: none;
  cursor: pointer;
  background: linear-gradient(to right, #6330b4, #6300ff);
`;
