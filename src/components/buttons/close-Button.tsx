import { CrossIcon } from '@/assets/svg/cross'
import { cn } from '@/utils/intext'
import { useRouter } from 'next/navigation'

export default function CloseButton({
    onClick,
    color = 'fill-black',
    redirect,
}: Readonly<{
    onClick?: () => void
    color?: string
    redirect?: string
}>) {
    const router = useRouter()

    const handleGoBack = () => {
        if (onClick) {
            onClick()
        } else if (redirect) {
            router.push(redirect)
        } else {
            router.back()
        }
    }

    return (
        <button type="button" onClick={handleGoBack}>
            <CrossIcon
                className={cn(color, 'w-4')}
                className1=" h-10"
                className2="w-10"
            />
        </button>
    )
}
