import { createContext, useContext, useEffect, useState } from "react";

export type ProfileType = "professional" | "personal";

type ProfileContextType = {
  activeProfile: ProfileType;
  setActiveProfile: (profile: ProfileType) => void;
  toggleProfile: () => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: React.ReactNode }) {
  const [activeProfile, setActiveProfile] = useState<ProfileType>(() => {
    const saved = localStorage.getItem("activeProfile");
    return (saved as ProfileType) || "professional";
  });

  useEffect(() => {
    localStorage.setItem("activeProfile", activeProfile);
  }, [activeProfile]);

  const toggleProfile = () => {
    setActiveProfile(activeProfile === "professional" ? "personal" : "professional");
  };

  return (
    <ProfileContext.Provider value={{ activeProfile, setActiveProfile, toggleProfile }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
}