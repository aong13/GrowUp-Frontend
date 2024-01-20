// WriteDropDown.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import down from '../../../icon/arrow_dropdown.png';
import down_white from '../../../icon/arrow_down_white.png';
import WriteDropDownOption from './WriteDropDownOption';

const Container = styled.div`
  position: relative;
`;

const DropDownContainer = styled.div`
  position: absolute;
  top: 100%;
  display: flex;
  padding-top: 10px;
  gap: 5px;
`;

const DropDownHeader = styled.div`
  display: flex;
  width: 400px;
  height:  50px;
  padding: 6px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  border: 1px solid ${({ isOpen }) => (isOpen ? '#00D749' : '#B0B0B0')};
  background: ${({ isOpen }) => (isOpen ? 'linear-gradient(0deg, #F5FFF9, #F5FFF9)' : '#FFF')};
  color: ${({ isOpen }) => (isOpen ? '#00D749' : '#3E3E3E')};
  
  font-size: 14px;
  font-weight: 500;
  line-height: 140%;
  cursor: pointer;
  
`;

const ArrowIcon = styled.img`
  transition: transform 0.3s;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const WriteDropDown = ({ title, optionsMap }) => {
  const [mainDropdownOpen, setMainDropdownOpen] = useState(false);
  const [selectedMain, setSelectedMain] = useState('');

  const toggleMainDropdown = () => {
    setMainDropdownOpen(!mainDropdownOpen);
    setSelectedMain('');
  };

  const mainSelected = (option) => {
    setSelectedMain(option);
    setTimeout(() => {
      setMainDropdownOpen(false);
    }, 500);
  };

  return (
    <Container>
      <DropDownHeader isOpen={mainDropdownOpen} onClick={toggleMainDropdown}>
        {selectedMain || title}
        <ArrowIcon isOpen={mainDropdownOpen} src={mainDropdownOpen ? down_white : down} alt="drop down arrow" />
      </DropDownHeader>
      <DropDownContainer isOpen={mainDropdownOpen}>
        {mainDropdownOpen && optionsMap && (
          <WriteDropDownOption options={optionsMap} onClick={mainSelected} />
          
        )}
      </DropDownContainer>
    </Container>
  );
};

export default WriteDropDown;
