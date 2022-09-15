import React from "react";
import MemberNotify from "../components/main/MemberNotify";
import MemberInformation from "../components/main/MemberInformation";
import Streak from "../components/main/Streak";
import Card from "../components/main/Card";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import type { 
  DataProps,
  ResponseData
} from "../types/data";
import type {
  MemberAmount,
  MemberInfo,
  ResponseMemberAmount,
  ResponseMemberMe,
} from "../types/user";
import AsyncBoundary from "../components/asyncBoundary";

const Member = () => {
  const {
    data: infoData,
    loading: infoLoading,
    error: infoError,
  } = useFetch<ResponseMemberMe>("https://server.com/members/me", {
    method: "GET",
  });
  const {
    data: amountData,
    loading: amountLoading,
    error: amountError,
  } = useFetch<ResponseMemberAmount>("https://server.com/members/amount", {
    method: "GET",
  });
  return (
    <MemberBase>
      <MemberInformation {...(infoData?.data as MemberInfo)} />
      <MemberNotify {...(amountData?.data as MemberAmount)} />
    </MemberBase>
  );
};

const StreakMain = () => {
  const {
    data: streakData,
    loading: streakLoading,
    error: streakError,
  } = useFetch<ResponseData>("https://server.com/grass", {
    method: "GET",
  });
  return (
    <StreakBase>
      <Streak data={streakData?.data as DataProps[]} />
    </StreakBase>
  )
}

const Main = () => {
  return (
    <MainBase>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<div>loading..!</div>}
      >
        <Member />
      </AsyncBoundary>
      <StreakMain />
      {/* <Card /> */}
    </MainBase>
  );
};

export default Main;

const MemberBase = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MainBase = styled.main``;

const StreakBase = styled.section``;