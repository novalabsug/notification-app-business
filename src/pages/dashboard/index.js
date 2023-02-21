import DashboardNav from "@/components/partials/Navbar2";
import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import React from "react";
import Dashboard from "./Dashboard";

const index = () => {
  return (
    <>
      <DashboardNav />
      <main>
        <Dashboard />
      </main>
      <Footer />
    </>
  );
};

export default index;
