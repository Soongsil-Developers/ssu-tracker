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
import AsyncBoundary from "../components/asyncBoundary";
import MostCard from "../components/main/MostCard";

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

const MostCards = () => {
  const {
    data: buildingData,
    loading: buildingLoading,
    error: buildingError,
  } = useFetch<ResponseMemberMe>("https://server.com/streaks", {
    method: "GET",
  });
  return <MostCard {...buildingData?.data} />;
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
      <MostCards />
      <Streak />
      <LogCard />
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
