import React from "react";
import Typography from "~/components/typography";

const Main = () => {
  return (
    <div>
      {/* Typography 예시 디폴트 태그 p */}
      <Typography as="h1" size="eb3" weight="extraBold">
        메인 페이지
      </Typography>
    </div>
  );
};

export default Main;
