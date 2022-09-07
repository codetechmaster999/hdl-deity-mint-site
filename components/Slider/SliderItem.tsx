import React from 'react';
import * as St from './SliderItem.styled';

interface Props {
  slideClass: string;
  zoomFactor: number;
  id: number;
  callback: (id: number) => void;
  callbackOut: () => void;
  slideMargin: number;
  visibleSlides: number;
  children: React.ReactNode;
}

const SliderItem: React.FC<Props> = ({
  slideMargin,
  visibleSlides,
  zoomFactor,
  slideClass,
  id,
  callback,
  callbackOut,
  children,
}) => (
  <>
    <St.SliderItemDiv
      zoomFactor={zoomFactor}
      slideMargin={slideMargin}
      visibleSlides={visibleSlides}
      className={slideClass}
      onMouseOver={() => callback(id)}
      onMouseOut={callbackOut}
    >
      {children}
      <St.Reflection>{children}</St.Reflection>
    </St.SliderItemDiv>
  </>
);

export default SliderItem;
