import React from "react";
import SectionLeft from "./SectionLeft";
import SectionRight from "./SectionRight";

const MainSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "350px auto",
        gap: "2rem",
      }}
      className="h-full"
    >
      <SectionLeft />
      <SectionRight>{children}</SectionRight>
    </main>
  );
};

export default MainSection;
