// emotion.d.ts
import "@emotion/react";
import { theme } from "./theme";

type ThemeType = typeof theme;

declare module "@emotion/react" {
  export interface Theme extends ThemeType {
    colors: {
      white: string;
      black: string;
      n: { [key: number]: string };
      main: { [key: number]: string };
      aq: { [key: number]: string };
      pk: { [key: number]: string };
    };
    fonts: {
      Title_Eng: SerializedStyles;
      Title_28: SerializedStyles;
      Title_Emp_24: SerializedStyles;
      Title_24: SerializedStyles;
      Subtitle_Emp_20: SerializedStyles;
      Subtitle_18: SerializedStyles;
      Body_20: SerializedStyles;
      Body_16: SerializedStyles;
      Body_14: SerializedStyles;
      Body_Emp_16: SerializedStyles;
      Subtext_16: SerializedStyles;
      Subtext_15: SerializedStyles;
      Subtext_14: SerializedStyles;
      Font_Variant_Numeric: SerializedStyles;
    };
  }
}
