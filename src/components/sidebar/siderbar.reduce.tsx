import { ArrowIcon } from '@assets/svg/arrow';

interface DropdownArrowProps {
    isOpen: boolean;
    setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void

}

const VerticalArrowIcon: React.FC<DropdownArrowProps> = ({ isOpen, setIsOpen }) => {
    console.log(isOpen)
    return (
        <div className={` peer-[]/compact:w-10  flex justify-center items-center px-5 mt-10`}>
            <hr className=" border-gray-300  w-full" />
            <button onClick={() => setIsOpen(!isOpen)} className={` w-[4.7rem] h-8 flex items-center justify-center rounded-full border border-gray-300 ${isOpen ? 'bg-gray-200' : ''}`}>
                <ArrowIcon
                    className={`w-4 h-4 transform rotate-90 ${isOpen ? 'text-gray-600' : 'text-gray-400'}`}
                />
            </button>
            <hr className=" border-gray-300 w-full" />
        </div>

    );
};

export default VerticalArrowIcon;
