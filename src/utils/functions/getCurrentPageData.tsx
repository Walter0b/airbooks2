import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CatchData, ResponseDataType } from '../models/interface/table';

const useCurrentPageData = (): ResponseDataType | null => {
    const { id } = useParams();
    const NumberId = parseInt(id as string, 10);

    const travelersData = useSelector((state: { api: { queries: Record<string, CatchData> } }) => state.api.queries);

    const requestData = Object.values(travelersData)[0] || { data: { data: [] } };
    const { data } = requestData;

    const specificData = data.data.find((developer: ResponseDataType) => developer.id === NumberId) || null;

    return specificData;
};

export default useCurrentPageData;