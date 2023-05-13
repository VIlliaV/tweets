import React, { useState } from 'react';
import { Aside, StyledSelect } from './SideMenu.styled';
import Button from 'components/Button/Button';

const SideMenu = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: 'all', label: 'all' },
    { value: 'follow', label: 'follow' },
    { value: 'following', label: 'following' },
  ];
  const handleChange = option => {
    setSelectedOption(option);
  };
  //   const color = 'var(--button)';
  return (
    <Aside>
      <Button>back</Button>
      <StyledSelect
        value={selectedOption}
        onChange={handleChange}
        options={options}
      />
    </Aside>
  );
};

export default SideMenu;
