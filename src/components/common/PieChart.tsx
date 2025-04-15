export default function PieChart() {
    return (
        <div className="relative w-32 h-32">
            {/* Base Circle */}
            <svg viewBox="0 0 32 32" className="w-full h-full" transform="rotate(-42 16 16)">
                <circle r="16" cx="16" cy="16" fill="#0f3d3e" />
                <path
                    d="M16 0
                    A16 16 0 0 1 30.78 9.3
                    L16 16 Z"
                    fill="#3355ee"
                />
                <path
                    d="M30.78 9.3
                    A16 16 0 0 1 27.32 27.35
                    L16 16 Z"
                    fill="#c2a2f7"
                />
            </svg>

            {/* Text Layers */}
            <div className="absolute inset-0 top-22 right-1 flex flex-col items-center justify-center flex-col text-white font-semibold">
                <span className="text-md">150%</span>
                <span className="text-sm text-gray-200">Growth</span>
            </div>
            <div className="absolute top-15 right-5 text-sm text-purple-500 font-semibold">
                <span className="text-md">89%</span>
            </div>
            <div className="flex flex-col absolute top-5 right-13 items-center justify-center text-sm text-white font-semibold">
                <span className="text-md">85%</span>
                <span className="text-sm">Recruit</span>
            </div>
        </div>
    );
}
