import { CrossIcon } from '@/assets/svg/cross'
import { useRouter } from 'next/navigation'

export default function CloseButton({
    onClick,
    color = 'fill-black',
}: Readonly<{
    onClick?: () => void
    color?: string
}>) {
    const router = useRouter()

    const handleGoBack = () => {
        onClick ? onClick() : router.back()
    }

    return (
        <button type="button" onClick={handleGoBack}>
            <CrossIcon
                className={`${color} w-4`}
                className1=" h-10"
                className2="w-10"
            />
        </button>
    )
}
