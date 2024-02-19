import { ArrowIcon } from '@assets/svg/arrow';

interface DropdownArrowProps {
    isOpen: boolean;
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void

}

const VerticalArrowIcon: React.FC<DropdownArrowProps> = ({ isOpen, setIsOpen }) => {
    return (
        <div className={`peer-[]/compact:px-0  flex justify-center items-center px-5 mt-10`}>
            <hr className={`${isOpen && 'hidden'}  border-gray-300  w-full`} />
            <button onClick={() => setIsOpen(!isOpen)} className={`  flex items-center justify-center rounded-full border border-gray-300 ${isOpen ? 'bg-gray-200 h-8  w-8' : 'h-8  w-[4.7rem]'}`}>
                <ArrowIcon
                    className={`w-4 h-4 transform rotate-90 ${isOpen ? 'text-gray-600' : 'text-gray-400'}`}
                />
            </button>
            <hr className={`${isOpen && 'hidden'}  border-gray-300  w-full`} />
        </div>

    );
};

export default VerticalArrowIcon;
