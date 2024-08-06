// theme.ts
import { Theme, css } from "@emotion/react";

const theme: Theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    n: {
      0: "#FFFFFF",
      5: "#FAFAFA",
      10: "#F4F4F4",
      15: "#EBEBEB",
      20: "#E0E0E0",
      25: "#D6D6D6",
      30: "#C6C6C6",
      35: "#B8B8B8",
      40: "#A8A8A8",
      45: "#9C9C9C",
      50: "#8D8D8D",
      55: "#808080",
      60: "#737373",
      65: "#636363",
      70: "#525252",
      75: "#4A4A4A",
      80: "#393939",
      85: "#333333",
      90: "#262626",
      95: "#1F1F1F",
      100: "#000000",
    },
    main: {
      10: "#FADCD0",
      20: "#FAAFB3",
      30: "#FAD7D4",
      40: "#FA5A64",
      50: "#F23541",
      60: "#EB1C29",
      70: "#CF1924",
      80: "#AB151E",
      90: "#8A1118",
      100: "#6B0D13",
    },
    aq: {
      10: "#E2F3F6",
      20: "#C8F0F6",
      30: "#A5E8F2",
      40: "#7FDDEB",
      50: "#53CEE0",
      60: "#34B4C7",
      70: "#2C98A8",
      80: "#207D87",
      90: "#174E57",
      100: "#0F3338",
    },
    pk: {
      10: "#FADCEE",
      20: "#FABEE3",
      30: "#FA96D3",
      40: "#FA75C7",
      50: "#F74FB6",
      60: "#E831A1",
      70: "#C22987",
      80: "#99206A",
      90: "#751951",
      100: "#521139",
    },
  },
  fonts: {
    Title_Eng: css`
      font-family: "Libre Baskerville", serif;
      font-size: 24px;
      font-weight: 700;
      line-height: 125%;
    `,
    Title_28: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 28px;
      font-weight: 500;
      line-height: 135%;
    `,
    Title_Emp_24: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: 125%;
    `,
    Title_24: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 24px;
      font-weight: 400;
      line-height: 125%;
    `,
    Subtitle_Emp_20: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 20px;
      font-weight: 550;
      line-height: 130%;
    `,
    Subtitle_18: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 18px;
      font-weight: 500;
      line-height: 135%;
    `,
    Body_20: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 20px;
      font-weight: 500;
      line-height: 130%;
    `,
    Body_16: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 16px;
      font-weight: 400;
      line-height: 160%;
    `,
    Body_Emp_16: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 160%;
    `,
    Body_14: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 160%;
    `,
    Subtext_16: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 16px;
      font-weight: 500;
      line-height: 135%;
    `,
    Subtext_15: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 15px;
      font-weight: 500;
      line-height: 135%;
    `,
    Subtext_14: css`
      font-family: "Pretendard Variable", sans-serif;
      font-size: 14px;
      font-weight: 400;
      line-height: 125%;
    `,
    Font_Variant_Numeric: css`
      font-variant-numeric: lining-nums tabular-nums;
    `,
  },
};

export { theme };
