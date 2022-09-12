import styled from 'styled-components';

type Props = {
  zoomFactor: number;
  slideMargin: number;
  visibleSlides: number;
  className: string;
};

export const SliderItemDiv = styled.div<Props>`
  margin: 0 ${(props) => props.slideMargin}px;
  transition: transform 500ms ease;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  transform: scale(1);
  user-select: none;
  position: relative;
  box-shadow: 0px 50px 70px rgba(0, 0, 0, 0.5);

  flex: 0 0
    calc(
      100% / ${(props) => props.visibleSlides} -
        ${(props) => props.slideMargin * 2}px
    );

  video {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }

  :hover {
    transform: scale(${(props) => props.zoomFactor / 100 + 1}) !important;
  }

  :hover ~ * {
    transform: translateX(${(props) => props.zoomFactor / 2 + '%'}) !important;
  }

  &.left {
    transform-origin: left;

    :hover ~ * {
      transform: translateX(${(props) => props.zoomFactor + '%'}) !important;
    }
  }

  &.right {
    transform-origin: right;

    :hover ~ * {
      transform: translateX(0%) !important;
    }
  }
`;

export const Reflection = styled.div`
  position: absolute;
  bottom: -100%;
  transform: scaleY(-1);
  // opacity: 0.6;
  height: 100%;
  filter: blur(1px);

  img {
    margin-top: -25%;
  }

  &:after {
    content: '';
    background: linear-gradient(to top, rgba(0, 0, 0, 0.7), black);
    height: 325px;
    width: 100%;
    margin-top: -325px;
    position: absolute;
    z-index: 2;
  }
`;
