import React from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

import { useLocation } from 'react-router-dom';
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
