"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface LayoutInfo {
  heroHeight: number;
  workSectionTop: number;
  contactTop: number;
}

interface LayoutContextType {
  layoutInfo: LayoutInfo;
  setLayoutInfo: React.Dispatch<React.SetStateAction<LayoutInfo>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [layoutInfo, setLayoutInfo] = useState<LayoutInfo>({
    heroHeight: 0,
    workSectionTop: 0,
    contactTop: 0,
  });

  return (
    <LayoutContext.Provider value={{ layoutInfo, setLayoutInfo }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (context === undefined) {
    throw new Error("useLayout must be used within a LayoutProvider");
  }
  return context;
};
