'use client'
import { useRouter } from 'next/navigation'
function NotFound() {
    const router = useRouter()

    return (
        <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
            <div className="bg-cyan-550 px-2 text-sm rounded rotate-12 absolute">
                Page Not Found
            </div>
            <div className="mt-5">
                <a
                    className="relative inline-block text-sm font-medium text-cyan-550 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-550 group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                        <button type="button" onClick={() => router.back()}>
                            Go Home
                        </button>

                    </span>
                </a>
            </div>
        </main>
    )
}
export default NotFound