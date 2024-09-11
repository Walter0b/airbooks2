// devContext.tsx
import { createContext, useState, useContext } from 'react';

// Define the shape of the context data
interface DevContextType {
  devLogs: string[];
  addDevLog: (log: string) => void;
  clearDevLogs: () => void;
}

// Create the context
const DevContext = createContext<DevContextType | undefined>(undefined);

// Create a provider component
export const DevProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [devLogs, setDevLogs] = useState<string[]>([]);

  const addDevLog = (log: string) => {
    setDevLogs((prevLogs) => [...prevLogs, log]);
  };

  const clearDevLogs = () => {
    setDevLogs([]);
  };

  return (
    <DevContext.Provider value={{ devLogs, addDevLog, clearDevLogs }}>
      {children}
    </DevContext.Provider>
  );
};

// Custom hook to use the dev context
export const useDevContext = () => {
  const context = useContext(DevContext);
  if (!context) {
    throw new Error('useDevContext must be used within a DevProvider');
  }
  return context;
};
