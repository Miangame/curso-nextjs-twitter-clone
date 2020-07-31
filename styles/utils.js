export const addOpacityToColor = (color, opacity) => {
  const opacityHexadecimal = Math.round(opacity * 255).toString(16)
  return `${color}${opacityHexadecimal}`
}