import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

import { NavLinkStyle } from './BackToPage.styled';

const BackToPage = () => {
  const location = useLocation();

  const backToPage = location.state?.from ?? '/';

  return (
    <NavLinkStyle to={backToPage}>
      <IoIosArrowDropleftCircle /> back
    </NavLinkStyle>
  );
};

export default BackToPage;
