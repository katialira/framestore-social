import { createContext, useState } from "react";

const FrameStoreDataContext = {
  isUserLoggedIn: false,
  borderColor: "#eee",
  logInValues: {},
};

export const FrameStoreContext = createContext();

export const FrameStoreProvider = ({ children }) => {
  const [frameStoreData, setFrameStoreData] = useState(FrameStoreDataContext);

  return (
    <FrameStoreContext.Provider value={[frameStoreData, setFrameStoreData]}>
      {children}
    </FrameStoreContext.Provider>
  );
};
