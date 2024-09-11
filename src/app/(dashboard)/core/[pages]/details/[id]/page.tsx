'use client';

import {
    useState
    // , useContext, useCallback
} from 'react';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'next/navigation';

import { pagesConfig } from '../../_pagesConfig';
import ItemDetailsBody from '@/components/compactlist/itemdetails';
import CompactListData from '@/foundry/compactListData';
import CompactListHeader from '@/foundry/ItemDetails/cl-header';
// import { ModalContext } from '@/states/context/ModalContext';
// import { openModalWithData } from '@/states/reducer/modalSlice';
// import useSingleState from '@/hooks/useSingleState';

interface CompactListProps {
    params: { pages: string };
    searchParams: Record<string, string | string[] | undefined>;
}

export default function CompactList({ params }: CompactListProps) {
    const pageConfig = pagesConfig[params.pages];

    // Define the state outside of the conditional check
    const [activeButton, setActiveButton] = useState<string | undefined>(
        pageConfig?.tableOptions?.actionButtons?.[0]?.api_name
    );

    if (!pageConfig) {
        return <p>Page {params.pages} not found</p>;
    }

    const {
        // fetchQuery,
        tableOptions, compactListLayout } = pageConfig;

    // const page = useSingleState(1);
    // const pageSize = useSingleState(10);

    // const { data: tableData } = fetchQuery({
    //     page: page.value,
    //     pageSize: pageSize.value,
    // });

    // const { setPageLabel } = useContext(ModalContext);
    // const dispatch = useDispatch();
    // const { route } = useParams<{ route: string }>();

    // const handleOpenModal = useCallback(() => {
    //     setPageLabel?.(route);
    //     dispatch(openModalWithData({ data: tableData }));
    // }, [dispatch, route, setPageLabel, tableData]);

    return (
        <ItemDetailsBody>
            <CompactListHeader
                data-slot="compactListHeader"
                dropdownOptions={tableOptions}
                justifyContent={compactListLayout?.headerContent_Position}
                contentToDisplay={activeButton}
            // handleOpenModal={handleOpenModal}
            />
            <div data-slot="compactListBody" className="w-full border-b border-gray-200">
                {tableOptions?.actionButtons && tableOptions.actionButtons.length > 1 && (
                    <div className="mt-12 w-full flex">
                        {tableOptions.actionButtons.map((button) => (
                            <button
                                key={button.api_name}
                                onClick={() => setActiveButton(button.api_name)}
                                className={`px-10 ${activeButton === button.api_name
                                    ? 'border-b-3 text-cyan-550'
                                    : 'border-cyan-550 text-black hover:text-cyan-550 hover:border-b-3'
                                    }`}
                            >
                                {button.name}
                            </button>
                        ))}
                    </div>
                )}
                <div className="h-full w-full">
                    <CompactListData />
                </div>
            </div>
        </ItemDetailsBody>
    );
}
