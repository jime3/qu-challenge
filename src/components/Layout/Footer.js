import React, { useMemo } from "react";

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      style={{
        backgroundColor: "#d1d1d1",
        paddingTop: 40,
        paddingBottom: 40,
        minHeight: 50,
        display: "flex",
        justifyContent: "center",
        fontSize: "14px",
        alignItems: "center",
      }}
    >
      &copy; Copyright {currentYear}, Example Company
    </footer>
  );
};

export default Footer;
