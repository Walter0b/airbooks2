import { modalInputFields } from '@/utils/mock/data/modal/input';
import { IndividualFormDataProp } from '@/utils/models/structure';
import { ReactNode, createContext, useState } from 'react';

export const ModalContext = createContext<{ setPageLabel?: (label: string) => void, InputFields?: IndividualFormDataProp[] }>({ setPageLabel: () => { } });

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [pageLabel, setPageLabel] = useState('');

  const processedInputs = modalInputFields[pageLabel];
  const value = {
    InputFields: processedInputs,
    setPageLabel,
  };
  console.log("🚀 ~ ModalProvider ~ value:", value)


  return <ModalContext.Provider value={value}> {children}</ModalContext.Provider>;
};

