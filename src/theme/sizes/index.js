// to calculate px to rem https://www.ninjaunits.com/converters/pixels/pixels-rem/
// this case base is 10px so rem is 1
const rem = 1
const gap = (3 * rem)
const widthScreen = 1240


// eslint-disable-next-line import/no-anonymous-default-export
export default {
  gap,
  doubleGap: gap + gap,
  widthScreen,
}
