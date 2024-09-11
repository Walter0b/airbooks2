import { useContext } from 'react';
import { DevContext } from './devContext';


export const useDevContext = () => {
    const context = useContext(DevContext);
    if (!context) {
        throw new Error('useDevContext must be used within a DevProvider');
    }
    return context;
};