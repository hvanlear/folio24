// LayoutContext.tsx
"use client";

import React, { createContext, useState, ReactNode } from "react";

interface LayoutInfo {
  heroHeight: number;
  heroTop: number;
  workSectionTop: number;
  contactTop: number;
}

interface LayoutContextType {
  layoutInfo: LayoutInfo;
  setLayoutInfo: React.Dispatch<React.SetStateAction<LayoutInfo>>;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
                                                                    children
                                                                  }) => {
  const [layoutInfo, setLayoutInfo] = useState<LayoutInfo>({
    heroHeight: 0,
    heroTop: 0,
    workSectionTop: 0,
    contactTop: 0
  });

  return (
    <LayoutContext.Provider value={{ layoutInfo, setLayoutInfo }}>
      {children}
    </LayoutContext.Provider>
  );
};


