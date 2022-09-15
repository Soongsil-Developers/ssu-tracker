import React from "react";
import MemberNotify from "../components/main/MemberNotify";
import MemberInformation from "../components/main/MemberInformation";
import Streak from "../components/main/Streak";
import LogCard from "../components/main/LogCard";
import useFetch from "../hooks/useFetch";
import styled from "styled-components";
import type {
  MemberAmount,
  MemberInfo,
  ResponseMemberAmount,
  ResponseMemberMe,
} from "../types/user";
import type { LogCardProps } from "../types/log";
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

const BuildingAccess = () => {
  const {
    data: LogData,
    loading: LogLoading,
    error: LogError,
  } = useFetch<LogCardProps>("https://server.com/members/allLog", {
    method: "GET",
  });
  return <LogCard data={[]} {...LogData?.data} />;
};
const Main = () => {
  return (
    <MainBase>
      <AsyncBoundary
        rejectedFallback={<div>error..!</div>}
        pendingFallback={<div>loading..!</div>}
      >
        <Member />
      </AsyncBoundary>
      <Streak />
      <BuildingAccess />
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
