import { BooleanUseState } from "@/utils/models/structure";

interface DropdownArrowProps {
    isOpen: boolean;
    setIsOpen: BooleanUseState

}

const VerticalArrowIcon: React.FC<DropdownArrowProps> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`peer-[.peer]:px-0  flex justify-center items-center px-5 mt-10`}>
            <hr className={`${isOpen && 'hidden'}  border-gray-300  w-full`} />
            <button onClick={() => setIsOpen(!isOpen)} className={`  flex items-center justify-center rounded-full border border-gray-300 ${isOpen ? 'bg-gray-200 h-8  w-8' : 'h-8  w-[4.7rem]'}`}>
                <div className='text-gray-400 text-lg -mt-1' >«</div>
            </button>
            <hr className={`${isOpen && 'hidden'}  border-gray-300  w-full`} />
        </div>

    );
};

export default VerticalArrowIcon;
