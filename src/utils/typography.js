import Typography from "typography"
import stAnnesTheme from "typography-theme-st-annes"
stAnnesTheme.baseFontSize = "24px"

const typography = new Typography(stAnnesTheme)

export const { scale, rhythm, options } = typography
export default typography
