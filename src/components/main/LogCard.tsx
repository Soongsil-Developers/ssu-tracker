import React, { useState } from "react";
import Typography from "../typography";
import { css } from "styled-components";
import { format } from "date-fns";
import theme from "../../constants/theme";
import DEVICE_LIST from "../../constants/device";
import { applyMediaQuery } from "../../styles/mediaQuery";
import CardTemplate from "../cardTemplate";

const responseCardFonts = {
  mobile: theme.fontSize.body2b_mobile,
  tablet: theme.fontSize.body2b_mobile,
  wideTablet: theme.fontSize.body2b_mobile,
  desktop: theme.fontSize.body2b_pc,
  wideDesktop: theme.fontSize.body2b_pc,
};

const responseCardWidths = {
  mobile: "335px",
  tablet: "336px",
  wideTablet: "364px",
  desktop: "440px",
  wideDesktop: "806px",
};

const LogCard = () => {
  const data = [
    {
      inOut: "in",
      date: new Date(2022, 8, 15, 16, 0),
      type: "중앙도서관",
    },
    {
      inOut: "in",
      date: new Date(2022, 8, 15, 17, 30),
      type: "정보과학관",
    },
  ];
  const buildings = [
    "모든 건물",
    "중앙도서관",
    "정보과학관",
    "베어드홀",
    "숭덕경상관",
    "문화관",
    "안익태기념관",
    "형남공학관",
    "교육관",
    "백마관",
    "신양관",
  ];

  const [filteredData, setFilteredData] = useState(data);
  const getFilterData = (option: string) => {
    if (option === "모든 건물") setFilteredData(data);
    else
      setFilteredData(
        data.filter((log: { type: string }) => log.type === option)
      );
  };

  const changeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    getFilterData(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={changeOption}>
          {buildings.map((building) => (
            <option key={building} value={building}>
              {building}
            </option>
          ))}
        </select>
      </div>

      <div>
        {filteredData.map(
          (d: { inOut: string; date: Date; type: string }, index) => (
            <CardTemplate key={index} css={responseCardCss}>
              <div>
                <Typography
                  as="p"
                  weight="semiBold"
                  lineHeight={1.06}
                  css={responsiveCardFontCss}
                >
                  {d.inOut === "in" ? "입장" : "퇴장"}
                </Typography>
                <Typography
                  as="p"
                  weight="semiBold"
                  color="gray_5"
                  css={responsiveCardFontCss}
                >
                  {format(d.date, "LL.dd kk:mm")}
                </Typography>
              </div>
              <Typography as="p" weight="semiBold" css={responsiveCardFontCss}>
                {d.type}
              </Typography>
            </CardTemplate>
          )
        )}
      </div>
    </div>
  );
};

const responsiveCardFontCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    font-size: ${responseCardFonts[device]}
  }`
  ).join("")}
`;

const responseCardCss = css`
  ${DEVICE_LIST.map(
    (device) => `${applyMediaQuery(device)} {
    width: ${responseCardWidths[device]}
  }`
  ).join("")}
`;

export default LogCard;
