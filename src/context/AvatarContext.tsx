import { createContext, useContext, useState } from "react";

interface AvatarContextProps {
  avatar: string;
  setAvatar: React.Dispatch<React.SetStateAction<string>>;
}

export const AvatarContext = createContext<AvatarContextProps>({
  avatar: "",
  setAvatar: () => {},
});

export const AvatarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [avatar, setAvatar] = useState<string>("");

  return (
    <AvatarContext.Provider value={{ avatar, setAvatar }}>{children}</AvatarContext.Provider>
  );
};

export const useAvatar = () => {
  const context = useContext(AvatarContext);

  if (!context) {
    throw new Error("useAvatar must be used within an AvatarProvider");
  }

  return context;
};
