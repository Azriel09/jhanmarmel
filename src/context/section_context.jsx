import { useContext, createContext, useState } from "react";

export const SectionContext = createContext();
export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState("");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionState() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionState must be within provider");
  }
  return context;
}
