export const numberOfSlides = (
  maxVisibleSlides: number,
  windowWidth: number,
) => {
  if (windowWidth > 1800) return 6;
  if (windowWidth > 1500) return maxVisibleSlides;
  if (windowWidth > 1100) return 4;
  if (windowWidth > 825) return 3;
  if (windowWidth > 600) return 2.5;
  if (windowWidth > 450) return 2;
  return 1;
};
