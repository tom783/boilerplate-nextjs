import React from 'react';

import tw, { styled, css } from 'twin.macro';

interface IStyleProps {
  size: string;
  type: string;
}
const Styles = {
  Icon: styled.span<{ styleprops: IStyleProps }>`
    ${tw`relative inline-block`}

    // icon size
    ${({ styleprops }) => {
      return switchIconSize(styleprops.size);
    }}

    // icon type
    ${({ styleprops }) => {
      return switchIconType(styleprops.type);
    }}

    .tooltip {
      ${tw`absolute top-0 left-1/2 bottom-0 z-10 hidden`}
      transform: translate(-50%, -100%);
    }

    &:hover .tooltip {
      display: block;
    }
  `,
};

/**
 * 아이콘 사이즈에 해당하는 스타일 반환
 * @param size 아이콘 사이즈
 * @returns 스타일 반환
 */
const switchIconSize = (size: string) => {
  switch (size) {
    case 'md':
      return css`
        ${tw`w-[24px] h-[24px]`}
      `;
    case 'sm':
      return css`
        ${tw`w-[16px] h-[16px]`}
      `;
    case 'lg':
      return css`
        ${tw`w-[32px] h-[32px]`}
      `;
    case 'fit':
      return css`
        ${tw`inline-block`}

        & > i {
          ${tw`inline-block w-fit h-fit`}

          & > svg {
            ${tw`w-full`}
          }
        }
      `;
    default:
      return css``;
  }
};

/**
 * 아이콘 타입에 해당하는 스타일 반환
 * @param type 아이콘 타입
 * @returns 스타일 반환
 */
const switchIconType = (type: string) => {
  switch (type) {
    case 'primary':
      return css`
        ${tw`border-none`}
      `;
    case 'secondary':
      return css`
        ${tw`border-solid border-[1px] border-[#000] rounded-[8px]`}
      `;
    default:
      return css``;
  }
};

/**
 * 아이콘 사이즈 기본-md / sm / lg / fit
 * 아이콘 타입: 기본-테두리 없음 / 테두리 있음
 * 아이콘
 * 아이콘 툴팁: 문자열
 */

interface IIconProps {
  size?: 'md' | 'sm' | 'lg' | 'fit';
  type?: 'primary' | 'secondary';
  icon: React.ReactNode;
  tooltip?: React.ReactNode | string;
}

export default function Icon({ size = 'md', type = 'primary', icon, tooltip = '', ...props }: IIconProps) {
  return (
    <Styles.Icon
      styleprops={{
        size,
        type,
      }}
      {...props}
    >
      <i>{icon}</i>
      {tooltip && <span className='tooltip'>{tooltip}</span>}
    </Styles.Icon>
  );
}
