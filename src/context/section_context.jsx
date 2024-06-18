import { useContext, createContext, useState, useEffect } from "react";

// context for current section visible in viewport to highlight the navbar link

export const SectionContext = createContext();
export function SectionProvider({ children }) {
  const [currentSection, setCurrentSection] = useState("");
  useEffect(() => {
    console.log(currentSection);
  }, [currentSection]);
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
