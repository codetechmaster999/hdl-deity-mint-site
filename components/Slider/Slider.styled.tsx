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
  width: 100%;
  height: 550px;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.7 + '%'} 0;
  margin-bottom: -5em;

  @media (max-width: 500px) {
    margin-bottom: -6em;
  }

  .button-wrapper {
    position: absolute;
    width: 48px;
    height: 225px;
    top: 0;
    padding: ${(props) => props.zoomFactor / 7 + '%'} 0;
    box-sizing: border-box;
  }

  .button {
    display: block;
    background: none;
    border: 0;
    top: 0;
    width: 48px;
    height: 100%;
    color: #fff;
    font-size: 5rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;
    @media (max-width: 600px) {
      margin-top: 20px;
    }
    @media (max-width: 450px) {
      margin-top: 8px;
    }
    :hover {
      opacity: 0.5;
    }
  }

  .back {
    left: 0;
    border-radius: 0 8px 8px 0;
  }

  .forward {
    right: 0;
    border-radius: 8px 0 0 8px;
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
