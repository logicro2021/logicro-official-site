import Head from "next/head";
import React from "react";

const Header = ({title,titlekey}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={titlekey} key="title" />
      </Head>
    </div>
  );
};

export default Header;
