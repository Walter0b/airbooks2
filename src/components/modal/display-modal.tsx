import { RootState } from '@/states/store'
import Modal from './modal'
import { useSelector } from 'react-redux';
const DisplayModal = () => {
    const { isOpen } = useSelector((state: RootState) => state.modal);
    console.log("🚀 ~ DisplayModal ~ isOpen:", isOpen)

    return <>
        {isOpen && <Modal />}
    </>
}
export default DisplayModal
