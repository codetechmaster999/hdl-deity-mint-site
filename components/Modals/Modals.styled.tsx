import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 150vh;
  width: 100%;
  position: absolute;
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;

  @media (max-width: 500px) {
    height: 200vh;
  }
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
  z-index: 69;
  min-width: 300px;
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

export const LinkDiv = styled(MsgDiv)`
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;
  max-width: 30ch;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.colors.textMain};
  font-size: 1.25rem;
  font-weight: 500;
  max-width: 30ch;
  text-align: center;
  line-height: 1.5;
  max-width: 30ch;

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
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.colors.textMain};
    color: ${(props) => props.theme.colors.bgMain};
  }

  @media (max-width: 500px) {
    min-width: 150px;
  }
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

export const SubtleText = styled.span`
  color: ${(props) => props.theme.colors.textOffset};
`;
