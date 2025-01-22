import React from 'react';
import HeaderSection from '../components/registerShop/HeaderSection';
import AdsSection from '../components/registerShop/AdsSection';
import StepsSection from '../components/registerShop/StepsSection';
import BenefitsSection from '../components/registerShop/BenefitsSection';
import CategoriesSection from '../components/registerShop/CategoriesSection';
import VideoSection from '../components/registerShop/VideoSection';
import SupportSection from '../components/registerShop/SupportSection';

import { Box } from '@mui/material'; // Import Box from Material-UI for styling

function RegisterShopPage() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff', 
        width: '100%',
        minHeight: '100vh',
        padding: '20px 0',
        
      }}
    >
      <HeaderSection />
      <AdsSection />
      <StepsSection />
      <BenefitsSection />
      <CategoriesSection />
      <VideoSection />
      <SupportSection />
    </Box>
  );
}

export default RegisterShopPage;