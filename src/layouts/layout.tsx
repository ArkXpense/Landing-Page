import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { LandingNavbar } from "@/features/landing-page";
import { Footer } from "@/components/footer";

const Layout: React.FC = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-custom-gradient bg-black">
      {location.pathname === "/" && (
        <LandingNavbar />
      )}

      <main className="flex-1 p-4">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
