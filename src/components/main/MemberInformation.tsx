import React from "react";
import styled, { css } from "styled-components";
import Avvvatars from "avvvatars-react";
import Typography from "../typography";
import type { MemberInfo } from "../../types/user";
import theme from "../../constants/theme";
import DEVICE_LIST from "../../constants/device";
import { applyMediaQuery } from "../../styles/mediaQuery";

const responseNameFonts = {
  mobile: theme.fontSize.body1b_mobile,
  tablet: theme.fontSize.body1b_mobile,
  wideTablet: theme.fontSize.body1b_mobile,
  desktop: theme.fontSize.body1b_pc,
  wideDesktop: theme.fontSize.body1b_pc,
};

const responseDepartmentFonts = {
  mobile: theme.fontSize.body2r_mobile,
  tablet: theme.fontSize.body2r_mobile,
  wideTablet: theme.fontSize.body2r_mobile,
  desktop: theme.fontSize.body2r_pc,
  wideDesktop: theme.fontSize.body2r_pc,
};

const MemberInformation = (props: MemberInfo) => {
  return (
    <MemberInformationBase>
      <UserImage>
        <Avvvatars value={props.name} size={28} />
      </UserImage>
      <UserInfo>
        <Typography
          as="h2"
          weight="semiBold"
          lineHeight={1.35}
          css={responsiveNameCss}
        >
          {props.name}
        </Typography>
        <Typography
          as="span"
          weight="regular"
          color="gray_6"
          lineHeight={1.2}
          css={responsiveDepartmentCss}
        >
          {props.department}
        </Typography>
      </UserInfo>
    </MemberInformationBase>
  );
};

export default MemberInformation;

const MemberInformationBase = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserImage = styled.div``;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  ${applyMediaQuery("mobile")} {
    flex-direction: row;
    gap: 0.5rem;
  }
`;

const responsiveNameCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    font-size: ${responseNameFonts[device]}
  }`
  ).join("")}
`;

const responsiveDepartmentCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    font-size: ${responseDepartmentFonts[device]}
  }`
  ).join("")}
`;
