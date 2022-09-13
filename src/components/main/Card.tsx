import React from "react";
import Typography from "~/components/typography";
import styled from "styled-components";

const CardTemplate = styled.div`
  & {
    background: #ffffff;
    box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    gap: 110px;

    width: 336px;
    margin-bottom: 12px;
  }
`;

const Card = () => {
  return (
    <div style={{ border: "1px solid blue" }}>
      <div>
        <CardTemplate>
          <div>
            <Typography as="p" size="m1" weight="semiBold" lineHeight={1.06}>
              입장
            </Typography>
            <Typography as="p" size="m1" weight="semiBold" color="gray">
              09.12 02:00
            </Typography>
          </div>
          <Typography as="p" size="m1" weight="semiBold">
            정보과학관
          </Typography>
        </CardTemplate>

        <CardTemplate>
          <div>
            <Typography as="p" size="m1" weight="semiBold">
              입장
            </Typography>
            <Typography as="p" size="m1" weight="semiBold" color="gray">
              09.12 02:00
            </Typography>
          </div>
          <Typography as="p" size="m1" weight="semiBold">
            정보과학관
          </Typography>
        </CardTemplate>

        <CardTemplate>
          <div>
            <Typography as="p" size="m1" weight="semiBold">
              입장
            </Typography>
            <Typography as="p" size="m1" weight="semiBold" color="gray">
              09.12 02:00
            </Typography>
          </div>
          <Typography as="p" size="m1" weight="semiBold">
            정보과학관
          </Typography>
        </CardTemplate>
      </div>
    </div>
  );
};

export default Card;
