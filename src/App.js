import { Route, Routes } from "react-router-dom";

import RegisterShopPage from "./layouts/RegisterShopPage";
import CampaignPage from "./layouts/CampaignPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterShopPage />} />

      {/* For Registration api, check line 108 in the Form component in campaignPage folder */}
      <Route path="/campaign" element={<CampaignPage />} />
      {/*  */}
    </Routes>
  );
}

export default App;
