export function CrossIcon({
    className,
    className1,
    className2,
}: Readonly<{ className: string; className1: string; className2: string }>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 512 640"
            enableBackground="new 0 0 512 512"
        >
            <g>
                <g>
                    <rect
                        x="29.726"
                        y="248"
                        transform="matrix(0.7071 0.7071 -0.7071 0.7071 256 -106.0387)"
                        width="452.548"
                        height="16"
                        className={className1}
                    />
                </g>
            </g>
            <g>
                <g>
                    <rect
                        x="248"
                        y="29.726"
                        transform="matrix(0.7071 0.7071 -0.7071 0.7071 255.9844 -106.0387)"
                        width="16"
                        height="452.548"
                        className={className2}
                    />
                </g>
            </g>
            <text
                x="0"
                y="527"
                fill="#000000"
                fontSize="5px"
                fontWeight="bold"
                fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
                Created by Richard Schumann
            </text>
            <text
                x="0"
                y="532"
                fill="#000000"
                fontSize="5px"
                fontWeight="bold"
                fontFamily="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
            >
                from the Noun Project
            </text>
        </svg>
    )
}
