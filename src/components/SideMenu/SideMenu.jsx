import React, { useState } from 'react';
import { Aside, StyledSelect } from './SideMenu.styled';

import BackToPage from 'components/Buttons/BackToPage/BackToPage';
import { OPTIONS_FOLLOWER } from 'constants';

const SideMenu = ({ choice }) => {
  const [selectedOption, setSelectedOption] = useState(OPTIONS_FOLLOWER[0]);

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
        options={OPTIONS_FOLLOWER}
      />
    </Aside>
  );
};

export default SideMenu;
