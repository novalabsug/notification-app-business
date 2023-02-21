import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import React from "react";
import Login from "./Login";

const index = () => {
  return (
    <>
      <Navbar />
      <main id="login">
        <Login />
      </main>
      <Footer />
    </>
  );
};

export default index;
