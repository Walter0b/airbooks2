import { useEffect, useState } from 'react';

const usePageName = (): string => {
    const [pageName, setPageName] = useState<string>('');

    useEffect(() => {
        const url = window.location.href;
        const segments = url.split('/');
        const pageNameIndex = segments.findIndex(segment => segment === 'core') + 1;

        if (pageNameIndex < segments.length) {
            const extractedPageName = segments[pageNameIndex];
            setPageName(extractedPageName);
        }
    }, []);

    return pageName;
};

export default usePageName;