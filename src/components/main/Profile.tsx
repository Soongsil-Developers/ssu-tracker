import React from "react";
import Typography from "~/components/typography";

const Profile = () => {
  return (
    <div style={{ border: "1px solid" }}>
      <div>프로필</div>
      <Typography as="h1" size="eb3" weight="extraBold" lineHeight={2.25}>
        올해 학교에
        <br />
        <span style={{ color: "#F47458" }}>365일 연속</span>으로,
        <br />총 <span style={{ color: "#F47458" }}>8,760시간</span>
        <br />
        있었어요.
      </Typography>
    </div>
  );
};

export default Profile;
