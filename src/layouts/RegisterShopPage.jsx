import React from "react";
import HeaderSection from "../components/registerShop/HeaderSection";
import AdsSection from "../components/registerShop/AdsSection";
import StepsSection from "../components/registerShop/StepsSection";
import BenefitsSection from "../components/registerShop/BenefitsSection";
import CategoriesSection from "../components/registerShop/CategoriesSection";
import VideoSection from "../components/registerShop/VideoSection";
import SupportSection from "../components/registerShop/SupportSection";

import { Stack } from "@mui/material";
import RegisterBanner from "../components/registerShop/RegisterBanner";
import Footer from "../components/commonComp/Footer";

function RegisterShopPage() {
  return (
    <Stack
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        minHeight: "100vh",
        // padding: '20px 0',
      }}
    >
      <HeaderSection />
      <RegisterBanner />

      <AdsSection />
      <StepsSection />
      <BenefitsSection />
      <CategoriesSection />
      <VideoSection />
      <SupportSection />
      <Footer />
    </Stack>
  );
}

export default RegisterShopPage;
