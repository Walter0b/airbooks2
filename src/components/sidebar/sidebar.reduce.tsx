import { cn } from '@/utils/intext'
import { BooleanUseState } from '@/utils/models/structure'

interface DropdownArrowProps {
    isOpen: boolean
    setIsOpen: BooleanUseState
}

const VerticalArrowIcon: React.FC<DropdownArrowProps> = ({
    isOpen,
    setIsOpen,
}) => {
    return (
        <div className="mt-10  flex items-center justify-center px-5 peer-[.peer]:px-0">
            <hr className={cn(isOpen && 'hidden', 'w-full border-gray-300')} />
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    'flex items-center justify-center rounded-full border border-gray-300',
                    isOpen ? 'h-8 w-8 bg-gray-200' : 'h-8 w-[4.7rem]'
                )}
            >
                <div className="-mt-1 text-lg text-gray-400">«</div>
            </button>
            <hr className={cn(isOpen && 'hidden', 'w-full border-gray-300')} />
        </div>
    )
}

export default VerticalArrowIcon
