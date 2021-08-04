import { StyledComponent } from "styled-components";
import theme from './theme'



//declaração de novo módulo no styled-components
declare module "styled-components" {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType {}
}


// styled components - ThemeType - Theme