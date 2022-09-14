import React from "react";
import styled, { css } from "styled-components";
import { applyMediaQuery } from "../../styles/mediaQuery";
import DEVICE_LIST from "../../constants/device";
import theme from "../../constants/theme";
import type { MemberAmount } from "../../types/user";
import Typography from "../typography";

const responsiveFonts = {
  mobile: theme.fontSize.title_mobile,
  tablet: theme.fontSize.subtitle1_mobile,
  wideTablet: theme.fontSize.subtitle1_mobile,
  desktop: theme.fontSize.subtitle1_pc,
  wideDesktop: theme.fontSize.subtitle1_pc,
};

const responsiveLineHeight = {
  mobile: "2.251rem",
  tablet: "1.65rem",
  wideTablet: "1.65rem",
  desktop: "2.101rem",
  wideDesktop: "2.101rem",
};

const MemberNotify = (props: MemberAmount) => {
  return (
    <MemberNotifyBase>
      <Typography as="h1" weight="bold" css={responsiveCss}>
        {`올해 학교에
`}
        <HighLight>{`${props.hits}일 연속으로
`}</HighLight>
        {`총 `}
        <HighLight>
          {Math.floor(props.amount / 60).toLocaleString("ko-KR")}시간
        </HighLight>
        {`
있었어요.`}
      </Typography>
    </MemberNotifyBase>
  );
};

export default MemberNotify;

const MemberNotifyBase = styled.div``;

const HighLight = styled.b`
  color: ${({ theme }) => theme.colors.primary};
`;

const responsiveCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    font-size: ${responsiveFonts[device]};
    line-height: ${responsiveLineHeight[device]};
  }`
  ).join("")}
`;
