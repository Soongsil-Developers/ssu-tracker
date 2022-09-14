import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import type { FlattenSimpleInterpolation } from "styled-components";

import contants from "../constants/theme";

type FontSize = keyof typeof contants.fontSize;

type FontColor = keyof typeof contants.colors;

type FontWeight = keyof typeof contants.fontWeight;

interface TypographyProps extends PropsWithChildren {
  className?: string;
  size?: FontSize;
  weight?: FontWeight;
  color?: FontColor;
  lineHeight?: number;
  as?: React.ElementType;
  css?: FlattenSimpleInterpolation;
}

const Typography = ({
  className,
  as = "p",
  color = "black",
  ...props
}: TypographyProps): React.ReactElement => {
  return (
    <BaseTypography as={as} color={color} {...props}>
      {props.children}
    </BaseTypography>
  );
};
export default Typography;

const BaseTypography = styled.p<TypographyProps>`
  ${(props) => css`
    font-size: ${props.size !== undefined
      ? `${
          typeof props.size === "string"
            ? contants.fontSize[props.size]
            : props.size
        }`
      : ""};
    font-weight: ${props.weight && contants.fontWeight[props.weight]};
    color: ${props.color && contants.colors[props.color]};
    white-space: pre-wrap;
    line-height: ${props.lineHeight}rem;
  `}
  ${(props) => props.css}
`;
