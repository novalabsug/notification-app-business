import Footer from "@/components/partials/Footer";
import Navbar from "@/components/partials/Navbar";
import React from "react";
import SignUp from "./Signup";

const index = () => {
  return (
    <>
      <Navbar />
      <main id="signup">
        <SignUp />
      </main>
      <Footer />
    </>
  );
};

export default index;
