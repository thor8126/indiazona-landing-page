import React from 'react';
import { AppBar, Toolbar, Button, Box, useMediaQuery } from '@mui/material';
import styled from '@emotion/styled';

const StyledAppBar = styled(AppBar)`
  width: 100%;
  height: 120px;
  background: rgb(255, 255, 255);
  box-shadow: 0px 0px 7.8px 0px #0000000d;
  position: relative;
  padding: 0 10px;
  @media (max-width: 600px) {
    height: 100px; /* Adjusted height for mobile */
    padding: 15px 0px; /* Added padding for mobile */
    display:flex,
    align-items: center,
  }
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 600px) {
    justify-content: flex-start;
    gap: 10px; /* Reduced gap in mobile view */
  }
`;

const StyledLogo = styled('img')`
  width: 203px;
  height: 70.38px;
  margin-top: 26px;
  position: relative;
  margin-top: 0px;

  @media (max-width: 600px) {
    width: 150px; /* Smaller logo for mobile */
    height: auto;
  }
`;

const StyledSecondaryImage = styled('img')`
  width: 90px;
  height: 90px;
  margin-top: 20px;
  display: block;

  @media (max-width: 600px) {
    display: none; /* Hide the secondary logo in mobile view */
  }
`;

const StyledButton = styled(Button)`
  width: 135px;
  height: 44px;
  background-color: #619075;
  color: #ffffff;
  font-family: Montserrat;
  font-weight: bold;
  text-transform: none;
  border-radius: 5px;
  display: inline-block;

  &:hover {
    background-color: #527d63;
  }

  @media (max-width: 600px) {
    width: 110px; /* Adjust button size for mobile */
    height: 40px; /* Adjust button height */
    font-size: 12px; /* Smaller font for mobile */
    font-weight:600;
    position: relative; /* Adjust button positioning */
  }
`;

function MyNav() {
  // Use MediaQuery to detect screen size
  const isMobile = useMediaQuery('(max-width:600px)');

  // Render nothing if mobile view
  // if (isMobile) return null;

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <LogoContainer>
          <StyledLogo src="/logo.svg" alt="Main Logo" />
          <StyledSecondaryImage src="/assets/images/coin.png" alt="Secondary Logo" />
        </LogoContainer>
        <Button variant="contained" color='tertiary'  href='https://dev.indiazona.in/'>Start Selling</Button>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default MyNav;
