import { BooleanUseState } from '@/utils/models/structure';
import { ReactNode, createContext, useState } from 'react';

export const SideBarContext = createContext<{ setIsCompact: BooleanUseState, isCompact: boolean }>({ setIsCompact: () => { }, isCompact: false });

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isCompact, setIsCompact] = useState<boolean>(false)
  const value = {
    setIsCompact,
    isCompact
  };
  // console.log("🚀 ~ ModalProvider ~ value:", value)


  return <SideBarContext.Provider value={value}> {children}</SideBarContext.Provider>;
};

