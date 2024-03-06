export const convertMtoMS = (time: number | string): number => {
  const minute = +time;
  const miliSecond = minute * 60 * 1000;
  return miliSecond;
};
