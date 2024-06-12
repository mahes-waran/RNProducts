import { useWindowDimensions } from 'react-native';

export const useDimension = () => {

  const { width, height, scale, fontScale } = useWindowDimensions()
  return {
    width,
    height,
    fontScale, scale,
    isLandscape: width > height,
  };

}