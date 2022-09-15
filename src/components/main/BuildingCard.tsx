import React from "react";
import Typography from "../typography";
import { css } from "styled-components";
import theme from "../../constants/theme";
import CardTemplate from "../cardTemplate";
import DEVICE_LIST from "../../constants/device";
import { applyMediaQuery } from "../../styles/mediaQuery";

const responseCardFonts = {
  mobile: theme.fontSize.body2b_mobile,
  tablet: theme.fontSize.body2b_mobile,
  wideTablet: theme.fontSize.body2b_mobile,
  desktop: theme.fontSize.body2b_pc,
  wideDesktop: theme.fontSize.body2b_pc,
};

const responseCardDisplay = {
  mobile: "none",
  tablet: "none",
  wideTablet: "",
  desktop: "",
  wideDesktop: "",
};

const BuildingCard = (props: any) => {
  return (
    <div>
      <CardTemplate css={responseCardCss}>
        <Typography
          as="p"
          weight="semiBold"
          lineHeight={1.05}
          css={responsiveCardFontCss}
        >
          가장 많이
          <br />
          방문한 건물
        </Typography>

        <Typography as="p" weight="semiBold" css={responsiveCardFontCss}>
          {props.mostVisit}
        </Typography>
      </CardTemplate>

      <CardTemplate css={responseCardCss}>
        <Typography
          as="p"
          weight="semiBold"
          lineHeight={1.05}
          css={responsiveCardFontCss}
        >
          가장 오래
          <br />
          머무른 건물
        </Typography>

        <Typography as="p" weight="semiBold" css={responsiveCardFontCss}>
          {props.mostStay}
        </Typography>
      </CardTemplate>
    </div>
  );
};

const responsiveCardFontCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    font-size: ${responseCardFonts[device]}
  }`
  ).join("")}
`;

const responseCardCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
      width: 320px;
      display: ${responseCardDisplay[device]}
  }`
  ).join("")}
`;

export default BuildingCard;
