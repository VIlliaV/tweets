import React, { useState } from 'react';
import { Aside, StyledSelect } from './SideMenu.styled';
// import Button from 'components/Buttons/Button/Button';
import BackToPage from 'components/Buttons/BackToPage/BackToPage';
// import { useLocation } from 'react-router-dom';

const SideMenu = ({ choice }) => {
  const [selectedOption, setSelectedOption] = useState({
    value: 'all',
    label: 'all',
  });

  const options = [
    { value: 'all', label: 'all' },
    { value: 'follow', label: 'follow' },
    { value: 'following', label: 'following' },
  ];

  const handleChange = option => {
    setSelectedOption(option);
    choice(option);
  };

  return (
    <Aside>
      <BackToPage />
      <StyledSelect
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </Aside>
  );
};

export default SideMenu;
