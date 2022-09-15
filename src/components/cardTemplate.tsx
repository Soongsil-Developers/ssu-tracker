import React, { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import type { FlattenSimpleInterpolation } from "styled-components";

interface CardTemplateProps extends PropsWithChildren {
  className?: string;
  css?: FlattenSimpleInterpolation;
}

const CardTemplate = ({
  className,
  ...props
}: CardTemplateProps): React.ReactElement => {
  return <BaseCardTemplate {...props}>{props.children}</BaseCardTemplate>;
};
export default CardTemplate;

const BaseCardTemplate = styled.div<CardTemplateProps>`
  ${() => css`
    background: #ffffff;
    box-shadow: 0px 16px 20px rgba(0, 0, 0, 0.05);

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    gap: 110px;

    margin-bottom: 12px;
  `}
  ${(props) => props.css}
`;
