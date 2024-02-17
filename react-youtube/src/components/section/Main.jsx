import React from "react";

import Header from "./Header";
import Footer from "./Footer";

// props - data 전달 역할
const Main = (props) => {
  return (
    <>
      <Header />
      <main id="main" role="main">
        {props.children}
      </main>
      <Footer />
    </>
  );
};

export default Main;
