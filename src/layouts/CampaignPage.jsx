import React, { useRef } from "react";
import { Box, Container } from "@mui/material";

import AboutCampaign from "../components/campaignPage/AboutCampaign";
import BenefitSection from "../components/campaignPage/BenefitSection";
import HowItWorks from "../components/campaignPage/HowItWorks";
import FAQ from "../components/campaignPage/FAQ";
import Header from "../components/campaignPage/Header";
import HeaderSection from "../components/registerShop/HeaderSection";
import Footer from "../components/HomePage/Footer";

const CampaignPage = () => {
  const aboutCampaignRef = useRef();
  return (
    <>
      {/* Navbar */}
      <HeaderSection />

      {/* Header Component */}
      <Header aboutCampaignRef={aboutCampaignRef} />
      <Container
        maxWidth
        sx={{
          py: { xs: 2, sm: 4, md: 6.5 },
          px: { xs: 2, sm: 4, md: 6.5 },
        }}
      >
        <br />
        {/*  AboutCampaign Component */}
        <Box ref={aboutCampaignRef}>
          <AboutCampaign />
        </Box>

        <br />
        {/* BenefitSection Component */}
        <BenefitSection />

        <br />
        {/* HowItWorks Component */}
        <HowItWorks />

        <br />
        <br />
        {/* FAQ Component */}
        <FAQ />
      </Container>
    </>
  );
};

export default CampaignPage;
