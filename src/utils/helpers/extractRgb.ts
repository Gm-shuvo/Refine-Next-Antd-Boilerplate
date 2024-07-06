//extract rgb from string like 'rgb(22, 119, 255)'
export const extractRgb = (rgbString: string) => {
  const regex = /rgb\((\d+), (\d+), (\d+)\)/;
  const match = regex.exec(rgbString);
  if (match) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    };
  }
  return null;
};