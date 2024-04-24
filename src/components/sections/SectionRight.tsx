import React from "react";

const SectionRight = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="no-scrollbar h-full flex-1 space-y-4 overflow-y-scroll">
      {children}
    </div>
  );
};

export default SectionRight;
