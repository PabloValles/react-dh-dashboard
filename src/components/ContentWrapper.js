import React from "react";
import ContentRowTop from "./ContentRowTop";
import TopBar from "./TopBar";
import Footer from "./Footer";

const ContentWrapper = () => {
  return (
    <div id="wrapper">
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <ContentRowTop />
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ContentWrapper;
