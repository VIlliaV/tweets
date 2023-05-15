import React, { useState } from 'react';
import { Aside, StyledSelect } from './SideMenu.styled';

import BackToPage from 'components/Buttons/BackToPage/BackToPage';

const OPTIONS = [
  { value: 'all', label: 'all' },
  { value: 'follow', label: 'follow' },
  { value: 'following', label: 'following' },
];

const SideMenu = ({ choice }) => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS[0]);

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
        options={OPTIONS}
      />
    </Aside>
  );
};

export default SideMenu;
