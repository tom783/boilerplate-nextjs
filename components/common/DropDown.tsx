import React, { MouseEvent, useEffect, useRef } from 'react';

import tw, { styled, css } from 'twin.macro';

interface IStyleProps {
  disabled: boolean;
}

const Styles = {
  DropDown: styled.div<{ styleprops: IStyleProps }>`
    ${tw`relative max-w-[160px]`}

    ${({ styleprops }) => switchStyleDisableMode(styleprops.disabled)}

    .dropDown-wrap {
      ${tw`flex items-center gap-[8px] justify-around p-[8px] border-solid border-[1px] border-black rounded-[8px] overflow-hidden`}

      .selected-value {
        ${tw`max-w-[100px]`}
      }
      .icon {
      }
    }

    .dropDown-list {
      ${tw`absolute left-0 right-0 overflow-hidden border-solid border-[1px] border-black rounded-[8px] p-[0]`}

      & > li {
        ${tw`w-full overflow-hidden whitespace-nowrap text-ellipsis`}
      }
    }
  `,
  DropDownList: styled.li`
    ${tw`cursor-pointer p-[8px]`}

    &:hover {
      ${tw`bg-slate-50`}
    }
  `,
};

const switchStyleDisableMode = (disabled: boolean) => {
  if (disabled) {
    return css`
      ${tw`bg-[#dfdfdf]`}
    `;
  } else {
    return css`
      .dropDown-wrap {
        ${tw`cursor-pointer`}
        &:hover {
          ${tw`bg-slate-50`}
        }
      }
    `;
  }
};

interface IDropDownProps {
  children: React.ReactNode;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  onChange?: (value: any) => void;
}

export default function DropDown({
  children,
  value,
  placeholder = 'Select...',
  disabled = false,
  icon = <></>,
  onChange = (value) => {},
  ...props
}: IDropDownProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const dropDownRef = useRef(null);

  /**
   * select option 요소를 토글
   * @param e click event
   */
  const handleToggleOption = (e: any) => {
    if (disabled) return;

    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  /**
   * 클릭한 option 요소의 dataset으로 select 상태 변경
   * @param e click event
   * @returns void
   */
  const handleSelectOption = (e: any) => {
    const selectedValue = e.target.dataset.optionValue;
    console.log('can be ', selectedValue);
    onChange(selectedValue);
  };

  /**
   * DropDown 컴포넌트의 options 요소를 닫아줌
   */
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (disabled) return;
    if (dropDownRef.current) {
      // 컴포넌트 외부 클릭 이벤트 등록
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <Styles.DropDown ref={dropDownRef} styleprops={{ disabled }}>
      <div className='dropDown-wrap' onClick={handleToggleOption}>
        <span className='selected-value'>{value || placeholder}</span>
        <span className='icon'>{icon}</span>
      </div>
      {isOpen && (
        <ul className='dropDown-list' onClick={handleSelectOption}>
          {children}
        </ul>
      )}
    </Styles.DropDown>
  );
}

interface IDropDownListProps {
  value: string;
  text: string;
}

export const DropDownList = ({ value, text }: IDropDownListProps) => {
  return <Styles.DropDownList data-option-value={value}>{text}</Styles.DropDownList>;
};
