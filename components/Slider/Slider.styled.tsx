import styled from 'styled-components';
import { SliderItemDiv } from './SliderItem.styled';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: any;
};

export const SliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  position: relative;
  margin-top: 2rem;
  height: 650px;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + '%'} 0;

  .button-wrapper {
    position: absolute;
    width: 48px;
    height: 100%;
    top: 12.5%;
    padding: ${(props) => props.zoomFactor / 7 + '%'} 0;
    box-sizing: border-box;
  }

  .button {
    display: block;
    background: rgb(0, 0, 0, 0.7);
    border: 0;
    top: 0;
    width: 48px;
    height: 350px;
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    :hover {
      opacity: 0.5;
    }
  }

  .back {
    left: 0;
    border-radius: 0 3vw 3vw 0;
  }

  .forward {
    right: 0;
    border-radius: 3vw 0 0 3vw;
  }
`;

export const SliderDiv = styled.div<SliderProps>`
  display: flex;
  padding: 0 55px;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${SliderItemDiv} {
    transform: translateX(${(props) => props.transformValue});
  }
`;
