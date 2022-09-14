import "styled-components";
import theme from "./styles/styledComponents/theme";

declare module "styled-components" {
  type AppTheme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends AppTheme {}
}
