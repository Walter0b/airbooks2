import { Outlet } from 'next/navigation'

export default function DefaultLayout() {
    return (
        <div>
            {' '}
            <Outlet />
        </div>
    )
}
