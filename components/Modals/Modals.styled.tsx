import styled from 'styled-components';
import { YellowText } from 'components/Hero/Hero.styled';

export const ModalBackground = styled.div`
  height: 150vh;
  width: 100%;
  position: absolute;
  z-index: 30;
  background: rgba(0, 0, 0, 0.6);
  color: pink;
  backdrop-filter: blur(4px);
  cursor: pointer;

  @media (max-width: 500px) {
    height: 200vh;
  }
`;

export const BuyModalBackground = styled(ModalBackground)`
  z-index: 10;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.colors.bgMain};
  border: 3px solid ${(props) => props.theme.colors.textMain};
  padding: 1.75em 1.5em;
  z-index: 40;
  min-width: 300px;
`;

export const BuyModalContainer = styled(ModalContainer)`
  gap: 2em;
  justify-content: space-evenly;
  min-width: 400px;
  /* min-height: 425px; */
  z-index: 20;
  padding: 2.5em 2.5em;
  @media (max-width: 500px) {
    min-width: 350px;
  }
`;

export const CenterModalContainer = styled(ModalContainer)`
  align-items: center;
`;

export const MsgDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

export const UnitDiv = styled(MsgDiv)`
  justify-content: center;
`;

export const LinkDiv = styled(MsgDiv)`
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  text-align: center;
  line-height: 1.5;
  max-width: 25ch;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;

  :hover {
    color: ${(props) => props.theme.colors.hover};
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 175px;
  min-height: 65px;
  border: 3px solid ${(props) => props.theme.colors.textMain};
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: ${(props) => props.theme.colors.bgMain};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  padding: 0 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
`;

export const CenterButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const XButton = styled.img`
  width: 1.25em;
  cursor: pointer;
`;

export const LittleButtonDiv = styled.div`
  display: flex;
  gap: 2em;
`;

export const LittleButton = styled(Button)`
  min-width: 120px;
`;

export const PlusMinusDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const PlusMinusButton = styled(Button)`
  min-width: 55px;
  min-height: 55px;
  font-size: 30px;

  :disabled {
    color: ${(props) => props.theme.colors.textOffset};
    border-color: ${(props) => props.theme.colors.textOffset};

    :hover {
      background: none;
    }
  }
`;

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
`;

export const UnitText = styled(Text)`
  color: ${(props) => props.theme.colors.hover};
`;

export const CounterText = styled(YellowText)`
  font-size: 30px;
`;
