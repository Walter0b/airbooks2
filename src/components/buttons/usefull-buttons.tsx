import { CrossIcon } from '@assets/svg/cross'
import { useNavigate } from 'react-router-dom'

export default function CloseButton({
    color = 'fill-black',
}: {
    onClick?: () => void
    color?: string
}) {
    const navigate = useNavigate()
    return (
        <button type="button" onClick={() => navigate(-1)}>
            <CrossIcon
                className={`${color} w-4`}
                className1=" h-10"
                className2="w-10"
            />
        </button>
    )
}
