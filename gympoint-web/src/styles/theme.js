export default {
  primaryDark: 'rgb(44, 105, 170)',
  primary: 'rgb(76, 140, 209)',
  primaryLight: 'rgb(99, 165, 234)',
  primaryWithTransparency: (transparency = 0.5) =>
    `rgba(76, 140, 209, ${transparency})`,
  ink: 'rgb(70, 70, 70)',
  inkWithTransparency: (transparency = 0.5) =>
    `rgba(70, 70, 70, ${transparency})`,
  success: 'rgb(92, 189, 91)',
  warning: 'rgb(252, 186, 3)',
  failure: 'rgb(237, 64, 64)',
  whiteDarkest: 'rgb(230, 230, 230)',
  whiteDarker: 'rgb(241, 241, 241)',
  whiteDark: 'rgb(249, 249, 249)',
  white: 'rgb(255, 255, 255)',
  whiteWithTransparency: (transparency = 0.5) =>
    `rgba(255, 255, 255, ${transparency})`,
  black: 'rgb(0, 0, 0)',
  blackWithTransparency: (transparency = 0.5) =>
    `rgba(0, 0, 0, ${transparency})`
}
