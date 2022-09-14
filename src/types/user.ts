interface MemberInfo {
  name: string;
  email: string;
  image: null | string;
  type: "GOOGLE" | "APPLE" | "SSU";
  department: string;
}

interface MemberAmount {
  hits: number;
  amount: number;
}

interface ResponseMemberMe {
  data: MemberInfo;
}

interface ResponseMemberAmount {
  data: MemberAmount;
}

export type {
  ResponseMemberMe,
  ResponseMemberAmount,
  MemberInfo,
  MemberAmount,
};
