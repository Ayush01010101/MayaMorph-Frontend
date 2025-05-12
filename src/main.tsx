import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./Redux/Store/Store.ts";
import { Provider } from "react-redux";
import LoadImages from "./Wrapper/LoadImages.tsx";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router"; // fix: use react-router-dom
import "./index.css";
import Login from "./components/Auth/Login.tsx";
import Authcheck from "./Wrapper/Authcheck.tsx";
import Generate from "./components/Generate.tsx";
import PricingPage from "./Pages/PricingPage.tsx";
import RecentImagesPage from "./Pages/RecentImagePage.tsx";
import ProfilePage from "./Pages/ProfilePage.tsx";

createRoot(document.getElementById("root")!).render(  
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route
          path="/"
          element={
            <Authcheck>
              <LoadImages>

              <App />
              </LoadImages>
            </Authcheck>
          }
        >
          <Route index element={<Generate />} />
          <Route path="recentimages" element={<RecentImagesPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="Profile" element={<ProfilePage />} />
            
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
