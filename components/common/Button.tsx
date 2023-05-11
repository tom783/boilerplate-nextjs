import React, { ButtonHTMLAttributes } from 'react';

import tw, { styled, css } from 'twin.macro';

interface IStyleProps {
  iconPosition: 'left' | 'right';
  size: string;
  color: string;
  buttonType: string;
}
/**
 * icon position 에 해당하는 스타일 반환
 * @param position icon position left or right
 * @returns 스타일 반환
 */
const switchIconPosition = (position: string) =>
  position === 'left'
    ? css`
        ${tw`flex-row`}
      `
    : css`
        ${tw`flex-row-reverse`}
      `;

/**
 * 버튼 타입과 색상이 어울어진 스타일 반환
 * @param type 버튼 타입
 * @param color 버튼 색상
 * @returns 스타일 반환
 */
const switchButtonType = (type: string, color: string) => {
  switch (type) {
    case 'primary':
      return css`
        ${tw`text-white`}
        background-color: ${color};
      `;
    case 'secondary':
      return css`
        ${tw`border-[1px] border-solid`}
        color: ${color};
        border-color: ${color};
      `;
    case 'tertiary':
      return css`
        color: ${color};
      `;
    default:
      return css`
        ${tw``}
      `;
  }
};

/**
 * 버튼 사이즈에 해당하는 스타일 반환
 * @param size 버튼 사이즈
 * @returns 스타일 반환
 */
const switchButtonSize = (size: string) => {
  switch (size) {
    case 'sm':
      return css`
        ${tw`w-[80px] h-[40px]`}

        .text {
          ${tw`max-w-[30px]`}
        }
      `;
    case 'md':
      return css`
        ${tw`w-[160px] h-[40px]`}

        .text {
          ${tw`max-w-[60px]`}
        }
      `;
    case 'lg':
      return css`
        ${tw`w-[200px] h-[40px]`}

        .text {
          ${tw`max-w-[60px]`}
        }
      `;
    case 'fit':
      return css`
        ${tw`px-[8px] h-[40px]`}
      `;
    default:
      return css`
        ${tw`p-[8px]`}
      `;
  }
};

const Styles = {
  Button: styled.button<{ styleprops: IStyleProps }>`
    ${tw`flex gap-1 cursor-pointer overflow-hidden border-none bg-transparent rounded-[8px] items-center justify-center`}

    // icon position
    ${({ styleprops }) => {
      return switchIconPosition(styleprops.iconPosition);
    }}

    // button type & color
    ${({ styleprops }) => {
      return switchButtonType(styleprops.buttonType, styleprops.color);
    }}

    // button size
    ${({ styleprops }) => {
      return switchButtonSize(styleprops.size);
    }}

    .icon {
      ${tw`max-w-[24px] overflow-hidden`}
    }

    .text {
      ${tw`overflow-hidden text-ellipsis whitespace-nowrap`}
    }
  `,
};

interface IButtonProps extends ButtonHTMLAttributes<any> {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  size?: 'sm' | 'md' | 'lg' | 'fit';
  color?: string;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  children,
  icon = <></>,
  iconPosition = 'left',
  size = 'md',
  color = '#fff',
  buttonType = 'primary',
  loading = false,
  loadingText = '',
  ...props
}: IButtonProps) {
  const switchButtonText = loadingText.length > 0 && loading ? loadingText : children;
  const switchButtonIcon = loading ? <>loading</> : icon;

  return (
    <Styles.Button
      styleprops={{
        iconPosition,
        size,
        color,
        buttonType,
      }}
      {...props}
    >
      <span className='icon'>{switchButtonIcon}</span>
      <span className='text'>{switchButtonText}</span>
    </Styles.Button>
  );
}
