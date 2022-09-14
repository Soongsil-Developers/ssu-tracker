import React from "react";
import styled from "styled-components";
import Avvvatars from "avvvatars-react";
import Typography from "../typography";
import type { MemberInfo } from "../../types/user";

const MemberInformation = (props: MemberInfo) => {
  return (
    <MemberInformationBase>
      <UserImage></UserImage>
      <UserInfo>
        <Typography as="h2" size="body1b_pc" weight="bold" lineHeight={1.35}>
          {props.name}
        </Typography>
        <Typography
          as="span"
          size="body2r_pc"
          weight="regular"
          lineHeight={1.2}
        >
          {props.department}
        </Typography>
      </UserInfo>
    </MemberInformationBase>
  );
};

export default MemberInformation;

const MemberInformationBase = styled.div``;

const UserImage = styled.div``;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
