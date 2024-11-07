export namespace Design {
  const baseScaleFactor = 1;
  export const baseFontSize = 16 * baseScaleFactor;

  export const fontFamily = {
    OnestBlack: 'OnestBlack',
    OnestLight: 'OnestLight',
    OnestExtraBold: 'OnestExtraBold',
    OnestMedium: 'OnestMedium',
    OnestRegular: 'OnestRegular',
    OnestThin: 'OnestThin',
    'KohinoorDevanagari-Bold': 'KohinoorDevanagari-Bold',
    'KohinoorDevanagari-Regular': 'KohinoorDevanagari-Regular',
  };
  export const fontSize = {
    /** size:60 */
    hero: baseFontSize * 3.75,
    /** size:45 */
    xxlarge: baseFontSize * 2.8125,
    /** size:35 */
    xlarge: baseFontSize * 2.1875,
    /** size:24 */
    large: baseFontSize * 1.5,
    /** size:16 */
    regular: baseFontSize,
    /** size:13 */
    small: baseFontSize * 0.8125,
    /** size:11 */
    xsmall: baseFontSize * 0.6875,
    /** size:7 */
    xxsmall: baseFontSize * 0.4375,
  };

  export const space = {
    /** size: 48  */
    xxlarge: baseFontSize * 3,
    /** size: 32  */
    xlarge: baseFontSize * 2,
    /** size: 24  */
    large: baseFontSize * 1.5,
    /** size: 16 */
    regular: baseFontSize,
    /** size: 12 */
    regularsmall: 12,

    /** size: 8 */
    small: baseFontSize / 2,
    /** size: 4 */
    xsmall: baseFontSize / 4,
    /** size: 2 */
    xxsmall: baseFontSize / 8,
  };

  export const color = {
    white: '#FFFFFF',
    black: '#000000',
    gray: '#E2E2E2',
    primary: '#333333',
    lightGray: '#595D62',
    baseLight: '#F2F4F8',
    lightYellow: '#FFFBE8',
  };
}
