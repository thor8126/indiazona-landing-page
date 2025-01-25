import { Navigate, Route, Routes } from "react-router-dom";

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
import RegisterPage from "./components/authPage/RegisterPage";
import Login from "./components/authPage/Login";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="/register" />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<RegisterShopPage />} />
      <Route path="/registerseller" element={<RegisterShopPage />} />

      <Route path="/campaign" element={<CampaignPage />} />

      {/* New Components  */}
      <Route path="/about" element={<AboutUsPage />} />
      <Route path="/sellers-faqs" element={<VendorFAQs />} />
      <Route path="/customer-faqs" element={<CustomerFAQs />} />
      <Route path="/compliance" element={<ComplianceUndertaking />} />
      <Route path="/privacy" element={<PrivacyPolicyPage />} />
      <Route path="/terms" element={<TermsOfUsePage />} />
      <Route path="/policies">
        <Route path="cancellation" element={<OrderCancellationFAQs />} />
        <Route path="return-exchange" element={<ReturnExchangePolicy />} />
      </Route>
    </Routes>
  );
}

export default App;
