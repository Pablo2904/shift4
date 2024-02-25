import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import DonationPage from "./pages/donationPage/donationPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DonationPage />
  </React.StrictMode>
);
