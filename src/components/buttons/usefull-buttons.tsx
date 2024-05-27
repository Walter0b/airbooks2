import { CrossIcon } from '@/assets/svg/cross';
import { useNavigate } from 'next/navigation';

export default function CloseButton({
    onClick,
    color = 'fill-black',
}: Readonly<{
    onClick?: () => void;
    color?: string;
}>) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        onClick ? onClick() : navigate("../");
    };

    return (
        <button type="button" onClick={handleGoBack}>
            <CrossIcon
                className={`${color} w-4`}
                className1=" h-10"
                className2="w-10"
            />
        </button>
    );
}
