import React from 'react'

const MyComponent: React.FC = () => {
    return (
        <div className="h-screen w-full bg-gradient-to-tr from-cyan-400 to-cyan-700">
            <div
                id="authOverlay"
                className="fixed left-0 top-0 z-10 flex h-full w-full origin-center -translate-x-full scale-y-0 items-center justify-center overflow-y-auto bg-white/80 px-2 py-3 opacity-0 backdrop-blur-sm"
            >
                <div
                    id="fourth"
                    className="m-auto mb-0 max-w-sm rounded-2xl border border-white/0 bg-white/0 p-3 shadow-sm sm:mb-auto"
                ></div>
            </div>
            <div className="text-center">
                <button className="mt-16 rounded-md border-b-[3px] bg-white px-6 py-3 text-2xl font-semibold text-cyan-400">
                    Open
                </button>
            </div>
        </div>
    )
}

export default MyComponent
