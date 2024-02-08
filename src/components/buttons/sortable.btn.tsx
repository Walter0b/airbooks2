import { useEffect, useState } from "react"

type SortableBtnType = {
    label: string
    className?: string
    sortUp?: boolean
    onClick?: (p:boolean)=>void
}

export default function SortableBtn({
    label,
    className,
    sortUp = true,
    onClick
}: SortableBtnType){

    const [sortType, setSortType] = useState(false)
    
    const handleClick = ()=>{
        setSortType(!sortType)
        onClick&&onClick(!sortType)
    }

    useEffect(()=>setSortType(sortUp), [sortUp])

    return <button onClick={handleClick} className="flex justify-center space-x-1">
            <p className={className || 'text-red-500'}>{label}</p>
            <i className={(sortType||'fa-rotate-180 ')+ ' fa-duotone fa-sort text-gray-900'}></i>
        </button>
}