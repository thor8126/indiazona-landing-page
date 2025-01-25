import { Route, Routes } from "react-router-dom";

import RegisterShopPage from "./layouts/RegisterShopPage";
import CampaignPage from "./layouts/CampaignPage";
import AboutUsPage from "./components/commonComp/AboutUsPage";
import VendorFAQs from "./components/commonComp/VendorFAQs";
import CustomerFAQs from "./components/commonComp/CustomerFAQs";
import OrderCancellationFAQs from "./components/commonComp/OrderCancellationFAQs";
import ReturnExchangePolicy from "./components/commonComp/ReturnExchangePolicy";
import ComplianceUndertaking from "./components/commonComp/ComplianceUndertaking";
import PrivacyPolicyPage from "./components/commonComp/PrivacyPolicyPage";
import TermsOfUsePage from "./components/commonComp/TermOfUsage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterShopPage />} />

      {/* For Registration api, check line 108 in the Form component in campaignPage folder */}
      <Route path="/campaign" element={<CampaignPage />} />
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/sellers-faqs" element={<VendorFAQs />} />
      <Route path="/customer-faqs" element={<CustomerFAQs />} />
      <Route path="/compliance" element={<ComplianceUndertaking />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfUsePage />} />
      <Route
        path="/policies/cancellation"
        element={<OrderCancellationFAQs />}
      />
      <Route
        path="/policies/return-exchange"
        element={<ReturnExchangePolicy />}
      />
      {/*  */}
    </Routes>
  );
}

export default App;
