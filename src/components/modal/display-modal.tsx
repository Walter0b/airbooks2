import { useSelector } from "react-redux";
import Modal from "./modal"
import { RootState } from '@/states/store'

const DisplayModal = () => {
    const { isOpen } = useSelector((state: RootState) => state.modal);

    return (
        <div>
            {isOpen && (
                <Modal  >


                </Modal>
            )}
        </div>
    )
}
export default DisplayModal;