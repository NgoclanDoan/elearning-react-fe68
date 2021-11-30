import React from "react";
import withLayout from "hocs/withLayout";
import Footer from "components/Footer";
import Header from "components/Header";
import ScrollToTop from "pages/client/ScrollToTop";

function ClientLayout(props) {
  return (
    <div>
      <ScrollToTop />
      <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default withLayout(ClientLayout);
