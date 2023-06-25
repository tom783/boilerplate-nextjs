import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import { deepFilter } from 'react-children-utilities';
import tw, { styled, css } from 'twin.macro';

const Styles = {
  Selector: styled.div``,
};

interface ISelectorProps {
  children: React.ReactNode;
  onChange: (value: string) => void;
  disabled: boolean;
}
/**
 *
 */

export default function Selector({ children, onChange, disabled = false }: ISelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [selectOptionChild, setSelectOptionChild] = useState(children);
  const dropDownRef = useRef(null);

  const onToggleOpen = (e: any) => {
    if (disabled) return;
    e.stopPropagation();

    setIsOpen(!isOpen);
  };

  const onFilter = (item: ReactNode) => {
    const dataValue = (item as ReactElement).props.dataValue;

    return search === '' ? true : dataValue.includes(search);
  };

  const onSearch = (e: any) => {
    const keyword = e.target.value;
    setSearch(keyword);
  };

  /**
   * DropDown 컴포넌트의 options 요소를 닫아줌
   */
  const handleClickOutside = () => {
    setIsOpen(false);
  };

  /**
   * 클릭한 option 요소의 dataset으로 select 상태 변경
   * @param e click event
   * @returns void
   */
  const handleSelectOption = (e: any) => {
    const selectedValue = e.target.dataset.optionValue;
    console.log('can be ', selectedValue);
    setSearch(selectedValue);
    onChange(selectedValue);
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
    <Styles.Selector ref={dropDownRef}>
      <div className='select-box' onClick={onToggleOpen}>
        <input value={search} onChange={onSearch} />
      </div>
      {isOpen && (
        <ul className='select-list' onClick={handleSelectOption}>
          {deepFilter(selectOptionChild, onFilter)}
        </ul>
      )}
    </Styles.Selector>
  );
}

interface ISelectOptionItemProps {
  dataValue: string;
}
export const SelectOptionItem = ({ dataValue = '' }: ISelectOptionItemProps) => {
  return <li data-option-value={dataValue}>{dataValue}</li>;
};
