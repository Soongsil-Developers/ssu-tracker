import React from "react";
import styled from "styled-components";
import type { MemberAmount } from "../../types/user";
import Typography from "../typography";

const MemberNotify = (props: MemberAmount) => {
  return (
    <MemberNotifyBase>
      <Typography>{`
      `}</Typography>
    </MemberNotifyBase>
  );
};

export default MemberNotify;

const MemberNotifyBase = styled.div``;
